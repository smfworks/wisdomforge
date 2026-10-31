import type { MetadataRoute } from "next";
import { bands } from "@/lib/curriculum/bands";
import { books } from "@/lib/curriculum/books";
import { demos } from "@/lib/curriculum/demos";
import { lessons } from "@/lib/curriculum";
import { subjects } from "@/lib/curriculum/subjects";
import { SITE_UPDATED, absoluteUrl } from "@/lib/site";

const lastModified = new Date(SITE_UPDATED);

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

function entry(
  path: string,
  priority: number,
  changeFrequency: ChangeFrequency,
): MetadataRoute.Sitemap[number] {
  return {
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  };
}

const staticPaths: Array<[string, number, ChangeFrequency]> = [
  ["/", 1, "weekly"],
  ["/start", 0.9, "weekly"],
  ["/books", 0.8, "weekly"],
  ["/about", 0.7, "monthly"],
  ["/subjects", 0.8, "weekly"],
  ["/method", 0.7, "monthly"],
  ["/parents", 0.7, "monthly"],
  ["/parents/control-plane", 0.5, "monthly"],
  ["/hermes", 0.6, "monthly"],
  ["/library", 0.7, "weekly"],
  ["/demos", 0.6, "monthly"],
  ["/evals", 0.4, "monthly"],
  ["/support", 0.4, "monthly"],
  ["/progress", 0.3, "yearly"],
  ["/bonaventure", 0.5, "monthly"],
  ["/clare-of-assisi", 0.5, "monthly"],
  ["/therese-of-lisieux", 0.5, "monthly"],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [
    ...staticPaths.map(([path, priority, changeFrequency]) =>
      entry(path, priority, changeFrequency),
    ),
    ...bands.map((band) => entry(`/ages/${band.id}`, 0.7, "weekly")),
    ...subjects.map((subject) => entry(`/subjects/${subject.id}`, 0.7, "weekly")),
    ...books.map((book) => entry(`/books/${book.slug}`, 0.6, "monthly")),
    ...demos.map((demo) => entry(`/demos/${demo.slug}`, 0.5, "monthly")),
    ...lessons.map((lesson) =>
      entry(`/learn/${lesson.band}/${lesson.subject}/${lesson.slug}`, 0.4, "monthly"),
    ),
  ];

  const seen = new Set<string>();
  return urls.filter((item) => {
    if (seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });
}
