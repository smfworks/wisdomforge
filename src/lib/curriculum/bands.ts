import type { BandDef } from "./types";

export const bands: BandDef[] = [
  {
    id: "little",
    ages: "5–10",
    name: "Little Thinkers",
    ritual: "ask-grown-up",
    sitting: "15–20 minutes. A grown-up in the room.",
    promise:
      "Stories, one idea, one small act. AI is a tool in the room — never a secret friend.",
    aiRule:
      "Conversation only. Hint, then stop. No homework answers. No names, photos, or school. If it feels confusing or unkind, ask a grown-up.",
    hermes:
      "One step. A short story. Ask a Grown-Up. Conversation only. Do not clone an adult profile.",
  },
  {
    id: "young",
    ages: "11–14",
    name: "Young Minds",
    ritual: "talk-about-it",
    sitting: "25–30 minutes.",
    promise:
      "Scenarios, projects, and honest talk. Learn to catch a confident wrong answer — including your own.",
    aiRule:
      "Hint, then example. Never a ghostwriter. Optional local voice or image understanding if a parent turns it on. Talk About It before you paste anything.",
    hermes:
      "Hint, then example. Talk About It. Chat. Optional local voice-to-text. Optional image understanding.",
  },
  {
    id: "emerging",
    ages: "15–18",
    name: "Emerging Adults",
    ritual: "practice-reflect",
    sitting: "35–45 minutes.",
    promise:
      "Real argument. Agent design. Integrity you can defend. Philosophy as preparation for a world that will not grade your character.",
    aiRule:
      "You write. The guide critiques. Optional narrow search or school files a parent approves. Not an adult team agent. Cite what you used.",
    hermes:
      "Real argument. Practice. Reflect. Chat. Optional narrow search or school files. Not an adult team agent.",
  },
  {
    id: "adult",
    ages: "Adult",
    name: "Lifelong Learners",
    ritual: "companion",
    sitting: "40 minutes, or a 5-minute parent preview.",
    promise:
      "Full depth. The operating model: inspect, test, refuse. Teach without handing a child your own agent.",
    aiRule:
      "You are the operator. Child profiles stay fresh, band-locked, and tool-poor. Official Hermes docs win if a command goes stale. Never clone your profile into a child's.",
    hermes:
      "Adult profile is the workshop. Child profiles are separate. Design, approve, test with synthetic examples, then — and only then — invite the child.",
  },
];

export function bandById(id: string) {
  return bands.find((b) => b.id === id);
}
