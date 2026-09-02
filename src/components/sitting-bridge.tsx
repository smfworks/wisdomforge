"use client";

import { useState } from "react";
import type { Lesson } from "@/lib/curriculum/types";
import { nextInUnit } from "@/lib/curriculum";
import { bandById } from "@/lib/curriculum/bands";
import { pairingCopyPayload } from "@/lib/curriculum/sitting-card";
import { ritualLabel } from "@/lib/labels";
import { Button } from "@/components/ui/button";

/**
 * SittingBridge — "Light this sitting" bridge component.
 *
 * Renders the locked P1 interface contract:
 * 1. Display pairing line (lesson.hermes.pairingLine) — context only, not copyable
 * 2. USER.md line — constructed from lesson.unit + lesson.slug, copy target for child profile
 * 3. Opening prompt (lesson.hermes.prompt) — copy target for parent's adult profile
 * 4. Ritual reminder (BandDef.hermes) — display-only callout
 *
 * Does NOT call any AI endpoint. Does NOT collect child PII. Does NOT auto-start.
 * User-started only. Replaces GuidePanel lines 108-115 ("Pair with Hermes" section).
 *
 * Contract: /home/mikesai1/projects/wisdomforge/docs/bridge-interface-spec.md
 * Gold-gated by Aiona. Locked 2026-08-25.
 */

export function SittingBridge({ lesson }: { lesson: Lesson }) {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const band = bandById(lesson.band);

  // W4: Pair copies { card, userMdLine }. pairingLine stays display-only.
  const payload = pairingCopyPayload(lesson, nextInUnit(lesson)?.slug ?? null);
  const versionTag = payload.card.version;
  const userMdLine = payload.userMdLine;
  const pairJson = JSON.stringify(payload, null, 2);

  // Display-only context from lesson.hermes.pairingLine
  const displayPairingLine = lesson.hermes.pairingLine;

  // Opening prompt — verbatim from lesson.hermes.prompt
  const openingPrompt = lesson.hermes.prompt;

  // Ritual reminder — from BandDef.hermes
  const ritualReminder = band?.hermes ?? "";

  async function copy(text: string, fieldId: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldId);
      setTimeout(() => setCopiedField(null), 1600);
    } catch {
      setCopiedField(null);
    }
  }

  return (
    <section className="rounded-xl bg-raised p-5 shadow-[var(--shadow-border)] sm:p-6">
      <p className="text-xs font-medium tracking-wide text-accent uppercase">
        Light this sitting
      </p>
      <h2 className="mt-1 font-display text-2xl text-fg">Pair with Hermes</h2>

      {/* Ritual badge */}
      <div className="mt-3 flex items-center gap-2">
        <span className="rounded-md bg-bg px-3 py-1.5 text-xs font-medium text-accent shadow-[var(--shadow-border)]">
          {ritualLabel[lesson.ritual]}
        </span>
        <span className="text-xs text-faint">{band?.ages}</span>
      </div>

      {/* Display pairing line — context only, not copyable */}
      <p className="mt-4 text-sm text-muted">{displayPairingLine}</p>

      {/* Pair this sitting — copies { card, userMdLine }. Not a library dump. */}
      <div className="mt-6 border-t border-border pt-4">
        <p className="text-sm font-medium text-fg">Pair this sitting</p>
        <p className="mt-1 text-xs text-muted">
          Copies the sitting card and the USER.md one-liner. The child profile reads only this card. It does not browse the catalog.
        </p>
        <Button
          className="mt-3"
          type="button"
          onClick={() => void copy(pairJson, "pair")}
        >
          {copiedField === "pair" ? "Copied" : "Pair this sitting"}
        </Button>
      </div>

      {/* USER.md line — copy target for child profile */}
      <div className="mt-6 border-t border-border pt-4">
        <p className="text-sm font-medium text-fg">For the child profile</p>
        <p className="mt-1 text-xs text-muted">
          Paste this into the child&rsquo;s USER.md. It names the sitting so the guide knows the context.
          The <span className="font-mono text-accent">[{versionTag}]</span> tag lets you detect if the sitting&rsquo;s content has changed since you paired it.
        </p>
        <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded-md bg-bg p-3 text-sm text-fg shadow-[var(--shadow-border)]">
          {userMdLine}
        </pre>
        <Button
          variant="secondary"
          className="mt-2"
          type="button"
          onClick={() => void copy(userMdLine, "userMd")}
        >
          {copiedField === "userMd" ? "Copied" : "Copy USER.md line"}
        </Button>
      </div>

      {/* Opening prompt — copy target for parent's adult profile */}
      <div className="mt-6 border-t border-border pt-4">
        <p className="text-sm font-medium text-fg">For your adult profile</p>
        <p className="mt-1 text-xs text-muted">
          Send this from your trusted adult Hermes profile. It starts the guide for this band and sitting.
        </p>
        <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded-md bg-bg p-3 text-sm text-fg shadow-[var(--shadow-border)]">
          {openingPrompt}
        </pre>
        <Button
          variant="secondary"
          className="mt-2"
          type="button"
          onClick={() => void copy(openingPrompt, "prompt")}
        >
          {copiedField === "prompt" ? "Copied" : "Copy opening prompt"}
        </Button>
      </div>

      {/* Allowed tools */}
      <div className="mt-4">
        <p className="text-xs font-medium tracking-wide text-faint uppercase">Tools on</p>
        <ul className="mt-1 flex flex-wrap gap-2">
          {lesson.hermes.allowedTools.map((tool) => (
            <li
              key={tool}
              className="rounded-md bg-bg px-2.5 py-1 text-xs text-muted shadow-[var(--shadow-border)]"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>

      {/* Ritual reminder — display-only callout, not copyable */}
      <div className="mt-6 border-l-2 border-accent pl-4">
        <p className="text-xs font-medium tracking-wide text-accent uppercase">
          Ritual reminder
        </p>
        <p className="mt-1 text-sm text-muted">{ritualReminder}</p>
      </div>

      {/* Non-negotiables footnote */}
      <div className="mt-6 border-t border-border pt-3">
        <p className="text-xs text-faint">
          Fresh profile only. Never clone an adult profile. No child names, photos, or school.
          Hint-first. User-started. The guide does not make AI safe. You may refuse it.
        </p>
      </div>
    </section>
  );
}