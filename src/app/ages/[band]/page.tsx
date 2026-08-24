"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { bandById } from "@/lib/curriculum/bands";
import { lessonsByBand, subjectById } from "@/lib/curriculum";
import { ritualLabel } from "@/lib/labels";
import { useForge } from "@/lib/progress";
import { BAND_IDS, type SubjectId } from "@/lib/curriculum/types";

export default function AgeHub() {
  const params = useParams<{ band: string }>();
  const band = params.band;

  if (!BAND_IDS.includes(band as (typeof BAND_IDS)[number])) {
    notFound();
  }
  const def = bandById(band);
  if (!def) notFound();

  const setBand = useForge((s) => s.setBand);
  const sittings = lessonsByBand(def.id);
  const grouped = new Map<SubjectId, typeof sittings>();
  for (const l of sittings) {
    const list = grouped.get(l.subject) ?? [];
    list.push(l);
    grouped.set(l.subject, list);
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <p className="text-xs font-medium tracking-widest text-accent uppercase">{def.ages}</p>
      <h1 className="mt-3 font-display text-4xl text-fg sm:text-5xl">{def.name}</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">{def.promise}</p>
      <dl className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg bg-surface p-4 shadow-[var(--shadow-border)]">
          <dt className="text-xs text-faint">Sitting</dt>
          <dd className="mt-1 text-sm text-fg">{def.sitting}</dd>
        </div>
        <div className="rounded-lg bg-surface p-4 shadow-[var(--shadow-border)]">
          <dt className="text-xs text-faint">Ritual</dt>
          <dd className="mt-1 text-sm text-fg">{ritualLabel[def.ritual]}</dd>
        </div>
        <div className="rounded-lg bg-surface p-4 shadow-[var(--shadow-border)]">
          <dt className="text-xs text-faint">AI rule</dt>
          <dd className="mt-1 text-sm text-fg">{def.aiRule}</dd>
        </div>
      </dl>
      <p className="mt-6 text-sm text-muted">{def.hermes}</p>
      <div className="mt-8">
        <Button type="button" onClick={() => setBand(def.id)}>
          Set as this family&apos;s band
        </Button>
      </div>

      <h2 className="mt-14 font-display text-3xl text-fg">Sittings ready now</h2>
      <div className="mt-6 space-y-8">
        {[...grouped.entries()].map(([subject, list]) => {
          const s = subjectById(subject);
          return (
            <section key={subject}>
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl text-fg">{s?.name}</h3>
                <Link
                  href={`/subjects/${subject}`}
                  className="text-sm text-muted hover:text-fg"
                >
                  Subject hub
                </Link>
              </div>
              <ul className="mt-3 divide-y divide-border rounded-lg bg-raised shadow-[var(--shadow-border)]">
                {list.map((l) => (
                  <li key={l.slug}>
                    <Link
                      href={`/learn/${l.band}/${l.subject}/${l.slug}`}
                      className="flex min-h-14 items-center justify-between gap-3 px-4 py-3"
                    >
                      <span>
                        <span className="block text-sm text-faint">Sitting {l.number}</span>
                        <span className="text-fg">{l.title}</span>
                      </span>
                      <span className="text-xs text-muted">{l.durationMin} min</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </main>
  );
}