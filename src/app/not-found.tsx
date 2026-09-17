import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="font-display text-3xl text-fg">That page isn’t here yet</h1>
      <p className="mt-3 text-muted">Open a ready lesson, or pick an age.</p>
      <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/start"
          className="inline-flex min-h-11 items-center rounded-md bg-accent px-4 text-sm font-medium text-accent-fg"
        >
          Choose an age
        </Link>
        <Link href="/" className="inline-flex min-h-11 items-center text-accent">
          Back to WisdomForge
        </Link>
      </div>
    </main>
  );
}