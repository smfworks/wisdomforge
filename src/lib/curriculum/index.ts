import { aiLessons } from "./lessons/ai";
import { aiMoreLessons } from "./lessons/ai-more";
import { aiAgents2Lessons } from "./lessons/ai-agents-2";
import { csEvalLessons } from "./lessons/cs-eval";
import { thinkingLessons } from "./lessons/thinking";
import { thinkingBiasLessons } from "./lessons/thinking-bias";
import { philosophyLessons } from "./lessons/philosophy";
import { greeksLessons } from "./lessons/greeks";
import { englishRhetoricLessons } from "./lessons/english-rhetoric";
import { scienceMeasureLessons } from "./lessons/science-measure";
import { mathProofLessons } from "./lessons/math-proof";
import { artTasteLessons } from "./lessons/art-taste";
import { historyCivicsLessons } from "./lessons/history-civics";
import { languageDeepLessons } from "./lessons/language-deep";
import { aiHistoryLessons } from "./lessons/ai-history";
import { fathersLessons } from "./lessons/fathers";
import { magnaCartaLessons } from "./lessons/civics-magna-carta";
import { constitutionLessons } from "./lessons/civics-constitution";
import { declarationLessons } from "./lessons/civics-declaration";
import { coreLessons } from "./lessons/core";
import type { BandId, Lesson, SubjectId } from "./types";
import { lessonKey } from "./types";

export * from "./types";
export { bands, bandById } from "./bands";
export { subjects, subjectById, paths, pathById } from "./subjects";
export { catalog } from "./catalog";
export { lessonKey };
export {
  validateLesson,
  validateAllLessons,
  assertLessonsReady,
  type GateReport,
  type GateFinding,
  type GateSeverity,
} from "./gate";

const groups: Lesson[][] = [
  aiLessons,
  aiMoreLessons as Lesson[],
  aiAgents2Lessons as Lesson[],
  csEvalLessons as Lesson[],
  thinkingLessons as Lesson[],
  thinkingBiasLessons as Lesson[],
  philosophyLessons as Lesson[],
  greeksLessons as Lesson[],
  englishRhetoricLessons as Lesson[],
  scienceMeasureLessons as Lesson[],
  mathProofLessons as Lesson[],
  artTasteLessons as Lesson[],
  historyCivicsLessons as Lesson[],
  languageDeepLessons as Lesson[],
  aiHistoryLessons as Lesson[],
  fathersLessons as Lesson[],
  magnaCartaLessons as Lesson[],
  constitutionLessons as Lesson[],
  declarationLessons as Lesson[],
  coreLessons as Lesson[],
];

const merged = new Map<string, Lesson>();
for (const group of groups) {
  for (const lesson of group) {
    if (!lesson) continue;
    merged.set(lessonKey(lesson), lesson);
  }
}

export const lessons: Lesson[] = [...merged.values()];

export function lessonsByBand(band: BandId) {
  return lessons
    .filter((l) => l.band === band)
    .sort((a, b) => a.subject.localeCompare(b.subject) || a.number - b.number);
}

export function lessonsBySubject(subject: SubjectId, band?: BandId) {
  return lessons
    .filter((l) => l.subject === subject && (!band || l.band === band))
    .sort((a, b) => a.number - b.number);
}

export function findLesson(band: string, subject: string, slug: string) {
  return lessons.find((l) => l.band === band && l.subject === subject && l.slug === slug);
}

export function nextInUnit(lesson: Lesson) {
  return lessons
    .filter(
      (l) =>
        l.band === lesson.band &&
        l.subject === lesson.subject &&
        l.unit === lesson.unit,
    )
    .sort((a, b) => a.number - b.number)
    .find((l) => l.number === lesson.number + 1);
}

export function firstLesson(band: BandId, subject: SubjectId) {
  return lessonsBySubject(subject, band)[0];
}

export function readySubjectsForBand(band: BandId): SubjectId[] {
  return [...new Set(lessonsByBand(band).map((l) => l.subject))];
}