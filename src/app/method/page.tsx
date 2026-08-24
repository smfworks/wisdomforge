import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Method() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-xs font-medium tracking-widest text-accent uppercase">The method</p>
      <h1 className="mt-3 font-display text-4xl text-fg sm:text-5xl">
        Human first. Guide second. Evaluate always.
      </h1>
      <p className="mt-5 text-lg text-muted">
        WisdomForge is supplemental curriculum, not a school replacement. It sits beside whatever math book, parish, co-op, or public school you already have — and teaches the one thing those often skip: how to live with autonomous AI without being used by it.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-fg">A sitting</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-muted">
          <li>Parent reads the briefing (five minutes, child not yet in the room).</li>
          <li>Read the lesson. Little Thinkers are read to. Everyone else reads.</li>
          <li>Try this — with hands, paper, a timer. No model yet.</li>
          <li>Open the lesson guide or a band-locked Hermes profile. Hint only.</li>
          <li>Evaluate what the guide got wrong. Mark the sitting. Ask the dinner question later.</li>
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-fg">Four bands, four rituals</h2>
        <ul className="mt-4 space-y-3 text-muted">
          <li>
            <span className="text-fg">5–10 Ask a Grown-Up.</span> Conversation only. A grown-up in the room.
          </li>
          <li>
            <span className="text-fg">11–14 Talk About It.</span> Hint, then example. No ghostwriter.
          </li>
          <li>
            <span className="text-fg">15–18 Practice · Reflect.</span> Real argument. Cite what you used.
          </li>
          <li>
            <span className="text-fg">Adult Companion.</span> You operate. Fresh child profiles only. Inspect, test, refuse.
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-fg">What we will not do</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
          <li>Host a kids chatbot on this site.</li>
          <li>Clone your adult Hermes profile into a child&apos;s.</li>
          <li>Grade a child&apos;s soul with quizzes.</li>
          <li>Replace phonics, labs, or a living teacher.</li>
          <li>Pretend a model is a friend, a therapist, or a mind.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-fg">Integrity</h2>
        <p className="mt-3 text-muted">
          No hidden AI homework. If the tool wrote it, it does not wear the child&apos;s name. Disclosed tutor use is allowed. Ghostwriting is not. If you could not redo the work without the model, it was not yours.
        </p>
      </section>

      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <Link href="/start">Start a sitting</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/hermes">Hermes pairing</Link>
        </Button>
      </div>
    </main>
  );
}