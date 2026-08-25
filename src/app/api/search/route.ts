import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * GET /api/search
 *
 * Serves the static search index (public/search-index.json) so client-side
 * code and the Hermes kids profiles can fetch the full corpus index in one
 * request and run full-text search locally.
 *
 * Query params:
 *   q    — optional search term. If provided, the route runs the search
 *          server-side and returns only matching documents. If omitted,
 *          returns the full index.
 *   limit — max results when using q (default 20)
 */

// Cache the parsed index in module scope so it's only read once per process
let cachedIndex: any = null;

function getIndex(): any {
  if (cachedIndex) return cachedIndex;

  // Resolve public/search-index.json relative to the project root
  const thisDir = dirname(fileURLToPath(import.meta.url));
  // From src/app/api/search/route.ts → project root is 4 levels up
  const projectRoot = join(thisDir, "..", "..", "..", "..");
  const indexPath = join(projectRoot, "public", "search-index.json");

  const raw = readFileSync(indexPath, "utf-8");
  cachedIndex = JSON.parse(raw);
  return cachedIndex;
}

// ── Tokenizer (must match build-search-index.mjs) ─────────────────────

const STOP_WORDS = new Set([
  "a", "an", "and", "are", "as", "at", "be", "but", "by", "for",
  "from", "has", "have", "he", "her", "his", "i", "in", "is", "it",
  "its", "of", "on", "or", "she", "that", "the", "their", "they",
  "this", "to", "was", "were", "will", "with", "you", "your",
  "we", "our", "us", "them", "him", "me", "my", "who", "whom",
  "which", "what", "when", "where", "why", "how", "all", "each",
  "every", "both", "few", "more", "most", "other", "some", "such",
  "no", "nor", "not", "only", "own", "same", "so", "than", "too",
  "very", "can", "did", "do", "does", "had", "been", "being",
  "am", "if", "into", "through", "about", "before", "after",
  "again", "further", "then", "once", "here", "there", "up",
  "down", "out", "off", "over", "under", "also", "may", "might",
  "must", "should", "would", "could", "shall", "will", "just",
]);

function stem(word: string): string {
  let w = word.toLowerCase();
  if (w.length <= 3) return w;
  if (w.endsWith("sses")) w = w.slice(0, -2);
  else if (w.endsWith("ies")) w = w.slice(0, -2);
  else if (w.endsWith("ss")) { /* keep */ }
  else if (w.endsWith("s")) w = w.slice(0, -1);
  if (w.endsWith("eed")) {
    if (w.length > 4) w = w.slice(0, -1);
  } else if (w.endsWith("ed") && w.length > 4) {
    w = w.slice(0, -2);
  } else if (w.endsWith("ing") && w.length > 5) {
    w = w.slice(0, -3);
  }
  const suffixes2 = [
    "ational", "tional", "izer", "ization", "fulness", "ousness",
    "iveness", "biliti", "lessli", "entli", "ation", "alism",
    "aliti", "iviti", "ement", "ation",
  ];
  for (const suf of suffixes2) {
    if (w.endsWith(suf) && w.length > suf.length + 2) {
      w = w.slice(0, -suf.length);
      break;
    }
  }
  const suffixes3 = ["al", "ance", "ence", "er", "ic", "able", "ible",
                     "ant", "ement", "ment", "ness", "ate", "iti", "ous"];
  for (const suf of suffixes3) {
    if (w.endsWith(suf) && w.length > suf.length + 3) {
      w = w.slice(0, -suf.length);
      break;
    }
  }
  return w;
}

function tokenize(text: string): string[] {
  const tokens: string[] = [];
  const matches = text.toLowerCase().match(/[a-z0-9][a-z0-9'-]*[a-z0-9]|[a-z0-9]/g);
  if (!matches) return tokens;
  for (const raw of matches) {
    if (raw.length < 2) continue;
    if (STOP_WORDS.has(raw)) continue;
    if (/^\d+$/.test(raw) && raw.length < 3) continue;
    const s = stem(raw);
    if (s.length < 2) continue;
    if (STOP_WORDS.has(s)) continue;
    tokens.push(s);
  }
  return tokens;
}

// ── Search ────────────────────────────────────────────────────────────

function search(index: any, query: string, limit: number) {
  const queryTokens = tokenize(query);
  if (queryTokens.length === 0) return [];

  // Build a map from token to postings for quick lookup
  const tokenPostings = new Map<string, { d: number; f: number; idf: number }[]>();
  for (const entry of index.index) {
    if (queryTokens.includes(entry.t)) {
      const idf = entry.idf;
      const postings: { d: number; f: number; idf: number }[] = [];
      for (let i = 0; i < entry.p.length; i += 2) {
        postings.push({ d: entry.p[i], f: entry.p[i + 1], idf });
      }
      tokenPostings.set(entry.t, postings);
    }
  }

  // Score documents using TF-IDF with cosine-similarity-like normalization
  const scores = new Map<number, number>();
  const avgLen = index.documents.reduce((s: number, d: any) => s + d.len, 0) / index.docCount;

  for (const postings of tokenPostings.values()) {
    for (const p of postings) {
      const doc = index.documents[p.d];
      if (!doc) continue;
      // BM25-like scoring
      const k1 = 1.2;
      const b = 0.75;
      const tf = p.f;
      const tfNorm = (tf * (k1 + 1)) / (tf + k1 * (1 - b + b * (doc.len / avgLen)));
      const score = p.idf * tfNorm;
      scores.set(p.d, (scores.get(p.d) || 0) + score);
    }
  }

  // Boost docs that match more unique query tokens
  const results = [...scores.entries()]
    .map(([docId, score]) => {
      const doc = index.documents[docId];
      return {
        path: doc.path,
        figure: doc.figure,
        file: doc.file,
        title: doc.title,
        score: Math.round(score * 1000) / 1000,
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return results;
}

// ── Route handler ─────────────────────────────────────────────────────

export async function GET(request: Request) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const limitParam = url.searchParams.get("limit");
  const limit = limitParam ? Math.min(parseInt(limitParam, 10) || 20, 100) : 20;

  try {
    const index = getIndex();

    if (q && q.trim()) {
      const results = search(index, q.trim(), limit);
      return Response.json({
        query: q,
        count: results.length,
        results,
      });
    }

    // No query — return the full index for client-side search
    return Response.json(index, {
      headers: {
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (e) {
    return Response.json(
      { error: "Search index not available. Run: node scripts/build-search-index.mjs" },
      { status: 503 },
    );
  }
}