"use client";

import Link from "next/link";
import { bands } from "@/lib/curriculum/bands";
import { firstLesson } from "@/lib/curriculum";
import { useForge } from "@/lib/progress";
import { Button } from "@/components/ui/button";
import { useHydrated } from "@/lib/use-hydrated";

export default function Start() {
  const setBand = useForge((s) => s.setBand);
  const lastKey = useForge((s) => s.lastKey);
  const hydrated = useHydrated();

  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-xs font-medium tracking-widest text-accent uppercase">Start</p>
      <h1 className="mt-3 font-display text-4xl text-fg">Who is in the chair?</h1>
      <p className="mt-3 text-muted">
        Pick a band. You will land on the first Autonomous AI sitting — the spine of the academy. You can switch subjects after.
      </p>

      {hydrated && lastKey ? (
        <p className="mt-6 text-sm text-muted">
          Last sitting: <span className="text-fg">{lastKey}</span>
        </p>
      ) : null}

      <ul className="mt-10 space-y-3">
        {bands.map((b) => {
          const first = firstLesson(b.id, "ai");
          const href = first
            ? `/learn/${first.band}/${first.subject}/${first.slug}`
            : `/ages/${b.id}`;
          return (
            <li key={b.id}>
              <Link
                href={href}
                className="block w-full rounded-xl bg-surface p-5 text-left shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
                onClick={() => setBand(b.id)}
              >
                <p className="text-xs tracking-wide text-accent uppercase">{b.ages}</p>
                <h2 className="mt-1 font-display text-2xl text-fg">{b.name}</h2>
                <p className="mt-2 text-sm text-muted">{b.promise}</p>
                <p className="mt-3 text-xs text-faint">
                  {first ? `First sitting: ${first.title} · ${first.durationMin} min` : b.sitting}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-10">
        <Button variant="ghost" asChild>
          <Link href="/method">Read the method first</Link>
        </Button>
      </div>
    </main>
  );
}