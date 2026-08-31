import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:justify-between">
        <div>
          <p className="font-display text-lg text-fg">WisdomForge</p>
          <p className="mt-2 max-w-sm text-sm text-muted">
            A parent-operated academy for the age of AI. The booklet is the text. The parent is the teacher. The guide, if any, has tools turned off.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
          <Link href="/about" className="min-h-11 py-2 text-muted hover:text-fg">
            About
          </Link>
          <Link href="/method" className="min-h-11 py-2 text-muted hover:text-fg">
            The method
          </Link>
          <Link href="/hermes" className="min-h-11 py-2 text-muted hover:text-fg">
            Hermes kits
          </Link>
          <Link href="/parents" className="min-h-11 py-2 text-muted hover:text-fg">
            For parents
          </Link>
          <Link href="/library" className="min-h-11 py-2 text-muted hover:text-fg">
            Repository
          </Link>
          <Link href="/progress" className="min-h-11 py-2 text-muted hover:text-fg">
            Progress
          </Link>
          <a
            href="https://smfwisdomforge.com"
            className="min-h-11 py-2 text-muted hover:text-fg"
            rel="noreferrer"
            target="_blank"
          >
            Original library
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-faint">
          Not a hosted kids chatbot. Does not make AI safe.{" "}
          <Link href="/about" className="text-muted hover:text-fg">
            About the team
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}