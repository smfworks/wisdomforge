"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { catalog, lessonsBySubject, subjectById } from "@/lib/curriculum";
import { bands } from "@/lib/curriculum/bands";
import { SUBJECT_IDS } from "@/lib/curriculum/types";
import { useForge } from "@/lib/progress";
import { useHydrated } from "@/lib/use-hydrated";

export default function SubjectHub() {
  const params = useParams<{ subject: string }>();
  const subject = params.subject;
  const def = subjectById(subject);
  if (!def || !SUBJECT_IDS.includes(def.id)) notFound();

  const familyBand = useForge((s) => s.band);
  const hydrated = useHydrated();
  const units = catalog.filter((c) => c.subject === def.id);

  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <p className="text-xs font-medium tracking-widest text-accent uppercase">{def.short}</p>
      <h1 className="mt-3 font-display text-4xl text-fg sm:text-5xl">{def.name}</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">{def.promise}</p>
      <p className="mt-4 max-w-2xl text-sm text-fg">{def.aiSpine}</p>

      <h2 className="mt-12 font-display text-2xl text-fg">Repository</h2>
      <ul className="mt-4 divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]">
        {units.map((u) => (
          <li key={u.id} className="px-4 py-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-medium text-fg">{u.title}</h3>
              <span className="text-xs text-accent">
                {u.status === "ready" ? "Ready" : "In the forge"}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted">{u.blurb}</p>
            <p className="mt-2 text-xs text-faint">
              {u.weeks} · {u.bands.join(" · ")}
            </p>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 font-display text-2xl text-fg">Open a sitting</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {bands.map((b) => {
          const list = lessonsBySubject(def.id, b.id);
          return (
            <section key={b.id} className="rounded-xl bg-raised p-4 shadow-[var(--shadow-border)]">
              <h3 className="font-display text-xl text-fg">
                {b.name}
                <span className="ml-2 text-sm font-sans font-normal text-faint">{b.ages}</span>
              </h3>
              {list.length === 0 ? (
                <p className="mt-3 text-sm text-muted">In the forge for this band.</p>
              ) : (
                <ul className="mt-3 space-y-2">
                  {list.map((l) => (
                    <li key={l.slug}>
                      <Link
                        href={`/learn/${l.band}/${l.subject}/${l.slug}`}
                        className="text-sm text-fg hover:text-accent"
                      >
                        {l.number}. {l.title}
                        {hydrated && familyBand === b.id ? " · your band" : ""}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>
    </main>
  );
}