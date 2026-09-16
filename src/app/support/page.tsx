import type { Metadata } from "next";
import Link from "next/link";

const STRIPE_TIP_JAR_URL = "https://donate.stripe.com/14A6oGbHv3hHekY2ODew801";

export const metadata: Metadata = {
  title: "Support WisdomForge — WisdomForge",
  description:
    "A voluntary tip jar for SMF WisdomForge: parent-operated, AI-supported philosophy and education outreach — booklets, audio, and video for ages 5 to adult. Not tuition. Not a product purchase. Materials stay free either way.",
  alternates: { canonical: "/support" },
  openGraph: {
    title: "Support WisdomForge",
    description:
      "A voluntary tip jar for SMF WisdomForge. Parent-operated philosophy and education outreach for ages 5 to adult. Not tuition, not a product purchase. Materials stay free.",
    url: "/support",
    images: ["/images/wisdomforge-hero.png"],
  },
};

export default function SupportPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-xs font-medium tracking-widest text-accent uppercase">
        Support Us
      </p>
      <h1 className="mt-3 font-display text-4xl text-fg sm:text-5xl">
        Support WisdomForge
      </h1>
      <p className="mt-5 text-lg text-muted">
        WisdomForge is parent-operated, AI-supported outreach: philosophy and
        education for ages 5 to adult. Booklets, audio, and video. The parent is
        the teacher. The materials are free.
      </p>

      <div className="mt-6 rounded-lg border-l-2 border-accent bg-surface p-4 shadow-[var(--shadow-border)]">
        <p className="text-sm text-muted">
          <span className="font-medium text-fg">This is a tip jar.</span> It is
          not tuition. It is not a product purchase. You do not buy a sitting, a
          booklet, or a guide. Materials stay free either way.
        </p>
      </div>

      <a
        href={STRIPE_TIP_JAR_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-4 text-sm font-medium text-accent-fg"
      >
        Leave a voluntary tip
      </a>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-fg">What the work is</h2>
        <p className="mt-4 text-muted">
          A parent in the room. AI-supported research and production under human
          direction. Four age bands: 5–10, 11–14, 15–18, and adult. The booklet
          is the text. The sittings, the library, and the optional Hermes kits
          stay on the open shelf.
        </p>
        <p className="mt-4 text-muted">
          Tips help the slow work behind that shelf: adapting philosophers and
          the canon into age-banded booklets, recording audio, shaping video,
          and keeping a lesson a parent can run tonight.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-fg">Either way</h2>
        <p className="mt-4 text-muted">
          Give if it feels right. Skip it if it does not. The academy stays
          open. The materials remain free.
        </p>
      </section>

      <div className="mt-12 flex flex-col gap-3 border-t border-accent pt-8 sm:flex-row">
        <a
          href={STRIPE_TIP_JAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-4 text-sm font-medium text-accent-fg"
        >
          Open the WisdomForge tip jar
        </a>
        <Link
          href="/start"
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-raised px-4 text-sm font-medium text-fg shadow-[var(--shadow-border)]"
        >
          Start a lesson
        </Link>
      </div>
    </main>
  );
}
