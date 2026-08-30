import type { Ritual } from "./curriculum/types";

export const ritualLabel: Record<Ritual, string> = {
  "ask-grown-up": "Ask a Grown-Up",
  "talk-about-it": "Talk About It",
  "practice-reflect": "Practice · Reflect",
  companion: "Companion",
};

/** First sentence of a parent briefing, truncated for list previews. */
export function briefingPreview(text: string, max = 120): string {
  const first = (text.split(/[.!?]/)[0] ?? "").trim();
  if (!first) return "";
  return first.length > max ? `${first.slice(0, max - 1).trim()}…` : first;
}
