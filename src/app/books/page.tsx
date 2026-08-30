import Link from "next/link";
import type { Metadata } from "next";
import { books, catalogSubjectOf } from "@/lib/curriculum/books";
import { subjects } from "@/lib/curriculum/subjects";

export const metadata: Metadata = {
  title: "Books — WisdomForge",
  description:
    "Full-length WisdomForge books, grouped the same way as the academy subjects. The arguments are the inheritance, not the conclusions.",
};

function BookCard({ book }: { book: (typeof books)[number] }) {
  return (
    <Link
      href={`/books/${book.slug}`}
      className="block rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex min-w-0 flex-1 gap-4">
          {book.coverImage ? (
            <div className="hidden h-28 w-20 shrink-0 overflow-hidden rounded-md bg-raised shadow-[var(--shadow-border)] sm:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={book.coverImage}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ) : null}
          <div className="min-w-0">
            <h3 className="font-display text-2xl text-fg sm:text-3xl">{book.title}</h3>
            <p className="mt-1 text-lg text-muted">{book.subtitle}</p>
          </div>
        </div>
        <span className="rounded-md bg-raised px-3 py-1.5 text-xs uppercase tracking-wide text-accent shadow-[var(--shadow-border)]">
          {book.status === "in-production" ? "In production" : "Published"}
        </span>
      </div>
      <p className="mt-4 text-sm text-muted">{book.summary}</p>
      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-xs text-faint">
        <span>{book.chronology}</span>
        <span>{book.readingTime}</span>
        <span>{book.chapters.length} chapters</span>
      </div>
    </Link>
  );
}

export default function BooksPage() {
  const sections = subjects
    .map((subject) => ({
      subject,
      items: books.filter((b) => catalogSubjectOf(b) === subject.id),
    }))
    .filter((section) => section.items.length > 0);

  return (
    <main className="mx-auto max-w-4xl px-4 py-14">
      <p className="text-xs font-medium tracking-[0.28em] text-accent uppercase">
        Books
      </p>
      <h1 className="mt-3 font-display text-4xl text-fg sm:text-5xl">
        The longer arguments.
      </h1>
      <p className="mt-5 text-lg text-muted">
        Same subjects as the academy. A book is the longer argument; a sitting is the weeknight path. Empty subjects stay off this page until a title lands.
      </p>

      <div className="mt-6 rounded-lg border-l-2 border-accent bg-surface p-4 shadow-[var(--shadow-border)]">
        <p className="text-sm text-muted">
          <span className="font-medium text-fg">Editorial principle.</span>{" "}
          Show disagreements, not just sequence. The reader is the jury.
        </p>
      </div>

      {sections.map(({ subject, items }) => (
        <section key={subject.id} className="mt-14 border-t border-accent pt-8">
          <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">
            {subject.short}
          </p>
          <div className="mt-2 flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-display text-3xl text-fg">{subject.name}</h2>
            <Link href={`/subjects/${subject.id}`} className="text-sm text-accent hover:text-fg">
              Subject hub →
            </Link>
          </div>
          <p className="mt-2 max-w-2xl text-sm text-muted">{subject.promise}</p>
          <ul className="mt-6 space-y-6">
            {items.map((book) => (
              <li key={book.slug}>
                <BookCard book={book} />
              </li>
            ))}
          </ul>
        </section>
      ))}

      <div className="mt-12 flex flex-col gap-3 border-t border-accent pt-8 sm:flex-row">
        <Link
          href="/subjects"
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-4 text-sm font-medium text-accent-fg"
        >
          All subjects
        </Link>
        <Link
          href="/demos"
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-raised px-4 text-sm font-medium text-fg shadow-[var(--shadow-border)]"
        >
          Session demos
        </Link>
      </div>
    </main>
  );
}
