import type { Book, BookChapter } from "@/lib/curriculum/books";
import { figureDisplayName } from "@/lib/curriculum/booklets";
import { bandById } from "@/lib/curriculum/bands";
import { subjectById } from "@/lib/curriculum/subjects";
import type { Lesson } from "@/lib/curriculum/types";
import { ORG_NAME, SITE_ORIGIN, SITE_UPDATED, absoluteUrl } from "@/lib/site";

export const MICHAEL_NAME = "Michael Gannotti";
export const MICHAEL_ROLE = "Principal AI Solutions Engineer";

const QUESTION_HEADING =
  /^(what|why|how|when|where|who|which|can|do|does|is|are|should|will|did)\b/i;

export function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function isQuestionHeading(text: string): boolean {
  const heading = text.trim();
  return heading.endsWith("?") || QUESTION_HEADING.test(heading);
}

export function formatSiteUpdated(iso: string = SITE_UPDATED): string {
  const [year, month, day] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

/** Name before a parenthetical role note: "Harry (research)" → "Harry". */
export function authorDisplayName(raw: string): string {
  return raw.replace(/\s*\([^)]*\)\s*/g, " ").replace(/\s+/g, " ").trim();
}

export function personAuthor(raw: string): Record<string, string> {
  const name = authorDisplayName(raw);
  if (name === MICHAEL_NAME) {
    return {
      "@type": "Person",
      "@id": `${SITE_ORIGIN}/#founder`,
      name,
      url: `${SITE_ORIGIN}/about`,
      jobTitle: MICHAEL_ROLE,
    };
  }
  return { "@type": "Person", name };
}

export function publisherOrganization(): Record<string, string> {
  return {
    "@type": "Organization",
    "@id": `${SITE_ORIGIN}/#organization`,
    name: ORG_NAME,
    url: SITE_ORIGIN,
  };
}

export function bookLead(book: Pick<Book, "title" | "subtitle">): string {
  const subtitle = book.subtitle.replace(/\s+/g, " ").trim().replace(/\.+$/, "");
  if (/\bbeginners?\b/i.test(book.title)) {
    const topic = subtitle.replace(/^your complete guide to\s+/i, "").toLowerCase().replace(/\bai\b/g, "AI");
    return `${book.title} is a beginner's guide to ${topic}.`;
  }
  return `${book.title} is a WisdomForge book: ${subtitle}.`;
}

function firstSentence(text: string): string {
  const match = text.match(/^[\s\S]*?[.!?](?=\s|$)/);
  const sentence = (match?.[0] ?? text).trim();
  if (/[.!?]$/.test(sentence)) return sentence;
  return `${sentence}.`;
}

function fitWordRange(parts: string[], min = 40, max = 60): string {
  const clean = parts.map((part) => part.trim()).filter(Boolean);
  let count = clean.length;
  while (count > 1 && wordCount(clean.slice(0, count).join(" ")) > max) count -= 1;
  let text = clean.slice(0, count).join(" ");
  if (wordCount(text) > max) {
    text = clean[0];
  }
  const pads = [
    "Read that chapter before you ask a model to settle it.",
    "You keep the decision.",
    "The guide, if you use one, does not close it for you.",
    "The disagreement stays on the page until you have read it.",
  ];
  for (const pad of pads) {
    if (wordCount(text) >= min) break;
    const next = `${text} ${pad}`;
    if (wordCount(next) <= max) text = next;
  }
  const words = text.split(/\s+/);
  if (words.length > max) {
    text = `${words.slice(0, max).join(" ").replace(/[,:;]+$/, "")}.`.replace(/\.+$/, ".");
  }
  return text.replace(/\s+/g, " ").trim();
}

/**
 * 40–60 word answer for a question-shaped chapter title.
 * Uses the book's own question and editorial rule. No dates, statistics, or sources are added.
 */
export function chapterDirectAnswer(book: Book, chapter: BookChapter): string {
  const principle = firstSentence(book.editorialPrinciple).replace(/\.$/, "");
  const asked = chapter.question.trim();
  const askedSentence = /[.!?]$/.test(asked) ? asked : `${asked}.`;
  const voices = chapter.voices
    .map((slug) => book.figures.find((figure) => figure.slug === slug)?.name ?? figureDisplayName(slug))
    .filter(Boolean);
  const voiceSentence = voices.length > 0 ? `The voices are ${voices.join(", ")}.` : "";

  if (/^how to use\b/i.test(chapter.title)) {
    return fitWordRange([
      `Use ${book.title} one chapter at a time.`,
      "On a Tuesday, read this chapter at the table and stop when the hour is done.",
      `${principle}.`,
      "A model does not take the hour.",
      "You do.",
      "The guide, if you use one, does not decide the chapter for you.",
    ]);
  }

  return fitWordRange([
    `${book.title} leaves this chapter open.`,
    askedSentence,
    `The rule is: ${principle}.`,
    voiceSentence,
    "Read it before a model summarizes it.",
    "You keep the decision.",
  ]);
}

export function bookQuestionAnswers(book: Book): { question: string; answer: string }[] {
  return book.chapters
    .filter((chapter) => isQuestionHeading(chapter.title))
    .map((chapter) => ({
      question: chapter.title,
      answer: chapterDirectAnswer(book, chapter),
    }));
}

export type Crumb = { name: string; path: string };

