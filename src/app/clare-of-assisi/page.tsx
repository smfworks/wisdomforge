import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clare of Assisi — WisdomForge by Aiona Edge",
  description:
    "Four age-adapted WisdomForge booklets on Clare of Assisi: the first Rule by a woman for women, the Privilege of Poverty, the pyx at the gate. PDF and Markdown. No EPUB. Adapted by Aiona Edge.",
  openGraph: {
    title: "Clare of Assisi — WisdomForge by Aiona Edge",
    description: "Four free booklets on Clare of Assisi. PDF and Markdown. No purchase.",
  },
};

const bands = [
  {
    level: "elementary",
    ages: "Ages 5–10",
    label: "Little Thinkers",
    title: "The Girl Who Chose to Own Nothing",
    pages: 23,
    description:
      "Palm Sunday night, a house that owns nothing, a small box at the gate. Real sentences Clare wrote, a big idea, something to try, and a question for a grown-up.",
  },
  {
    level: "middle",
    ages: "Ages 11–14",
    label: "Young Minds",
    title: "The Privilege of Having Nothing",
    pages: 26,
    description:
      "Class and tonsure, poverty as capacity, enclosure, the mirror letters, 1240, the kiss of the Rule. Tables and Talk About It. Pyx, not monstrance.",
  },
  {
    level: "high",
    ages: "Ages 15–18",
    label: "Emerging Adults",
    title: "First Rule, Forty-Year No",
    pages: 31,
    description:
      "An argument, not a holy card. Lateran IV, Hugolino, Innocent’s trust paper, Mooney’s middle on the letters. You are the jury.",
  },
  {
    level: "adult",
    ages: "Adult",
    label: "Lifelong Learners",
    title: "The Legal Right to Own Nothing",
    pages: 31,
    description:
      "Legislator, correspondent, ill abbess. Privilege as theology. Authorship flagged. 1240 underdetermined. Sources after About WisdomForge.",
  },
] as const;

const spine = [
  { n: 1, title: "Palm Sunday night / legal tonsure", note: "Class, hair, altar — vocation and strategy" },
  { n: 2, title: "Privilege of Poverty", note: "Nothing, in themselves or through others" },
  { n: 3, title: "San Damiano / enclosure", note: "Attention, illness, twenty-seven years of government" },
  { n: 4, title: "Mirror method", note: "Gaze, consider, contemplate, imitate — letters to Agnes" },
  { n: 5, title: "1240 pyx at the gate", note: "Not a monstrance. Mechanism left open." },
  { n: 6, title: "Deathbed Rule / kiss", note: "9 August 1253, then the afterlife of the text" },
] as const;

export default function ClareOfAssisiPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-xs font-medium tracking-[0.28em] text-accent uppercase">Booklet</p>
      <h1 className="mt-3 font-display text-4xl text-fg sm:text-5xl">Clare of Assisi</h1>
      <p className="mt-5 text-lg text-muted">
        Clare Offreduccio, 1194–1253. First religious Rule written by a woman for women in
        the Western Church. Forty years of no to safer papers. Not a second Francis.
      </p>
      <p className="mt-4 text-muted">
        Four booklets, one figure. PDF and Markdown for a parent or a Hermes agent. No EPUB.
        The Peace Prayer is not hers. Academy sittings for this figure are not on the site.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-fg">The four bands</h2>
        <ul className="mt-6 space-y-8">
          {bands.map((band) => (
            <li key={band.level} className="border-t border-accent pt-6">
              <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">
                {band.label} · {band.ages}
              </p>
              <h3 className="mt-2 font-display text-2xl text-fg">{band.title}</h3>
              <p className="mt-2 text-sm text-muted">{band.description}</p>
              <p className="mt-2 text-xs text-faint">{band.pages} pages · illustrated PDF</p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`/downloads/clare-of-assisi-${band.level}.pdf`}
                  download
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-4 text-sm font-medium text-accent-fg"
                >
                  Download PDF
                </a>
                <a
                  href={`/downloads/clare-of-assisi-${band.level}.md`}
                  download
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-raised px-4 text-sm font-medium text-fg shadow-[var(--shadow-border)]"
                >
                  Download Markdown
                </a>
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
        Adapted by Aiona Edge. Quotes from Armstrong and Brady, Mueller 2001/2010, Mooney
        2018. Pyx, not monstrance. No payment CTA. Not a hosted kids chatbot. Does not make
        AI safe.
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
