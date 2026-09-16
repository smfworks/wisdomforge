import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Parents() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-xs font-medium tracking-widest text-accent uppercase">For parents</p>
      <h1 className="mt-3 font-display text-4xl text-fg">You are the teacher. These are the lessons.</h1>
      <p className="mt-5 text-lg text-muted">
        Each lesson is built so a tired adult can run it on a weeknight: a five-minute briefing, a 15–45 minute reading, one practice, one dinner question, and a script for the hard sentence the child will actually say.
      </p>

      <section className="mt-12 space-y-4 text-muted">
        <h2 className="font-display text-2xl text-fg">How to start this week</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Pick the age group that matches what they are allowed to do, not pride.</li>
          <li>Open Autonomous AI lesson 1: a tool, not a person.</li>
          <li>Stay in the room if they are 5–10. Nearby if they are 11–14.</li>
          <li>Write a house rule after lesson 2. Put it where homework happens.</li>
          <li>Only then consider a Hermes profile — a new one for their age, tools off until you turn one on.</li>
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-fg">Hard topics</h2>
        <p className="mt-3 text-muted">
          Philosophy lessons do not skip enslavement, plague, Nero, or the Seneca problem. AI lessons do not skip parasocial bonds, cheating, or generated images of children. The briefing names the hard part before the child is in the room. If you are not ready, skip the lesson. Skipping is a complete week.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-fg">Mixed ages</h2>
        <p className="mt-3 text-muted">
          Same lesson idea, two practice options, one shared dinner question. Do not use a 5–10 profile with a fourteen-year-old just because they share a table.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-fg">When a lesson is ready</h2>
        <p className="mt-3 text-muted">
          A lesson is ready when the reading, the activity, the parent briefing, and what to say at dinner all exist for that age. A PDF by itself is not a full lesson. We will not pretend otherwise.
        </p>
      </section>

      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <Link href="/parents/control-plane">Control-plane checklist</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/evals">What we test</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/start">Choose an age</Link>
        </Button>
      </div>
    </main>
  );
}