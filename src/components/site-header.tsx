"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { bands } from "@/lib/curriculum/bands";
import { useForge } from "@/lib/progress";
import { useHydrated } from "@/lib/use-hydrated";
import { cn } from "@/lib/utils";

const links = [
  { href: "/start", label: "Start a sitting" },
  { href: "/subjects", label: "Subjects" },
  { href: "/library", label: "Repository" },
  { href: "/demos", label: "Demos" },
  { href: "/books", label: "Books" },
  { href: "/method", label: "The method" },
  { href: "/hermes", label: "Hermes" },
] as const;

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const hydrated = useHydrated();
  const band = useForge((s) => s.band);
  const bandDef = hydrated ? bands.find((b) => b.id === band) : undefined;

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/92 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex min-h-11 items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex size-8 items-end justify-center rounded-sm bg-raised pb-1 shadow-[var(--shadow-border)]" aria-hidden>
            <span className="block h-3 w-5 rounded-sm bg-accent" />
          </span>
          <span className="font-display text-lg tracking-tight text-fg">WisdomForge</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm text-muted transition-colors duration-150 hover:text-fg",
                pathname === l.href && "text-fg",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {bandDef ? (
            <Link
              href={`/ages/${bandDef.id}`}
              className="hidden min-h-10 items-center rounded-md px-3 text-xs text-muted shadow-[var(--shadow-border)] sm:inline-flex"
            >
              {bandDef.ages} · {bandDef.name}
            </Link>
          ) : (
            <Link
              href="/start"
              className="hidden min-h-10 items-center rounded-md bg-accent px-3 text-sm font-medium text-accent-fg sm:inline-flex"
            >
              Choose a band
            </Link>
          )}
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-fg lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border px-4 py-3 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex min-h-11 items-center text-base text-fg"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/parents" className="flex min-h-11 items-center text-base text-fg" onClick={() => setOpen(false)}>
              For parents
            </Link>
            <Link href="/parents/control-plane" className="flex min-h-11 items-center pl-4 text-base text-muted" onClick={() => setOpen(false)}>
              Control-plane checklist
            </Link>
            <Link href="/demos" className="flex min-h-11 items-center text-base text-fg" onClick={() => setOpen(false)}>
              Demos
            </Link>
            <Link href="/books" className="flex min-h-11 items-center text-base text-fg" onClick={() => setOpen(false)}>
              Books
            </Link>
            <Link href="/progress" className="flex min-h-11 items-center text-base text-fg" onClick={() => setOpen(false)}>
              Family progress
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}