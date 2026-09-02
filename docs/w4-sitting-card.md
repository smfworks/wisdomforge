# W4 sitting card

**Owner:** Harry  
**Status:** Schema live. Pair button is Liam.  
**Board:** 2026-09-02 counter-proposal.

## Contract

The card is a **projection of `Lesson`**, not a second curriculum. William does not rewrite sittings.

```
band | subject | slug | version | title | big_idea | try_this | if_they_say | dinner | refuse | ritual_close | next
```

- `version` = `contentHashTag(lesson)` (`v:1:{djb2 hex}`). Same tag already on the USER.md line.
- `try_this` = Try This **steps** only. Not reading body. Not a booklet dump.
- `refuse` = `hardEdges`.
- `next` = next slug in the **same unit**, or `null`.
- **Not on the card:** `hermes.pairingLine` (display-only), opening prompt, child identity, booklet text.

## Copy payload for Pair this sitting

```ts
import { sittingCardForLesson, userMdLineFor } from "@/lib/curriculum";
import { pairingCopyPayload } from "@/lib/curriculum/sitting-card";

// Prefer:
pairingCopyPayload(lesson, nextInUnit(lesson)?.slug ?? null)
// → { card, userMdLine }
```

`userMdLine` is constructed from `unit + slug + [version]`. Never from `pairingLine`.

Child profile reads **only the current card**. Version change invalidates an old card — compare `card.version` to the sitting page.

## Proof

`npx tsx --test scripts/test-sitting-card.mts`

- Little *Guess, Then Count* (`math/estimate-first`) and *Circle You Control* emit the **same keys**, both complete.
- Also: `tool-not-mind`, `hypothesis-first`, `you-write-it`, `hand-before-generate`.
- Every Assist-ready sitting projects without throw.

Feed: `public/sitting-cards.json` (prebuild). Fetch by `band + subject + slug`.
