# P1 Interface Contract — "Light this sitting" Bridge

**Owner:** Airia  
**Status:** LOCKED — gold-gated by Aiona, all sides signed off  
**Date:** 2026-08-25  
**Amended:** 2026-08-25 — separated display-only `pairingLine` from constructed USER.md line  
**Locked:** 2026-08-25 — William validated, Liam signed off, Aiona gold-gated (7/8 conditional → final pass)

---

## Purpose

Define the exact data shape the lesson-view bridge emits so three sides build in parallel without post-deploy mismatch:

1. **Airia** — bridge component on each sitting page emits the data
2. **William** — kids repo skill files must match the generated prompts
3. **Liam** — frontend template must render whatever the component outputs

---

## Foundational decision: emit the existing `Lesson.hermes` shape

Harry flagged this correctly. Every `Lesson` object in the academy curriculum already carries a `hermes` field:

```typescript
hermes: {
  allowedTools: string[];
  pairingLine: string;
  prompt: string;
}
```

The bridge component reads from `lesson.hermes` directly. It does **not** reconstruct the pairing line or prompt from other fields. The `hermesFor(band, title)` factory in `factory.ts` already generates this shape per band.

**The bridge adds presentation and ritual context around the existing data — it does not invent a new output shape.**

---

## Bridge output shape (TypeScript)

```typescript
type SittingBridge = {
  /** The band this sitting belongs to */
  band: BandId;

  /** From lesson.hermes.pairingLine — DISPLAY-ONLY context shown on the page, never pasted into USER.md */
  pairingLine: string;

  /** Constructed from lesson.unit + lesson.slug — the actual copy-paste target for the child profile's USER.md */
  userMdLine: string;

  /** From lesson.hermes.prompt — the opening prompt for the parent's adult profile */
  openingPrompt: string;

  /** From lesson.hermes.allowedTools — what tools the guide may use */
  allowedTools: string[];

  /** The band's ritual name (from BandDef.ritual) */
  ritual: Ritual;

  /** Human-readable ritual label (e.g., "Ask a Grown-Up") */
  ritualLabel: string;

  /** The band's ritual instruction (from BandDef.hermes) */
  ritualReminder: string;

  /** The sitting's slug for the USER.md reference format */
  sittingRef: string;

  /** The unit title for the USER.md reference format */
  unitTitle: string;
};
```

### Field sources

| Field | Source | Example |
|-------|--------|---------|
| `band` | `lesson.band` | `"emerging"` |
| `pairingLine` | `lesson.hermes.pairingLine` | `"Currently reading WisdomForge lesson: The Category Error."` |
| `userMdLine` | constructed: `"Optional: currently working on WisdomForge sitting: " + lesson.unit + " — " + lesson.slug + "."` | `"Optional: currently working on WisdomForge sitting: Education in the Age of AI — the-category-error."` |
| `openingPrompt` | `lesson.hermes.prompt` | `"You are a WisdomForge emerging guide sitting beside the lesson \"The Category Error\". The lesson is the text. You are the guide. Hint-first. Do not recite..."` |
| `allowedTools` | `lesson.hermes.allowedTools` | `["conversation", "optional parent-approved files"]` |
| `ritual` | `lesson.ritual` (or `BandDef.ritual`) | `"practice-reflect"` |
| `ritualLabel` | `ritualLabel[lesson.ritual]` (from `lib/labels.ts`) | `"Practice/Reflect"` |
| `ritualReminder` | `bandById(lesson.band).hermes` | `"Real argument. Practice. Reflect. Chat. Optional narrow search or school files. Not an adult team agent."` |
| `sittingRef` | `lesson.slug` | `"the-category-error"` |
| `unitTitle` | `lesson.unit` | `"Education in the Age of AI"` |

---

## USER.md pairing format

The bridge generates a copy-paste block for the child's USER.md. This is the **`userMdLine`** field, constructed from `lesson.unit` + `lesson.slug`:

```
Optional: currently working on WisdomForge sitting: {unitTitle} — {sittingRef}.
```

**Example:**
```
Optional: currently working on WisdomForge sitting: Education in the Age of AI — the-category-error.
```

This matches the existing `wisdomforge-ritual` skill's "Optional sitting reference" section, which expects: `"Unit Title — sitting-slug"`. The kids repo already handles this format.

**`lesson.hermes.pairingLine` is NOT the USER.md line.** It is a display-only context string (`"Currently reading WisdomForge lesson: {title}."`) shown on the sitting page as a human-readable summary. It is never pasted into any file. The two serve different purposes and must not be conflated.

---

## Opening prompt format

The bridge generates a copy-paste block for the parent's adult profile. Format (directly from `lesson.hermes.prompt`):

```
{openingPrompt}
```

No wrapper, no prefix. The prompt is self-contained — it tells the guide the band, the lesson title, the behavioral constraints, and the warmth boundary.

---

## Ritual reminder format

The bridge displays the band's ritual reminder (from `BandDef.hermes`) as a visible callout on the sitting page, shown alongside the pairing line and opening prompt. This is **display-only** — it is not pasted into any file. It reminds the parent what the band's ritual requires before they start the session.

---

## Component contract: `<SittingBridge />`

### Location
`src/components/sitting-bridge.tsx` — new component, rendered inside `LessonView` replacing the current `GuidePanel`'s "Pair with Hermes" section (lines 108-115 of `guide-panel.tsx`). The AI lab activity panel above it (lines 47-106) stays as-is.

