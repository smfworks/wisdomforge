/**
 * W4 sitting-card — projection of Lesson, not a second curriculum.
 *
 * Run:  npx tsx --test scripts/test-sitting-card.mts
 *
 * Board lock (2026-09-02): Guess Then Count pairs as cleanly as
 * Circle You Control. pairingLine is display-only. No booklet dump.
 * No child identity. next is same-unit only (null if the arc stops).
 */

import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  findLesson,
  nextInUnit,
  sittingCardForLesson,
  lessons,
} from "../src/lib/curriculum/index";
import {
  sittingCardFor,
  userMdLineFor,
  pairingCopyPayload,
  SITTING_CARD_KEYS,
  type SittingCard,
} from "../src/lib/curriculum/sitting-card";
import { contentHashTag } from "../src/lib/curriculum/content-hash";


const CARD_KEYS = [
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

function assertCompleteCard(card: SittingCard, label: string) {
  const keys = Object.keys(card).sort();
  assert.deepEqual(
    keys,
    [...CARD_KEYS].sort(),
    `${label}: unexpected keys ${keys.join(",")}`,
  );
  assert.equal(card.band.length > 0, true, `${label}: band`);
  assert.equal(card.subject.length > 0, true, `${label}: subject`);
  assert.equal(card.slug.length > 0, true, `${label}: slug`);
  assert.match(card.version, /^v:1:[0-9a-f]{8}$/, `${label}: version`);
  assert.ok(card.title.length >= 3, `${label}: title`);
  assert.ok(card.big_idea.length >= 8, `${label}: big_idea`);
  assert.ok(card.try_this.length >= 1, `${label}: try_this`);
  for (const step of card.try_this) {
    assert.ok(step.length >= 3, `${label}: empty try_this step`);
  }
  assert.ok(card.if_they_say.length >= 1, `${label}: if_they_say`);
  for (const row of card.if_they_say) {
    assert.ok(row.heard.length >= 3, `${label}: if_they_say.heard`);
    assert.ok(row.reply.length >= 3, `${label}: if_they_say.reply`);
  }
  assert.ok(card.dinner.length >= 8, `${label}: dinner`);
  assert.ok(card.refuse.length >= 1, `${label}: refuse`);
  assert.ok(card.ritual_close.length >= 3, `${label}: ritual_close`);
  assert.ok(card.next === null || card.next.length > 0, `${label}: next`);
}

describe("sitting-card — key contract", () => {
  it("exports the Appendix B field set", () => {
    assert.deepEqual([...SITTING_CARD_KEYS].sort(), [...CARD_KEYS].sort());
  });
});

describe("W4 proof — Guess Then Count pairs as Circle You Control", () => {
  it("both little sittings exist", () => {
    const math = findLesson("little", "math", "estimate-first");
    const stoic = findLesson("little", "philosophy", "circle-you-control");
    assert.ok(math, "little/math/estimate-first");
    assert.ok(stoic, "little/philosophy/circle-you-control");
    assert.equal(math?.title, "Guess, Then Count");
    assert.equal(stoic?.title, "The Circle You Control");
  });

  it("both emit complete cards with the same keys", () => {
    const math = findLesson("little", "math", "estimate-first")!;
    const stoic = findLesson("little", "philosophy", "circle-you-control")!;
    const mathCard = sittingCardForLesson(math);
    const stoicCard = sittingCardForLesson(stoic);
    assertCompleteCard(mathCard, "Guess Then Count");
    assertCompleteCard(stoicCard, "Circle You Control");
    assert.deepEqual(Object.keys(mathCard).sort(), Object.keys(stoicCard).sort());
  });

  it("math card is not a stoic clone — subject/slug/title differ", () => {
    const mathCard = sittingCardForLesson(
      findLesson("little", "math", "estimate-first")!,
    );
    const stoicCard = sittingCardForLesson(
      findLesson("little", "philosophy", "circle-you-control")!,
    );
    assert.equal(mathCard.subject, "math");
    assert.equal(stoicCard.subject, "philosophy");
    assert.notEqual(mathCard.slug, stoicCard.slug);
    assert.notEqual(mathCard.big_idea, stoicCard.big_idea);
  });
});

describe("sitting-card — projection rules", () => {
  it("version is contentHashTag, not a new hash", () => {
    const lesson = findLesson("little", "math", "estimate-first")!;
    const card = sittingCardForLesson(lesson);
    assert.equal(card.version, contentHashTag(lesson));
  });

  it("try_this is the lesson steps, not a booklet dump", () => {
    const lesson = findLesson("little", "math", "estimate-first")!;
    const card = sittingCardForLesson(lesson);
    assert.deepEqual(card.try_this, lesson.tryThis.flatMap((a) => a.steps));
    const blob = JSON.stringify(card);
    assert.equal(blob.includes(lesson.reading[0].body.slice(0, 40)), false);
  });

  it("refuse comes from hardEdges", () => {
    const lesson = findLesson("little", "math", "estimate-first")!;
    const card = sittingCardForLesson(lesson);
    assert.deepEqual(card.refuse, lesson.hardEdges);
  });

  it("next is same-unit only", () => {
    const stoic = findLesson("little", "philosophy", "circle-you-control")!;
    const expected = nextInUnit(stoic)?.slug ?? null;
    assert.equal(sittingCardForLesson(stoic).next, expected);
    const math = findLesson("little", "math", "estimate-first")!;
    assert.equal(sittingCardForLesson(math).next, nextInUnit(math)?.slug ?? null);
  });

  it("does not embed pairingLine or child identity", () => {
    const lesson = findLesson("little", "math", "estimate-first")!;
    const card = sittingCardFor(lesson, null);
    const blob = JSON.stringify(card);
    assert.equal("pairingLine" in card, false);
    assert.equal(blob.includes(lesson.hermes.pairingLine), false);
    for (const banned of ["Willow", "Juniper", "Cedar", "Rowan", "child name"]) {
      assert.equal(blob.includes(banned), false, `card leaked ${banned}`);
    }
  });
});

describe("pairing payload — USER.md line, not pairingLine", () => {
  it("userMdLine is unit + slug + version tag", () => {
    const lesson = findLesson("little", "math", "estimate-first")!;
    const line = userMdLineFor(lesson);
    assert.equal(
      line,
      `Optional: currently working on WisdomForge sitting: ${lesson.unit} — ${lesson.slug}. [${contentHashTag(lesson)}]`,
    );
    assert.equal(line.includes(lesson.hermes.pairingLine), false);
  });

  it("payload is card + userMdLine only", () => {
    const lesson = findLesson("little", "math", "estimate-first")!;
    const payload = pairingCopyPayload(lesson, null);
    assert.deepEqual(Object.keys(payload).sort(), ["card", "userMdLine"]);
    assert.equal("pairingLine" in payload, false);
    assert.equal("openingPrompt" in payload, false);
  });
});

describe("flagship cards — non-philosophy first proofs", () => {
  const flagships: [string, string, string][] = [
    ["little", "math", "estimate-first"],
    ["little", "ai", "tool-not-mind"],
    ["little", "science", "hypothesis-first"],
    ["little", "english", "you-write-it"],
    ["little", "art", "hand-before-generate"],
  ];

  for (const [band, subject, slug] of flagships) {
    it(`${band}/${subject}/${slug} emits a complete card`, () => {
      const lesson = findLesson(band, subject, slug);
      assert.ok(lesson, `${band}/${subject}/${slug} missing`);
      assertCompleteCard(sittingCardForLesson(lesson!), `${band}/${subject}/${slug}`);
    });
  }
});

describe("every Assist-ready sitting projects", () => {
  it("sittingCardForLesson does not throw and has the contract keys", () => {
    assert.ok(lessons.length > 0);
    const failures: string[] = [];
    for (const lesson of lessons) {
      try {
        const card = sittingCardForLesson(lesson);
        const keys = Object.keys(card).sort().join(",");
        if (keys !== [...CARD_KEYS].sort().join(",")) {
          failures.push(`${lesson.band}/${lesson.subject}/${lesson.slug} keys`);
        }
        if (!card.version.startsWith("v:1:")) {
          failures.push(`${lesson.band}/${lesson.subject}/${lesson.slug} version`);
        }
      } catch (err) {
        failures.push(
          `${lesson.band}/${lesson.subject}/${lesson.slug}: ${(err as Error).message}`,
        );
      }
    }
    assert.deepEqual(failures, []);
  });
});


