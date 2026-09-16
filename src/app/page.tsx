import Link from "next/link";
import { bands } from "@/lib/curriculum/bands";
import { paths, subjects } from "@/lib/curriculum/subjects";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      {/* Split hero — sketch 002 spine, sketch 003 sentences */}
      <section className="grid min-h-[min(100dvh,52rem)] lg:grid-cols-2">
        <div className="relative min-h-[42vh] bg-black lg:min-h-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/wisdomforge-hero.png"
            alt="Socrates"
            className="absolute inset-0 h-full w-full object-cover object-left opacity-80"
          />
        </div>
        <div className="flex flex-col justify-center px-4 py-14 sm:px-10 lg:px-14">
          <h1 className="max-w-[12ch] font-display text-4xl leading-[1.12] font-normal text-fg sm:text-5xl lg:text-[3.6rem]">
            Education in the age of AI.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            WisdomForge is a parent-operated academy. Ten subjects, four ages. The booklet is the text. The parent is the teacher. The guide is optional. Not a hosted kids chatbot. Does not make AI safe.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/start">Start tonight&apos;s sitting</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/method">Read the method</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Three layers as composition — copper-ruled rows */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:pb-20">
        <div className="border-t border-accent py-8">
          <p className="text-xs font-medium tracking-[0.28em] text-accent uppercase">
            Ten subjects, four ages
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            {subjects.map((s) => (
              <li key={s.id}>
                <Link
                  href={`/subjects/${s.id}`}
                  className="text-fg underline decoration-accent decoration-1 underline-offset-4 hover:text-accent"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="font-display text-3xl text-fg">How it works</h2>
        <p className="mt-2 max-w-xl text-muted">
          Start on this website. The Hermes guides are optional. You run them.
        </p>

        <article className="mt-10 grid gap-4 border-t border-accent py-8 sm:grid-cols-[5.5rem_1fr] sm:items-start sm:gap-6">
          <p className="font-display text-4xl leading-none text-accent">01</p>
          <div>
            <h3 className="font-display text-2xl text-fg">This website</h3>
            <p className="mt-2 max-w-xl text-muted">
              Pick an age, pick a subject, do a short lesson (a sitting). Print the booklet. No account. Nothing about your child is stored here.
            </p>
            <p className="mt-2 max-w-xl text-sm text-muted">
              How to start: Start tonight’s sitting → choose 5–10, 11–14, 15–18, or adult → one lesson.
            </p>
            <Link href="/start" className="mt-3 inline-flex text-sm text-accent hover:text-fg">
              Start tonight’s sitting →
            </Link>
          </div>
        </article>

        <article className="grid gap-4 border-t border-accent py-8 sm:grid-cols-[5.5rem_1fr] sm:items-start sm:gap-6">
          <p className="font-display text-4xl leading-none text-accent">02</p>
          <div>
            <h3 className="font-display text-2xl text-fg">Optional parent guide</h3>
            <p className="mt-2 max-w-xl text-muted">
              A Hermes profile you run, to prep the sitting. It talks to you, not to the child.
            </p>
            <div className="mt-3 flex flex-col gap-1.5 sm:flex-row sm:gap-4">
              <Link href="/hermes" className="inline-flex text-sm text-accent hover:text-fg">
                How to set up the parent guide →
              </Link>
              <a
                href="https://github.com/smfworks/hermes-ai-team"
                className="inline-flex text-sm text-accent hover:text-fg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Adult team repo →
              </a>
            </div>
          </div>
        </article>

        <article className="grid gap-4 border-t border-accent py-8 sm:grid-cols-[5.5rem_1fr] sm:items-start sm:gap-6">
          <p className="font-display text-4xl leading-none text-accent">03</p>
          <div>
            <h3 className="font-display text-2xl text-fg">Optional child guide</h3>
            <p className="mt-2 max-w-xl text-muted">
              A separate profile you build for their age. Never a copy of yours. You approve every session.
            </p>
            <a
              href="https://github.com/smfworks/wisdomforge-kids-Hermes-profiles"
              className="mt-3 inline-flex text-sm text-accent hover:text-fg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kids profile kit →
            </a>
          </div>
        </article>

        <div className="border-t border-accent pt-8">
          <h2 className="font-display text-2xl text-fg">Choose an age</h2>
          <p className="mt-2 max-w-xl text-muted">
            Four age groups. Pick the one that matches who is sitting tonight. When they grow up, pick the next one — do not reuse a younger profile.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            {bands.map((b) => (
              <li key={b.id}>
                <Link
                  href={`/ages/${b.id}`}
                  className="text-fg underline decoration-accent decoration-1 underline-offset-4 hover:text-accent"
                >
                  {b.ages} · {b.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-display text-3xl text-fg">The method in one sitting</h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Human first", d: "Read. Try. Write. The first hand on the work is theirs." },
              { n: "02", t: "Guide second", d: "Hint, not ghostwrite. Conversation only until a parent turns a tool on." },
              { n: "03", t: "Evaluate always", d: "Fluency is a style. Truth is a check. Catch the confident wrong answer." },
              { n: "04", t: "Parent in the loop", d: "Not a spy. A person in the room. Ask a grown-up, talk about it, or refuse the tool." },
            ].map((s) => (
              <li key={s.n} className="rounded-lg bg-raised p-4 shadow-[var(--shadow-border)]">
                <p className="font-mono text-xs text-accent">{s.n}</p>
                <h3 className="mt-2 font-medium text-fg">{s.t}</h3>
                <p className="mt-2 text-sm text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl text-fg">Every subject</h2>
            <Link href="/subjects" className="hidden text-sm text-accent sm:inline">
              View the academy
            </Link>
          </div>
          <p className="mt-2 max-w-xl text-muted">
            AI use is a practice inside the lesson, not a separate app. Each subject has a first lesson you can do tonight, then more sittings if you want them.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {subjects.map((s) => (
              <li key={s.id}>
                <Link
                  href={`/subjects/${s.id}`}
                  className="flex h-full flex-col rounded-lg bg-surface p-4 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
                >
                  <p className="text-xs text-faint">{s.short}</p>
                  <h3 className="mt-1 font-medium text-fg">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted">{s.promise}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl text-fg">See a sitting</h2>
            <Link href="/demos" className="hidden text-sm text-accent sm:inline">
              All demos
            </Link>
          </div>
          <p className="mt-2 max-w-xl text-muted">
            Sample transcripts — no real child data. Watch the guide hint first,
            not give the answer. Correct the misreading, not the student. Do the
            activity before any AI.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { slug: "willow-circle-you-control", title: "The Circle You Control", band: "Willow · ages 5–10", unit: "The Stoics" },
              { slug: "cedar-inner-citadel", title: "The Inner Citadel", band: "Cedar · ages 15–18", unit: "The Stoics" },
              { slug: "rowan-do-not-hand-them-your-agent", title: "Do Not Hand Them Your Agent", band: "Rowan · adult", unit: "Autonomous AI" },
            ].map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/demos/${d.slug}`}
                  className="flex h-full flex-col rounded-lg bg-surface p-4 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
                >
                  <p className="text-xs text-accent uppercase">{d.unit}</p>
                  <h3 className="mt-1 font-medium text-fg">{d.title}</h3>
                  <p className="mt-2 text-sm text-muted">{d.band}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-display text-3xl text-fg">Paths</h2>
          <div className="mt-8 grid gap-3 lg:grid-cols-2">
            {paths.map((p) => (
              <article key={p.id} className="rounded-xl bg-raised p-5 shadow-[var(--shadow-border)]">
                <h3 className="font-display text-2xl text-fg">{p.name}</h3>
                <p className="mt-2 text-sm text-muted">{p.promise}</p>
                <p className="mt-3 text-xs text-faint">{p.subjects.join(" · ")}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
