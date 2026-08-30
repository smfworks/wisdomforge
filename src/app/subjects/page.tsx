import Link from "next/link";
import { lessonsBySubject } from "@/lib/curriculum";
import { subjects } from "@/lib/curriculum/subjects";

export default function SubjectsIndex() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-14">
      <p className="text-xs font-medium tracking-[0.28em] text-accent uppercase">Subjects</p>
      <h1 className="mt-3 font-display text-4xl text-fg sm:text-5xl">The academy</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Ten subjects. Autonomous AI is the spine. Every other course practices the same rule: try first, hint second, evaluate always.
      </p>
      <ul className="mt-12">
        {subjects.map((s) => {
          const ready = lessonsBySubject(s.id).length;
          return (
            <li key={s.id} className="border-t border-accent">
              <Link
                href={`/subjects/${s.id}`}
                className="grid gap-2 py-7 sm:grid-cols-[8rem_1fr] sm:items-start sm:gap-8"
              >
                <p className="text-xs tracking-[0.18em] text-accent uppercase">{s.short}</p>
                <div>
                  <h2 className="font-display text-2xl text-fg">{s.name}</h2>
                  <p className="mt-2 text-sm text-muted">{s.promise}</p>
                  <p className="mt-3 text-sm text-fg">{s.aiSpine}</p>
                  <p className="mt-3 text-xs text-faint">
                    {ready} sittings ready · more in the forge
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
