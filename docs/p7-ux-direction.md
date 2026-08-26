# P7 UX/Exposure Direction — Aiona to Liam

**Owner:** Aiona (UX strategy) → Liam (build)  
**Date:** 2026-08-25  
**Status:** Direction draft — Liam builds against this

---

## Problem

298 lessons, all 15+ fields populated. Content is not the gap — exposure is. A parent arriving at the site sees a flat catalog and a lesson page that buries the richest fields below the fold. The depth exists; the UX doesn't surface it.

---

## 1. Age-Band Landing Pages (`/ages/[band]`)

### Current state
The page lists sittings grouped by subject — title, sitting number, duration. No recommended path, no entry point for a parent who doesn't know where to start, no preview of what makes a sitting rich.

### Target

**Recommended starting path.** Each band page opens with a curated "Start here" card — one sitting we recommend as the entry point for that band, with a one-line reason why. This is editorial, not algorithmic. Aiona will assign the starting sitting per band:

| Band | Start here | Why |
|------|-----------|-----|
| little | AI · The Category Error | First encounter with "the AI doesn't always know" — sets the spine |
| young | Thinking · How to Think | Metacognition before any subject tool |
| emerging | Philosophy · Character — The Stoics | Real argumentation, band-appropriate weight |
| adult | AI · Education in the Age of AI | Frames the parent's role before they guide |

Liam — hardcode these as a `startHere` map in the page component. Aiona owns the assignments.

**Parent briefing preview.** Each sitting card in the list shows a 1-line excerpt of `parentBriefing` (first sentence, truncated) so a parent can scan what the sitting covers before clicking in. The full briefing is on the lesson page.

**"New to this band?" callout.** Below the "Start here" card, a short paragraph (2-3 sentences) explaining what the band's ritual means practically — e.g., for `little`: "A grown-up is in the room. The guide is a tool, not a friend. Fifteen minutes, hands and pencil." Pull from `BandDef.hermes` and `BandDef.aiRule`.

---

## 2. Library Page (`/library`)

### Current state
Flat list of all 23 catalog units. Subject, title, blurb, status, weeks, bands. No filter, no search, no grouping beyond the list.

### Target

**Subject filter chips.** Row of toggle chips at the top — "All", then one per subject (AI, Thinking, Philosophy, Math, Science, English, History, Art, CS, Language). Clicking filters the list. Client-side state, no server round-trip. Use the existing `subjectById` for labels.

**Band filter chips.** Second row — "All bands", then the four bands by name (Little Thinkers, Young Minds, Emerging Adults, Lifelong Learners). Filters on `unit.bands` array.

**Search input.** A text input that filters on unit title + blurb + subject name. Simple client-side `includes()` match — the heavy search index is for the research corpus, not the catalog. Keep it lightweight.

These three filters compose (AND logic). A parent can filter to "Math + emerging" and see exactly the units that serve that band.

**Unit card preview.** Each unit card gains a "First sitting" link — deep-link to the first sitting in the unit for the filtered band (or the default band if no band filter is active). This gives parents a one-click entry into the unit, not just the subject hub.

---

## 3. Lesson Page (`learn/[band]/[subject]/[slug]`)

### Current state
The richest page on the site, but the field order buries the parent's tools. Current order: briefing → objective → reading → big idea → try this → guide panel → dinner → ifTheySay → transfer → booklet → integrity.

`ifTheySay` is the field parents most need during a sitting — it tells them what their child will actually say and how to redirect — and it's below the fold, after the reading and try this.

### Target

**Reorder for parental utility.** The parent briefing and hard edges stay at the top (they read it first). Then:

1. Parent briefing + hard edges (current — keep open by default)
2. **"If they say" callout** — move up, place immediately after the briefing. This is the parent's field guide for the sitting. Style as a distinct callout box (`bg-surface`, accent left border) so it's visually separable from the reading flow.
3. Objective
4. Reading sections
5. Big idea
6. Try this
7. **Bridge component** (replaces GuidePanel's "Pair with Hermes" section — pending P1 lock)
8. Dinner table
9. Sits beside (transfer)
10. Booklet
11. Integrity

**`parentBriefing` as a visible card, not just a `<details>`.** Currently it's a collapsible `<details>` with `open`. Keep it open and styled as a prominent card — this is the parent's 5-minute read, not an optional expansion. The hard edges inside should use `text-accent` for the label to draw the eye.

**`tryThis` time preview.** Each try-this activity card already shows minutes. Add a total time estimate at the section header: "Try this · ~{sum of minutes} min total" so a parent knows the time commitment before reading the steps.

---

## 4. Subject Hub Pages (`/subjects/[subject]`)

### Current state
Not yet reviewed in detail — survey the page and flag if it's also flat-listing sittings without band context.

### Target
If it's flat, apply the same band-aware grouping as the age-band page: show sittings grouped by band with the "Start here" card for the subject's flagship sitting. A parent arriving from a subject page should see band context, not just a subject list.

---

## Design constraints

- **Forge theme only.** `bg-raised` cards, `text-accent` labels, `shadow-[var(--shadow-border)]` borders, `font-display` for headings. No new design tokens.
- **Client-side filters.** No new API routes for library filtering. The catalog is 23 units — client-side is instant and simple.
- **No new dependencies.** Use existing component patterns from `guide-panel.tsx` and `lesson-view.tsx`.
- **Mobile-first.** Filter chips wrap. Lesson page reordering must work on narrow screens.

---

## Build sequence (Liam)

1. Library page filters (chips + search) — standalone, no dependency
2. Lesson page field reorder + `ifTheySay` callout — standalone
3. Age-band landing page "Start here" cards + briefing previews — standalone
4. Subject hub page review + band-aware grouping if needed

All four are parallel-safe. None depend on P1 lock. Ship in this order if sequential, or parallel if you want to split.

---

## What Aiona owns

- "Start here" sitting assignments per band (table above — locked)
- Gold gate on all UX changes before deploy
- Final field order on lesson page (specified above — locked)
- Any design call that deviates from the forge theme

---

*This direction is the build contract for P7. Liam builds against it. Aiona gold-gates before deploy. Changes require an amendment posted to the room.*