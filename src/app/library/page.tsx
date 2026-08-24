import Link from "next/link";
import { catalog } from "@/lib/curriculum/catalog";
import { subjectById } from "@/lib/curriculum/subjects";

export default function Library() {
  const ready = catalog.filter((c) => c.status === "ready").length;
  const forge = catalog.filter((c) => c.status === "in-forge").length;

  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="font-display text-4xl text-fg">The repository</h1>
      <p className="mt-3 max-w-2xl text-muted">
        An expanding library of units. Ready means a parent can run the sitting tonight. In the forge means the catalog is honest about what is still being written.
      </p>
      <p className="mt-4 text-sm text-faint">
        {ready} ready · {forge} in the forge
      </p>
      <ul className="mt-10 divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]">
        {catalog.map((u) => {
          const s = subjectById(u.subject);
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
              <p className="mt-2 text-xs text-faint">
                {u.weeks} · {u.bands.join(" · ")}
              </p>
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
    </main>
  );
}