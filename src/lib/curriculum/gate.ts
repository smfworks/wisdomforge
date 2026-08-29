/**
 * Assist-ready gate — enforced definition of sitting completeness.
 *
 * A sitting (Lesson) must have every required field populated before it
 * can be marked "ready."  The gate runs at build time and fails the
 * build if any lesson is incomplete.  This prevents half-built sittings
 * from shipping to the academy site or the sittings feed.
 *
 * Design:
 *   - Pure functions, no I/O — the build script calls `assertLessonsReady`.
 *   - Two tiers: ERRORS (hard fail) and WARNINGS (visible but non-fatal).
 *   - Stub sentinels: strings that signal "placeholder, not real content."
 *
 * Owner: Aiona (gold gate + strategy)
 */

import type { Lesson } from "./types";
import { lessonKey } from "./types";

// ── Stub detection ───────────────────────────────────────────────────

/**
 * Check if text contains a stub sentinel — a marker that the field is
 * a placeholder, not real content.
 *
 * Whole-word matches (case-insensitive): TODO, TBD, FIXME, Lorem ipsum,
 * coming soon, pending content.
 *
 * Substring matches: [insert, [your  — bracket-prefixed templates.
 *
 * "Placeholder" is matched as a standalone word only — if followed by
 * a comma or continuation ("a placeholder, a mood board"), it is
 * legitimate prose, not a stub.
 */
function containsStub(text: string): boolean {
  if (!text) return false;
  // Whole-word checks
  if (/\btodo\b/i.test(text)) return true;
  if (/\btbd\b/i.test(text)) return true;
  if (/\bfixme\b/i.test(text)) return true;
  if (/\blorem ipsum\b/i.test(text)) return true;
  if (/\bcoming soon\b/i.test(text)) return true;
  if (/\bpending content\b/i.test(text)) return true;
  // "placeholder" as a standalone word = stub
  // "a placeholder, a mood board" = legitimate prose
  if (/\bplaceholder\b/i.test(text) && !/\bplaceholder\b[,.\s]/i.test(text))
    return true;
  // Bracket-prefixed templates
  if (text.toLowerCase().includes("[insert")) return true;
  if (text.toLowerCase().includes("[your ")) return true;
  return false;
}

// ── Thresholds ───────────────────────────────────────────────────────

/** Minimum meaningful length for prose fields (objective, parentBriefing, etc.). */
const MIN_PROSE_LEN = 15;

/** Minimum meaningful length for short fields (title, dek, tryThis title). */
const MIN_SHORT_LEN = 3;

/** Minimum length for aiLab.setup and aiLab.childDoes.
 * "Off." and "None." are valid for adult sittings with no AI lab activity. */
const MIN_AILAB_FIELD_LEN = 3;

/** Minimum number of reading sections. */
const MIN_READING_SECTIONS = 1;

/** Minimum body length per reading section. */
const MIN_READING_BODY_LEN = 50;

/** Minimum number of tryThis activities. */
const MIN_TRY_THIS = 1;

/** Minimum number of ifTheySay entries. */
const MIN_IF_THEY_SAY = 1;

/** Minimum number of hardEdges. */
const MIN_HARD_EDGES = 1;

/** Minimum number of transfer entries. */
const MIN_TRANSFER = 1;

/** Minimum number of aiLab.evaluate entries. */
const MIN_EVALUATE = 1;

// ── Types ────────────────────────────────────────────────────────────

export type GateSeverity = "error" | "warning";

export type GateFinding = {
  lessonKey: string;
  field: string;
  severity: GateSeverity;
  message: string;
};

export type GateReport = {
  passed: boolean;
  errors: number;
  warnings: number;
  findings: GateFinding[];
};

// ── Helpers ──────────────────────────────────────────────────────────

function isProseEmpty(text: string): boolean {
  return !text || text.trim().length < MIN_PROSE_LEN;
}

function isShortEmpty(text: string): boolean {
  return !text || text.trim().length < MIN_SHORT_LEN;
}

function isAiLabFieldEmpty(text: string): boolean {
  return !text || text.trim().length < MIN_AILAB_FIELD_LEN;
}

// ── Per-lesson validation ────────────────────────────────────────────

/**
 * Validate a single lesson against the assist-ready gate.
 * Returns an array of findings (empty = ready).
 *
 * Required fields (ERROR if missing/empty/stubbed):
 *   slug, subject, band, unit, number, title, dek, durationMin, ritual,
 *   objective, parentBriefing, hardEdges (>=1), reading (>=1 section with
 *   heading + body >=50 chars), bigIdea, tryThis (>=1 activity with title
 *   + steps), dinnerQuestion, transfer (>=1), ifTheySay (>=1),
 *   integrity, aiLab (setup + childDoes + evaluate >=1), hermes
 *   (allowedTools + pairingLine + prompt).
 *
 * Warnings (non-fatal but surfaced):
 *   - reading body < 100 chars (thin but not empty)
 *   - tryThis activity with 0 minutes
 *   - transfer entry with empty label or note
 */
