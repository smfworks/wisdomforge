/**
 * Booklet PDF mapping.
 *
 * The academy has PDFs in public/downloads/ following the naming pattern:
 *   {figureSlug}-{level}.pdf
 * where level is one of: elementary, middle, high, adult.
 * Phase 8: each shipped booklet also gets
 *   {figureSlug}-{level}.md
 * — agent-readable UTF-8, not a PDF dump. No EPUB on booklets.
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

  // ── The Fourteenth Amendment (6 sittings × young/emerging/adult)
  "fourteenth-answer-to-54": "fourteenth-amendment",
  "fourteenth-section-1-aloud": "fourteenth-amendment",
  "fourteenth-gettysburg-inside": "fourteenth-amendment",
  "fourteenth-citizenship-dred-scott": "fourteenth-amendment",
  "fourteenth-due-process-equal-protection": "fourteenth-amendment",
  "fourteenth-ugly-clauses": "fourteenth-amendment",

  // ── The Federalist (6 sittings × young/emerging/adult)
  "publius-campaign": "federalist-papers",
  "faction-extended-republic": "federalist-papers",
  "ambition-counteracts-ambition": "federalist-papers",
  "judgment-without-sword": "federalist-papers",
  "lost-argument-bill-of-rights": "federalist-papers",
  "federalist-civic-chain": "federalist-papers",

  // ── Magna Carta (6 sittings)
  "runnymede-field": "magna-carta",
  "king-not-above-law": "magna-carta",
  "due-process-chain": "magna-carta",
  "consent-common-counsel": "magna-carta",
  "ugly-gaps-who-was-left-out": "magna-carta",
  "chain-from-runnymede": "magna-carta",

  // ── US Constitution (6 sittings)
  "philadelphia-1787": "us-constitution",
  "power-against-power": "us-constitution",
  "bill-of-rights-losers-legacy": "us-constitution",
  "three-fifths-compromise": "us-constitution",
  "judicial-review-self-made": "us-constitution",
  "amendment-chain": "us-constitution",

  // ── Declaration of Independence (6 sittings)
  "committee-of-five": "declaration-independence",
  "self-evident-truths": "declaration-independence",
  "right-of-revolution": "declaration-independence",
  "all-men-promise-omission": "declaration-independence",
  "slave-trade-passage-removed": "declaration-independence",
  "declaration-afterlife": "declaration-independence",

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
  /** Agent-readable markdown. Set when public/downloads/<figure>-<level>.md lands. */
  mdHref: string;
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
      mdHref: `/downloads/${figure}-${level}.md`,
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
    mdHref: `/downloads/${figure}-${level}.md`,
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
    bonaventure: "Bonaventure",
    "therese-of-lisieux": "Thérèse of Lisieux",
    "locke": "John Locke",
    hamilton: "Alexander Hamilton",
    madison: "James Madison",
    jay: "John Jay",
    brutus: "Brutus",
    publius: "Publius",
    "fourteenth-amendment": "The Fourteenth Amendment",
    "federalist-papers": "The Federalist Papers",
    "magna-carta": "Magna Carta",
    "us-constitution": "The US Constitution",
    "declaration-independence": "The Declaration of Independence",
    student: "The student",
    "parent-operator": "The parent-operator",
  };
  return names[figure] ?? figure;
}
