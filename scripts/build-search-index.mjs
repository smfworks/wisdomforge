#!/usr/bin/env node
/**
 * build-search-index.mjs
 *
 * Reads all markdown files from the WisdomForge content directory,
 * tokenizes them, and writes a compressed JSON search index to
 * public/search-index.json.
 *
 * The index is an inverted-index structure designed for client-side
 * full-text search. The /api/search route serves this index, and the
 * Hermes kids profiles query that endpoint for research corpus results.
 *
 * Usage:
 *   node scripts/build-search-index.mjs
 *
 * Env:
 *   WF_CONTENT_DIR  — override content directory (default: ~/Documents/WisdomForge/wisdomforge/content)
 *   WF_OUTPUT       — override output path (default: public/search-index.json)
 */

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, sep, basename, dirname } from "node:path";
import { homedir } from "node:os";

// ── Config ────────────────────────────────────────────────────────────

const CONTENT_DIR =
  process.env.WF_CONTENT_DIR ||
  join(homedir(), "Documents", "WisdomForge", "wisdomforge", "content");

const OUTPUT =
  process.env.WF_OUTPUT ||
  join(import.meta.dirname, "..", "public", "search-index.json");

// ── Tokenizer ────────────────────────────────────────────────────────

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

/**
 * Minimal Porter-like stemmer — strips common English suffixes.
 * Not as good as a full Porter stemmer, but compact and good enough
 * for a static search index. The same function runs at query time.
 */
function stem(word) {
  let w = word.toLowerCase();
  if (w.length <= 3) return w;

  // Step 1a
  if (w.endsWith("sses")) w = w.slice(0, -2);
  else if (w.endsWith("ies")) w = w.slice(0, -2);
  else if (w.endsWith("ss")) { /* keep */ }
  else if (w.endsWith("s")) w = w.slice(0, -1);

  // Step 1b
  if (w.endsWith("eed")) {
    if (w.length > 4) w = w.slice(0, -1);
  } else if (w.endsWith("ed") && w.length > 4) {
    w = w.slice(0, -2);
  } else if (w.endsWith("ing") && w.length > 5) {
    w = w.slice(0, -3);
  }

  // Step 2 — common suffixes
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

  // Step 3 — shorter suffixes
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

function tokenize(text) {
  const tokens = [];
  // Match word-like sequences: letters, digits, hyphens inside words
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

// ── Markdown parsing ──────────────────────────────────────────────────

function parseMarkdown(filePath, raw) {
  // Extract the H1 title (first # heading) or fall back to filename
  let title = basename(filePath, ".md");
  const h1Match = raw.match(/^#\s+(.+)$/m);
  if (h1Match) title = h1Match[1].trim();

  // Strip markdown formatting for indexing
  const stripped = raw
    .replace(/^#{1,6}\s+/gm, "")       // headings
    .replace(/\*\*(.+?)\*\*/g, "$1")    // bold
    .replace(/\*(.+?)\*/g, "$1")       // italic
    .replace(/`(.+?)`/g, "$1")         // inline code
    .replace(/\[(.+?)\]\(.+?\)/g, "$1") // links
    .replace(/^\s*[-*+]\s+/gm, "")     // list markers
    .replace(/^\s*>\s+/gm, "")         // blockquotes
    .replace(/---/g, " ")              // horizontal rules
    .replace(/\n{3,}/g, "\n\n");

  return { title, body: stripped };
}

// ── File walker ──────────────────────────────────────────────────────

function walkMarkdown(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      results.push(...walkMarkdown(full));
    } else if (entry.endsWith(".md")) {
      results.push(full);
    }
  }
  return results;
}

// ── Index builder ────────────────────────────────────────────────────

function buildIndex() {
  if (!existsSync(CONTENT_DIR)) {
    console.error(`Content directory not found: ${CONTENT_DIR}`);
    process.exit(1);
  }

  const files = walkMarkdown(CONTENT_DIR);
  console.log(`Found ${files.length} markdown files in ${CONTENT_DIR}`);

  const documents = [];
  const inverted = new Map(); // token -> [{ docId, tf }]

  for (let i = 0; i < files.length; i++) {
    const filePath = files[i];
    const relPath = relative(CONTENT_DIR, filePath).split(sep).join("/");
    const figure = dirname(relPath) || "";
    const fileName = basename(relPath, ".md");

    let raw;
    try {
      raw = readFileSync(filePath, "utf-8");
    } catch (e) {
      console.warn(`Skipping unreadable file: ${filePath}`);
      continue;
    }

    const { title, body } = parseMarkdown(filePath, raw);

    // Tokenize title + body; title tokens get a boost
    const titleTokens = tokenize(title);
    const bodyTokens = tokenize(body);

    // Count term frequencies
    const tf = new Map();
    for (const t of titleTokens) {
      tf.set(t, (tf.get(t) || 0) + 3); // title boost
    }
    for (const t of bodyTokens) {
      tf.set(t, (tf.get(t) || 0) + 1);
    }

    // Doc length for normalization
    const docLength = titleTokens.length + bodyTokens.length;

    documents.push({
      id: i,
      path: relPath,
      figure,
      file: fileName,
      title,
      len: docLength,
    });

    // Add to inverted index
    for (const [token, freq] of tf) {
      if (!inverted.has(token)) inverted.set(token, []);
      inverted.get(token).push({ d: i, f: freq });
    }
  }

  // Compute document frequencies for IDF
  const N = documents.length;
  const idfMap = new Map();
  for (const [token, postings] of inverted) {
    const df = postings.length;
    idfMap.set(token, Math.log(1 + N / df));
  }

  // Serialize inverted index — compact format
  // postings: { d: docId, f: freq }  →  [docId, freq, docId, freq, ...]
  const indexEntries = [];
  for (const [token, postings] of inverted) {
    const flat = [];
    for (const p of postings) {
      flat.push(p.d, p.f);
    }
    indexEntries.push({ t: token, p: flat, idf: idfMap.get(token) });
  }

  // Sort by token for binary-search-friendly access
  indexEntries.sort((a, b) => a.t < b.t ? -1 : a.t > b.t ? 1 : 0);

  const index = {
    version: 1,
    built: new Date().toISOString(),
    docCount: N,
    documents,
    index: indexEntries,
  };

  return index;
}

// ── Main ─────────────────────────────────────────────────────────────

const index = buildIndex();
const json = JSON.stringify(index);

// Write the index
writeFileSync(OUTPUT, json, "utf-8");

const sizeMB = (Buffer.byteLength(json) / 1024 / 1024).toFixed(2);
console.log(`\nSearch index written to ${OUTPUT}`);
console.log(`  Documents: ${index.docCount}`);
console.log(`  Unique terms: ${index.index.length}`);
console.log(`  File size: ${sizeMB} MB`);