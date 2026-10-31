import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { findLesson, lessons } from "@/lib/curriculum";
import { learningResourceJsonLd } from "@/lib/seo";
import { LearnClient } from "./learn-client";

type Props = {
  params: Promise<{ band: string; subject: string; slug: string }>;
};

export function generateStaticParams() {
  return lessons.map((lesson) => ({
    band: lesson.band,
    subject: lesson.subject,
    slug: lesson.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { band, subject, slug } = await params;
  const lesson = findLesson(band, subject, slug);
  if (!lesson) return { title: "Sitting — WisdomForge" };
  return {
    title: `${lesson.title} — WisdomForge`,
    description: lesson.dek.slice(0, 160),
  };
}

export default async function LearnPage({ params }: Props) {
  const { band, subject, slug } = await params;
  const lesson = findLesson(band, subject, slug);
  if (!lesson) notFound();

  return (
    <>
      <JsonLd data={learningResourceJsonLd(lesson)} />
      <LearnClient />
    </>
  );
}
