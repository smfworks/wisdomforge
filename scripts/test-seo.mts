/**
 * SEO / GEO / AEO structured data for books, sittings, and the homepage.
 *
 * Run: npx tsx --test scripts/test-seo.mts
 */
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { books } from "../src/lib/curriculum/books";
import { lessons } from "../src/lib/curriculum/index";
import { siteJsonLd } from "../src/components/site-json-ld";
import { ORG_NAME, ORG_SAME_AS, SITE_UPDATED } from "../src/lib/site";
import {
  HOME_FAQS,
  HOW_IT_WORKS_ANSWER,
  MICHAEL_ROLE,
  ROWAN_DEMO_ANSWER,
  bookJsonLd,
  bookLead,
  bookQuestionAnswers,
  chapterDirectAnswer,
  isQuestionHeading,
  learningResourceJsonLd,
  wordCount,
} from "../src/lib/seo";

const FORBIDDEN_PERSON_KEYS = ["worksFor", "affiliation", "alumniOf", "memberOf", "employer"];

function walk(value: unknown, visit: (node: Record<string, unknown>) => void) {
  if (Array.isArray(value)) {
    for (const item of value) walk(item, visit);
    return;
  }
  if (value && typeof value === "object") {
    const node = value as Record<string, unknown>;
    visit(node);
    for (const child of Object.values(node)) walk(child, visit);
  }
}

function typesOf(node: Record<string, unknown>): string[] {
  const raw = node["@type"];
  if (Array.isArray(raw)) return raw.map(String);
  if (typeof raw === "string") return [raw];
  return [];
}

describe("answer length", () => {
  it("keeps homepage answers in the 40–60 word band", () => {
    for (const text of [HOW_IT_WORKS_ANSWER, ROWAN_DEMO_ANSWER, ...HOME_FAQS.map((faq) => faq.answer)]) {
      const count = wordCount(text);
      assert.ok(count >= 40 && count <= 60, `${count} words: ${text}`);
    }
  });

  it("writes a 40–60 word answer under every question-shaped chapter title", () => {
    for (const book of books) {
      for (const chapter of book.chapters) {
        if (!isQuestionHeading(chapter.title)) continue;
        const answer = chapterDirectAnswer(book, chapter);
        const count = wordCount(answer);
        assert.ok(
          count >= 40 && count <= 60,
          `${book.slug} / ${chapter.title}: ${count} words\n${answer}`,
        );
        assert.match(answer, /[.!?]$/);
      }
    }
  });
});

