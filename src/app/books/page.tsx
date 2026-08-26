import Link from "next/link";
import type { Metadata } from "next";
import { books } from "@/lib/curriculum/books";
import { figureDisplayName } from "@/lib/curriculum/booklets";

export const metadata: Metadata = {
  title: "Books — WisdomForge",
  description:
    "Full-length WisdomForge books — multi-chapter manuscripts that gather the great voices around living questions. The arguments are the inheritance, not the conclusions.",
};

export default function BooksPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-14">
      <p className="text-xs font-medium tracking-widest text-accent uppercase">
        Books
      </p>
      <h1 className="mt-3 font-display text-4xl text-fg sm:text-5xl">
        The longer arguments.
      </h1>
      <p className="mt-5 text-lg text-muted">
        WisdomForge books are multi-chapter manuscripts that gather the great
        voices around a single question and let them disagree. They are not
        summaries of what was believed. They are reconstructions of the
        conversations that shaped Western thought — and the questions that are
        still open.
      </p>

      <div className="mt-6 rounded-lg border-l-2 border-accent bg-surface p-4 shadow-[var(--shadow-border)]">
        <p className="text-sm text-muted">
          <span className="font-medium text-fg">Editorial principle.</span>{" "}
          Show disagreements, not just sequence. The reader is the jury.
        </p>
      </div>

      <ul className="mt-10 space-y-6">
        {books.map((book) => (
          <li key={book.slug}>
            <Link
              href={`/books/${book.slug}`}
              className="block rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="font-display text-3xl text-fg">{book.title}</h2>
                <span className="rounded-md bg-raised px-3 py-1.5 text-xs uppercase tracking-wide text-accent shadow-[var(--shadow-border)]">
                  {book.status === "in-production" ? "In production" : "Published"}
                </span>
              </div>
              <p className="mt-1 text-lg text-muted">{book.subtitle}</p>
              <p className="mt-4 text-sm text-muted">{book.summary}</p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-xs text-faint">
                <span>{book.chronology}</span>
                <span>{book.totalWordTarget}</span>
                <span>{book.readingTime}</span>
                <span>{book.figures.length} figures</span>
                <span>{book.chapters.length} chapters</span>
              </div>
              {book.audiobookPlanned ? (
                <p className="mt-3 text-xs text-accent">Audiobook planned</p>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/subjects/philosophy"
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-4 text-sm font-medium text-accent-fg"
        >
          Philosophy sittings
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