export const BAND_IDS = ["little", "young", "emerging", "adult"] as const;
export type BandId = (typeof BAND_IDS)[number];

export const SUBJECT_IDS = [
  "ai",
  "thinking",
  "philosophy",
  "math",
  "science",
  "english",
  "history",
  "art",
  "cs",
  "language",
] as const;
export type SubjectId = (typeof SUBJECT_IDS)[number];

export type Ritual =
  | "ask-grown-up"
  | "talk-about-it"
  | "practice-reflect"
  | "companion";

export type UnitStatus = "ready" | "in-forge";

export type Activity = {
  title: string;
  minutes: number;
  steps: string[];
};

export type Lesson = {
  slug: string;
  subject: SubjectId;
  band: BandId;
  unit: string;
  number: number;
  title: string;
  dek: string;
  durationMin: number;
  ritual: Ritual;
  objective: string;
  parentBriefing: string;
  hardEdges: string[];
  reading: { heading: string; body: string }[];
  bigIdea: string;
  tryThis: Activity[];
  dinnerQuestion: string;
  transfer: { label: string; note: string }[];
  ifTheySay: { heard: string; reply: string }[];
  integrity: string;
  aiLab: {
    setup: string;
    childDoes: string;
    evaluate: string[];
  };
  hermes: {
    allowedTools: string[];
    pairingLine: string;
    prompt: string;
  };
};

export type SubjectDef = {
  id: SubjectId;
  name: string;
  short: string;
  promise: string;
  aiSpine: string;
};

export type BandDef = {
  id: BandId;
  ages: string;
  name: string;
  ritual: Ritual;
  sitting: string;
  promise: string;
  aiRule: string;
  hermes: string;
};

export type PathDef = {
  id: string;
  name: string;
  promise: string;
  subjects: SubjectId[];
  startSlug: string;
};

export type CatalogUnit = {
  id: string;
  subject: SubjectId;
  title: string;
  status: UnitStatus;
  bands: BandId[];
  weeks: string;
  blurb: string;
};

export function lessonKey(lesson: Pick<Lesson, "band" | "subject" | "slug">) {
  return `${lesson.band}/${lesson.subject}/${lesson.slug}`;
}
