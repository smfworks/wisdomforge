"use client";

import Link from "next/link";
import { bands } from "@/lib/curriculum/bands";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const SETUP = `I'd like your help designing a private, child-facing Hermes profile for one WisdomForge age band. Read and follow START-HERE.md, BANDS.md, and DECISIONS.md from the WisdomForge kids Hermes kit. Ask the band first. Propose conservative defaults. Show the full design. Create a fresh profile. Do not clone my adult profile.`;

export default function HermesPage() {
  const [copied, setCopied] = useState(false);

  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-xs font-medium tracking-widest text-accent uppercase">Hermes</p>
      <h1 className="mt-3 font-display text-4xl text-fg">A guide you inspect. Not a chatbot we host.</h1>
      <p className="mt-5 text-lg text-muted">
        WisdomForge lessons work with zero AI. Hermes is optional: a parent-operated, band-locked profile that sits beside the booklet. It does not make AI safe. You may refuse it.
      </p>

      <section className="mt-12 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
        <h2 className="font-display text-2xl text-fg">Setup, from your adult profile</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-muted">
          <li>Send the prompt below from a trusted adult Hermes profile.</li>
          <li>The setup agent asks the band first, then only choices that change privacy, cost, tools, or access.</li>
          <li>It shows the full design. You approve. It creates a fresh profile. It must not clone yours.</li>
          <li>It tests with synthetic examples. Fix failures before the child starts.</li>
        </ol>
        <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-md bg-bg p-4 text-sm text-fg shadow-[var(--shadow-border)]">
          {SETUP}
        </pre>
        <Button
          className="mt-4"
          variant="secondary"
          type="button"
          onClick={async () => {
            await navigator.clipboard.writeText(SETUP);
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
          }}
        >
          {copied ? "Copied" : "Copy setup prompt"}
        </Button>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-fg">Band contracts</h2>
        <ul className="mt-4 space-y-4">
          {bands.map((b) => (
            <li key={b.id} className="rounded-lg bg-raised p-4 shadow-[var(--shadow-border)]">
              <p className="text-xs text-accent uppercase">
                {b.ages} · {b.name}
              </p>
              <p className="mt-2 text-sm text-fg">{b.hermes}</p>
              <p className="mt-2 text-sm text-muted">{b.aiRule}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-fg">Hermes profile templates</h2>
        <p className="mt-3 text-sm text-muted">
          Two public repos hold the profile templates. Clone, customize, and pair with the sittings.
        </p>
        <ul className="mt-6 space-y-4">
          <li className="rounded-lg bg-raised p-4 shadow-[var(--shadow-border)]">
            <p className="text-xs text-accent uppercase">Adult · Lifelong Learners</p>
            <p className="mt-1 text-sm text-fg">
              The SMF Works Hermes AI team template — the adult profile parents use to operate the academy and run sittings.
            </p>
            <a
              className="mt-2 inline-flex text-sm text-accent hover:underline"
              href="https://github.com/smfworks/hermes-ai-team"
              rel="noreferrer"
              target="_blank"
            >
              github.com/smfworks/hermes-ai-team →
            </a>
          </li>
          <li className="rounded-lg bg-raised p-4 shadow-[var(--shadow-border)]">
            <p className="text-xs text-accent uppercase">Little Thinkers · Young Minds · Emerging Adults</p>
            <p className="mt-1 text-sm text-fg">
              Band-locked child profiles for ages 5–10, 11–14, and 15–18. Fresh profiles only — never clone an adult profile. Includes START-HERE.md, BANDS.md, and DECISIONS.md.
            </p>
            <a
              className="mt-2 inline-flex text-sm text-accent hover:underline"
              href="https://github.com/smfworks/wisdomforge-kids-Hermes-profiles"
              rel="noreferrer"
              target="_blank"
            >
              github.com/smfworks/wisdomforge-kids-Hermes-profiles →
            </a>
          </li>
        </ul>
      </section>

      <section className="mt-12 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
        <h2 className="font-display text-2xl text-fg">Inspect the guide first</h2>
        <p className="mt-3 text-sm text-muted">
          Before you pair a Hermes profile with your child, read a synthetic
          demo. These transcripts show exactly what the guide does — and does
          not do — across the full sitting arc. No real child data.
        </p>
        <ul className="mt-4 flex flex-wrap gap-3">
          <li>
            <Link
              href="/demos"
              className="inline-flex min-h-10 items-center rounded-md bg-accent px-4 text-sm font-medium text-accent-fg"
            >
              See the demos
            </Link>
          </li>
        </ul>
      </section>

      <section className="mt-12 space-y-3 text-muted">
        <h2 className="font-display text-2xl text-fg">Pairing rules</h2>
        <p>Name only the lesson or booklet title in USER.md. Do not paste the PDF. Do not dump the library into memory.</p>
        <p>Tutor, not calculator. Warm, not a friend. Talk to a trusted adult — not transcript surveillance.</p>
        <p>A Hermes profile is not an OS sandbox. Review credentials, spend, messaging, independent access.</p>
        <p>Official Hermes docs win if a command goes stale.</p>
      </section>

      <div className="mt-10">
        <Button asChild variant="ghost">
          <Link href="/method">Back to the method</Link>
        </Button>
      </div>
    </main>
  );
}