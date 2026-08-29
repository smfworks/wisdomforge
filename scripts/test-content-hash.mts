/**
 * Unit tests for content-hash.ts — sitting version pinning (Phase 5 P5).
 *
 * Run:  npx tsx --test scripts/test-content-hash.mts
 *
 * Uses Node's built-in test runner (node:test) so no test-framework
 * dependency is needed. Verifies:
 *   1. Determinism — same lesson → same hash, every call
 *   2. Drift detection — guide-relevant field change → different hash
 *   3. Cosmetic-stability — non-guide field change → same hash
 *   4. Order significance — reading array order matters (semantic)
 *   5. Tag format — contentHashTag returns "v:1:{8-hex-chars}"
 */

import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { contentHash, contentHashTag } from "../src/lib/curriculum/content-hash";
import type { Lesson } from "../src/lib/curriculum/types";

// ── Minimal valid lesson fixture ──────────────────────────────────────
// Only the fields content-hash reads are populated; the rest are stubbed
// to satisfy the Lesson type without pulling in the full curriculum.
function makeLesson(overrides: Partial<Lesson> = {}): Lesson {
  return {
    slug: "test-sitting",
    subject: "history",
    band: "young",
    unit: "Test Unit",
    number: 1,
    title: "Test Sitting",
    dek: "A test dek.",
    durationMin: 30,
    ritual: "talk-about-it",
    objective: "Test objective.",
    parentBriefing: "Test briefing.",
    hardEdges: [],
    reading: [
      { heading: "First heading", body: "First body paragraph." },
      { heading: "Second heading", body: "Second body paragraph." },
    ],
    bigIdea: "The central claim.",
    tryThis: [
      { title: "Activity A", minutes: 10, steps: ["Step 1", "Step 2"] },
    ],
    dinnerQuestion: "Dinner question.",
    transfer: [],
    ifTheySay: [
      { heard: "I don't get it", reply: "Try breaking it down." },
    ],
    integrity: "Integrity note.",
    aiLab: { setup: "", childDoes: "", evaluate: [] },
    hermes: {
      allowedTools: ["web"],
      pairingLine: "Pair line.",
      prompt: "Guide the student through the reading.",
    },
    ...overrides,
  };
}

describe("contentHash — determinism", () => {
  it("returns the same hash for the same lesson on repeated calls", () => {
    const lesson = makeLesson();
    const h1 = contentHash(lesson);
    const h2 = contentHash(lesson);
    const h3 = contentHash(lesson);
    assert.equal(h1, h2);
    assert.equal(h2, h3);
  });

  it("returns the same hash for two independently-constructed identical lessons", () => {
    const h1 = contentHash(makeLesson());
    const h2 = contentHash(makeLesson());
    assert.equal(h1, h2);
  });
});

describe("contentHash — drift detection (guide fields)", () => {
  it("changes when hermes.prompt changes", () => {
    const base = contentHash(makeLesson());
    const changed = contentHash(
      makeLesson({
        hermes: {
          allowedTools: ["web"],
          pairingLine: "Pair line.",
          prompt: "DIFFERENT prompt.",
        },
      }),
    );
    assert.notEqual(base, changed);
  });

  it("changes when reading body changes", () => {
    const base = contentHash(makeLesson());
    const changed = contentHash(
      makeLesson({
        reading: [{ heading: "First heading", body: "CHANGED body." }],
      }),
    );
    assert.notEqual(base, changed);
  });

  it("changes when bigIdea changes", () => {
    const base = contentHash(makeLesson());
    const changed = contentHash(
      makeLesson({ bigIdea: "A different central claim." }),
    );
    assert.notEqual(base, changed);
  });

  it("changes when tryThis steps change", () => {
    const base = contentHash(makeLesson());
    const changed = contentHash(
      makeLesson({
        tryThis: [{ title: "Activity A", minutes: 10, steps: ["DIFFERENT step"] }],
      }),
    );
    assert.notEqual(base, changed);
  });

  it("changes when ifTheySay reply changes", () => {
    const base = contentHash(makeLesson());
    const changed = contentHash(
      makeLesson({
        ifTheySay: [{ heard: "I don't get it", reply: "DIFFERENT reply." }],
      }),
    );
    assert.notEqual(base, changed);
  });
});

describe("contentHash — cosmetic stability (non-guide fields)", () => {
  it("does NOT change when dek changes", () => {
    const base = contentHash(makeLesson());
    const changed = contentHash(makeLesson({ dek: "A totally different dek." }));
    assert.equal(base, changed);
  });

  it("does NOT change when parentBriefing changes", () => {
    const base = contentHash(makeLesson());
    const changed = contentHash(
      makeLesson({ parentBriefing: "Different briefing." }),
    );
    assert.equal(base, changed);
  });

  it("does NOT change when dinnerQuestion changes", () => {
    const base = contentHash(makeLesson());
    const changed = contentHash(
      makeLesson({ dinnerQuestion: "Different question." }),
    );
    assert.equal(base, changed);
  });

  it("does NOT change when title changes", () => {
    const base = contentHash(makeLesson());
    const changed = contentHash(makeLesson({ title: "Different Title" }));
    assert.equal(base, changed);
  });

  it("does NOT change when hermes.pairingLine changes", () => {
    const base = contentHash(makeLesson());
    const changed = contentHash(
      makeLesson({
        hermes: {
          allowedTools: ["web"],
          pairingLine: "DIFFERENT pair line.",
          prompt: "Guide the student through the reading.",
        },
      }),
    );
    assert.equal(base, changed);
  });

  it("does NOT change when hermes.allowedTools changes", () => {
    const base = contentHash(makeLesson());
    const changed = contentHash(
      makeLesson({
        hermes: {
          allowedTools: ["web", "terminal"],
          pairingLine: "Pair line.",
          prompt: "Guide the student through the reading.",
        },
      }),
    );
    assert.equal(base, changed);
  });
});

describe("contentHash — order significance", () => {
  it("changes when reading array order is swapped (order is semantically significant)", () => {
    const base = contentHash(makeLesson());
    const reordered = contentHash(
      makeLesson({
        reading: [
          { heading: "Second heading", body: "Second body paragraph." },
          { heading: "First heading", body: "First body paragraph." },
        ],
      }),
    );
    assert.notEqual(base, reordered);
  });
});

describe("contentHashTag — format", () => {
  it('returns "v:1:" followed by 8 hex characters', () => {
    const tag = contentHashTag(makeLesson());
    assert.match(tag, /^v:1:[0-9a-f]{8}$/);
  });

  it("embeds the same hash that contentHash returns", () => {
    const lesson = makeLesson();
    const hash = contentHash(lesson);
    const tag = contentHashTag(lesson);
    assert.equal(tag, `v:1:${hash}`);
  });

  it("is stable across calls", () => {
    const lesson = makeLesson();
    assert.equal(contentHashTag(lesson), contentHashTag(lesson));
  });
});