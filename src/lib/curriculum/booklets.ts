/**
 * Booklet PDF mapping.
 *
 * The academy has 84 PDFs in public/downloads/ following the naming pattern:
 *   {figureSlug}-{level}.pdf
 * where level is one of: elementary, middle, high, adult.
 *
 * This module maps lesson slugs to their corresponding figure slugs so the
 * lesson-view component can show a "Download the booklet" section when a
 * matching PDF exists for the current band.
 *
 * Only philosophy units (Stoics, Greeks, Church Fathers) have booklets.
 * When the Greeks and Church Fathers units come online, add their lesson
 * slug → figure slug mappings here.
 */

import type { BandId } from "./types";

/** Maps a lesson slug to the figure slug used in PDF filenames. */
const LESSON_TO_FIGURE: Record<string, string> = {
  // ── Character — The Stoics (3 sittings) ──────────────────────────────
  "circle-you-control": "epictetus",
  "inner-citadel": "marcus-aurelius",
  "shortest-thing": "seneca",

  // ── Zeno — The Founder (6 sittings) ──────────────────────────────────
  "shipwreck": "zeno-of-citium",
  "virtue-only-good": "zeno-of-citium",
  "seeds-of-reason": "zeno-of-citium",
  "community-equals": "zeno-of-citium",
  "live-according-nature": "zeno-of-citium",
  "founders-death": "zeno-of-citium",

  // ── How the Greeks Thought (in-forge — add mappings when lessons ship)
  // ── Faith & Reason (in-forge — add mappings when lessons ship)
};

/** Maps a band to the PDF level suffix used in filenames. */
const BAND_TO_LEVEL: Record<BandId, string> = {
  little: "elementary",
  young: "middle",
  emerging: "high",
  adult: "adult",
};

/** Human-readable labels for each level. */
const LEVEL_LABELS: Record<string, string> = {
  elementary: "Elementary",
  middle: "Middle",
  high: "High School",
  adult: "Adult",
};

export type BookletLink = {
  /** Absolute URL path to the PDF, e.g. /downloads/epictetus-elementary.pdf */
  href: string;
  /** Human-readable label, e.g. "Elementary" */
  label: string;
  /** The figure slug, e.g. "epictetus" */
  figure: string;
};

/**
 * Returns the figure slug for a given lesson slug, or null if no booklet
 * exists for that lesson.
 */
export function figureForLesson(slug: string): string | null {
  return LESSON_TO_FIGURE[slug] ?? null;
}

/**
 * Returns all booklet download links for a lesson, across all bands.
 * This lets the lesson-view show the full set of available levels, with
 * the current band's level highlighted.
 */
export function bookletLinksForLesson(
  slug: string,
  currentBand: BandId,
): BookletLink[] | null {
  const figure = figureForLesson(slug);
  if (!figure) return null;

  const currentLevel = BAND_TO_LEVEL[currentBand];

  // Build links for all four levels, current band first.
  const order: BandId[] = ["little", "young", "emerging", "adult"];
  const links: BookletLink[] = order.map((band) => {
    const level = BAND_TO_LEVEL[band];
    return {
      href: `/downloads/${figure}-${level}.pdf`,
      label: LEVEL_LABELS[level],
      figure,
    };
  });

  // Mark which is the current band's level (caller can use this)
  return links;
}

/**
 * Returns the booklet link for the current band only, or null.
 */
export function bookletForBand(
  slug: string,
  band: BandId,
): BookletLink | null {
  const figure = figureForLesson(slug);
  if (!figure) return null;

  const level = BAND_TO_LEVEL[band];
  return {
    href: `/downloads/${figure}-${level}.pdf`,
    label: LEVEL_LABELS[level],
    figure,
  };
}

/**
 * Returns the human-readable figure name for display.
 */
export function figureDisplayName(figure: string): string {
  const names: Record<string, string> = {
    "epictetus": "Epictetus",
    "marcus-aurelius": "Marcus Aurelius",
    "seneca": "Seneca",
    "zeno-of-citium": "Zeno of Citium",
    "socrates": "Socrates",
    "plato": "Plato",
    "aristotle": "Aristotle",
    "democritus": "Democritus",
    "heraclitus": "Heraclitus",
    "parmenides": "Parmenides",
    "pythagoras": "Pythagoras",
    "epicurus": "Epicurus",
    "ambrose": "Ambrose",
    "athanasius": "Athanasius",
    "augustine": "Augustine",
    "chrysostom": "John Chrysostom",
    "gregory-great": "Gregory the Great",
    "irenaeus": "Irenaeus",
    "jerome": "Jerome",
    "julian-norwich": "Julian of Norwich",
    "thomas-aquinas": "Thomas Aquinas",
    "basil-great": "Basil the Great",
    "gregory-nazianzus": "Gregory of Nazianzus",
    "locke": "John Locke",
    hamilton: "Alexander Hamilton",
    madison: "James Madison",
    jay: "John Jay",
    brutus: "Brutus",
    publius: "Publius",
    student: "The student",
    "parent-operator": "The parent-operator",
  };
  return names[figure] ?? figure;
}
