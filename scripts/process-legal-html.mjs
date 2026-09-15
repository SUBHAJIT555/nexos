import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ROOT = "C:/PROJECT/Office/xyz/nexos";
const SRC = join(ROOT, "tmp/legal-html");
const OUT = join(ROOT, "src/data/legal/html");

const files = [
  "terms-of-use.html",
  "privacy-policy.html",
  "cookie-policy.html",
  "security-practices.html",
];

mkdirSync(OUT, { recursive: true });

function cleanHtml(raw) {
  let html = raw;

  // Preserve astro-slot link text, then drop scripts and astro islands
  html = html.replace(/<astro-slot>([\s\S]*?)<\/astro-slot>/gi, "$1");
  html = html.replace(/<script[\s\S]*?<\/script>/gi, "");
  html = html.replace(/<astro-island[\s\S]*?await-children="">([\s\S]*?)<\/astro-island>/gi, "$1");
  html = html.replace(/<!--\$-->[\s\S]*?<!--\/-->/g, "");
  const knownEmptyLinkLabels = {
    "/legal/fair-use-policy/": "Fair Use Policy",
    "/legal/fair-use-policy": "Fair Use Policy",
  };

  html = html.replace(/<a([^>]*)><\/a>/g, (match, attrs) => {
    const labelMatch = attrs.match(/data-ga="([^"]+)"/);
    if (labelMatch?.[1]) return `<a${attrs}>${labelMatch[1]}</a>`;
    const hrefMatch = attrs.match(/href="([^"]+)"/);
    if (hrefMatch?.[1] && knownEmptyLinkLabels[hrefMatch[1]]) {
      return `<a${attrs}>${knownEmptyLinkLabels[hrefMatch[1]]}</a>`;
    }
    return match;
  });

  // Normalize links
  html = html.replace(/href="https:\/\/nexos\.ai\/legal\/privacy-policy\/?"/g, 'href="/legal/privacy-policy"');
  html = html.replace(/href="https:\/\/nexos\.ai\/legal\/cookie-policy\/?"/g, 'href="/legal/cookie-policy"');
  html = html.replace(/href="https:\/\/nexos\.ai\/legal\/terms-of-use\/?"/g, 'href="/legal/terms-of-use"');
  html = html.replace(/href="https:\/\/nexos\.ai\/security-practices\/?"/g, 'href="/security-practices"');

  // Strip editor / hydration noise
  html = html.replace(/\sdata-cursor-ref="[^"]*"/g, "");
  html = html.replace(/\sstyle=""/g, "");
  html = html.replace(/\sdata-hk="[^"]*"/g, "");
  html = html.replace(/\sdata-ga(?:-slug|-no-track)?="[^"]*"/g, "");
  html = html.replace(/\sclass="align-bottom transition-colors ease-out focus-visible:outline-none focus-visible:shadow-focus break-words text-accent hover:text-accent-hover active:text-accent-active inline "/g, ' class="legal-link"');
  html = html.replace(/\sclass="align-bottom transition-colors ease-out focus-visible:outline-none focus-visible:shadow-focus break-words text-primary hover:text-neutral-800 active:text-neutral-1000 inline "/g, ' class="legal-link legal-link-neutral"');

  // Map typography classes to legal-prose hooks
  html = html.replace(/\bheading-2xl\b/g, "legal-h1");
  html = html.replace(/\bbody-sm\b/g, "legal-date");
  html = html.replace(/\bbody-lg-bold\b/g, "legal-h3");
  html = html.replace(/\bbody-md-bold\b/g, "legal-h2");
  html = html.replace(/\bbody-md\b/g, "legal-body");
  html = html.replace(/\bbody-sm-bold\b/g, "legal-date-bold");

  // Remove outer wrapper noise from security page extract
  html = html.replace(/<div class="compensate-header-height hidden pt-16"><\/div>/g, "");
  html = html.replace(/<div class="pt-16 pb-16">\s*<div class="mx-4 sm:mx-auto">\s*<div class="container mx-auto">\s*<div class="grid grid-cols-12 gap-y-8 sm:gap-x-8">\s*<div class="col-span-12 lg:col-start-3 lg:col-span-8">\s*/g, "");
  html = html.replace(/\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*$/g, "");

  // Trim leading/trailing wrapper divs from terms (nested flex containers at start)
  html = html.trim();

  return html;
}

for (const file of files) {
  const raw = readFileSync(join(SRC, file), "utf8");
  const cleaned = cleanHtml(raw);
  writeFileSync(join(OUT, file), cleaned, "utf8");
  console.log(file, raw.length, "->", cleaned.length);
}
