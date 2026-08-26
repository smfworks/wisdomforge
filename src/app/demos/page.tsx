import Link from "next/link";
import type { Metadata } from "next";
import { demos } from "@/lib/curriculum/demos";
import { bands } from "@/lib/curriculum/bands";
import { ritualOf } from "@/lib/curriculum/lessons/factory";
import { ritualLabel } from "@/lib/labels";

export const metadata: Metadata = {
  title: "Demos — WisdomForge",
  description:
    "Synthetic session transcripts showing ritual fidelity on real WisdomForge sittings. No real child data. See the full arc a parent-operated guide follows.",
};

export default function DemosPage() {
  // Group demos by band, in band order
  const byBand = bands.map((b) => ({
    band: b,
    items: demos.filter((d) => d.band === b.id),
  }));

  return (
    <main className="mx-auto max-w-4xl px-4 py-14">
      <p className="text-xs font-medium tracking-widest text-accent uppercase">
        Demos
      </p>
      <h1 className="mt-3 font-display text-4xl text-fg sm:text-5xl">
        What a sitting looks like when the guide holds the ritual.
      </h1>
      <p className="mt-5 text-lg text-muted">
        These are synthetic session transcripts — full multi-turn arcs on real
        sittings. No real child data. Willow, Juniper, and Cedar are fictional
        WisdomForge example profiles. Each demo shows the ritual the guide
        follows: opening prompt, hint-first exchange, if-they-say misreading
        and correction, Try This, AI Lab, and the band close.
      </p>

      <div className="mt-6 rounded-lg border-l-2 border-accent bg-surface p-4 shadow-[var(--shadow-border)]">
        <p className="text-sm text-muted">
          <span className="font-medium text-fg">Why demos?</span> The method is
          easier to see than to describe. These transcripts let a parent
          inspect the guide&rsquo;s behavior before they pair a Hermes profile
          with their child. The ritual fidelity check at the bottom of each
          demo lists the non-negotiables the guide held.
        </p>
      </div>

      {byBand.map(({ band, items }) =>
        items.length === 0 ? null : (
          <section key={band.id} className="mt-12">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-display text-2xl text-fg">{band.name}</h2>
              <span className="text-xs text-faint">
                {band.ages} · {ritualLabel[ritualOf[band.id]]}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted">{band.promise}</p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {items.map((demo) => (
                <li key={demo.slug}>
                  <Link
                    href={`/demos/${demo.slug}`}
                    className="flex h-full flex-col rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
                  >
                    <p className="text-xs text-accent uppercase">
                      {demo.unit}
                    </p>
                    <h3 className="mt-2 font-display text-xl text-fg">
                      {demo.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{demo.excerpt}</p>
                    <p className="mt-4 text-xs text-faint">
                      {demo.durationLabel} · Profile: {demo.profile} ·
                      Produced by {demo.author}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ),
      )}

      <section className="mt-12 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
        <h2 className="font-display text-2xl text-fg">What to look for</h2>
        <ul className="mt-4 space-y-3 text-muted">
          <li>
            <span className="text-fg">Hint, not answer.</span> The guide gives
            one hint and waits. It never writes the work.
          </li>
          <li>
            <span className="text-fg">If they say.</span> When the student
            misreads the idea, the guide corrects the misreading — it does not
            dismiss the student.
          </li>
          <li>
            <span className="text-fg">Try This first.</span> The student does
            the hands-on work before any AI. The AI Lab comes after, not
            before.
          </li>
          <li>
            <span className="text-fg">Band close.</span> Little Thinkers ask a
            grown-up. Emerging Adults reflect. The close is one open question,
            not a quiz.
          </li>
          <li>
            <span className="text-fg">No ghostwriting.</span> The guide asks
            questions. It never produces the essay, the command, or the rule.
            The student writes those.
          </li>
        </ul>
      </section>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/method"
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-4 text-sm font-medium text-accent-fg"
        >
          Read the method
        </Link>
        <Link
          href="/hermes"
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-raised px-4 text-sm font-medium text-fg shadow-[var(--shadow-border)]"
        >
          Hermes pairing
        </Link>
      </div>
    </main>
  );
}