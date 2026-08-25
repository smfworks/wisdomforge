"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { catalog } from "@/lib/curriculum/catalog";
import { subjects, subjectById } from "@/lib/curriculum/subjects";
import { bands } from "@/lib/curriculum/bands";
import { firstLesson } from "@/lib/curriculum";
import type { BandId, SubjectId } from "@/lib/curriculum/types";

export default function Library() {
  const [subjectFilter, setSubjectFilter] = useState<SubjectId | "all">("all");
  const [bandFilter, setBandFilter] = useState<BandId | "all">("all");
  const [search, setSearch] = useState("");

  const ready = catalog.filter((c) => c.status === "ready").length;
  const forge = catalog.filter((c) => c.status === "in-forge").length;

  const filtered = useMemo(() => {
    return catalog.filter((u) => {
      if (subjectFilter !== "all" && u.subject !== subjectFilter) return false;
      if (bandFilter !== "all" && !u.bands.includes(bandFilter)) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        const s = subjectById(u.subject);
        const haystack = `${u.title} ${u.blurb} ${s?.name ?? ""}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [subjectFilter, bandFilter, search]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="font-display text-4xl text-fg">The repository</h1>
      <p className="mt-3 max-w-2xl text-muted">
        An expanding library of units. Ready means a parent can run the sitting tonight. In the forge means the catalog is honest about what is still being written.
      </p>
      <p className="mt-4 text-sm text-faint">
        {ready} ready · {forge} in the forge
      </p>

      {/* Subject filter chips */}
      <div className="mt-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setSubjectFilter("all")}
          className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
            subjectFilter === "all"
              ? "bg-accent text-accent-fg font-medium"
              : "bg-raised text-muted shadow-[var(--shadow-border)] hover:text-fg"
          }`}
        >
          All subjects
        </button>
        {subjects.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setSubjectFilter(s.id)}
            className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
              subjectFilter === s.id
                ? "bg-accent text-accent-fg font-medium"
                : "bg-raised text-muted shadow-[var(--shadow-border)] hover:text-fg"
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      {/* Band filter chips */}
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setBandFilter("all")}
          className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
            bandFilter === "all"
              ? "bg-accent text-accent-fg font-medium"
              : "bg-raised text-muted shadow-[var(--shadow-border)] hover:text-fg"
          }`}
        >
          All bands
        </button>
        {bands.map((b) => (
          <button
            key={b.id}
            type="button"
            onClick={() => setBandFilter(b.id)}
            className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
              bandFilter === b.id
                ? "bg-accent text-accent-fg font-medium"
                : "bg-raised text-muted shadow-[var(--shadow-border)] hover:text-fg"
            }`}
          >
            {b.name}
          </button>
        ))}
      </div>

      {/* Search input */}
      <div className="mt-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search units by title, blurb, or subject"
          className="w-full max-w-md rounded-md bg-bg px-4 py-2.5 text-sm text-fg shadow-[var(--shadow-border)] placeholder:text-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      {/* Results count */}
      <p className="mt-4 text-sm text-faint">
        {filtered.length} {filtered.length === 1 ? "unit" : "units"}
        {subjectFilter !== "all" || bandFilter !== "all" || search.trim() ? " match" : " total"}
      </p>

      {/* Unit list */}
      {filtered.length === 0 ? (
        <div className="mt-10 rounded-xl bg-surface p-8 text-center shadow-[var(--shadow-border)]">
          <p className="text-muted">No units match those filters.</p>
          <button
            type="button"
            onClick={() => {
              setSubjectFilter("all");
              setBandFilter("all");
              setSearch("");
            }}
            className="mt-3 text-sm text-accent hover:text-fg"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <ul className="mt-6 divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]">
          {filtered.map((u) => {
            const s = subjectById(u.subject);
            const activeBand = bandFilter !== "all" ? bandFilter : u.bands[0];
            const first = activeBand ? firstLesson(activeBand, u.subject) : undefined;
            return (
              <li key={u.id} className="px-4 py-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <p className="text-xs text-faint">{s?.name}</p>
                    <h2 className="font-display text-xl text-fg">{u.title}</h2>
                  </div>
                  <span className="text-xs tracking-wide text-accent uppercase">
                    {u.status === "ready" ? "Ready" : "In the forge"}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted">{u.blurb}</p>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <p className="text-xs text-faint">
                    {u.weeks} · {u.bands.join(" · ")}
                  </p>
                  {u.status === "ready" && first ? (
                    <Link
                      href={`/learn/${first.band}/${first.subject}/${first.slug}`}
                      className="text-sm text-accent hover:text-fg"
                    >
                      First sitting: {first.title} →
                    </Link>
                  ) : u.status === "ready" ? (
                    <Link
                      href={`/subjects/${u.subject}`}
                      className="text-sm text-accent hover:text-fg"
                    >
                      Open {s?.name} →
                    </Link>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}