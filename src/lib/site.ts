/** Public origin used for sitemap, robots, JSON-LD, and llms.txt. */
export const SITE_ORIGIN = "https://smfwisdomforge.com";

/**
 * Revision date for sitemap lastmod and WebPage dateModified.
 * Bump when public pages change in a way agents should notice.
 */
export const SITE_UPDATED = "2026-10-31";

export const SITE_NAME = "WisdomForge";

export const ORG_NAME = "SMF Works";

export function absoluteUrl(path: string): string {
  if (path === "/") return SITE_ORIGIN;
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}
