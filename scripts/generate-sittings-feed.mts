/**
 * Prebuild script — generates static data feeds before `next build`.
 *
 * Currently generates:
 *   - public/sittings.json — metadata feed for every academy sitting
 *   - public/sitting-cards.json — W4 pairing cards (projection of Lesson)
 *
 * Run automatically via the "prebuild" npm hook in package.json.
 * Uses tsx to run the TypeScript generator directly.
 */

import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import {
  generateSittingsFeed,
  generateSittingCardsFeed,
} from "../src/lib/curriculum/generate-sittings-feed.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, "..", "public");

try {
  generateSittingsFeed(publicDir);
  console.log("✓ Generated public/sittings.json");
  generateSittingCardsFeed(publicDir);
  console.log("✓ Generated public/sitting-cards.json");
} catch (e) {
  console.error("✗ Failed to generate sittings feed:", e);
  process.exit(1);
}