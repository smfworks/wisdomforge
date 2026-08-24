import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "WisdomForge — Education in the Age of AI",
  description:
    "A parent-operated academy for education in the age of AI. Four age bands, every subject, responsible autonomous AI use woven through the sitting.",
  openGraph: {
    title: "WisdomForge",
    description: "A parent-operated academy for the age of AI.",
    images: ["/images/wisdomforge-hero.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${sourceSans.variable} antialiased`} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0a0a0f" />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}