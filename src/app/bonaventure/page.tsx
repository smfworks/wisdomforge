import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bonaventure — WisdomForge",
  description:
    "Four age-adapted WisdomForge booklets on Bonaventure: Franciscan teacher, the six-wing map, the world as a book of signs. PDF and Markdown. No EPUB.",
};

const bands = [
  {
    level: "elementary",
    ages: "Ages 5–10",
    label: "Little Thinkers",
    title: "The Map of Six Wings",
    pages: 22,
    description:
      "Six stories about Giovanni of Bagnoregio, who became Bonaventure. Words he really wrote, a big idea, something to try, and a question to ask a grown-up. Late stories are labeled uncertain.",
  },
  {
    level: "middle",
    ages: "Ages 11–14",
    label: "Young Minds",
    title: "The Ladder and the House",
    pages: 23,
    description:
      "A mystic and a schoolman at once. Six chapters on Paris, La Verna, vestiges, illumination, a divided Order, and leading the arts home.",
  },
  {
    level: "high",
    ages: "Ages 15–18",
    label: "Emerging Adults",
    title: "Through the Crucified, or Not at All",
    pages: 21,
    description:
      "An argument, not a holy card. Cousins’s Itinerarium as the spine; Hayes on the reduction of the arts; Hexaëmeron 1.11 as the Christ-center sentence.",
  },
  {
    level: "adult",
    ages: "Adult",
    label: "Lifelong Learners",
    title: "The Hidden Center",
    pages: 23,
    description:
      "Hayes’s phrase: Christ as hidden center. Sources after About WisdomForge. Poverty as holiness and as civil war. No mascot.",
  },
] as const;

const spine = [
  { n: 1, title: "The making of a Franciscan teacher", note: "Bagnoregio, Paris, the chair beside Aquinas" },
  { n: 2, title: "Six wings on La Verna", note: "The Itinerarium as a map, not a side door" },
  { n: 3, title: "The world is a book, not God", note: "Vestige, image, likeness — against plunder and pantheism" },
  { n: 4, title: "Borrowed light", note: "Illumination, certainty, and the argument with Aquinas" },
  { n: 5, title: "A divided house", note: "Official Francis, legal poverty, Spirituals" },
  { n: 6, title: "Lead the arts home", note: "Reduction of the arts, Mary and Martha, Lyon" },
] as const;

export default function BonaventurePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-xs font-medium tracking-[0.28em] text-accent uppercase">Booklet</p>
      <h1 className="mt-3 font-display text-4xl text-fg sm:text-5xl">Bonaventure</h1>
      <p className="mt-5 text-lg text-muted">
        Giovanni di Fidanza of Bagnoregio — Franciscan, Paris master, Minister General,
        cardinal, dead at the Second Council of Lyon in 1274. He wrote the soul’s journey
        into God on La Verna. He wrote an official life of Francis. He said the world is a
        book of signs, and that it is not God.
      </p>
      <p className="mt-4 text-muted">
        Four booklets, one figure. PDF and Markdown for a parent or a Hermes agent. No EPUB.
        Childhood healing, the dishwashing cardinal, and other late stories stay labeled
        uncertain. Academy sittings for this figure are not on the site yet.
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
                    src={`/images/booklets/bonaventure-${band.level}-cover.png`}
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
                      href={`/downloads/bonaventure-${band.level}.pdf`}
                      download
                      className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-4 text-sm font-medium text-accent-fg"
                    >
                      Download PDF
                    </a>
                    <a
                      href={`/downloads/bonaventure-${band.level}.md`}
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
        Quotes from Cousins’s <em>Itinerarium</em> (prol. 1, 3, 4, 1.2, 7.6), the{" "}
        <em>Hexaëmeron</em> 1.11, and Hayes on <em>De reductione</em>. No payment CTA.
        Not a hosted kids chatbot. Does not make AI safe.
      </p>

      <p className="mt-6 text-sm text-muted">
        <Link href="/books" className="text-accent hover:text-fg">
          Books
        </Link>
        <span className="mx-2 text-faint">·</span>
        <Link href="/library" className="text-accent hover:text-fg">
          Library
        </Link>
        <span className="mx-2 text-faint">·</span>
        <Link href="/method" className="text-accent hover:text-fg">
          The method
        </Link>
      </p>
    </main>
  );
}
