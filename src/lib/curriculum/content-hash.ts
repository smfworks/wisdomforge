/**
 * Content hash for sitting version pinning.
 *
 * Problem: Sitting content can change after a child profile references it.
 * A short hash in the USER.md pairing line lets parents detect when the
 * guide-relevant content of a sitting has drifted since they paired.
 *
 * What gets hashed: only the fields the child's guide actually uses during
 * a sitting — hermes.prompt, reading, bigIdea, tryThis, ifTheySay. This
 * avoids noise from cosmetic edits to fields the guide never reads
 * (dek, parentBriefing, transfer, dinnerQuestion, etc.).
 *
 * Algorithm: djb2 — a simple, fast, non-cryptographic hash. Not security:
 * drift detection only. Runs identically in Node (build-time feed) and the
 * browser (runtime USER.md line) with no platform dependencies.
 *
 * Output: 8 hex characters (32-bit djb2 → hex). ~4 billion values — collision
 * risk is negligible for the academy's ~100 sittings and the "did the guide
 * content change?" question it answers.
 */

import type { Lesson } from "./types";

/**
 * djb2 string hash → unsigned 32-bit integer → 8-char hex.
 * Deterministic across Node and browser runtimes.
 */
function djb2Hex(input: string): string {
  let hash = 5381;
  for (let i = 0; i < input.length; i++) {
    // hash * 33 + char — use Math.imul for 32-bit wrap in JS
    hash = (Math.imul(hash, 33) + input.charCodeAt(i)) >>> 0;
  }
  return hash.toString(16).padStart(8, "0");
}

/**
 * Extract the guide-relevant fields from a Lesson and produce a stable
 * canonical string. Field order is fixed so reordering object keys in
 * the lesson source does not change the hash.
 *
 * The guide uses these fields during a sitting:
 *   - hermes.prompt    → the opening instructions the guide follows
 *   - reading          → the text the guide references (heading + body)
 *   - bigIdea          → the central claim the guide builds toward
 *   - tryThis          → the activities the guide suggests (title + steps)
 *   - ifTheySay        → calibration patterns the guide listens for
 *
 * Intentionally excluded: dek, durationMin, objective, parentBriefing,
 * hardEdges, dinnerQuestion, transfer, integrity, aiLab, hermes.allowedTools,
 * hermes.pairingLine, unit, slug, number, band, subject, ritual, title.
 * These are parent-facing metadata or fields the guide does not read.
 */
function canonicalGuideContent(lesson: Lesson): string {
  const parts: string[] = [];

  // hermes.prompt — the guide's operating instructions
  parts.push(`prompt:${lesson.hermes.prompt}`);

  // reading — heading + body, in order
  for (const r of lesson.reading) {
    parts.push(`reading:${r.heading}::${r.body}`);
  }

  // bigIdea — the central claim
  parts.push(`bigIdea:${lesson.bigIdea}`);

  // tryThis — title + steps, in order
  for (const act of lesson.tryThis) {
    parts.push(`tryThis:${act.title}::${act.steps.join("|")}`);
  }

  // ifTheySay — heard + reply, in order
  for (const item of lesson.ifTheySay) {
    parts.push(`ifTheySay:${item.heard}::${item.reply}`);
  }

  return parts.join("\n");
}

/**
 * Compute an 8-char hex content hash for the guide-relevant fields
 * of a Lesson. Same content → same hash. Changed guide content →
 * different hash. Cosmetic edits to non-guide fields → same hash.
 */
export function contentHash(lesson: Lesson): string {
  return djb2Hex(canonicalGuideContent(lesson));
}

/**
 * Format the hash for inclusion in the USER.md pairing line.
 * Short, readable, and unambiguous: `v:1:a1b2c3d4`
 *   v:1  → hash version (algorithm revision — bump if the field set changes)
 *   hex  → the 8-char content hash
 */
export function contentHashTag(lesson: Lesson): string {
  return `v:1:${contentHash(lesson)}`;
}