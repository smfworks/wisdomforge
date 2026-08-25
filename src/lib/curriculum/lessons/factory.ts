import type { Activity, BandId, Lesson, Ritual, SubjectId } from "../types";

export const ALL_BANDS: BandId[] = ["little", "young", "emerging", "adult"];

export const ritualOf: Record<BandId, Ritual> = {
  little: "ask-grown-up",
  young: "talk-about-it",
  emerging: "practice-reflect",
  adult: "companion",
};

export const durationOf: Record<BandId, number> = {
  little: 18,
  young: 28,
  emerging: 40,
  adult: 32,
};

export const toolsOf: Record<BandId, string[]> = {
  little: ["conversation"],
  young: ["conversation", "optional local voice", "optional image understanding"],
  emerging: ["conversation", "optional parent-approved files"],
  adult: ["conversation", "design tools in the adult profile only"],
};

export function hermesFor(band: BandId, title: string): Lesson["hermes"] {
  return {
    allowedTools: toolsOf[band],
    pairingLine: `Currently reading WisdomForge lesson: ${title}.`,
    prompt: `You are a WisdomForge ${band} guide sitting beside the lesson "${title}". The lesson is the text. You are the guide. Hint-first. Do not recite. Do not write the work. Warm, not a friend. If the topic is hard or tender, point to a trusted adult.`,
  };
}

export type Variant = {
  title: string;
  dek: string;
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
  aiLab: Lesson["aiLab"];
};

export function expand(meta: {
  slug: string;
  subject: SubjectId;
  unit: string;
  number: number;
  bands?: BandId[];
  variants: Partial<Record<BandId, Variant>>;
}): Lesson[] {
  const bands = meta.bands ?? ALL_BANDS;
  return bands.map((band): Lesson => {
    const v = meta.variants[band];
    if (!v) {
      throw new Error(`Missing ${band} variant for ${meta.slug}`);
    }
    const lesson: Lesson = {
      slug: meta.slug,
      subject: meta.subject,
      band,
      unit: meta.unit,
      number: meta.number,
      durationMin: durationOf[band],
      ritual: ritualOf[band],
      title: v.title,
      dek: v.dek,
      objective: v.objective,
      parentBriefing: v.parentBriefing,
      hardEdges: v.hardEdges,
      reading: v.reading,
      bigIdea: v.bigIdea,
      tryThis: v.tryThis,
      dinnerQuestion: v.dinnerQuestion,
      transfer: v.transfer,
      ifTheySay: v.ifTheySay,
      integrity: v.integrity,
      aiLab: v.aiLab,
      hermes: hermesFor(band, v.title),
    };
    return lesson;
  });
}
