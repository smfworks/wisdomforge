import { catalog } from "@/lib/curriculum/catalog";
import { subjects } from "@/lib/curriculum/subjects";
import { bands } from "@/lib/curriculum/bands";
import LibraryClient from "@/components/library-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Repository — WisdomForge",
  description:
    "Search and filter the full WisdomForge curriculum library by subject, age band, and readiness status.",
};

export default function Library() {
  return (
    <LibraryClient
      units={catalog}
      subjects={subjects.map((s) => ({ id: s.id, name: s.name, short: s.short }))}
      bands={bands.map((b) => ({ id: b.id, name: b.name, ages: b.ages }))}
    />
  );
}