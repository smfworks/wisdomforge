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

      <section className="mt-12 space-y-3 text-muted">
        <h2 className="font-display text-2xl text-fg">Pairing rules</h2>
        <p>Name only the lesson or booklet title in USER.md. Do not paste the PDF. Do not dump the library into memory.</p>
        <p>Tutor, not calculator. Warm, not a friend. Talk to a trusted adult — not transcript surveillance.</p>
        <p>A Hermes profile is not an OS sandbox. Review credentials, spend, messaging, independent access.</p>
        <p>Official Hermes docs win if a command goes stale.</p>
      </section>

      <p className="mt-10 text-sm">
        <a
          className="text-accent hover:underline"
          href="https://github.com/smfworks/wisdomforge-kids-Hermes-profiles"
          rel="noreferrer"
          target="_blank"
        >
          smfworks/wisdomforge-kids-Hermes-profiles
        </a>
      </p>

      <div className="mt-10">
        <Button asChild variant="ghost">
          <Link href="/method">Back to the method</Link>
        </Button>
      </div>
    </main>
  );
}