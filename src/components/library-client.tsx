"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { CatalogUnit, SubjectId, BandId } from "@/lib/curriculum/types";
import { cn } from "@/lib/utils";

type SubjectInfo = { id: SubjectId; name: string; short: string };
type BandInfo = { id: BandId; name: string; ages: string };

type Props = {
  units: CatalogUnit[];
  subjects: SubjectInfo[];
  bands: BandInfo[];
};

type StatusFilter = "all" | "ready" | "forge";

export default function LibraryClient({ units, subjects, bands }: Props) {
  const [query, setQuery] = useState("");
  const [subjectFilter, setSubjectFilter] = useState<SubjectId | "all">("all");
  const [bandFilter, setBandFilter] = useState<BandId | "all">("all");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return units.filter((u) => {
      if (subjectFilter !== "all" && u.subject !== subjectFilter) return false;
      if (bandFilter !== "all" && !u.bands.includes(bandFilter)) return false;
      if (statusFilter === "ready" && u.status !== "ready") return false;
      if (statusFilter === "forge" && u.status !== "in-forge") return false;
      if (q) {
        const subjName = subjects.find((s) => s.id === u.subject)?.name ?? u.subject;
        const hay = `${u.title} ${u.blurb} ${subjName}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [units, query, subjectFilter, bandFilter, statusFilter, subjects]);

  const activeCount =
    (subjectFilter !== "all" ? 1 : 0) +
    (bandFilter !== "all" ? 1 : 0) +
    (statusFilter !== "all" ? 1 : 0) +
    (query.trim() ? 1 : 0);

  function clearAll() {
    setQuery("");
    setSubjectFilter("all");
    setBandFilter("all");
    setStatusFilter("all");
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="font-display text-4xl text-fg">The repository</h1>
      <p className="mt-3 max-w-2xl text-muted">
        An expanding library of units. Ready means a parent can run the sitting tonight. In the forge means the catalog is honest about what is still being written.
      </p>

      {/* Search + filters */}
      <div className="mt-8 space-y-4">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the repository..."
            aria-label="Search units"
            className="min-h-12 w-full rounded-lg bg-surface px-4 py-3 pl-11 text-sm text-fg shadow-[var(--shadow-border)] placeholder:text-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
          <svg
            className="pointer-events-none absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-faint"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <circle cx="11" cy="11" r="8" />
            <path strokeLinecap="round" d="m21 21-4.3-4.3" />
          </svg>
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-faint hover:text-fg"
              aria-label="Clear search"
            >
              <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          ) : null}
        </div>

        {/* Subject chips */}
        <div>
          <p className="mb-2 text-xs font-medium tracking-wide text-faint uppercase">Subject</p>
          <div className="flex flex-wrap gap-2">
            <Chip active={subjectFilter === "all"} onClick={() => setSubjectFilter("all")}>
              All
            </Chip>
            {subjects.map((s) => (
              <Chip key={s.id} active={subjectFilter === s.id} onClick={() => setSubjectFilter(s.id)}>
                {s.name}
              </Chip>
            ))}
          </div>
        </div>

        {/* Band chips */}
        <div>
          <p className="mb-2 text-xs font-medium tracking-wide text-faint uppercase">Age band</p>
          <div className="flex flex-wrap gap-2">
            <Chip active={bandFilter === "all"} onClick={() => setBandFilter("all")}>
              All
            </Chip>
            {bands.map((b) => (
              <Chip key={b.id} active={bandFilter === b.id} onClick={() => setBandFilter(b.id)}>
                {b.name} <span className="text-faint">· {b.ages}</span>
              </Chip>
            ))}
          </div>
        </div>

        {/* Status chips */}
        <div>
          <p className="mb-2 text-xs font-medium tracking-wide text-faint uppercase">Status</p>
          <div className="flex flex-wrap gap-2">
            <Chip active={statusFilter === "all"} onClick={() => setStatusFilter("all")}>All</Chip>
            <Chip active={statusFilter === "ready"} onClick={() => setStatusFilter("ready")}>Ready</Chip>
            <Chip active={statusFilter === "forge"} onClick={() => setStatusFilter("forge")}>In the forge</Chip>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="mt-6 flex items-center justify-between gap-3">
        <p className="text-sm text-muted">
          {filtered.length} {filtered.length === 1 ? "unit" : "units"}
          {activeCount > 0 ? ` · ${activeCount} filter${activeCount > 1 ? "s" : ""} active` : ""}
        </p>
        {activeCount > 0 ? (
          <button
            type="button"
            onClick={clearAll}
            className="text-sm text-accent hover:text-fg"
          >
            Clear filters
          </button>
        ) : null}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="mt-10 rounded-xl bg-surface p-8 text-center shadow-[var(--shadow-border)]">
          <p className="text-muted">No units match those filters.</p>
          {activeCount > 0 ? (
            <button
              type="button"
              onClick={clearAll}
              className="mt-4 text-sm text-accent hover:text-fg"
            >
              Clear all filters
            </button>
          ) : null}
        </div>
      ) : (
        <ul className="mt-6 divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]">
          {filtered.map((u) => {
            const s = subjects.find((su) => su.id === u.subject);
            return (
              <li key={u.id} className="px-4 py-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <p className="text-xs text-faint">{s?.name}</p>
                    <h2 className="font-display text-xl text-fg">{u.title}</h2>
                  </div>
                  <span
                    className={cn(
                      "text-xs tracking-wide uppercase",
                      u.status === "ready" ? "text-accent" : "text-faint",
                    )}
                  >
                    {u.status === "ready" ? "Ready" : "In the forge"}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted">{u.blurb}</p>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-faint">
                  <span>{u.weeks}</span>
                  <span aria-hidden>·</span>
                  <span>
                    {u.bands.map((b) => bands.find((bi) => bi.id === b)?.name ?? b).join(" · ")}
                  </span>
                </div>
                {u.status === "ready" ? (
                  <Link
                    href={`/subjects/${u.subject}`}
                    className="mt-3 inline-flex min-h-11 items-center text-sm text-accent"
                  >
                    Open {s?.name}
                  </Link>
                ) : null}
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "min-h-9 rounded-full px-3.5 py-1.5 text-sm transition-colors duration-150",
        active
          ? "bg-accent text-accent-fg font-medium"
          : "bg-raised text-muted shadow-[var(--shadow-border)] hover:text-fg hover:shadow-[var(--shadow-border-hover)]",
      )}
    >
      {children}
    </button>
  );
}