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
      <p className="text-xs font-medium tracking-[0.28em] text-accent uppercase">Start</p>
      <h1 className="mt-3 font-display text-4xl text-fg sm:text-5xl">Pick an age</h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        Choose 5–10, 11–14, 15–18, or adult. You will start the first Autonomous AI lesson. You can switch subjects after.
      </p>

      {hydrated && lastKey ? (
        <p className="mt-6 text-sm text-muted">
          Last lesson: <span className="text-fg">{lastKey}</span>
        </p>
      ) : null}

      <ul className="mt-12">
        {bands.map((b) => {
          const first = firstLesson(b.id, "ai");
          const href = first
            ? `/learn/${first.band}/${first.subject}/${first.slug}`
            : `/ages/${b.id}`;
          return (
            <li key={b.id} className="border-t border-accent">
              <Link
                href={href}
                className="grid gap-2 py-7 sm:grid-cols-[7.5rem_1fr] sm:items-start sm:gap-8"
                onClick={() => setBand(b.id)}
              >
                <p className="text-xs tracking-[0.18em] text-accent uppercase">{b.ages}</p>
                <div>
                  <h2 className="font-display text-2xl text-fg">{b.name}</h2>
                  <p className="mt-2 text-sm text-muted">{b.promise}</p>
                  <p className="mt-3 text-xs text-faint">
                    {first ? `First lesson: ${first.title} · ${first.durationMin} min` : b.sitting}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="border-t border-accent pt-8">
        <Button variant="ghost" asChild>
          <Link href="/method">Read how a lesson works</Link>
        </Button>
      </div>
    </main>
  );
}
