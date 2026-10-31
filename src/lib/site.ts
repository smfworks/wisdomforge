/** Public origin used for sitemap, robots, JSON-LD, and llms.txt. */
export const SITE_ORIGIN = "https://smfwisdomforge.com";

/**
 * Revision date for sitemap lastmod and WebPage dateModified.
 * Bump when public pages change in a way agents should notice.
 */
export const SITE_UPDATED = "2026-10-31";

export const SITE_NAME = "WisdomForge";

export const ORG_NAME = "SMF Works";

/**
 * Public profiles for Organization sameAs.
 * GitHub org and X are the named SMF Works / Michael profiles.
 * The two repositories are already linked from the site. Do not add other URLs.
 */
export const ORG_SAME_AS = [
  "https://github.com/smfworks",
  "https://x.com/MichaelGannotti",
  "https://github.com/smfworks/hermes-ai-team",
  "https://github.com/smfworks/wisdomforge-kids-Hermes-profiles",
] as const;

export function absoluteUrl(path: string): string {
  if (path === "/") return SITE_ORIGIN;
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}
