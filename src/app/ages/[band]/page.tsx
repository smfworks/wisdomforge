"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AssistReady } from "@/components/assist-ready";
import { ThreeLayerStrip } from "@/components/three-layer-strip";
import { bandById } from "@/lib/curriculum/bands";
import { lessonsByBand, subjectById, findLesson } from "@/lib/curriculum";
import { briefingPreview, ritualLabel } from "@/lib/labels";
import { useForge } from "@/lib/progress";
import { BAND_IDS, type BandId, type SubjectId } from "@/lib/curriculum/types";

// "Start here" assignments — locked by Aiona in P7 UX direction
const startHere: Record<BandId, { subject: SubjectId; slug: string; reason: string }> = {
  little: { subject: "ai", slug: "tool-not-mind", reason: "First encounter with “the AI doesn’t always know” — sets the spine" },
  young: { subject: "thinking", slug: "claim-and-check", reason: "Metacognition before any subject tool" },
  emerging: { subject: "philosophy", slug: "circle-you-control", reason: "Real argumentation, band-appropriate weight" },
  adult: { subject: "ai", slug: "tool-not-mind", reason: "Frames the parent’s role before they guide" },
};

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

  const start = startHere[def.id];
  const startLesson = findLesson(def.id, start.subject, start.slug);
  const startSubject = subjectById(start.subject);

  return (
    <main className="mx-auto max-w-4xl px-4 py-14">
      <p className="text-xs font-medium tracking-[0.28em] text-accent uppercase">{def.ages}</p>
      <h1 className="mt-3 font-display text-4xl text-fg sm:text-5xl">{def.name}</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">{def.promise}</p>
      <dl className="mt-10">
        <div className="grid gap-2 border-t border-accent py-5 sm:grid-cols-[7.5rem_1fr]">
          <dt className="text-xs tracking-[0.18em] text-accent uppercase">Sitting</dt>
          <dd className="text-sm text-fg">{def.sitting}</dd>
        </div>
        <div className="grid gap-2 border-t border-accent py-5 sm:grid-cols-[7.5rem_1fr]">
          <dt className="text-xs tracking-[0.18em] text-accent uppercase">Ritual</dt>
          <dd className="text-sm text-fg">{ritualLabel[def.ritual]}</dd>
        </div>
        <div className="grid gap-2 border-t border-b border-accent py-5 sm:grid-cols-[7.5rem_1fr]">
          <dt className="text-xs tracking-[0.18em] text-accent uppercase">AI rule</dt>
          <dd className="text-sm text-fg">{def.aiRule}</dd>
        </div>
      </dl>
      <p className="mt-4 text-sm text-muted">{def.hermes}</p>
      <div className="mt-8">
        <Button type="button" onClick={() => setBand(def.id)}>
          Set as this family&apos;s band
        </Button>
      </div>

      {startLesson ? (
        <article className="mt-14 grid gap-4 border-t border-accent py-8 sm:grid-cols-[5.5rem_1fr_auto] sm:items-start sm:gap-6">
          <p className="font-display text-4xl leading-none text-accent">01</p>
          <div>
            <p className="text-xs font-medium tracking-[0.28em] text-accent uppercase">Start here</p>
            <h2 className="mt-2 font-display text-2xl text-fg">{startLesson.title}</h2>
            <p className="mt-1 text-sm text-faint">
              {startSubject?.name} · Sitting {startLesson.number} · {startLesson.durationMin} min
            </p>
            <p className="mt-3 text-sm text-muted">{start.reason}</p>
            <div className="mt-4">
              <Button asChild>
                <Link href={`/learn/${startLesson.band}/${startLesson.subject}/${startLesson.slug}`}>
                  Begin this sitting
                </Link>
              </Button>
            </div>
          </div>
          <AssistReady className="mt-1" />
        </article>
      ) : null}

      <article className="grid gap-4 border-t border-b border-accent py-8 sm:grid-cols-[5.5rem_1fr] sm:items-start sm:gap-6">
        <p className="font-display text-4xl leading-none text-accent">02</p>
        <div>
          <h2 className="font-display text-2xl text-fg">New to this band?</h2>
          <p className="mt-2 text-sm text-muted">
            {ritualLabel[def.ritual]}. {def.hermes} {def.aiRule}
          </p>
        </div>
      </article>

      <h2 className="mt-14 font-display text-3xl text-fg">Sittings ready now</h2>
      <div className="mt-2">
        {[...grouped.entries()].map(([subject, list]) => {
          const s = subjectById(subject);
          return (
            <section key={subject} className="mt-10">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl text-fg">{s?.name}</h3>
                <Link href={`/subjects/${subject}`} className="text-sm text-accent hover:text-fg">
                  Subject hub →
                </Link>
              </div>
              <ul className="mt-4 border-b border-accent">
                {list.map((l) => {
                  const preview = briefingPreview(l.parentBriefing);
                  return (
                    <li key={l.slug} className="border-t border-accent">
                      <Link
                        href={`/learn/${l.band}/${l.subject}/${l.slug}`}
                        className="grid gap-2 py-5 sm:grid-cols-[5.5rem_1fr_auto] sm:items-start sm:gap-6"
                      >
                        <p className="text-xs tracking-[0.18em] text-accent uppercase">Sitting {l.number}</p>
                        <div>
                          <h4 className="font-display text-xl text-fg">{l.title}</h4>
                          {preview ? <p className="mt-1 text-sm text-muted">{preview}</p> : null}
                        </div>
                        <div className="flex flex-col items-start gap-2 sm:items-end">
                          <AssistReady />
                          <span className="text-xs text-muted">{l.durationMin} min</span>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>

      <ThreeLayerStrip />
    </main>
  );
}
