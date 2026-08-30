import Link from "next/link";
import { AssistReady } from "@/components/assist-ready";

/**
 * Compact 002 spine. Inner pages keep the three-layer system visible
 * instead of collapsing into equal-weight cards.
 */
export function ThreeLayerStrip() {
  return (
    <section className="mt-16">
      <h2 className="font-display text-2xl text-fg">Three layers, one system</h2>
      <p className="mt-2 max-w-xl text-muted">Each layer does one job. The parent is the operator.</p>

      <article className="mt-8 grid gap-4 border-t border-accent py-7 sm:grid-cols-[5.5rem_1fr_auto] sm:items-start sm:gap-6">
        <p className="font-display text-3xl leading-none text-accent">01</p>
        <div>
          <h3 className="font-display text-xl text-fg">The academy</h3>
          <p className="mt-2 max-w-xl text-sm text-muted">
            This site. Sittings across ten subjects and four bands. No accounts. No child data.
          </p>
          <Link href="/subjects" className="mt-2 inline-flex text-sm text-accent hover:text-fg">
            Browse sittings →
          </Link>
        </div>
        <AssistReady className="mt-1" />
      </article>

      <article className="grid gap-4 border-t border-accent py-7 sm:grid-cols-[5.5rem_1fr] sm:items-start sm:gap-6">
        <p className="font-display text-3xl leading-none text-accent">02</p>
        <div>
          <h3 className="font-display text-xl text-fg">The adult kit</h3>
          <p className="mt-2 max-w-xl text-sm text-muted">
            The parent-operated Hermes profile. It prepares the sitting. It serves the parent — never the child
            directly.
          </p>
          <div className="mt-2 flex flex-col gap-1.5 sm:flex-row sm:gap-4">
            <Link href="/hermes" className="inline-flex text-sm text-accent hover:text-fg">
              Set up the guide →
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

      <article className="grid gap-4 border-t border-b border-accent py-7 sm:grid-cols-[5.5rem_1fr] sm:items-start sm:gap-6">
        <p className="font-display text-3xl leading-none text-accent">03</p>
        <div>
          <h3 className="font-display text-xl text-fg">The child profile</h3>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Fresh. Band-locked. Tools off. Never a clone of the adult. The parent builds it, approves it, and reviews
            every session.
          </p>
          <a
            href="https://github.com/smfworks/wisdomforge-kids-Hermes-profiles"
            className="mt-2 inline-flex text-sm text-accent hover:text-fg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kids profile kit →
          </a>
        </div>
      </article>
    </section>
  );
}
