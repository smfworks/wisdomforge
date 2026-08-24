"use client";

import { notFound, useParams } from "next/navigation";
import { LessonView } from "@/components/lesson-view";
import { findLesson, lessonKey } from "@/lib/curriculum";
import { useForge } from "@/lib/progress";
import { useEffect } from "react";

export default function LearnPage() {
  const params = useParams<{ band: string; subject: string; slug: string }>();
  const { band, subject, slug } = params;
  const lesson = findLesson(band, subject, slug);
  const setLast = useForge((s) => s.setLast);
  const setBand = useForge((s) => s.setBand);

  useEffect(() => {
    if (!lesson) return;
    setLast(lessonKey(lesson));
    setBand(lesson.band);
  }, [lesson, setBand, setLast]);

  if (!lesson) {
    notFound();
  }

  return (
    <main>
      <LessonView lesson={lesson} />
    </main>
  );
}