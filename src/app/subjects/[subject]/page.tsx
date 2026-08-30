"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { catalog, lessonsBySubject, subjectById, firstLesson } from "@/lib/curriculum";
import { bands } from "@/lib/curriculum/bands";
import { SUBJECT_IDS, type BandId } from "@/lib/curriculum/types";
import { useForge } from "@/lib/progress";
import { useHydrated } from "@/lib/use-hydrated";
import { briefingPreview } from "@/lib/labels";
import { Button } from "@/components/ui/button";
import { AssistReady } from "@/components/assist-ready";
import { ThreeLayerStrip } from "@/components/three-layer-strip";

export default function SubjectHub() {
  const params = useParams<{ subject: string }>();
  const subject = params.subject;
  const def = subjectById(subject);
  if (!def || !SUBJECT_IDS.includes(def.id)) notFound();

  const familyBand = useForge((s) => s.band);
  const hydrated = useHydrated();
  const units = catalog.filter((c) => c.subject === def.id);

  const readyUnits = units.filter((u) => u.status === "ready");
  const flagshipUnit = readyUnits[0];
  const flagshipBand: BandId | undefined =
    hydrated && familyBand && flagshipUnit?.bands.includes(familyBand as BandId)
      ? (familyBand as BandId)
      : flagshipUnit?.bands[0];
  const flagshipLesson = flagshipBand ? firstLesson(flagshipBand, def.id) : undefined;
  const flagshipPreview = flagshipLesson ? briefingPreview(flagshipLesson.parentBriefing, 140) : "";

  return (
    <main className="mx-auto max-w-4xl px-4 py-14">
      <p className="text-xs font-medium tracking-[0.28em] text-accent uppercase">{def.short}</p>
      <h1 className="mt-3 font-display text-4xl text-fg sm:text-5xl">{def.name}</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">{def.promise}</p>
      <p className="mt-4 max-w-2xl text-sm text-fg">{def.aiSpine}</p>

      {flagshipLesson ? (
        <article className="mt-12 grid gap-4 border-t border-accent py-8 sm:grid-cols-[5.5rem_1fr_auto] sm:items-start sm:gap-6">
          <p className="font-display text-4xl leading-none text-accent">01</p>
          <div>
            <p className="text-xs font-medium tracking-[0.28em] text-accent uppercase">Start here</p>
            <h2 className="mt-2 font-display text-2xl text-fg">{flagshipLesson.title}</h2>
            <p className="mt-1 text-sm text-faint">
              {flagshipUnit?.title} · {bands.find((b) => b.id === flagshipLesson.band)?.name} ·{" "}
              {flagshipLesson.durationMin} min
            </p>
            {flagshipPreview ? <p className="mt-3 text-sm text-muted">{flagshipPreview}</p> : null}
            <div className="mt-4">
              <Button asChild>
                <Link href={`/learn/${flagshipLesson.band}/${flagshipLesson.subject}/${flagshipLesson.slug}`}>
                  Begin this sitting
                </Link>
              </Button>
            </div>
          </div>
          <AssistReady className="mt-1" />
        </article>
      ) : null}

      <h2 className="mt-12 font-display text-2xl text-fg">Repository</h2>
      <ul className="mt-4 border-b border-accent">
        {units.map((u) => (
          <li key={u.id} className="border-t border-accent py-6">
            <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8">
              <div>
                <h3 className="font-display text-xl text-fg">{u.title}</h3>
                <p className="mt-2 text-sm text-muted">{u.blurb}</p>
                <p className="mt-2 text-xs text-faint">
                  {u.weeks} · {u.bands.join(" · ")}
                </p>
              </div>
              {u.status === "ready" ? (
                <AssistReady className="mt-1" />
              ) : (
                <span className="mt-1 text-xs tracking-[0.14em] text-faint uppercase">In the forge</span>
              )}
            </div>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 font-display text-2xl text-fg">Open a sitting</h2>
      <div className="mt-4 border-b border-accent">
        {bands.map((b) => {
          const list = lessonsBySubject(def.id, b.id);
          return (
            <section key={b.id} className="border-t border-accent py-7">
              <h3 className="font-display text-xl text-fg">
                {b.name}
                <span className="ml-2 text-sm font-sans font-normal tracking-normal text-faint">{b.ages}</span>
              </h3>
              {list.length === 0 ? (
                <p className="mt-3 text-sm text-muted">In the forge for this band.</p>
              ) : (
                <ul className="mt-4">
                  {list.map((l) => {
                    const preview = briefingPreview(l.parentBriefing, 100);
                    return (
                      <li key={l.slug}>
                        <Link
                          href={`/learn/${l.band}/${l.subject}/${l.slug}`}
                          className="grid gap-2 py-4 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-6"
                        >
                          <span>
                            <span className="font-display text-lg text-fg">
                              {l.number}. {l.title}
                              {hydrated && familyBand === b.id ? " · your band" : ""}
                            </span>
                            {preview ? <span className="mt-1 block text-sm text-muted">{preview}</span> : null}
                          </span>
                          <AssistReady className="mt-1" />
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

      <ThreeLayerStrip />
    </main>
  );
}