describe("book lead", () => {
  it("opens with the title as one definition sentence", () => {
    for (const book of books) {
      const lead = bookLead(book);
      assert.ok(lead.startsWith(book.title), lead);
      assert.equal(lead.split(/[.!?]/).filter(Boolean).length, 1, lead);
      assert.ok(lead.endsWith("."));
      if (/\bbeginners?\b/i.test(book.title)) {
        assert.match(lead, /beginner's guide to/i);
      }
    }
  });
});

describe("Book JSON-LD", () => {
  it("includes the fields the catalog page was missing", () => {
    for (const slug of ["autonomous-ai-and-education", "hermes-ai-for-beginners"]) {
      const book = books.find((item) => item.slug === slug);
      assert.ok(book);
      const graph = bookJsonLd(book)["@graph"] as Record<string, unknown>[];
      const bookNode = graph.find((node) => typesOf(node).includes("Book"));
      assert.ok(bookNode);
      assert.equal(bookNode.name, book.title);
      assert.equal(bookNode.description, book.summary);
      assert.equal(bookNode.inLanguage, "en");
      assert.equal(bookNode.datePublished, SITE_UPDATED);
      assert.equal(bookNode.dateModified, SITE_UPDATED);
      assert.match(String(bookNode.image), /^https:\/\/smfwisdomforge\.com\//);
      const publisher = bookNode.publisher as Record<string, unknown>;
      assert.equal(publisher.name, ORG_NAME);
      assert.equal(publisher.name, "SMF Works");
      const author = bookNode.author as Record<string, unknown>;
      assert.equal(author["@type"], "Person");
      assert.equal(author.name, "Michael Gannotti");
      assert.equal(author.jobTitle, MICHAEL_ROLE);
      assert.equal(author.worksFor, undefined);
      const crumbs = graph.find((node) => typesOf(node).includes("BreadcrumbList"));
      assert.ok(crumbs);
      const faq = graph.find((node) => typesOf(node).includes("FAQPage"));
      assert.ok(faq);
      const visible = bookQuestionAnswers(book);
      const entities = faq.mainEntity as { name: string; acceptedAnswer: { text: string } }[];
      assert.equal(entities.length, visible.length);
      assert.deepEqual(
        entities.map((entity) => entity.acceptedAnswer.text),
        visible.map((qa) => qa.answer),
      );
    }
  });

  it("never attaches an employer to a person", () => {
    for (const book of books) {
      walk(bookJsonLd(book), (node) => {
        if (node["@type"] !== "Person") return;
        for (const key of FORBIDDEN_PERSON_KEYS) {
          assert.equal(node[key], undefined, `${String(node.name)} has ${key}`);
        }
        if (node.name === "Michael Gannotti") {
          assert.equal(node.jobTitle, MICHAEL_ROLE);
        } else {
          assert.equal(node.jobTitle, undefined);
        }
      });
    }
  });
});

describe("learning resource JSON-LD", () => {
  it("describes a sitting as LearningResource and Article", () => {
    const lesson = lessons[0];
    assert.ok(lesson);
    const graph = learningResourceJsonLd(lesson)["@graph"] as Record<string, unknown>[];
    const resource = graph.find((node) => typesOf(node).includes("LearningResource"));
    assert.ok(resource);
    assert.ok(typesOf(resource).includes("Article"));
    assert.equal(resource.name, lesson.title);
    assert.equal(resource.headline, lesson.title);
    assert.equal(resource.datePublished, SITE_UPDATED);
    assert.equal(resource.dateModified, SITE_UPDATED);
    assert.equal(resource.inLanguage, "en");
    const publisher = resource.publisher as Record<string, unknown>;
    assert.equal(publisher.name, "SMF Works");
    const author = resource.author as Record<string, unknown>;
    assert.equal(author.name, "Michael Gannotti");
    assert.equal(author.jobTitle, MICHAEL_ROLE);
    assert.equal(author.worksFor, undefined);
    const crumbs = graph.find((node) => typesOf(node).includes("BreadcrumbList"));
    assert.ok(crumbs);
    const items = crumbs.itemListElement as { position: number; name: string; item: string }[];
    assert.equal(items.length, 4);
    assert.equal(items[0].name, "Home");
    assert.match(items[3].item, new RegExp(`/learn/${lesson.band}/${lesson.subject}/${lesson.slug}$`));
  });
});

describe("organization sameAs", () => {
  it("lists GitHub and X and no invented profile", () => {
    const graph = siteJsonLd["@graph"] as Record<string, unknown>[];
    const org = graph.find((node) => node["@type"] === "Organization");
    assert.ok(org);
    assert.equal(org.name, "SMF Works");
    const sameAs = org.sameAs as string[];
    assert.deepEqual(sameAs, [...ORG_SAME_AS]);
    assert.ok(sameAs.includes("https://github.com/smfworks"));
    assert.ok(sameAs.includes("https://x.com/MichaelGannotti"));
    const blob = JSON.stringify(siteJsonLd).toLowerCase();
    assert.equal(blob.includes("linkedin"), false);
    walk(siteJsonLd, (node) => {
      if (node["@type"] !== "Person") return;
      for (const key of FORBIDDEN_PERSON_KEYS) assert.equal(node[key], undefined);
      if (node.name === "Michael Gannotti") assert.equal(node.jobTitle, MICHAEL_ROLE);
    });
  });
});
