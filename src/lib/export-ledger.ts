/**
 * Family ledger export — JSON and Markdown serialization.
 *
 * The WisdomForge family ledger is stored client-side in localStorage
 * (see progress.ts).  This module turns that raw state into two portable
 * formats so progress survives device changes:
 *
 *   - JSON  : structured, machine-readable, suitable for re-import or backup.
 *   - Markdown : human-readable summary a parent can open in any text editor.
 *
 * Both formats are generated entirely on the client.  No API, no network.
 */

import { bandById, findLesson, lessons, subjectById } from "@/lib/curriculum";
import type { BandId } from "@/lib/curriculum/types";

/** Shape persisted in localStorage under the `wisdomforge-family` key. */
export type LedgerRawState = {
  band: BandId | null;
  completed: string[];
  lastKey: string | null;
};

/** One enriched completed-sitting entry. */
export type LedgerEntry = {
  /** Original key as stored: `${band}/${subject}/${slug}` */
  key: string;
  band: string;
  bandName: string;
  subject: string;
  subjectName: string;
  unit: string;
  number: number;
  title: string;
  /** Relative URL to the sitting on the academy site. */
  url: string;
};

/** Full enriched ledger document, ready to serialize. */
export type LedgerDocument = {
  /** Schema version — bump if the shape changes so importers can migrate. */
  schemaVersion: 1;
  /** ISO-8601 export timestamp (UTC). */
  exportedAt: string;
  /** Academy build identifier, if available (semver or git sha). */
  academyVersion: string | null;
  band: BandId | null;
  bandName: string | null;
  totalCompleted: number;
  totalInLibrary: number;
  lastKey: string | null;
  completed: LedgerEntry[];
};

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

/** Best-effort academy version from package.json (exposed at build time). */
function _academyVersion(): string | null {
  if (typeof process !== "undefined" && typeof process.env !== "undefined") {
    const v = process.env.NEXT_PUBLIC_ACADEMY_VERSION;
    if (v) return v;
  }
  return null;
}

/** Stable sort: subject name → unit → sitting number. */
function _sortEntries(entries: LedgerEntry[]): LedgerEntry[] {
  return [...entries].sort(
    (a, b) =>
      a.subjectName.localeCompare(b.subjectName) ||
      a.unit.localeCompare(b.unit) ||
      a.number - b.number,
  );
}

/** Enrich a single completed key with lesson metadata. */
function _enrich(key: string): LedgerEntry | null {
  const parts = key.split("/");
  if (parts.length < 3) return null;
  const [band, subject, slug] = parts;
  const lesson = findLesson(band, subject, slug);
  if (!lesson) {
    // Key exists in the ledger but no matching lesson in the current build.
    // Preserve it so nothing is silently dropped on export.
    return {
      key,
      band,
      bandName: bandById(band)?.name ?? band,
      subject,
      subjectName: subjectById(subject)?.name ?? subject,
      unit: "",
      number: 0,
      title: "(lesson no longer in library)",
      url: `/learn/${band}/${subject}/${slug}`,
    };
  }
  return {
    key,
    band: lesson.band,
    bandName: bandById(lesson.band)?.name ?? lesson.band,
    subject: lesson.subject,
    subjectName: subjectById(lesson.subject)?.name ?? lesson.subject,
    unit: lesson.unit,
    number: lesson.number,
    title: lesson.title,
    url: `/learn/${lesson.band}/${lesson.subject}/${lesson.slug}`,
  };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Build the enriched LedgerDocument from the raw persisted state.
 * Pure function — safe to unit test without a DOM.
 */
export function buildLedger(state: LedgerRawState): LedgerDocument {
  const completed = _sortEntries(
    state.completed
      .map(_enrich)
      .filter((e): e is LedgerEntry => e !== null),
  );
  const bandDef = state.band ? bandById(state.band) : undefined;
  return {
    schemaVersion: 1,
    exportedAt: new Date().toISOString(),
    academyVersion: _academyVersion(),
    band: state.band,
    bandName: bandDef?.name ?? null,
    totalCompleted: completed.length,
    totalInLibrary: lessons.length,
    lastKey: state.lastKey,
    completed,
  };
}

/**
 * Serialize the ledger to a pretty-printed JSON string.
 */
export function ledgerToJSON(state: LedgerRawState): string {
  return JSON.stringify(buildLedger(state), null, 2) + "\n";
}

/**
 * Serialize the ledger to a human-readable Markdown string.
 */
export function ledgerToMarkdown(state: LedgerRawState): string {
  const doc = buildLedger(state);
  const lines: string[] = [];

  lines.push("# WisdomForge — Family Ledger");
  lines.push("");
  lines.push(
    `Exported: ${doc.exportedAt}  |  Schema v${doc.schemaVersion}${
      doc.academyVersion ? `  |  Academy ${doc.academyVersion}` : ""
    }`,
  );
  lines.push("");

  // Summary block
  lines.push("## Summary");
  lines.push("");
  lines.push(`- **Age band:** ${doc.bandName ?? "Not set"}`);
  lines.push(`- **Sittings completed:** ${doc.totalCompleted}`);
  lines.push(`- **Sittings in library:** ${doc.totalInLibrary}`);
  if (doc.lastKey) {
    const last = _enrich(doc.lastKey);
    if (last) {
      lines.push(
        `- **Last sitting:** [${last.title}](${last.url}) — ${last.bandName}`,
      );
    } else {
      lines.push(`- **Last sitting key:** ${doc.lastKey}`);
    }
  }
  lines.push("");

  if (doc.completed.length === 0) {
    lines.push("_No sittings marked complete yet._");
    lines.push("");
    return lines.join("\n");
  }

  // Group completed sittings by subject for readability.
  const bySubject = new Map<string, LedgerEntry[]>();
  for (const entry of doc.completed) {
    const list = bySubject.get(entry.subjectName) ?? [];
    list.push(entry);
    bySubject.set(entry.subjectName, list);
  }

  lines.push("## Completed Sittings");
  lines.push("");

  for (const [subjectName, entries] of [...bySubject.entries()].sort((a, b) =>
    a[0].localeCompare(b[0]),
  )) {
    lines.push(`### ${subjectName}`);
    lines.push("");
    for (const e of entries) {
      const unitLabel = e.unit ? ` — ${e.unit}` : "";
      lines.push(
        `- [x] [${e.title}](${e.url})${unitLabel} _(${e.bandName})_`,
      );
    }
    lines.push("");
  }

  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Download trigger (browser only)
// ---------------------------------------------------------------------------

/**
 * Trigger a client-side file download for the given content.
 * Creates a Blob + object URL, clicks a temporary anchor, then revokes.
 */
export function downloadFile(
  filename: string,
  content: string,
  mimeType: string,
): void {
  if (typeof document === "undefined") return;
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  // Revoke on the next tick so the click has time to register.
  setTimeout(() => URL.revokeObjectURL(url), 0);
}

/** Timestamp string safe for filenames: YYYY-MM-DD */
function _dateStamp(d = new Date()): string {
  return d.toISOString().slice(0, 10);
}

/** Export the ledger as a JSON file download. */
export function exportLedgerJSON(state: LedgerRawState): void {
  downloadFile(
    `wisdomforge-ledger-${_dateStamp()}.json`,
    ledgerToJSON(state),
    "application/json",
  );
}

/** Export the ledger as a Markdown file download. */
export function exportLedgerMarkdown(state: LedgerRawState): void {
  downloadFile(
    `wisdomforge-ledger-${_dateStamp()}.md`,
    ledgerToMarkdown(state),
    "text/markdown",
  );
}