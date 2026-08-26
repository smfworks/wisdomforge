import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { demos, demoBySlug } from "@/lib/curriculum/demos";
import { TranscriptView } from "@/components/transcript-view";

export function generateStaticParams() {
  return demos.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  // We resolve asynchronously but generateStaticParams guarantees the slug
  return params.then((p) => {
    const demo = demoBySlug(p.slug);
    if (!demo) return { title: "Demo — WisdomForge" };
    return {
      title: `${demo.title} — WisdomForge`,
      description: demo.excerpt,
    };
  });
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const demo = demoBySlug(slug);
  if (!demo) {
    notFound();
  }
  return (
    <main>
      <TranscriptView demo={demo} />
    </main>
  );
}