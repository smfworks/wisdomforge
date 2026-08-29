/**
 * Prebuild script — runs the assist-ready gate before `next build`.
 *
 * Validates every academy lesson against the completeness definition.
 * If any lesson is missing required fields or contains stub sentinels,
 * the build fails with a readable report.
 *
 * Runs automatically via the "prebuild" npm hook in package.json.
 */

import { lessons } from "../src/lib/curriculum/index.js";
import { assertLessonsReady } from "../src/lib/curriculum/gate.js";

try {
  assertLessonsReady(lessons);
} catch (e) {
  console.error(e instanceof Error ? e.message : String(e));
  process.exit(1);
}