import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "@/lib/site";

/**
 * Search bots that must stay allowed, plus common training crawlers.
 * The repo has no prior disallow list, so training bots are allowed too.
 */
const NAMED_BOTS = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "GPTBot",
  "ClaudeBot",
  "Google-Extended",
  "CCBot",
  "Applebot-Extended",
  "anthropic-ai",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: NAMED_BOTS, allow: "/" },
    ],
    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
    host: SITE_ORIGIN,
  };
}
