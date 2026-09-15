import { readdirSync, readFileSync, statSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const slug = process.argv[2];
if (!slug) {
  console.error("usage: node scripts/save-cdp-html.mjs <slug>");
  process.exit(1);
}

const dir = "C:/Users/D/.cursor/browser-logs";
const latest = readdirSync(dir)
  .filter((name) => name.startsWith("cdp-response-Runtime.evaluate"))
  .map((name) => ({ name, time: statSync(join(dir, name)).mtimeMs }))
  .sort((a, b) => b.time - a.time)[0];

if (!latest) {
  console.error("no cdp dump");
  process.exit(1);
}

const data = JSON.parse(readFileSync(join(dir, latest.name), "utf8"));
const html = data.result?.value ?? data.result?.result?.value;
if (typeof html !== "string") {
  console.error("unexpected dump", latest.name, Object.keys(data));
  process.exit(1);
}

mkdirSync("tmp/blog-html", { recursive: true });
const dest = join("tmp/blog-html", `${slug}.html`);
writeFileSync(dest, html);
console.log(latest.name, html.length, dest);
