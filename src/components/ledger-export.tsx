"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useForge } from "@/lib/progress";
import {
  exportLedgerJSON,
  exportLedgerMarkdown,
  type LedgerRawState,
} from "@/lib/export-ledger";

/**
 * Export controls for the family ledger.
 *
 * Renders two buttons that download the current localStorage-backed progress
 * as either JSON (machine-readable backup) or Markdown (human-readable
 * summary).  Both are generated client-side — no API call, no network.
 *
 * The component reads the raw persisted state directly from the forge store
 * so the export always reflects exactly what is in localStorage, even if the
 * page is rendered before hydration completes (buttons are disabled until
 * hydrated to avoid exporting an empty snapshot).
 */
export function LedgerExport({ hydrated }: { hydrated: boolean }) {
  const band = useForge((s) => s.band);
  const completed = useForge((s) => s.completed);
  const lastKey = useForge((s) => s.lastKey);
  const [justExported, setJustExported] = useState<string | null>(null);

  const hasProgress = completed.length > 0 || band !== null || lastKey !== null;
  const disabled = !hydrated || !hasProgress;

  function handleExport(fmt: "json" | "markdown") {
    if (disabled) return;
    const state: LedgerRawState = { band, completed, lastKey };
    if (fmt === "json") exportLedgerJSON(state);
    else exportLedgerMarkdown(state);
    setJustExported(fmt);
    // Clear the confirmation message after a few seconds.
    window.setTimeout(() => setJustExported(null), 4000);
  }

  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl text-fg">Export ledger</h2>
      <p className="mt-2 text-sm text-muted">
        Save your family&apos;s progress as a file. Pick it up on another device,
        keep a backup, or open it in any text editor. No account, no upload —
        the file is made in your browser.
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        <Button
          variant="secondary"
          onClick={() => handleExport("json")}
          disabled={disabled}
        >
          Export JSON
        </Button>
        <Button
          variant="secondary"
          onClick={() => handleExport("markdown")}
          disabled={disabled}
        >
          Export Markdown
        </Button>
      </div>

      {hydrated && !hasProgress ? (
        <p className="mt-3 text-xs text-faint">
          Nothing to export yet — mark a sitting complete or set an age band
          first.
        </p>
      ) : null}

      {justExported ? (
        <p className="mt-3 text-xs text-faint">
          {justExported === "json" ? "JSON" : "Markdown"} file downloaded.
        </p>
      ) : null}
    </section>
  );
}