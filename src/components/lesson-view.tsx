"use client";

import Link from "next/link";
import { GuidePanel } from "@/components/guide-panel";
import { Button } from "@/components/ui/button";
import { bandById } from "@/lib/curriculum/bands";
import { nextInUnit, subjectById } from "@/lib/curriculum";
import type { Lesson } from "@/lib/curriculum/types";
import { lessonKey } from "@/lib/curriculum/types";
import { ritualLabel } from "@/lib/labels";
import { useForge } from "@/lib/progress";
import { useHydrated } from "@/lib/use-hydrated";
import { bookletLinksForLesson, figureDisplayName } from "@/lib/curriculum/booklets";
import { demosForLesson } from "@/lib/curriculum/demos";

export function LessonView({ lesson }: { lesson: Lesson }) {
  const band = bandById(lesson.band);
  const subject = subjectById(lesson.subject);
  const next = nextInUnit(lesson);
  const key = lessonKey(lesson);
  const doneStored = useForge((s) => s.completed.includes(key));
  const hydrated = useHydrated();
  const done = hydrated && doneStored;
  const complete = useForge((s) => s.complete);
  const uncomplete = useForge((s) => s.uncomplete);
  const lessonDemos = demosForLesson(lesson.slug, lesson.band);

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <nav className="text-sm text-muted">
        <Link href={`/ages/${lesson.band}`} className="hover:text-fg">
          {band?.name}
        </Link>
        <span className="mx-2 text-faint">/</span>
        <Link href={`/subjects/${lesson.subject}`} className="hover:text-fg">
          {subject?.name}
        </Link>
      </nav>

      <p className="mt-6 text-xs font-medium tracking-wide text-accent uppercase">
        {lesson.unit} · Sitting {lesson.number}
      </p>
      <h1 className="mt-2 font-display text-4xl text-fg sm:text-5xl">{lesson.title}</h1>
      <p className="mt-3 text-lg text-muted">{lesson.dek}</p>

      <ul className="mt-6 flex flex-wrap gap-2 text-xs text-muted">
        <li className="rounded-md bg-raised px-3 py-2 shadow-[var(--shadow-border)]">{lesson.durationMin} min</li>
        <li className="rounded-md bg-raised px-3 py-2 shadow-[var(--shadow-border)]">{ritualLabel[lesson.ritual]}</li>
        <li className="rounded-md bg-raised px-3 py-2 shadow-[var(--shadow-border)]">{band?.ages}</li>
      </ul>

      {/* 1. Parent briefing — prominent card, not collapsible */}
      <section className="mt-8 rounded-lg bg-surface p-5 shadow-[var(--shadow-border)]">
        <p className="text-xs font-medium tracking-wide text-accent uppercase">Parent briefing · 5 minutes, before they sit</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{lesson.parentBriefing}</p>
        <p className="mt-4 text-xs font-medium tracking-wide text-accent uppercase">Hard edges</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
          {lesson.hardEdges.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>

      {/* 2. If they say — moved up, accent-bordered callout for parental utility */}
      <section className="mt-6 rounded-lg border-l-2 border-accent bg-surface p-5 shadow-[var(--shadow-border)]">
        <h2 className="font-display text-2xl text-fg">If they say</h2>
        <dl className="mt-4 space-y-4">
          {lesson.ifTheySay.map((row) => (
            <div key={row.heard} className="rounded-lg bg-raised p-4 shadow-[var(--shadow-border)]">
              <dt className="text-sm font-medium text-fg">&ldquo;{row.heard}&rdquo;</dt>
              <dd className="mt-2 text-sm text-muted">{row.reply}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 3. Objective */}
      <p className="mt-10 text-xs font-medium tracking-wide text-faint uppercase">Objective</p>
      <p className="mt-2 text-fg">{lesson.objective}</p>

      <div className="mt-10 space-y-8">
        {lesson.reading.map((block) => (
          <section key={block.heading}>
            <h2 className="font-display text-2xl text-fg">{block.heading}</h2>
            <p className="mt-3 leading-relaxed text-muted">{block.body}</p>
          </section>
        ))}
      </div>

      <section className="mt-10 rounded-lg bg-surface p-5 shadow-[var(--shadow-border)]">
        <p className="text-xs font-medium tracking-wide text-accent uppercase">Big idea</p>
        <p className="mt-2 font-display text-2xl text-fg">{lesson.bigIdea}</p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl text-fg">
          Try this
          <span className="ml-3 text-sm font-sans font-normal text-faint">
            ~{lesson.tryThis.reduce((sum, act) => sum + act.minutes, 0)} min total
          </span>
        </h2>
        <div className="mt-4 space-y-4">
          {lesson.tryThis.map((act) => (
            <div key={act.title} className="rounded-lg bg-raised p-4 shadow-[var(--shadow-border)]">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-medium text-fg">{act.title}</h3>
                <span className="text-xs text-faint">{act.minutes} min</span>
              </div>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-muted">
                {act.steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-10">
        <GuidePanel lesson={lesson} />
      </div>

      {lessonDemos.length > 0 && (
        <section className="mt-10 rounded-lg border-l-2 border-accent bg-surface p-5 shadow-[var(--shadow-border)]">
          <p className="text-xs font-medium tracking-wide text-accent uppercase">
            See this sitting
          </p>
          <h2 className="mt-1 font-display text-2xl text-fg">
            Demo transcript
          </h2>
          <p className="mt-2 text-sm text-muted">
            A synthetic session transcript on this sitting — no real child
            data. See the guide hold the ritual before you pair a Hermes
            profile.
          </p>
          <ul className="mt-4 space-y-2">
            {lessonDemos.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/demos/${d.slug}`}
                  className="text-sm text-accent hover:underline"
                >
                  {d.title} →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-10">
        <h2 className="font-display text-2xl text-fg">Dinner table</h2>
        <p className="mt-3 text-lg text-fg">{lesson.dinnerQuestion}</p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl text-fg">Sits beside</h2>
        <ul className="mt-3 space-y-2">
          {lesson.transfer.map((t) => (
            <li key={t.label} className="text-sm text-muted">
              <span className="font-medium text-fg">{t.label}.</span> {t.note}
            </li>
          ))}
        </ul>
      </section>

      {(() => {
        const links = bookletLinksForLesson(lesson.slug, lesson.band);
        if (!links) return null;
        const figure = figureDisplayName(links[0].figure);
        const currentLabel =
          lesson.band === "little" ? "Elementary" :
          lesson.band === "young" ? "Middle" :
          lesson.band === "emerging" ? "High School" :
          "Adult";
        return (
          <section className="mt-10 rounded-lg bg-surface p-5 shadow-[var(--shadow-border)]">
            <p className="text-xs font-medium tracking-wide text-accent uppercase">Booklet</p>
            <h2 className="mt-1 font-display text-2xl text-fg">Download the {figure} booklet</h2>
            <p className="mt-2 text-sm text-muted">
              The full text behind this sitting, in a printable PDF. Markdown for a Hermes agent will appear here when produced. Pick the level that fits.
            </p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {links.map((link) => {
                const isCurrent = link.label === currentLabel;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      download
                      className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm shadow-[var(--shadow-border)] transition-colors ${
                        isCurrent
                          ? "bg-accent text-bg font-medium"
                          : "bg-raised text-fg hover:bg-surface"
                      }`}
                    >
                      {link.label} PDF
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })()}

      <p className="mt-10 rounded-lg bg-raised p-4 text-sm text-muted shadow-[var(--shadow-border)]">
        <span className="font-medium text-fg">Integrity. </span>
        {lesson.integrity}
      </p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          type="button"
          variant={done ? "secondary" : "primary"}
          onClick={() => (done ? uncomplete(key) : complete(key))}
        >
          {done ? "Sitting marked — undo" : "Mark this sitting complete"}
        </Button>
        {next ? (
          <Button variant="ghost" asChild>
            <Link href={`/learn/${next.band}/${next.subject}/${next.slug}`}>
              Next sitting: {next.title}
            </Link>
          </Button>
        ) : (
          <Button variant="ghost" asChild>
            <Link href={`/subjects/${lesson.subject}`}>
              Back to {subject?.name}
            </Link>
          </Button>
        )}
      </div>
    </article>
  );
}