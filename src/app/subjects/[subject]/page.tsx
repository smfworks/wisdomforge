"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { catalog, lessonsBySubject, subjectById, firstLesson } from "@/lib/curriculum";
import { bands } from "@/lib/curriculum/bands";
import { SUBJECT_IDS, type BandId } from "@/lib/curriculum/types";
import { useForge } from "@/lib/progress";
import { useHydrated } from "@/lib/use-hydrated";

export default function SubjectHub() {
  const params = useParams<{ subject: string }>();
  const subject = params.subject;
  const def = subjectById(subject);
  if (!def || !SUBJECT_IDS.includes(def.id)) notFound();

  const familyBand = useForge((s) => s.band);
  const hydrated = useHydrated();
  const units = catalog.filter((c) => c.subject === def.id);

  // Flagship sitting: first ready unit's first sitting for the family's
  // current band, or the first band that has lessons for this subject.
  const readyUnits = units.filter((u) => u.status === "ready");
  const flagshipUnit = readyUnits[0];
  const flagshipBand: BandId | undefined =
    hydrated && familyBand && flagshipUnit?.bands.includes(familyBand as BandId)
      ? (familyBand as BandId)
      : flagshipUnit?.bands[0];
  const flagshipLesson = flagshipBand
    ? firstLesson(flagshipBand, def.id)
    : undefined;

  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <p className="text-xs font-medium tracking-widest text-accent uppercase">{def.short}</p>
      <h1 className="mt-3 font-display text-4xl text-fg sm:text-5xl">{def.name}</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">{def.promise}</p>
      <p className="mt-4 max-w-2xl text-sm text-fg">{def.aiSpine}</p>

      {/* Flagship "Start here" card */}
      {flagshipLesson ? (
        <section className="mt-10 rounded-xl border-l-2 border-accent bg-surface p-6 shadow-[var(--shadow-border)]">
          <p className="text-xs font-medium tracking-widest text-accent uppercase">Start here</p>
          <h2 className="mt-2 font-display text-3xl text-fg">{flagshipLesson.title}</h2>
          <p className="mt-1 text-sm text-faint">
            {flagshipUnit?.title} · {bands.find((b) => b.id === flagshipLesson.band)?.name} · {flagshipLesson.durationMin} min
          </p>
          {(() => {
            const firstSentence = flagshipLesson.parentBriefing.split(/[.!?]/)[0] ?? "";
            const preview = firstSentence.length > 140
              ? firstSentence.slice(0, 137).trim() + "…"
              : firstSentence;
            return preview ? (
              <p className="mt-3 text-sm text-muted">{preview}</p>
            ) : null;
          })()}
          <div className="mt-4">
            <Link
              href={`/learn/${flagshipLesson.band}/${flagshipLesson.subject}/${flagshipLesson.slug}`}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-fg"
            >
              Begin this sitting
            </Link>
          </div>
        </section>
      ) : null}

      <h2 className="mt-12 font-display text-2xl text-fg">Repository</h2>
      <ul className="mt-4 divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]">
        {units.map((u) => (
          <li key={u.id} className="px-4 py-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-medium text-fg">{u.title}</h3>
              <span className="text-xs text-accent">
                {u.status === "ready" ? "Ready" : "In the forge"}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted">{u.blurb}</p>
            <p className="mt-2 text-xs text-faint">
              {u.weeks} · {u.bands.join(" · ")}
            </p>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 font-display text-2xl text-fg">Open a sitting</h2>
      <div className="mt-4">
        {bands.map((b) => {
          const list = lessonsBySubject(def.id, b.id);
          return (
            <section key={b.id} className="border-t border-accent py-6">
              <h3 className="font-display text-xl text-fg">
                {b.name}
                <span className="ml-2 text-sm font-sans font-normal text-faint">{b.ages}</span>
              </h3>
              {list.length === 0 ? (
                <p className="mt-3 text-sm text-muted">In the forge for this band.</p>
              ) : (
                <ul className="mt-3 space-y-2">
                  {list.map((l) => {
                    const firstSentence = l.parentBriefing.split(/[.!?]/)[0] ?? "";
                    const preview = firstSentence.length > 100
                      ? firstSentence.slice(0, 97).trim() + "…"
                      : firstSentence;
                    return (
                      <li key={l.slug}>
                        <Link
                          href={`/learn/${l.band}/${l.subject}/${l.slug}`}
                          className="group block"
                        >
                          <span className="flex items-baseline gap-2">
                            <span className="text-sm text-fg group-hover:text-accent">
                              {l.number}. {l.title}
                              {hydrated && familyBand === b.id ? " · your band" : ""}
                            </span>
                            <span className="inline-flex shrink-0 items-center rounded-sm bg-accent/10 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-accent">
                              Assist-ready
                            </span>
                          </span>
                          {preview ? (
                            <span className="mt-0.5 block text-xs text-muted">{preview}</span>
                          ) : null}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </section>
          );
        })}
      </div>
    </main>
  );
}