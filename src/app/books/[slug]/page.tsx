import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { books, bookBySlug } from "@/lib/curriculum/books";
import { figureDisplayName } from "@/lib/curriculum/booklets";
import { lessonsBySubject } from "@/lib/curriculum";
import type { BandId } from "@/lib/curriculum/types";

export function generateStaticParams() {
  return books.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then((p) => {
    const book = bookBySlug(p.slug);
    if (!book) return { title: "Book — WisdomForge" };
    return {
      title: `${book.title} — WisdomForge`,
      description: book.summary.slice(0, 160),
    };
  });
}

const CHAPTER_STATUS_LABELS: Record<string, string> = {
  complete: "Complete",
  drafting: "Drafting",
  outlined: "Outlined",
};

const STATUS_STYLES: Record<string, string> = {
  complete: "text-accent",
  drafting: "text-fg",
  outlined: "text-faint",
};

export default async function BookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = bookBySlug(slug);
  if (!book) notFound();

  // Cross-reference academy sittings for this book
  const relatedLessons = book.academySubject && book.academyUnit
    ? lessonsBySubject(book.academySubject).filter((l) => l.unit === book.academyUnit)
    : [];
  const relatedByBand = new Map<BandId, typeof relatedLessons>();
  for (const l of relatedLessons) {
    const list = relatedByBand.get(l.band) ?? [];
    list.push(l);
    relatedByBand.set(l.band, list);
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:py-14">
      <nav className="text-sm text-muted">
        <Link href="/books" className="hover:text-fg">Books</Link>
        <span className="mx-2 text-faint">/</span>
        <span className="text-fg">{book.title}</span>
      </nav>

      {/* Title block — cover + copy */}
      <div className="mt-6 grid gap-8 sm:grid-cols-[minmax(0,14rem)_1fr] sm:items-start">
        {book.coverImage ? (
          <div className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={book.coverImage}
              alt={`${book.title} cover`}
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
        ) : (
          <div className="flex aspect-[3/4] items-end rounded-xl bg-raised p-4 shadow-[var(--shadow-border)]">
            <p className="font-display text-xl text-fg">{book.title}</p>
          </div>
        )}
        <div>
          <p className="text-xs font-medium tracking-widest text-accent uppercase">
            {book.status === "in-production" ? "In production" : "Published"}
          </p>
          <h1 className="mt-2 font-display text-4xl text-fg sm:text-5xl">{book.title}</h1>
          <p className="mt-2 text-lg text-muted">{book.subtitle}</p>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted">{book.summary}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {book.pdfHref ? (
              <a
                href={book.pdfHref}
                download
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-4 text-sm font-medium text-accent-fg"
              >
                Download PDF
              </a>
            ) : null}
            {book.epubHref ? (
              <a
                href={book.epubHref}
                download
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-raised px-4 text-sm font-medium text-fg shadow-[var(--shadow-border)]"
              >
                Download EPUB
              </a>
            ) : null}
            {book.mdHref ? (
              <a
                href={book.mdHref}
                download
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-raised px-4 text-sm font-medium text-fg shadow-[var(--shadow-border)]"
              >
                Download Markdown
              </a>
            ) : null}
            {!book.pdfHref && !book.epubHref && !book.mdHref ? (
              <p className="text-sm text-faint">
                PDF, EPUB, and Markdown will appear here when the manuscript is produced.
              </p>
            ) : null}
            {book.pdfHref && !book.mdHref ? (
              <p className="self-center text-sm text-faint">
                Markdown for a Hermes agent will appear here when produced.
              </p>
            ) : null}
          </div>
        </div>
      </div>

      {/* Editorial principle callout */}
      <div className="mt-6 rounded-lg border-l-2 border-accent bg-surface p-5 shadow-[var(--shadow-border)]">
        <p className="text-xs font-medium tracking-wide text-accent uppercase">
          Editorial principle
        </p>
        <p className="mt-2 font-display text-xl text-fg">{book.editorialPrinciple}</p>
      </div>

      {/* Quick facts */}
      <dl className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg bg-surface p-4 shadow-[var(--shadow-border)]">
          <dt className="text-xs text-faint">Chronology</dt>
          <dd className="mt-1 text-sm text-fg">{book.chronology}</dd>
        </div>
        <div className="rounded-lg bg-surface p-4 shadow-[var(--shadow-border)]">
          <dt className="text-xs text-faint">Length</dt>
          <dd className="mt-1 text-sm text-fg">{book.totalWordTarget}</dd>
        </div>
        <div className="rounded-lg bg-surface p-4 shadow-[var(--shadow-border)]">
          <dt className="text-xs text-faint">Reading time</dt>
          <dd className="mt-1 text-sm text-fg">{book.readingTime}</dd>
        </div>
      </dl>

      {/* Authors */}
      <div className="mt-4 rounded-lg bg-raised p-4 shadow-[var(--shadow-border)]">
        <p className="text-xs text-faint">Authors</p>
        <p className="mt-1 text-sm text-fg">{book.authors.join(" · ")}</p>
      </div>

      {/* The Nine Voices */}
      <section className="mt-12">
        <h2 className="font-display text-3xl text-fg">The voices</h2>
        <p className="mt-2 text-sm text-muted">
          {book.figures.length} figures across {book.chronology}. Each speaks in their own voice, through their own texts.
        </p>
        <ul className="mt-6 space-y-3">
          {book.figures.map((fig) => {
            const displayName = figureDisplayName(fig.slug);
            return (
              <li
                key={fig.slug}
                className="rounded-lg bg-surface p-4 shadow-[var(--shadow-border)]"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl text-fg">{fig.name}</h3>
                  <span className="text-xs text-faint">{fig.dates}</span>
                </div>
                <p className="mt-1 text-xs text-accent">{fig.tradition}</p>
                <p className="mt-2 text-sm text-fg">
                  <span className="text-muted">Core question: </span>{fig.coreQuestion}
                </p>
                <p className="mt-1 text-sm text-muted italic">{fig.distinctiveVoice}</p>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Chapters */}
      <section className="mt-12">
        <h2 className="font-display text-3xl text-fg">Chapters</h2>
        <p className="mt-2 text-sm text-muted">
          {book.chapters.length} chapters. The disagreement is not resolved.
        </p>
        <ol className="mt-6 space-y-4">
          {book.chapters.map((ch) => (
            <li
              key={ch.number}
              className="rounded-lg bg-raised p-5 shadow-[var(--shadow-border)]"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <p className="text-xs text-faint">{ch.label}</p>
                  <h3 className="font-display text-xl text-fg">{ch.title}</h3>
                </div>
                <span className={`text-xs font-medium ${STATUS_STYLES[ch.status] ?? "text-faint"}`}>
                  {CHAPTER_STATUS_LABELS[ch.status] ?? ch.status}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted">{ch.question}</p>
              <p className="mt-3 text-xs text-faint">
                Voices: {ch.voices.map((v) => figureDisplayName(v)).join(" · ")}
                {ch.wordTarget && ch.wordTarget !== "complete" ? ` · ${ch.wordTarget} words` : ""}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Cross-reference to academy sittings */}
      {relatedLessons.length > 0 ? (
        <section className="mt-12 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
          <p className="text-xs font-medium tracking-wide text-accent uppercase">
            Academy sittings
          </p>
          <h2 className="mt-1 font-display text-2xl text-fg">
            {book.sittingsHeading ?? "Study this in the academy"}
          </h2>
          <p className="mt-2 text-sm text-muted">
            {book.sittingsDek ??
              `${relatedLessons.length} sittings. Each has a parent briefing, reading, Try This, and AI lab — shorter entry points for families not ready for the full book.`}
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[...relatedByBand.entries()].map(([band, lessons]) => (
              <div key={band}>
                <h3 className="text-sm font-medium text-fg capitalize">{band}</h3>
                <ul className="mt-2 space-y-1">
                  {lessons.slice(0, 6).map((l) => (
                    <li key={`${l.band}-${l.slug}`}>
                      <Link
                        href={`/learn/${l.band}/${l.subject}/${l.slug}`}
                        className="text-sm text-accent hover:text-fg"
                      >
                        {l.number}. {l.title} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {book.showBooklets !== false ? (
      <section className="mt-6 rounded-lg bg-raised p-5 shadow-[var(--shadow-border)]">
        <p className="text-xs font-medium tracking-wide text-accent uppercase">
          Booklet downloads
        </p>
        <p className="mt-1 text-sm text-muted">
          Each figure has a printable PDF and agent-readable Markdown booklet in four reading levels — elementary, middle, high school, and adult. Adult files are here; the other levels are on the sitting pages.
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          {book.figures.map((fig) => (
            <span key={fig.slug} className="inline-flex flex-wrap gap-2">
              <a
                href={`/downloads/${fig.slug}-adult.pdf`}
                download
                className="inline-flex items-center gap-2 rounded-md bg-bg px-3 py-1.5 text-xs text-fg shadow-[var(--shadow-border)] transition-colors hover:bg-surface"
              >
                {figureDisplayName(fig.slug)} PDF →
              </a>
              <a
                href={`/downloads/${fig.slug}-adult.md`}
                download
                className="inline-flex items-center gap-2 rounded-md bg-bg px-3 py-1.5 text-xs text-fg shadow-[var(--shadow-border)] transition-colors hover:bg-surface"
              >
                Markdown →
              </a>
            </span>
          ))}
        </div>
      </section>
      ) : null}

      {/* Production status note */}
      {book.status === "in-production" ? (
        <div className="mt-8 rounded-lg border-l-2 border-accent bg-surface p-4 shadow-[var(--shadow-border)]">
          <p className="text-sm text-muted">
            <span className="font-medium text-fg">In production.</span>{" "}
            Chapters are being drafted, reviewed, and produced. The manuscript
            will be published as an ebook (EPUB + PDF) when complete.
            {book.audiobookPlanned ? " An audiobook is planned via ElevenLabs." : ""}
          </p>
        </div>
      ) : null}

      {/* Footer nav */}
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/books"
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-raised px-4 text-sm font-medium text-fg shadow-[var(--shadow-border)]"
        >
          All books
        </Link>
        <Link
          href={book.hubHref ?? "/subjects/philosophy"}
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-raised px-4 text-sm font-medium text-fg shadow-[var(--shadow-border)]"
        >
          {book.hubLabel ?? "Philosophy subject hub"}
        </Link>
      </div>
    </main>
  );
}