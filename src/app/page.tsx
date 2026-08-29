import Link from "next/link";
import { bands } from "@/lib/curriculum/bands";
import { paths, subjects } from "@/lib/curriculum/subjects";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      {/* Hero section with dark forge aesthetic */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/wisdomforge-hero.png"
            alt="Socrates in the forge"
            className="h-full w-full object-cover opacity-30 object-top"
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-16 sm:pt-20 sm:pb-24">
          <p className="text-xs font-medium tracking-widest text-accent uppercase">SMF Works · Aiona Edge</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-fg sm:text-6xl">
            Education in the age of AI.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            WisdomForge is a parent-operated academy. Same sitting, four ages. Math, letters, science, art, history, languages, philosophy — with autonomous AI and critical thinking as the spine, not a sidebar.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/start">
                Start tonight&apos;s sitting
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/method">Read the method</Link>
            </Button>
          </div>
          <p className="mt-6 max-w-xl text-sm text-faint">
            The booklet is the text. The parent is the teacher. The guide, if any, has tools turned off. Not a hosted kids chatbot. Does not make AI safe.
          </p>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-display text-3xl text-fg">Choose a band</h2>
          <p className="mt-2 max-w-xl text-muted">
            Permissions, not IQ. When they age out, redesign. Do not silently stretch the old profile.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {bands.map((b) => (
              <Link
                key={b.id}
                href={`/ages/${b.id}`}
                className="group rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)] sm:p-6"
              >
                <p className="text-xs tracking-wide text-accent uppercase">{b.ages}</p>
                <h3 className="mt-2 font-display text-2xl text-fg">{b.name}</h3>
                <p className="mt-2 text-sm text-muted">{b.promise}</p>
                <p className="mt-3 text-xs text-faint">{b.sitting}</p>
              </Link>
            ))}
          </div>
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
          <h2 className="font-display text-3xl text-fg">Three layers, one system</h2>
          <p className="mt-2 max-w-2xl text-muted">
            WisdomForge is not a chatbot for kids. It is a three-part system: the academy site you are reading, the adult Hermes kit that runs the guide, and the child profile that sits beside the child. Each layer does one job.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <article className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
              <p className="font-mono text-xs text-accent">01</p>
              <h3 className="mt-2 font-display text-xl text-fg">The academy</h3>
              <p className="mt-2 text-sm text-muted">
                This site. 352 sittings across 10 subjects and 4 age bands. Read the lesson, download the booklet, copy the Hermes prompt. No accounts, no child data.
              </p>
              <Link href="/subjects" className="mt-3 inline-flex text-sm text-accent hover:text-fg">
                Browse sittings →
              </Link>
            </article>
            <article className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
              <p className="font-mono text-xs text-accent">02</p>
              <h3 className="mt-2 font-display text-xl text-fg">The adult kit</h3>
              <p className="mt-2 text-sm text-muted">
                The parent-operated Hermes profile. It prepares the sitting, generates the guide prompt, and tracks progress. It serves the parent — never the child directly.
              </p>
              <Link href="/hermes" className="mt-3 inline-flex text-sm text-accent hover:text-fg">
                Set up the guide →
              </Link>
            </article>
            <article className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
              <p className="font-mono text-xs text-accent">03</p>
              <h3 className="mt-2 font-display text-xl text-fg">The child profile</h3>
              <p className="mt-2 text-sm text-muted">
                A fresh, band-locked Hermes profile for the child. Conversation only, tools off, no PII. The parent builds it, approves it, and reviews every session. Never a clone of the adult.
              </p>
              <a
                href="https://github.com/smfworks/wisdomforge-kids-Hermes-profiles"
                className="mt-3 inline-flex text-sm text-accent hover:text-fg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kids profile kit →
              </a>
            </article>
          </div>
          <p className="mt-6 max-w-2xl text-xs text-faint">
            The booklet is the text. The parent is the teacher. The guide, if any, has tools turned off. Not a hosted kids chatbot. Does not make AI safe.
          </p>
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
            AI use is a practice inside the lesson, not a separate app. Each subject has a ready flagship sitting and a longer path in the forge.
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
            Synthetic session transcripts — no real child data. Watch the guide
            hold the ritual: hint, not answer. Correct the misreading, not the
            student. Try This before any AI.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { slug: "willow-circle-you-control", title: "The Circle You Control", band: "Willow · ages 5–10", unit: "The Stoics" },
              { slug: "cedar-inner-citadel", title: "The Inner Citadel", band: "Cedar · ages 15–18", unit: "The Stoics" },
              { slug: "cedar-faith-seeking-understanding", title: "The Restless Heart", band: "Cedar · ages 15–18", unit: "Faith & Reason" },
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