export function validateLesson(lesson: Lesson): GateFinding[] {
  const key = lessonKey(lesson);
  const findings: GateFinding[] = [];

  const err = (field: string, message: string) =>
    findings.push({ lessonKey: key, field, severity: "error", message });
  const warn = (field: string, message: string) =>
    findings.push({ lessonKey: key, field, severity: "warning", message });

  // ── Identity fields ────────────────────────────────────────────────

  if (!lesson.slug) err("slug", "slug is empty");
  if (!lesson.subject) err("subject", "subject is empty");
  if (!lesson.band) err("band", "band is empty");
  if (!lesson.unit) err("unit", "unit is empty");
  if (!lesson.number || lesson.number < 1)
    err("number", `number is ${lesson.number} (must be >= 1)`);

  // ── Short prose fields ─────────────────────────────────────────────

  if (isShortEmpty(lesson.title))
    err("title", `title too short (< ${MIN_SHORT_LEN} chars)`);
  else if (containsStub(lesson.title))
    err("title", "title contains a stub sentinel");

  if (isShortEmpty(lesson.dek))
    err("dek", `dek too short (< ${MIN_SHORT_LEN} chars)`);
  else if (containsStub(lesson.dek))
    err("dek", "dek contains a stub sentinel");

  if (isProseEmpty(lesson.objective))
    err("objective", `objective too short (< ${MIN_PROSE_LEN} chars)`);
  else if (containsStub(lesson.objective))
    err("objective", "objective contains a stub sentinel");

  if (isProseEmpty(lesson.parentBriefing))
    err("parentBriefing", `parentBriefing too short (< ${MIN_PROSE_LEN} chars)`);
  else if (containsStub(lesson.parentBriefing))
    err("parentBriefing", "parentBriefing contains a stub sentinel");

  if (isProseEmpty(lesson.bigIdea))
    err("bigIdea", `bigIdea too short (< ${MIN_PROSE_LEN} chars)`);
  else if (containsStub(lesson.bigIdea))
    err("bigIdea", "bigIdea contains a stub sentinel");

  if (isProseEmpty(lesson.dinnerQuestion))
    err("dinnerQuestion", `dinnerQuestion too short (< ${MIN_PROSE_LEN} chars)`);
  else if (containsStub(lesson.dinnerQuestion))
    err("dinnerQuestion", "dinnerQuestion contains a stub sentinel");

  if (isProseEmpty(lesson.integrity))
    err("integrity", `integrity too short (< ${MIN_PROSE_LEN} chars)`);
  else if (containsStub(lesson.integrity))
    err("integrity", "integrity contains a stub sentinel");

  // ── Numeric fields ─────────────────────────────────────────────────

  if (!lesson.durationMin || lesson.durationMin < 1)
    err("durationMin", `durationMin is ${lesson.durationMin} (must be >= 1)`);

  if (!lesson.ritual) err("ritual", "ritual is empty");

  // ── Array fields ───────────────────────────────────────────────────

  // hardEdges
  if (!lesson.hardEdges || lesson.hardEdges.length < MIN_HARD_EDGES)
    err("hardEdges", `hardEdges has ${lesson.hardEdges?.length ?? 0} entries (min ${MIN_HARD_EDGES})`);
  else
    for (let i = 0; i < lesson.hardEdges.length; i++) {
      const h = lesson.hardEdges[i];
      if (!h || h.trim().length < MIN_SHORT_LEN)
        err(`hardEdges[${i}]`, "hardEdges entry too short");
      else if (containsStub(h))
        err(`hardEdges[${i}]`, "hardEdges entry contains a stub sentinel");
    }

  // reading
  if (!lesson.reading || lesson.reading.length < MIN_READING_SECTIONS)
    err("reading", `reading has ${lesson.reading?.length ?? 0} sections (min ${MIN_READING_SECTIONS})`);
  else
    for (let i = 0; i < lesson.reading.length; i++) {
      const r = lesson.reading[i];
      if (!r.heading || r.heading.trim().length < 3)
        err(`reading[${i}].heading`, "reading heading too short");
      if (!r.body || r.body.trim().length < MIN_READING_BODY_LEN)
        err(`reading[${i}].body`, `reading body too short (< ${MIN_READING_BODY_LEN} chars)`);
      else if (containsStub(r.body))
        err(`reading[${i}].body`, "reading body contains a stub sentinel");
      // Warning: thin reading
      if (r.body && r.body.trim().length < 100)
        warn(`reading[${i}].body`, "reading body is thin (< 100 chars)");
    }

  // tryThis
  if (!lesson.tryThis || lesson.tryThis.length < MIN_TRY_THIS)
    err("tryThis", `tryThis has ${lesson.tryThis?.length ?? 0} activities (min ${MIN_TRY_THIS})`);
  else
    for (let i = 0; i < lesson.tryThis.length; i++) {
      const a = lesson.tryThis[i];
      if (!a.title || a.title.trim().length < MIN_SHORT_LEN)
        err(`tryThis[${i}].title`, "tryThis title too short");
      if (!a.minutes || a.minutes < 1)
        warn(`tryThis[${i}].minutes`, `tryThis minutes is ${a.minutes}`);
      if (!a.steps || a.steps.length < 1)
        err(`tryThis[${i}].steps`, "tryThis has no steps");
      else
        for (let j = 0; j < a.steps.length; j++) {
          if (!a.steps[j] || a.steps[j].trim().length < 2)
            err(`tryThis[${i}].steps[${j}]`, "tryThis step too short");
        }
    }

  // transfer
  if (!lesson.transfer || lesson.transfer.length < MIN_TRANSFER)
    err("transfer", `transfer has ${lesson.transfer?.length ?? 0} entries (min ${MIN_TRANSFER})`);
  else
    for (let i = 0; i < lesson.transfer.length; i++) {
      const t = lesson.transfer[i];
      if (!t.label || t.label.trim().length < 2)
        warn(`transfer[${i}].label`, "transfer label too short");
      if (!t.note || t.note.trim().length < 3)
        warn(`transfer[${i}].note`, "transfer note too short");
    }

  // ifTheySay
  if (!lesson.ifTheySay || lesson.ifTheySay.length < MIN_IF_THEY_SAY)
    err("ifTheySay", `ifTheySay has ${lesson.ifTheySay?.length ?? 0} entries (min ${MIN_IF_THEY_SAY})`);
  else
    for (let i = 0; i < lesson.ifTheySay.length; i++) {
      const s = lesson.ifTheySay[i];
      if (!s.heard || s.heard.trim().length < MIN_SHORT_LEN)
        err(`ifTheySay[${i}].heard`, "ifTheySay heard too short");
      if (!s.reply || s.reply.trim().length < MIN_PROSE_LEN)
        err(`ifTheySay[${i}].reply`, `ifTheySay reply too short (< ${MIN_PROSE_LEN} chars)`);
    }

  // ── aiLab ──────────────────────────────────────────────────────────

  if (!lesson.aiLab) {
    err("aiLab", "aiLab is missing");
  } else {
    if (isAiLabFieldEmpty(lesson.aiLab.setup))
      err("aiLab.setup", "aiLab.setup too short");
    if (isAiLabFieldEmpty(lesson.aiLab.childDoes))
      err("aiLab.childDoes", "aiLab.childDoes too short");
    if (!lesson.aiLab.evaluate || lesson.aiLab.evaluate.length < MIN_EVALUATE)
      err("aiLab.evaluate", `aiLab.evaluate has ${lesson.aiLab.evaluate?.length ?? 0} entries (min ${MIN_EVALUATE})`);
  }

  // ── hermes ─────────────────────────────────────────────────────────

  if (!lesson.hermes) {
    err("hermes", "hermes is missing");
  } else {
    if (!lesson.hermes.allowedTools || lesson.hermes.allowedTools.length < 1)
      err("hermes.allowedTools", "hermes.allowedTools is empty");
    if (isShortEmpty(lesson.hermes.pairingLine))
      err("hermes.pairingLine", "hermes.pairingLine too short");
    if (isProseEmpty(lesson.hermes.prompt))
      err("hermes.prompt", "hermes.prompt too short");
  }

  return findings;
}

