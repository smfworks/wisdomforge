"use client";

import { useState } from "react";
import type { Lesson } from "@/lib/curriculum/types";
import { Button } from "@/components/ui/button";
import { SittingBridge } from "@/components/sitting-bridge";

type Msg = { role: "user" | "assistant"; content: string };

export function GuidePanel({ lesson }: { lesson: Lesson }) {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const remaining = 8 - messages.filter((m) => m.role === "user").length;
  const little = lesson.band === "little";

  async function send() {
    const text = draft.trim();
    if (!text || busy || remaining <= 0) return;
    setDraft("");
    setError(null);
    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setBusy(true);
    try {
      // ask-guide server function is not available in this Next.js port.
      // Guide is a display-only panel in Phase 1; use the Hermes prompt instead.
      setError("The guide server is not connected in this build. Copy the Hermes prompt below and use it from your adult profile.");
    } catch {
      setError("The guide could not be reached. Try again, or use the Hermes prompt instead.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="rounded-xl bg-raised p-5 shadow-[var(--shadow-border)] sm:p-6">
      <p className="text-xs font-medium tracking-wide text-accent uppercase">Lesson guide</p>
      <h2 className="mt-1 font-display text-2xl text-fg">Ask after you try</h2>
      <p className="mt-2 text-sm text-muted">{lesson.aiLab.setup}</p>
      {little ? (
        <p className="mt-3 rounded-md bg-bg px-3 py-2 text-sm text-fg shadow-[var(--shadow-border)]">
          A grown-up must be in the room for this band. The guide is a tool, not a friend. If it claims otherwise, that is a miss — close it.
        </p>
      ) : null}

      <ol className="mt-4 list-decimal space-y-1 pl-5 text-sm text-muted">
        <li>{lesson.aiLab.childDoes}</li>
        {lesson.aiLab.evaluate.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ol>

      <div className="mt-5 space-y-3">
        {messages.map((m, i) => (
          <div
            key={`${m.role}-${i}`}
            className={
              m.role === "user"
                ? "ml-6 rounded-md bg-bg px-3 py-2 text-sm text-fg"
                : "mr-6 rounded-md bg-surface px-3 py-2 text-sm text-fg shadow-[var(--shadow-border)]"
            }
          >
            <p className="text-xs text-faint">{m.role === "user" ? "You" : "Guide"}</p>
            <p className="mt-1 whitespace-pre-wrap">{m.content}</p>
          </div>
        ))}
        {busy ? <p className="text-sm text-muted">The guide is thinking…</p> : null}
        {error ? <p className="text-sm text-accent">{error}</p> : null}
      </div>

      <form
        className="mt-4 flex flex-col gap-2 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          void send();
        }}
      >
        <label className="sr-only" htmlFor={`guide-${lesson.slug}`}>
          Message the lesson guide
        </label>
        <input
          id={`guide-${lesson.slug}`}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          maxLength={800}
          placeholder={remaining <= 0 ? "Sitting limit reached" : "Ask for a hint, not the answer"}
          disabled={busy || remaining <= 0}
          className="min-h-11 flex-1 rounded-md bg-bg px-3 text-sm text-fg shadow-[var(--shadow-border)] placeholder:text-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <Button type="submit" disabled={busy || remaining <= 0 || !draft.trim()}>
          Send
        </Button>
      </form>
      <p className="mt-2 text-xs text-faint">{remaining} turns left this sitting. User-started only. Never on page load.</p>

      <div className="mt-6">
        <SittingBridge lesson={lesson} />
      </div>
    </section>
  );
}