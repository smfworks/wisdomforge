import Link from "next/link";
import { Button } from "@/components/ui/button";
import { bandById } from "@/lib/curriculum/bands";
import { subjectById } from "@/lib/curriculum/subjects";
import { ritualLabel } from "@/lib/labels";
import { ritualOf } from "@/lib/curriculum/lessons/factory";
import type { DemoTranscript } from "@/lib/curriculum/demos";

/**
 * TranscriptView — renders a synthetic session transcript on the academy site.
 *
 * Design: matches the site's dark-forge aesthetic. Dialogue turns render as
 * alternating speaker blocks. Big Idea / key-moment sections render with an
 * accent border. The ritual fidelity checklist and parent review render in
 * separate cards at the bottom.
 */
export function TranscriptView({ demo }: { demo: DemoTranscript }) {
  const band = bandById(demo.band);
  const subject = subjectById(demo.subject);
  const ritual = ritualOf[demo.band];
  const lessonHref = `/learn/${demo.band}/${demo.subject}/${demo.lessonSlug}`;

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <nav className="text-sm text-muted">
        <Link href="/demos" className="hover:text-fg">
          Demos
        </Link>
        <span className="mx-2 text-faint">/</span>
        <Link href={`/ages/${demo.band}`} className="hover:text-fg">
          {band?.name}
        </Link>
      </nav>

      <p className="mt-6 text-xs font-medium tracking-wide text-accent uppercase">
        Synthetic demo · {demo.unit}
      </p>
      <h1 className="mt-2 font-display text-4xl text-fg sm:text-5xl">{demo.title}</h1>
      <p className="mt-3 text-lg text-muted">{demo.excerpt}</p>

      <ul className="mt-6 flex flex-wrap gap-2 text-xs text-muted">
        <li className="rounded-md bg-raised px-3 py-2 shadow-[var(--shadow-border)]">
          {demo.durationLabel}
        </li>
        <li className="rounded-md bg-raised px-3 py-2 shadow-[var(--shadow-border)]">
          {ritualLabel[ritual]}
        </li>
        <li className="rounded-md bg-raised px-3 py-2 shadow-[var(--shadow-border)]">
          {band?.ages}
        </li>
        <li className="rounded-md bg-raised px-3 py-2 shadow-[var(--shadow-border)]">
          Profile: {demo.profile}
        </li>
      </ul>

      {/* Synthetic data notice */}
      <div className="mt-6 rounded-lg border-l-2 border-accent bg-surface p-4 shadow-[var(--shadow-border)]">
        <p className="text-sm text-muted">
          <span className="font-medium text-fg">Synthetic data.</span>{" "}
          {demo.profile} is a fictional WisdomForge example profile. No real
          child data. This transcript demonstrates ritual fidelity on a real
          sitting — the full multi-turn arc a parent-operated guide follows.
        </p>
      </div>

      {/* Link to the real lesson */}
      <div className="mt-4">
        <Button asChild variant="secondary">
          <Link href={lessonHref}>
            Read the lesson: {demo.unit} → Sitting {demo.lessonNumber}
          </Link>
        </Button>
      </div>

      {/* Transcript sections */}
      <div className="mt-10 space-y-8">
        {demo.sections.map((section, i) => {
          if (section.kind === "prose") {
            return (
              <section
                key={i}
                className={
                  section.highlight
                    ? "rounded-lg border-l-2 border-accent bg-surface p-5 shadow-[var(--shadow-border)]"
                    : undefined
                }
              >
                <p className="text-xs font-medium tracking-wide text-accent uppercase">
                  {section.label}
                </p>
                <p className="mt-3 font-display text-2xl leading-snug text-fg">
                  {section.body}
                </p>
              </section>
            );
          }

          return (
            <section key={i}>
              <h2
                className={
                  section.highlight
                    ? "font-display text-2xl text-fg border-l-2 border-accent pl-4"
                    : "font-display text-2xl text-fg"
                }
              >
                {section.label}
              </h2>
              {section.context && (
                <p className="mt-2 text-sm italic text-faint">{section.context}</p>
              )}
              <div className="mt-4 space-y-3">
                {section.turns?.map((turn, j) => (
                  <div
                    key={j}
                    className={`rounded-lg p-4 shadow-[var(--shadow-border)] ${
                      turn.speaker === "student"
                        ? "bg-surface"
                        : "bg-raised"
                    }`}
                  >
                    <p
                      className={`text-xs font-medium tracking-wide uppercase ${
                        turn.speaker === "student" ? "text-accent" : "text-faint"
                      }`}
                    >
                      {turn.speaker === "student" ? demo.profile : "Guide"}
                    </p>
                    <p className="mt-1.5 leading-relaxed text-fg">{turn.text}</p>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Reflect — band close */}
      <section className="mt-10 rounded-lg bg-surface p-5 shadow-[var(--shadow-border)]">
        <p className="text-xs font-medium tracking-wide text-accent uppercase">
          Reflect
        </p>
        <p className="mt-2 font-display text-2xl text-fg">{demo.reflect}</p>
      </section>

      {/* Ritual fidelity checklist */}
      <section className="mt-10">
        <h2 className="font-display text-2xl text-fg">Ritual fidelity check</h2>
        <p className="mt-2 text-sm text-muted">
          Every demo is verified against the sitting&rsquo;s ritual contract.
          These are the non-negotiables the guide held.
        </p>
        <ul className="mt-4 space-y-2">
          {demo.checklist.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-lg bg-raised p-3 shadow-[var(--shadow-border)]"
            >
              <span
                className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs text-accent-fg"
                aria-hidden
              >
                ✓
              </span>
              <span className="text-sm text-muted">{item.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Parent review — not shown to children */}
      <section className="mt-10 rounded-lg bg-raised p-5 shadow-[var(--shadow-border)]">
        <p className="text-xs font-medium tracking-wide text-faint uppercase">
          Parent review · not shown to the child
        </p>
        <p className="mt-2 text-sm text-muted">{demo.parentReview}</p>
      </section>

      {/* Footer nav */}
      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button asChild variant="secondary">
          <Link href={lessonHref}>
            Open the lesson page
          </Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/demos">All demos</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href={`/subjects/${demo.subject}`}>{subject?.name}</Link>
        </Button>
      </div>
    </article>
  );
}