/**
 * Generate public/sittings.json — a static metadata feed for every sitting
 * in the academy curriculum. Built at deploy time; no serverless cost.
 *
 * Consumed by: adult Hermes profiles (parent-operator guide), emerging-band
 * academy-search skill, and any external tool that needs the sitting catalog.
 *
 * Shape: { generated, count, sittings: SittingMeta[] }
 */

import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { lessons, sittingCardForLesson } from "./index";
import { subjectById } from "./subjects";
import { bandById } from "./bands";
import { ritualLabel } from "../labels";
import { bookletLinksForLesson } from "./booklets";
import { contentHashTag } from "./content-hash";
import type { SittingCard } from "./sitting-card";

export type SittingMeta = {
  slug: string;
  band: string;
  subject: string;
  subjectName: string;
  unit: string;
  number: number;
  title: string;
  dek: string;
  durationMin: number;
  ritual: string;
  ritualLabel: string;
  bandName: string;
  bandAges: string;
  materials: string[];
  lessonPath: string;
  /**
   * Content version tag for drift detection (Phase 5 P5).
   * Format: "v:1:{8-char-hex}" — same tag appended to the USER.md
   * pairing line in SittingBridge. Parents compare the tag in their
   * child's USER.md against this field to detect whether the
   * guide-relevant content has changed since they paired.
   */
  contentVersion: string;
};

export type SittingsFeed = {
  generated: string;
  count: number;
  sittings: SittingMeta[];
};

export function generateSittingsFeed(outputDir: string): void {
  const sittings: SittingMeta[] = lessons.map((l) => {
    const subject = subjectById(l.subject);
    const band = bandById(l.band);
    const bookletLinks = bookletLinksForLesson(l.slug, l.band);
    const materials: string[] = [];

    if (bookletLinks) {
      for (const link of bookletLinks) {
        materials.push(`Booklet: ${link.label} (${link.href})`);
      }
    }

    // Try This materials (what the student needs)
    for (const act of l.tryThis) {
      // Extract material hints from step text (e.g., "Get paper and a pencil")
      materials.push(`Try This — ${act.title} (${act.minutes} min)`);
    }

    return {
      slug: l.slug,
      band: l.band,
      subject: l.subject,
      subjectName: subject?.name ?? l.subject,
      unit: l.unit,
      number: l.number,
      title: l.title,
      dek: l.dek,
      durationMin: l.durationMin,
      ritual: l.ritual,
      ritualLabel: ritualLabel[l.ritual],
      bandName: band?.name ?? l.band,
      bandAges: band?.ages ?? "",
      materials,
      lessonPath: `/learn/${l.band}/${l.subject}/${l.slug}`,
      contentVersion: contentHashTag(l),
    };
  });

  const feed: SittingsFeed = {
    generated: new Date().toISOString(),
    count: sittings.length,
    sittings,
  };

  writeFileSync(join(outputDir, "sittings.json"), JSON.stringify(feed, null, 2));
}

/** W4 pairing feed — cards only. No booklet text, no child identity, no pairingLine. */
export type SittingCardsFeed = {
  generated: string;
  count: number;
  cards: SittingCard[];
};

export function generateSittingCardsFeed(outputDir: string): void {
  const cards = lessons.map((l) => sittingCardForLesson(l));
  const feed: SittingCardsFeed = {
    generated: new Date().toISOString(),
    count: cards.length,
    cards,
  };
  writeFileSync(join(outputDir, "sitting-cards.json"), JSON.stringify(feed, null, 2));
}