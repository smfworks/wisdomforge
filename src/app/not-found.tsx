import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="font-display text-3xl text-fg">That page isn’t here yet</h1>
      <p className="mt-3 text-muted">Open a ready sitting from the academy, or start with an age.</p>
      <Link href="/" className="mt-6 inline-flex min-h-11 items-center text-accent">
        Back to WisdomForge
      </Link>
    </main>
  );
}