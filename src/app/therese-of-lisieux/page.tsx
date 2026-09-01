import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thérèse of Lisieux — WisdomForge",
  description:
    "Four age-adapted WisdomForge booklets on Thérèse of Lisieux: the Little Way, a crooked vocation, a night that is not a diagnosis. PDF and Markdown. No EPUB.",
};

const bands = [
  {
    level: "elementary",
    ages: "Ages 5–10",
    label: "Little Thinkers",
    title: "The Girl Who Took the Elevator",
    pages: 21,
    description:
      "Six stories about Thérèse Martin of Lisieux. Words she really wrote, a big idea, something to try, and a question to ask a grown-up. Darkness is named; roses are not oracles.",
  },
  {
    level: "middle",
    ages: "Ages 11–14",
    label: "Young Minds",
    title: "Too Little for the Stairs",
    pages: 23,
    description:
      "A short cloistered life and a book people still argue with. Six chapters on Rome, the Little Way as grace, a difficult sister, dry prayer, offering without calling pain a prize, and a hidden heart.",
  },
  {
    level: "high",
    ages: "Ages 15–18",
    label: "Emerging Adults",
    title: "Grace Against the Scoreboard",
    pages: 18,
    description:
      "An argument, not a holy card. Anti-Pelagian theology, ordinary life as content, night without a diagnosis, holocaust language named as a problem, editors after death.",
  },
  {
    level: "adult",
    ages: "Adult",
    label: "Lifelong Learners",
    title: "Mercy After the Editors",
    pages: 19,
    description:
      "Notebooks, not kitsch. Sources after About WisdomForge. Night is not depression. Offering is not harm-is-good. No mascot.",
  },
] as const;

const spine = [
  { n: 1, title: "Rome and a crooked yes", note: "Leo XIII, a bishop, a prioress — desire plus offices plus cost" },
  { n: 2, title: "The elevator, not the stairs", note: "The Little Way as received love, not a beginner track" },
  { n: 3, title: "A smile she did not feel", note: "Ordinary life in a hallway of twenty-five desks" },
  { n: 4, title: "When God feels absent", note: "Dry prayer and a longer night — not a diagnosis" },
  { n: 5, title: "Offering without calling pain a prize", note: "Act of Oblation, infirmary, the abuse problem named" },
  { n: 6, title: "Hidden love, a public book", note: "I shall be Love — then the editors" },
] as const;

export default function ThereseOfLisieuxPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-xs font-medium tracking-[0.28em] text-accent uppercase">Booklet</p>
      <h1 className="mt-3 font-display text-4xl text-fg sm:text-5xl">Thérèse of Lisieux</h1>
      <p className="mt-5 text-lg text-muted">
        Marie-Françoise-Thérèse Martin — born Alençon 1873, Carmelite of Lisieux at fifteen,
        dead of tuberculosis at twenty-four. She asked a pope. She wrote under obedience.
        She said she would be love in the heart of the Church. Later people called her the
        Little Flower. That name can sound like a sticker. These booklets are not sticker books.
      </p>
      <p className="mt-4 text-muted">
        Four booklets, one figure. PDF and Markdown for a parent or a Hermes agent. No EPUB.
        Night is not treated as depression. Offering is not treated as harm-is-good. Academy
        sittings for this figure are not on the site yet.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-fg">The four bands</h2>
        <ul className="mt-6 space-y-8">
          {bands.map((band) => (
            <li key={band.level} className="border-t border-accent pt-6">
              <div className="grid gap-6 sm:grid-cols-[7.5rem_1fr] sm:items-start">
                <div className="overflow-hidden rounded-md bg-raised shadow-[var(--shadow-border)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/booklets/therese-of-lisieux-${band.level}-cover.png`}
                    alt=""
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">
                    {band.label} · {band.ages}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-fg">{band.title}</h3>
                  <p className="mt-2 text-sm text-muted">{band.description}</p>
                  <p className="mt-2 text-xs text-faint">{band.pages} pages · illustrated PDF</p>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={`/downloads/therese-of-lisieux-${band.level}.pdf`}
                      download
                      className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-4 text-sm font-medium text-accent-fg"
                    >
                      Download PDF
                    </a>
                    <a
                      href={`/downloads/therese-of-lisieux-${band.level}.md`}
                      download
                      className="inline-flex min-h-11 items-center justify-center rounded-md bg-raised px-4 text-sm font-medium text-fg shadow-[var(--shadow-border)]"
                    >
                      Download Markdown
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl text-fg">Six chapters, four depths</h2>
        <p className="mt-3 text-muted">
          Each band covers the same map. Vocabulary and pressure change. The elementary
          booklet tells stories. The middle booklet explains. The high booklet argues.
          The adult booklet takes the scholarly fights and the sources.
        </p>
        <ol className="mt-6 space-y-5">
          {spine.map((ch) => (
            <li key={ch.n} className="border-t border-accent pt-5">
              <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">
                Chapter {String(ch.n).padStart(2, "0")}
              </p>
              <p className="mt-1 font-display text-xl text-fg">{ch.title}</p>
              <p className="mt-1 text-sm text-muted">{ch.note}</p>
            </li>
          ))}
        </ol>
      </section>

      <p className="mt-12 text-sm text-faint">
        Quotes from Clarke’s ICS 1996 <em>Story of a Soul</em> (Manuscripts A, B, C), the{" "}
        Act of Oblation of 9 June 1895, and Leo XIII as she narrates Rome. No invented rose
        oracles. No payment CTA. Not a hosted kids chatbot. Does not make AI safe.
      </p>

      <p className="mt-6 text-sm text-muted">
        <Link href="/books" className="text-accent hover:text-fg">
          Books
        </Link>
        <span className="mx-2 text-faint">·</span>
        <Link href="/library" className="text-accent hover:text-fg">
          Repository
        </Link>
        <span className="mx-2 text-faint">·</span>
        <Link href="/method" className="text-accent hover:text-fg">
          The method
        </Link>
      </p>
    </main>
  );
}
