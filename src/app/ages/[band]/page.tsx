"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { bandById } from "@/lib/curriculum/bands";
import { lessonsByBand, subjectById } from "@/lib/curriculum";
import { ritualLabel } from "@/lib/labels";
import { useForge } from "@/lib/progress";
import { useHydrated } from "@/lib/use-hydrated";
import { BAND_IDS, type SubjectId, type Lesson } from "@/lib/curriculum/types";

// Curated recommended paths per band — entry points a parent can start tonight.
const RECOMMENDED: Record<string, { title: string; reason: string; subjects: SubjectId[] }[]> = {
  little: [
    { title: "Start with AI", reason: "What a tool is and is not. Conversation only.", subjects: ["ai"] },
    { title: "Then character", reason: "A Stoic story, a circle of control. Ask a grown-up.", subjects: ["philosophy"] },
    { title: "Then hands", reason: "Make a mess before you look at a generated picture.", subjects: ["art"] },
  ],
  young: [
    { title: "Start with AI", reason: "Try first, hint second. Talk about it.", subjects: ["ai"] },
    { title: "Then thinking", reason: "Catch a confident wrong answer — including your own.", subjects: ["thinking"] },
    { title: "Then writing", reason: "Ugly draft, then editor questions. No ghost.", subjects: ["english"] },
  ],
  emerging: [
    { title: "Start with AI", reason: "Integrity you can defend. Cite what you used.", subjects: ["ai"] },
    { title: "Then agents", reason: "Eval or it did not happen. Spec the agent.", subjects: ["cs"] },
    { title: "Then rhetoric", reason: "Ethos, pathos, logos — and the machine that fakes all three.", subjects: ["english"] },
  ],
  adult: [
    { title: "Start with the kit", reason: "Read BANDS, DECISIONS, EVALS, PRIVACY. Operate or do not.", subjects: ["ai"] },
    { title: "Then the method", reason: "Inspect, test, refuse. Child profiles stay fresh and tool-poor.", subjects: ["cs"] },
    { title: "Then the letters", reason: "Do not write their paper. You are the scribe, not the ghost.", subjects: ["english"] },
  ],
};

function SittingPreview({ lesson }: { lesson: Lesson }) {
  // Surface a preview of the three fields most parents need before clicking in:
  // parentBriefing (truncated), first ifTheySay exchange, first tryThis activity.
  return (
    <div className="mt-3 space-y-3 text-sm">
      {/* Parent briefing preview */}
      <div>
        <p className="text-xs font-medium tracking-wide text-accent uppercase">Parent briefing</p>
        <p className="mt-1 text-muted line-clamp-2">
          {lesson.parentBriefing.length > 140
            ? `${lesson.parentBriefing.slice(0, 140)}…`
            : lesson.parentBriefing}
        </p>
      </div>

      {/* Try this preview */}
      {lesson.tryThis.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {lesson.tryThis.slice(0, 2).map((act) => (
            <span
              key={act.title}
              className="rounded-md bg-raised px-2.5 py-1 text-xs text-fg shadow-[var(--shadow-border)]"
            >
              {act.title} · {act.minutes}m
            </span>
          ))}
        </div>
      ) : null}

      {/* If they say preview — first exchange only */}
      {lesson.ifTheySay.length > 0 ? (
        <div className="rounded-md bg-bg px-3 py-2 text-xs text-muted">
          <span className="text-faint">If they say: </span>
          <span className="text-fg">&ldquo;{lesson.ifTheySay[0].heard}&rdquo;</span>
        </div>
      ) : null}
    </div>
  );
}

export default function AgeHub() {
  const params = useParams<{ band: string }>();
  const band = params.band;

  if (!BAND_IDS.includes(band as (typeof BAND_IDS)[number])) {
    notFound();
  }
  const def = bandById(band);
  if (!def) notFound();

  const setBand = useForge((s) => s.setBand);
  const hydrated = useHydrated();
  const sittings = lessonsByBand(def.id);
  const grouped = new Map<SubjectId, typeof sittings>();
  for (const l of sittings) {
    const list = grouped.get(l.subject) ?? [];
    list.push(l);
    grouped.set(l.subject, list);
  }

  // Recommended paths for this band — only show subjects that have ready sittings
  const recs = (RECOMMENDED[def.id] ?? []).filter(
    (r) => r.subjects.some((subj) => grouped.has(subj)),
  );

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
        <Button
          type="button"
          onClick={() => setBand(def.id)}
          variant={hydrated ? "secondary" : "primary"}
        >
          Set as this family&apos;s band
        </Button>
      </div>

      {/* Recommended paths — curated entry points for this band */}
      {recs.length > 0 ? (
        <section className="mt-14">
          <h2 className="font-display text-3xl text-fg">Where to start</h2>
          <p className="mt-2 text-sm text-muted">
            Curated entry points for {def.name}. Each links to the first ready sitting.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {recs.map((rec, i) => {
              const firstReady = rec.subjects
                .map((subj) => grouped.get(subj)?.[0])
                .find((l) => l);
              if (!firstReady) return null;
              const s = subjectById(firstReady.subject);
              return (
                <Link
                  key={rec.title}
                  href={`/learn/${firstReady.band}/${firstReady.subject}/${firstReady.slug}`}
                  className="group rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
                >
                  <p className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-xl text-fg">{rec.title}</h3>
                  <p className="mt-2 text-sm text-muted">{rec.reason}</p>
                  <p className="mt-3 text-xs text-faint">
                    {s?.name} · {firstReady.durationMin} min
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      ) : null}

      {/* Sittings — now with field previews so parents see before clicking in */}
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
                      className="block px-4 py-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-faint">Sitting {l.number}</span>
                          <span className="text-fg">{l.title}</span>
                        </div>
                        <span className="text-xs text-muted">{l.durationMin} min</span>
                      </div>
                      <SittingPreview lesson={l} />
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