export function breadcrumbList(items: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqPage(qas: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: qas.map((qa) => ({
      "@type": "Question",
      name: qa.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: qa.answer,
      },
    })),
  };
}

function bookImage(book: Book): string {
  return absoluteUrl(book.coverImage ?? "/images/wisdomforge-hero.png");
}

/** Books share the site revision date. The catalog has no separate imprint day. */
export function bookJsonLd(book: Book) {
  const path = `/books/${book.slug}`;
  const url = absoluteUrl(path);
  const authors = (book.authors.length > 0 ? book.authors : [MICHAEL_NAME]).map(personAuthor);
  const qas = bookQuestionAnswers(book);
  const graph: object[] = [
    {
      "@type": "Book",
      "@id": `${url}#book`,
      url,
      name: book.title,
      description: book.summary,
      image: bookImage(book),
      inLanguage: "en",
      datePublished: SITE_UPDATED,
      dateModified: SITE_UPDATED,
      author: authors.length === 1 ? authors[0] : authors,
      publisher: publisherOrganization(),
    },
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Books", path: "/books" },
      { name: book.title, path },
    ]),
  ];
  if (qas.length > 0) graph.push(faqPage(qas));
  return { "@context": "https://schema.org", "@graph": graph };
}

export function aboutBreadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbList([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
    ],
  };
}

export function learningResourceJsonLd(lesson: Lesson) {
  const band = bandById(lesson.band);
  const subject = subjectById(lesson.subject);
  const path = `/learn/${lesson.band}/${lesson.subject}/${lesson.slug}`;
  const url = absoluteUrl(path);
  const description = lesson.dek.trim() || lesson.objective;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LearningResource", "Article"],
        "@id": `${url}#resource`,
        url,
        name: lesson.title,
        headline: lesson.title,
        description,
        inLanguage: "en",
        image: absoluteUrl("/images/wisdomforge-hero.png"),
        datePublished: SITE_UPDATED,
        dateModified: SITE_UPDATED,
        author: personAuthor(MICHAEL_NAME),
        publisher: publisherOrganization(),
        mainEntityOfPage: url,
        learningResourceType: "Lesson",
      },
      breadcrumbList([
        { name: "Home", path: "/" },
        { name: band?.name ?? lesson.band, path: `/ages/${lesson.band}` },
        { name: subject?.name ?? lesson.subject, path: `/subjects/${lesson.subject}` },
        { name: lesson.title, path },
      ]),
    ],
  };
}

export const HOW_IT_WORKS_ANSWER =
  "You start on this website. Pick an age, pick a subject, and do one sitting. Print the booklet when the lesson has one. No account is required, and nothing about your child is stored here. Hermes guides are optional and you run them. A parent profile preps the hour. A child profile is separate, and you approve every session.";

export const ROWAN_DEMO_ANSWER =
  "Do Not Hand Them Your Agent is a sample transcript for Rowan, the adult band, in Autonomous AI. The guide hints first and does not do the student's work. No real child is in the demo. Read the transcript before you pair a Hermes profile. You stay the operator, and the activity still comes before any AI.";

export function homeQuestionAnswer(heading: string): string | null {
  if (heading === "How it works") return HOW_IT_WORKS_ANSWER;
  if (heading === "Do Not Hand Them Your Agent") return ROWAN_DEMO_ANSWER;
  return null;
}

export const HOME_FAQS: { question: string; answer: string }[] = [
  {
    question: "What is WisdomForge?",
    answer:
      "WisdomForge is a parent-operated academy for education in the age of AI. Ten subjects and four ages are on this site. The booklet is the text. The parent is the teacher. A Hermes guide is optional and is not a hosted kids chatbot. The site does not make AI safe. You can start a sitting tonight with no account.",
  },
  {
    question: "Who writes WisdomForge?",
    answer:
      "Michael Gannotti directs WisdomForge and is the person you can write to. Aiona Edge oversees what ships. Harry researches, William writes sittings and books, Airia typesets, Liam builds this site, and Gabriel keeps the board. That Hermes AI team works under their oversight. Michael's name is the public byline on books and sittings.",
  },
  {
    question: "How often is WisdomForge updated?",
    answer:
      "Book and sitting pages show an Updated date. That date is October 31, 2026, the same revision the sitemap uses. Pages change when a manuscript or sitting is produced and checked against the live files. A status line does not make a page current. Read the Updated line on the page before you print.",
  },
  {
    question: "Is WisdomForge a chatbot for children?",
    answer:
      "WisdomForge is not a hosted kids chatbot. A sitting is a page on this website with a parent in the room. Optional Hermes profiles run on your machine, not as a service we host for children. A child profile is built fresh for that age, with fewer tools than yours, and you approve every session.",
  },
  {
    question: "How do I start a sitting?",
    answer:
      "Choose Start tonight's sitting, then pick an age: 5–10, 11–14, 15–18, or adult. You open one short lesson, about twenty to forty minutes. Switch subjects after that if you want a different hour. Print the booklet when the sitting has one. No account is required, and nothing about your child is stored here.",
  },
  {
    question: "Who operates the Hermes guide?",
    answer:
      "You operate the Hermes guide. The parent profile preps the sitting and talks to you, not to the child. The child profile is a separate one you build for their age. Do not copy an adult profile down. Setup and the profile kits are on the Hermes page, with the repositories linked from this site.",
  },
];

export function homeFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [faqPage(HOME_FAQS)],
  };
}
