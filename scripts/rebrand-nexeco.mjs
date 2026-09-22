import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..", "src");
const extensions = new Set([".ts", ".tsx", ".html", ".json"]);

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      walk(full, out);
    } else if (extensions.has(path.extname(full))) {
      out.push(full);
    }
  }
  return out;
}

const replacements = [
  [/nexosai-experts/g, "nexeco-ai-experts"],
  [/nexos-ai-credits/g, "nexeco-ai-credits"],
  [/nexosai/g, "NexEco AI"],
  [/\bnexos\b/gi, "NexEco AI"],
];

let changed = 0;

for (const file of walk(root)) {
  let content = readFileSync(file, "utf8");
  let next = content;
  for (const [pattern, replacement] of replacements) {
    next = next.replace(pattern, replacement);
  }
  if (next !== content) {
    writeFileSync(file, next, "utf8");
    changed += 1;
  }
}

console.log(`Updated ${changed} files.`);