### Props
```typescript
{ lesson: Lesson }
```

### Behavior
1. Reads all fields from `lesson.hermes`, `lesson.band`, `lesson.ritual`, `lesson.unit`, and `lesson.slug`.
2. Derives `ritualLabel` from `lib/labels.ts` and `ritualReminder` from `bandById(lesson.band).hermes`.
3. Constructs `userMdLine` from `lesson.unit` + `lesson.slug` (NOT from `lesson.hermes.pairingLine`).
4. Renders four elements:
   - **Display pairing line** (`lesson.hermes.pairingLine`) — shown as context text, not copyable
   - **USER.md line** (`userMdLine`) — copy-paste block for the child profile
   - **Opening prompt** (`lesson.hermes.prompt`) — copy-paste block for the parent's adult profile
   - **Ritual reminder** (`ritualReminder`) — display-only callout, not copyable
5. Each copy block has a "Copy" button (reuse the clipboard pattern from `guide-panel.tsx`).
6. Shows `allowedTools` as a list under the opening prompt.
7. Shows the ritual label as a badge.
8. Non-negotiables displayed as a footnote: no child PII, fresh profile only, hint-first, user-started.

### What the component does NOT do
- Does not call any AI endpoint
- Does not auto-start a session
- Does not collect child data
- Does not render a chat interface (that stays on the existing `GuidePanel` which is display-only in Phase 1)

---

## William's side: skill file alignment

The kids repo skill files already expect:
- `pairingLine` → USER.md "currently working on" format
- `prompt` → the guide's opening instructions
- `allowedTools` → the tool list in the skill's frontmatter

**No changes needed to existing skill files.** The bridge emits the `userMdLine` constructed from `lesson.unit` + `lesson.slug` in the `"Unit Title — sitting-slug"` format that `wisdomforge-ritual` already parses. `lesson.hermes.pairingLine` is display-only and never reaches the kids repo. William's new subject-aligned skills should follow the same pattern — they receive the band and sitting context through the USER.md `userMdLine`, not through `pairingLine`.

The one thing William should verify: the 7 new subject-aligned skills must accept the same USER.md sitting reference format (`"Unit Title — sitting-slug"`) that `wisdomforge-ritual` already parses. If a subject skill needs subject-specific context beyond what the opening prompt provides, that goes in the skill file's own procedure, not in the bridge output.

---

## Liam's side: frontend template

The frontend renders four elements inside the bridge component:

1. **"Light this sitting"** header with the ritual badge
2. **Display pairing line** — `lesson.hermes.pairingLine` shown as context text (not copyable)
3. **Copy blocks** — two copy-paste areas (USER.md `userMdLine`, opening `prompt`) + tools list + ritual reminder callout
4. **Non-negotiables footnote**

Liam builds the template to render `SittingBridge` fields. The component is self-contained — it takes a `Lesson` prop and derives everything else. Liam does not need to pass additional props or shape data.

### CSS/styling
Follow the existing forge theme: `bg-raised` cards, `text-accent` headers, `shadow-[var(--shadow-border)]` borders, `font-display` for headings. Match the visual language of the existing `GuidePanel` and `parentBriefing` sections.

---

## Band-switching logic

The bridge does NOT support band switching. It renders for the current lesson's band only. Band switching happens at the route level (`/learn/[band]/[subject]/[slug]`). If a parent wants a different band, they navigate to that band's sitting page — the bridge renders the correct fields for that band automatically.

This is deliberate: each band has its own lesson variant with its own `hermes` field. There is no "switch" — there are separate lessons.

---

## Aiona's gold gate checklist

Before lock, Aiona verifies:
- [ ] Bridge output matches `Lesson.hermes` shape exactly (no new fields invented)
- [ ] `userMdLine` constructed from `lesson.unit` + `lesson.slug` matches `wisdomforge-ritual`'s `"Unit Title — sitting-slug"` format
- [ ] `lesson.hermes.pairingLine` treated as display-only, never emitted as the USER.md line
- [ ] Opening prompt is the verbatim `lesson.hermes.prompt` string
- [ ] Band IDs match between academy (`bands.ts`) and kids repo (`BANDS.md`)
- [ ] Ritual labels match between `lib/labels.ts` and kids repo
- [ ] No child PII collected or transmitted
- [ ] No AI endpoint called from the component
- [ ] Non-negotiables from the Phase 1 data model are preserved

---

## Lock procedure

1. **Airia** posts this spec → ✅ (initial draft posted)
2. **William** validates against kids repo skill files → ✅ (one inconsistency found, resolved in amendment)
3. **Liam** validates against frontend template needs → ✅ (clean, one question answered by Aiona: bridge replaces "Pair with Hermes" section only, not full GuidePanel)
4. **Airia** amends spec to resolve pairing-line inconsistency → ✅ (this amendment)
5. **William + Liam** re-validate against amended spec → ✅ (William validated, Liam signed off)
6. **Aiona** gold-gates for cross-repo consistency → ✅ (7/8 conditional → final pass)
7. **Implementation** — Airia built `SittingBridge` component (commit 8423ec0), `tsc --noEmit` clean → ✅
8. Contract LOCKED 2026-08-25. P1 unblocked for all three sides.

---

*This spec is the contract. Once locked, changes require a written amendment posted to the group chat and re-validated by all three sides.*