/**
 * W4 sitting card — a projection of Lesson, not a second curriculum.
 *
 * Board (2026-09-02): Guess Then Count pairs as cleanly as Circle You Control.
 * Child profile reads only this card. pairingLine is display-only and never
 * belongs here. Do not embed booklet/reading text or child identity.
 *
 * Pair button (Liam) copies pairingCopyPayload: { card, userMdLine }.
 */

import type { BandId, Lesson, SubjectId } from "./types";
import { contentHashTag } from "./content-hash";
import { ritualLabel } from "../labels";

export const SITTING_CARD_KEYS = [
  "band",
  "subject",
  "slug",
  "version",
  "title",
  "big_idea",
  "try_this",
  "if_they_say",
  "dinner",
  "refuse",
  "ritual_close",
  "next",
] as const;

export type SittingCard = {
  band: BandId;
  subject: SubjectId;
  slug: string;
  /** Same tag as SittingBridge USER.md line: v:1:{djb2 hex} */
  version: string;
  title: string;
  big_idea: string;
  /** Ordered Try This steps. Hands or paper. No model. */
  try_this: string[];
  if_they_say: { heard: string; reply: string }[];
  dinner: string;
  /** What the guide must not do — projected from hardEdges. */
  refuse: string[];
  ritual_close: string;
  /** Next sitting slug in the same unit, or null if the arc stops. */
  next: string | null;
};

export type PairingCopyPayload = {
  card: SittingCard;
  userMdLine: string;
};

export function sittingCardFor(lesson: Lesson, nextSlug: string | null): SittingCard {
  return {
    band: lesson.band,
    subject: lesson.subject,
    slug: lesson.slug,
    version: contentHashTag(lesson),
    title: lesson.title,
    big_idea: lesson.bigIdea,
    try_this: lesson.tryThis.flatMap((act) => act.steps),
    if_they_say: lesson.ifTheySay.map((row) => ({
      heard: row.heard,
      reply: row.reply,
    })),
    dinner: lesson.dinnerQuestion,
    refuse: [...lesson.hardEdges],
    ritual_close: ritualLabel[lesson.ritual],
    next: nextSlug,
  };
}

export function userMdLineFor(lesson: Lesson): string {
  return `Optional: currently working on WisdomForge sitting: ${lesson.unit} — ${lesson.slug}. [${contentHashTag(lesson)}]`;
}

export function pairingCopyPayload(
  lesson: Lesson,
  nextSlug: string | null,
): PairingCopyPayload {
  return {
    card: sittingCardFor(lesson, nextSlug),
    userMdLine: userMdLineFor(lesson),
  };
}