// ── Batch validation ─────────────────────────────────────────────────

/**
 * Validate all lessons and return a report.
 * The gate passes only if there are zero errors.
 */
export function validateAllLessons(lessons: Lesson[]): GateReport {
  const findings: GateFinding[] = [];
  for (const lesson of lessons) {
    findings.push(...validateLesson(lesson));
  }
  const errors = findings.filter((f) => f.severity === "error").length;
  const warnings = findings.filter((f) => f.severity === "warning").length;

  return {
    passed: errors === 0,
    errors,
    warnings,
    findings,
  };
}

/**
 * Assert that all lessons pass the gate.
 * Throws if any errors are found, with a readable summary.
 */
export function assertLessonsReady(lessons: Lesson[]): void {
  const report = validateAllLessons(lessons);
  if (report.passed) {
    if (report.warnings > 0) {
      console.warn(
        `Assist-ready gate: PASSED with ${report.warnings} warning(s)`,
      );
      for (const f of report.findings.filter((f) => f.severity === "warning")) {
        console.warn(`  WARNING  ${f.lessonKey} | ${f.field}: ${f.message}`);
      }
    } else {
      console.log(
        `Assist-ready gate: PASSED - ${lessons.length} lessons, 0 errors, 0 warnings`,
      );
    }
    return;
  }

  const lines: string[] = [];
  lines.push(
    `Assist-ready gate: FAILED - ${report.errors} error(s), ${report.warnings} warning(s) across ${lessons.length} lessons`,
  );
  for (const f of report.findings.filter((f) => f.severity === "error")) {
    lines.push(`  ERROR  ${f.lessonKey} | ${f.field}: ${f.message}`);
  }
  for (const f of report.findings.filter((f) => f.severity === "warning")) {
    lines.push(`  WARN   ${f.lessonKey} | ${f.field}: ${f.message}`);
  }
  throw new Error(`\n${lines.join("\n")}\n`);
}