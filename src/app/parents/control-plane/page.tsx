import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Parent control-plane — WisdomForge",
  description:
    "A concrete, one-page checklist a parent runs before creating a child Hermes profile. Restricted OS account, credentials, spend cap, no messaging, local model, memory review.",
};

type Check = {
  id: string;
  title: string;
  body: string;
  source: string;
};

const CHECKS: Check[] = [
  {
    id: "os-account",
    title: "Restricted OS account",
    body:
      "A Hermes profile is not an OS sandbox. The config switches hide tools from the agent; they do not lock the computer. If the child sits at a machine that still has a terminal, browser, or other powerful tools, create a restricted OS account (or a Docker-restricted runtime) as the real boundary. Do not hand a child the same login you use.",
    source: "configs/README.md · configs/local-models.md",
  },
  {
    id: "credentials",
    title: "Credentials review",
    body:
      "Do not reuse an adult API key on a child profile unless you understand the billing and data path. Do not copy an adult config.yaml across profiles. Profile files alone do not separate billing — the parent owns the credentials and the bill. Confirm the child profile directory holds only approved files.",
    source: "SECURITY.md",
  },
  {
    id: "spend-cap",
    title: "Spend cap",
    body:
      "Defaults for every band: no spend, no messaging other people, no publishing, no computer use, no cron. If you move off local, explain who sees the chat text and set a cost limit you check. A cloud provider still sees the prompt; turning on a cloud model is a new design decision that requires a re-test.",
    source: "DECISIONS.md §5, §8 · configs/local-models.md",
  },
  {
    id: "no-messaging",
    title: "No messaging other people",
    body:
      "The default profile cannot message other people, publish, or reach out independently. Parent involvement stays at 'suggest a trusted adult' for every band. Later parent review only if you configure it; an immediate alert only on a route you verified. Keywords are not alert rules.",
    source: "DECISIONS.md §5, §7 · PRIVACY.md",
  },
  {
    id: "local-model",
    title: "Local model default",
    body:
      "Prefer a local model so child chat text stays on hardware you control. Point the child profile at a local provider (e.g. Ollama) and a small instruction-tuned model you have already run yourself. Confirm one answer before the child uses it. A smaller local model is acceptable — this is a tutor, not a calculator. Privacy beats peak scores here.",
    source: "configs/local-models.md · DECISIONS.md §8",
  },
  {
    id: "memory-review",
    title: "Memory review calendar",
    body:
      "Start blank. Add a small, parent-approved USER.md only after conversation works. Ask the parent before transferring any fact from an adult profile or family notes; refuse credentials, health inferences, crisis history, other children's data, and anything the child asked to forget. Leave memory and skill write-approval on. Review after first real use, then on every change, and at a cadence the family can keep.",
    source: "MEMORY-REVIEW.md · PRIVACY.md · MAINTENANCE.md",
  },
];

export default function ControlPlane() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-xs font-medium tracking-widest text-accent uppercase">
        For parents
      </p>
      <h1 className="mt-3 font-display text-4xl text-fg sm:text-5xl">
        The control-plane
      </h1>
      <p className="mt-5 text-lg text-muted">
        Before you create a child Hermes profile, run this checklist. Six
        controls you own. None of them are done by the model. Hermes isolates
        profiles by directory and hides tools from the agent &mdash; it does not
        sandbox the operating system. You are the boundary.
      </p>

      <section className="mt-10 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
        <h2 className="font-display text-2xl text-fg">Before you create a profile</h2>
        <p className="mt-3 text-sm text-muted">
          Work top to bottom. A skipped control is not a default &mdash; it is a
          gap. If you cannot satisfy a row, narrow the design rather than skip
          it.
        </p>
      </section>

      <ol className="mt-8 space-y-4">
        {CHECKS.map((c, i) => (
          <li
            key={c.id}
            className="rounded-xl bg-raised p-5 shadow-[var(--shadow-border)]"
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-fg">
                {i + 1}
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-xl text-fg">{c.title}</h3>
                <p className="mt-2 text-sm text-muted">{c.body}</p>
                <p className="mt-3 text-xs text-faint">
                  Sourced from {c.source}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-fg">Isolation</h2>
        <p className="mt-3 text-sm text-muted">
          A child profile is separate from any adult profile. Skills, memory,
          credentials, and conversation history do not cross. Do not copy adult
          skills into a child profile without parent review. Do not copy child
          memory into an adult profile. The adult profile is the control plane
          and must not ingest child memory.
        </p>
        <p className="mt-2 text-xs text-faint">Sourced from SECURITY.md · PARENT-GUIDE.md</p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-fg">What this page is not</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
          <li>Not legal advice, not a COPPA certification, not a safety guarantee.</li>
          <li>Not a hosted kids AI. The kit does not make AI safe.</li>
          <li>Not permission to put the WisdomForge library into a child&apos;s memory.</li>
        </ul>
      </section>

      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <Link href="/hermes">Set up a Hermes profile</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/parents">Back to &ldquo;For parents&rdquo;</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/start">Start a sitting instead</Link>
        </Button>
      </div>
    </main>
  );
}