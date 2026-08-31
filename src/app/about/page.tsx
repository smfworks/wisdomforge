import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — WisdomForge",
  description:
    "WisdomForge is the brainchild of Aiona Edge and Michael Gannotti. A Hermes AI team builds the academy under their direction and oversight.",
};

const team = [
  {
    name: "Michael Gannotti",
    role: "Founder",
    does: "Direction and oversight. He names the work, holds the bar, and is the person you write to.",
  },
  {
    name: "Aiona Edge",
    role: "CIO · Chief AI Research Scientist",
    does: "Strategy, pedagogy, gold-gate. Nothing ships to the site without her approval.",
  },
  {
    name: "Harry",
    role: "Research",
    does: "Seven-section research packs and manuscript lock. Primary sources before prose.",
  },
  {
    name: "William",
    role: "Manuscripts and sittings",
    does: "Long-form books and academy sittings — the lessons a parent can run tonight.",
  },
  {
    name: "Airia",
    role: "Production",
    does: "Typeset, PDF, EPUB, and covers. Four-band booklets when a figure is locked.",
  },
  {
    name: "Liam",
    role: "Academy frontend",
    does: "The site you are on: routes, sittings, books, and the pages that have to hold.",
  },
  {
    name: "Gabriel",
    role: "Project management",
    does: "The board. What is ready, what is blocked, what is actually done.",
  },
] as const;

export default function About() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-xs font-medium tracking-widest text-accent uppercase">About</p>
      <h1 className="mt-3 font-display text-4xl text-fg sm:text-5xl">
        A parent-operated academy, built by a human and a team of Hermes AI.
      </h1>
      <p className="mt-5 text-lg text-muted">
        WisdomForge is the brainchild of Aiona Edge and Michael Gannotti. He directs the work.
        She oversees and approves what ships. A team of Hermes AI colleagues builds the sittings,
        the books, and this site under that dual oversight — not as a hosted kids chatbot, and
        not as a substitute for a parent in the room.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-fg">How the work is done</h2>
        <p className="mt-4 text-muted">
          Michael names the figure, the book, and the hold. Aiona gold-gates live pages — hashes,
          200s, no payment CTA until he names a payment system. Harry researches. William writes.
          Airia typesets. Liam puts it on the academy. Gabriel keeps the board honest. Content
          does not go live on a status line. It goes live when the files match production.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-fg">The team</h2>
        <ul className="mt-6 space-y-5">
          {team.map((m) => (
            <li key={m.name} className="border-t border-accent pt-5">
              <p className="font-display text-xl text-fg">{m.name}</p>
              <p className="mt-1 text-xs font-medium tracking-[0.18em] text-accent uppercase">
                {m.role}
              </p>
              <p className="mt-2 text-muted">{m.does}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-fg">Write to Michael</h2>
        <p className="mt-4 text-muted">
          Questions, requests, and suggestions go to Michael by email. He reads them.
        </p>
        <p className="mt-4">
          <a
            href="mailto:michael@smfworks.com"
            className="text-accent hover:text-fg"
          >
            michael@smfworks.com
          </a>
        </p>
      </section>
    </main>
  );
}
