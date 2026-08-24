import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Parents() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-xs font-medium tracking-widest text-accent uppercase">For parents</p>
      <h1 className="mt-3 font-display text-4xl text-fg">You are the teacher. The site is the tongs.</h1>
      <p className="mt-5 text-lg text-muted">
        Each sitting is built so a tired adult can run it on a weeknight: a five-minute briefing, a 15–45 minute lesson, one practice, one dinner question, and a script for the hard sentence the child will actually say.
      </p>

      <section className="mt-12 space-y-4 text-muted">
        <h2 className="font-display text-2xl text-fg">How to start this week</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Pick the band that matches permissions, not pride.</li>
          <li>Open Autonomous AI sitting 1: a tool, not a person.</li>
          <li>Stay in the room if they are 5–10. Nearby if they are 11–14.</li>
          <li>Write a house rule after sitting 2. Put it where homework happens.</li>
          <li>Only then consider a Hermes profile — fresh, band-locked, tools off.</li>
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-fg">Hard topics</h2>
        <p className="mt-3 text-muted">
          Philosophy booklets do not skip enslavement, plague, Nero, or the Seneca problem. AI sittings do not skip parasocial bonds, cheating, or generated images of children. The briefing names the edge before the child is in the room. If you are not ready, skip the sitting. Refusal is a complete week.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-fg">Mixed ages</h2>
        <p className="mt-3 text-muted">
          Same spine, two Try This options, one shared dinner question. Do not stretch a Little Thinkers profile over a fourteen-year-old because they share a table.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-fg">What &ldquo;complete&rdquo; means</h2>
        <p className="mt-3 text-muted">
          A figure or unit is Assist-ready when the sitting, the briefing, the ritual, the AI lab, and the Hermes pairing line exist for that band. Booklet-only library items stay labeled In the forge. We will not call a PDF a curriculum.
        </p>
      </section>

      <div className="mt-12">
        <Button asChild>
          <Link href="/start">Choose a band</Link>
        </Button>
      </div>
    </main>
  );
}