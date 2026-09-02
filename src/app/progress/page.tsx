"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LedgerExport } from "@/components/ledger-export";
import { bandById } from "@/lib/curriculum/bands";
import { findLesson, lessons } from "@/lib/curriculum";
import { useForge } from "@/lib/progress";
import { useHydrated } from "@/lib/use-hydrated";

export default function ProgressPage() {
  const band = useForge((s) => s.band);
  const completed = useForge((s) => s.completed);
  const lastKey = useForge((s) => s.lastKey);
  const hydrated = useHydrated();
  const def = hydrated && band ? bandById(band) : undefined;
  const last =
    hydrated && lastKey
      ? (() => {
          const [b, s, slug] = lastKey.split("/");
          return findLesson(b, s, slug);
        })()
      : undefined;
  const shownCompleted = hydrated ? completed : [];

  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="font-display text-4xl text-fg">This device</h1>
      <p className="mt-3 text-muted">
        Sittings marked in this browser. Not a family year map. No account. No child names. Clear the browser data to reset.
      </p>

      <dl className="mt-8 grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg bg-surface p-4 shadow-[var(--shadow-border)]">
          <dt className="text-xs text-faint">Band</dt>
          <dd className="mt-1 text-fg">{def ? `${def.ages} · ${def.name}` : "Not set"}</dd>
        </div>
        <div className="rounded-lg bg-surface p-4 shadow-[var(--shadow-border)]">
          <dt className="text-xs text-faint">Sittings marked</dt>
          <dd className="mt-1 font-mono text-fg tabular-nums">{shownCompleted.length}</dd>
        </div>
        <div className="rounded-lg bg-surface p-4 shadow-[var(--shadow-border)]">
          <dt className="text-xs text-faint">In the library</dt>
          <dd className="mt-1 font-mono text-fg tabular-nums">{lessons.length}</dd>
        </div>
      </dl>

      {last ? (
        <div className="mt-10">
          <h2 className="font-display text-2xl text-fg">Continue</h2>
          <Link
            href={`/learn/${last.band}/${last.subject}/${last.slug}`}
            className="mt-3 inline-block text-accent"
          >
            {last.title}
          </Link>
        </div>
      ) : (
        <div className="mt-10">
          <Button asChild>
            <Link href="/start">Start a sitting</Link>
          </Button>
        </div>
      )}

      {shownCompleted.length > 0 ? (
        <ul className="mt-10 divide-y divide-border rounded-lg bg-raised shadow-[var(--shadow-border)]">
          {shownCompleted.map((k) => (
            <li key={k} className="px-4 py-3 text-sm text-muted">
              {k}
            </li>
          ))}
        </ul>
      ) : null}

      <LedgerExport hydrated={hydrated} />
    </main>
  );
}