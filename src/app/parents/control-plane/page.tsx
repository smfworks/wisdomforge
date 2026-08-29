import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Control plane — WisdomForge",
  description:
    "Before you create a child profile: a one-page checklist of parent controls. Restricted account, credentials, spend cap, no messaging, local model, memory review.",
};

export default function ControlPlanePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-xs font-medium tracking-widest text-accent uppercase">
        Before you create a profile
      </p>
      <h1 className="mt-3 font-display text-4xl text-fg sm:text-5xl">
        The parent control plane.
      </h1>
      <p className="mt-5 text-lg text-muted">
        WisdomForge does not make AI safe. The sentence is honest. What makes
        a child profile safer is the set of controls you put around it before
        the first session. This is the checklist.
      </p>

      <div className="mt-6 rounded-lg border-l-2 border-accent bg-surface p-4 shadow-[var(--shadow-border)]">
        <p className="text-sm text-muted">
          <span className="font-medium text-fg">The principle.</span> The
          child&rsquo;s profile is separate from yours. It has fewer tools,
          less memory, and no credentials. You control what it can do. The
          child controls what they ask. Neither of you controls what the model
          is.
        </p>
      </div>

      {/* Checklist */}
      <section className="mt-10">
        <h2 className="font-display text-2xl text-fg">Checklist</h2>
        <p className="mt-2 text-sm text-muted">
          Complete these before the first sitting. Each item is a control, not
          a suggestion.
        </p>
        <ul className="mt-6 space-y-4">
          <li className="rounded-lg bg-surface p-4 shadow-[var(--shadow-border)]">
            <p className="font-medium text-fg">1. Restricted OS account</p>
            <p className="mt-1 text-sm text-muted">
              The child&rsquo;s Hermes profile runs on a user account that
              cannot install software, change system settings, or access your
              files. On Linux: a standard user with no sudo. On macOS: a
              managed account with Parental Controls. On Windows: a standard
              account with Family Safety restrictions.
            </p>
          </li>
          <li className="rounded-lg bg-surface p-4 shadow-[var(--shadow-border)]">
            <p className="font-medium text-fg">2. Credentials review</p>
            <p className="mt-1 text-sm text-muted">
              The child&rsquo;s profile has no API keys, no OAuth tokens, no
              SSH keys. If a cloud model is used, the parent&rsquo;s key is
              the only one — and the parent understands the billing and data
              path. Do not reuse an adult API key on a child profile without
              understanding what the provider sees.
            </p>
          </li>
          <li className="rounded-lg bg-surface p-4 shadow-[var(--shadow-border)]">
            <p className="font-medium text-fg">3. Spend cap</p>
            <p className="mt-1 text-sm text-muted">
              If using a cloud provider, set a usage limit. A child&rsquo;s
              profile should not be able to spend more than a few dollars a
              month. Most providers support hard limits. If yours
              doesn&rsquo;t, use a local model instead.
            </p>
          </li>
          <li className="rounded-lg bg-surface p-4 shadow-[var(--shadow-border)]">
            <p className="font-medium text-fg">4. No messaging</p>
            <p className="mt-1 text-sm text-muted">
              The child&rsquo;s profile has no messaging tools — no email, no
              chat, no social posting, no Telegram. Conversation is with the
              model only. The parent is the channel to the outside world.
            </p>
          </li>
          <li className="rounded-lg bg-surface p-4 shadow-[var(--shadow-border)]">
            <p className="font-medium text-fg">5. Local model default</p>
            <p className="mt-1 text-sm text-muted">
              Prefer a local model (Ollama, llama.cpp) for child profiles. A
              local model keeps data on your machine. If a cloud model is
              necessary, read the provider&rsquo;s data retention and training
              terms before using it. Hermes does not train on your chats by
              default, but cloud providers have their own policies.
            </p>
          </li>
          <li className="rounded-lg bg-surface p-4 shadow-[var(--shadow-border)]">
            <p className="font-medium text-fg">6. Memory review calendar</p>
            <p className="mt-1 text-sm text-muted">
              The child&rsquo;s USER.md and MEMORY.md are parent-approved. Read
              them weekly at first, monthly once stable. Remove anything that
              identifies the child — names, school, schedule, address. The
              profile holds only what the sitting needs.
            </p>
          </li>
          <li className="rounded-lg bg-surface p-4 shadow-[var(--shadow-border)]">
            <p className="font-medium text-fg">7. Write approval on</p>
            <p className="mt-1 text-sm text-muted">
              Memory and skill writes wait for parent approval. The child
              cannot install new skills, modify their SOUL, or change their
              config. Every capability change is a parent decision.
            </p>
          </li>
          <li className="rounded-lg bg-surface p-4 shadow-[var(--shadow-border)]">
            <p className="font-medium text-fg">8. Easy pause, easy delete</p>
            <p className="mt-1 text-sm text-muted">
              You can stop the profile at any time by stopping the Hermes
              process. You can delete the profile by deleting its directory.
              Be honest about what deletion cannot remove — provider-side
              session logs and cloud model retention are separate. Record how
              to pause and delete in a private maintenance note.
            </p>
          </li>
        </ul>
      </section>

      {/* Profile isolation */}
      <section className="mt-10">
        <h2 className="font-display text-2xl text-fg">Profile isolation</h2>
        <p className="mt-3 text-sm text-muted">
          A child Hermes profile is a separate profile from any adult profile.
          Skills, memory, credentials, and conversation history do not cross.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-muted">
          <li className="rounded-lg bg-raised px-4 py-3 shadow-[var(--shadow-border)]">
            Do not copy adult skills into a child profile without parent review.
          </li>
          <li className="rounded-lg bg-raised px-4 py-3 shadow-[var(--shadow-border)]">
            Do not copy child memory into an adult profile.
          </li>
          <li className="rounded-lg bg-raised px-4 py-3 shadow-[var(--shadow-border)]">
            Do not share one <code className="text-accent">config.yaml</code> across profiles.
          </li>
          <li className="rounded-lg bg-raised px-4 py-3 shadow-[var(--shadow-border)]">
            Do not reuse an adult API key on a child profile unless you understand the billing and data path.
          </li>
        </ul>
      </section>

      {/* Data minimization */}
      <section className="mt-10">
        <h2 className="font-display text-2xl text-fg">Data minimization</h2>
        <p className="mt-3 text-sm text-muted">
          USER.md holds only parent-approved facts. No address, no school name,
          no schedule, no credentials. The pairing line names the sitting —
          not the child&rsquo;s full identity.
        </p>
      </section>

      {/* What this kit does not do */}
      <section className="mt-10 rounded-lg border-l-2 border-accent bg-surface p-5 shadow-[var(--shadow-border)]">
        <h2 className="font-display text-2xl text-fg">What this does not do</h2>
        <ul className="mt-4 space-y-2 text-sm text-muted">
          <li>This kit does not sandbox the OS. The parent controls the OS account.</li>
          <li>This kit does not make AI safe. It makes the ritual consistent.</li>
          <li>This kit is not COPPA-certified. It follows COPPA&rsquo;s spirit — parent-operated, data-minimized, no child PII.</li>
          <li>This kit does not monitor the child. The parent is in the room.</li>
        </ul>
      </section>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/hermes"
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-4 text-sm font-medium text-accent-fg"
        >
          Set up a child profile
        </Link>
        <Link
          href="/parents"
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-raised px-4 text-sm font-medium text-fg shadow-[var(--shadow-border)]"
        >
          Back to parents
        </Link>
      </div>
    </main>
  );
}