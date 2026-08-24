import type { PathDef, SubjectDef } from "./types";

export const subjects: SubjectDef[] = [
  {
    id: "ai",
    name: "Autonomous AI",
    short: "The spine",
    promise: "What an agent is, what it is not, and how to stay the operator.",
    aiSpine:
      "Every sitting practices the rule: try first, hint second, evaluate always, parent in the loop.",
  },
  {
    id: "thinking",
    name: "Critical Thinking",
    short: "The filter",
    promise: "Claims, counterclaims, and what would change your mind.",
    aiSpine:
      "Treat every model output as a classmate's draft: interesting, unchecked, not a source.",
  },
  {
    id: "philosophy",
    name: "Wisdom & Philosophy",
    short: "The forge",
    promise: "The Stoics and the examined life, rewritten for the age in the chair.",
    aiSpine:
      "The booklet is the text. The guide asks; it does not recite. Inner freedom is not an app setting.",
  },
  {
    id: "math",
    name: "Mathematics",
    short: "Number",
    promise: "Estimate, show the method, then ask a tool to check the path — never the soul of the work.",
    aiSpine:
      "AI may review a method you already wrote. It may not be the first hand that touches the problem.",
  },
  {
    id: "science",
    name: "Science",
    short: "Nature",
    promise: "Hypothesis before search. The universe is not a chatbot.",
    aiSpine:
      "Write the guess and the test. Then, if you ask a model, hunt for what would prove it wrong.",
  },
  {
    id: "english",
    name: "English",
    short: "Letters",
    promise: "You write the draft. The guide is an editor who asks questions, not an author with your name on it.",
    aiSpine:
      "No hidden AI homework. If a sentence isn't yours, it doesn't go in the folder.",
  },
  {
    id: "history",
    name: "History",
    short: "Then",
    promise: "Primary sources first. Summaries — human or machine — are claims.",
    aiSpine:
      "A model that compresses the past will flatten the people in it. Check the source.",
  },
  {
    id: "art",
    name: "Art",
    short: "Make",
    promise: "Hands before generate. Taste is a muscle. Tools are not a substitute for seeing.",
    aiSpine:
      "Make something ugly on purpose. Then discuss what a generator averages away.",
  },
  {
    id: "cs",
    name: "Computer Science",
    short: "Systems",
    promise: "Specify the agent: soul, tools, refuse-list. Code is permission made explicit.",
    aiSpine:
      "Autonomy is a design choice. If a tool is on, you chose it. If it is off, that is the lesson.",
  },
  {
    id: "language",
    name: "World Languages",
    short: "Voice",
    promise: "Say it yourself. A model can drill; it cannot take the exam of being understood.",
    aiSpine:
      "Practice partner, not ghost-speaker. Record your own mouth. The guide waits.",
  },
];

export const paths: PathDef[] = [
  {
    id: "age-of-ai",
    name: "Education in the Age of AI",
    promise: "The spine: autonomous use, integrity, and a mind that can refuse a fluent wrong answer.",
    subjects: ["ai", "thinking", "cs"],
    startSlug: "tool-not-mind",
  },
  {
    id: "character",
    name: "Character",
    promise: "Agency, anger, time, and duty — the Stoic year, practiced in the room.",
    subjects: ["philosophy", "thinking"],
    startSlug: "circle-you-control",
  },
  {
    id: "letters",
    name: "Letters & Worlds",
    promise: "Write, read sources, speak. The human work that models compress.",
    subjects: ["english", "history", "language"],
    startSlug: "you-write-it",
  },
  {
    id: "number-nature",
    name: "Number & Nature",
    promise: "Estimate, hypothesize, measure. Tools after the mind has moved.",
    subjects: ["math", "science"],
    startSlug: "estimate-first",
  },
  {
    id: "maker",
    name: "Maker",
    promise: "Hands, systems, and taste. Generate last.",
    subjects: ["art", "cs"],
    startSlug: "hand-before-generate",
  },
];

export function subjectById(id: string) {
  return subjects.find((s) => s.id === id);
}

export function pathById(id: string) {
  return paths.find((p) => p.id === id);
}
