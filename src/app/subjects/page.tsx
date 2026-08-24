import Link from "next/link";
import { lessonsBySubject } from "@/lib/curriculum";
import { subjects } from "@/lib/curriculum/subjects";

export default function SubjectsIndex() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="font-display text-4xl text-fg">The academy</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Ten subjects. Autonomous AI is the spine. Every other course practices the same rule: try first, hint second, evaluate always.
      </p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {subjects.map((s) => {
          const ready = lessonsBySubject(s.id).length;
          return (
            <li key={s.id}>
              <Link
                href={`/subjects/${s.id}`}
                className="flex h-full flex-col rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
              >
                <p className="text-xs tracking-wide text-accent uppercase">{s.short}</p>
                <h2 className="mt-2 font-display text-2xl text-fg">{s.name}</h2>
                <p className="mt-2 text-sm text-muted">{s.promise}</p>
                <p className="mt-4 text-sm text-fg">{s.aiSpine}</p>
                <p className="mt-4 text-xs text-faint">
                  {ready} sittings ready · more in the forge
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}