/**
 * Assemble src/data/blog/content/posts.json from listing metadata + local body HTML.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const ROOT = process.cwd();
const SLUGS = new Set([
  "best-ai-gateway",
  "portkey-alternatives",
  "claude-alternatives",
  "ai-usage-tracking",
  "litellm-alternatives",
  "is-openrouter-safe",
  "llm-observability-tools",
  "openclaw-alternatives",
  "grok-4-benchmarks",
  "how-to-automate-linkedin-outreach",
  "langdock-alternatives",
  "eu-ai-act",
  "nexos-ai-credits",
  "ai-governance",
  "requesty-alternatives",
]);

const LOCAL_ROUTES = new Set([
  "/",
  "/blog",
  "/pricing",
  "/ai-gateway",
  "/eu-gateway",
  "/ai-workspace-for-multiple-llms",
  "/ai-agent-builder",
  "/features/ai-agents",
  "/features/ai-chat",
  "/features/compare-ai-models",
  "/features/ai-integrations",
  "/features/messaging-apps",
  "/features/browser-extension",
  "/features/deep-research",
  "/features/llm-caching",
  "/features/smart-llm-routing",
  "/features/llm-observability",
  "/customer-stories/payhawk",
]);

function rewriteHref(href) {
  try {
    const url = new URL(href, "https://nexos.ai");
    if (url.hostname === "nexos.ai" || url.hostname === "www.nexos.ai") {
      const path = url.pathname.replace(/\/$/, "") || "/";
      const blog = path.match(/^\/blog\/([^/]+)$/);
      if (blog) return SLUGS.has(blog[1]) ? `/blog/${blog[1]}` : null;
      if (path.startsWith("/blog/author")) return null;
      if (LOCAL_ROUTES.has(path)) return path;
      if (path.startsWith("/features/") || path.startsWith("/ai-")) return path;
      if (path === "/pricing" || path.startsWith("/pricing")) return "/pricing";
      return null;
    }
    if (url.protocol === "http:" || url.protocol === "https:") return url.href;
  } catch {
    /* ignore */
  }
  return href;
}

function innerText(html) {
  return html
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function matchDiv(html, open) {
  let index = html.indexOf(">", open) + 1;
  let depth = 1;
  while (index < html.length && depth > 0) {
    const nextOpen = html.indexOf("<div", index);
    const nextClose = html.indexOf("</div>", index);
    if (nextClose < 0) return html.length;
    if (nextOpen >= 0 && nextOpen < nextClose) {
      depth += 1;
      index = nextOpen + 4;
    } else {
      depth -= 1;
      index = nextClose + 6;
    }
  }
  return index;
}

function convertPointLists(html) {
  return html.replace(
    /<li\b[^>]*>\s*<svg[\s\S]*?<\/svg>\s*<div[^>]*>\s*<p[^>]*>([\s\S]*?)<\/p>\s*<\/div>\s*<\/li>/gi,
    (full, text) => {
      const kind = /#BBF7D0|M11 5\.4/.test(full)
        ? "plus"
        : /#BFCBD4|M5\.3 11h11/.test(full)
          ? "minus"
          : null;
      if (!kind) return full;
      return `<li class="blog-point-${kind}">${text.trim()}</li>`;
    },
  );
}

function convertCard(cardHtml) {
  const prepared = convertPointLists(cardHtml);
  const title = innerText((prepared.match(/heading-md[^>]*>([\s\S]*?)<\/span>/) || [])[1] || "");
  const badge = /Recommended/.test(prepared)
    ? `<span class="blog-chip blog-chip--accent">Recommended</span>`
    : "";
  const ledeMatch = prepared.match(/<(?:p|span) class="body-md[^"]*"[^>]*>([\s\S]*?)<\/(?:p|span)>/);
  const chips = [...prepared.matchAll(/body-xs-medium[\s\S]*?<span>([\s\S]*?)<\/span>/g)]
    .map((match) => innerText(match[1]))
    .filter(Boolean)
    .map((label) => `<span class="blog-chip">${label}</span>`);
  const meta = [...prepared.matchAll(/<p class="body-sm-medium[^"]*"[^>]*>([\s\S]*?)<\/p>/g)]
    .map((match) => match[1].trim())
    .filter(Boolean);
  const plusItems = [...prepared.matchAll(/<li class="blog-point-plus">[\s\S]*?<\/li>/g)].map(
    (match) => match[0],
  );
  const minusItems = [...prepared.matchAll(/<li class="blog-point-minus">[\s\S]*?<\/li>/g)].map(
    (match) => match[0],
  );

  return [
    `<aside class="blog-compare-card">`,
    title
      ? `<p class="blog-compare-card__title"><strong>${title}</strong>${badge}</p>`
      : "",
    ledeMatch ? `<p class="blog-compare-card__lede">${ledeMatch[1].trim()}</p>` : "",
    chips.length ? `<p class="blog-compare-card__chips">${chips.join("")}</p>` : "",
    meta.length
      ? `<p class="blog-compare-card__meta">${meta.map((value) => `<span>${value}</span>`).join("")}</p>`
      : "",
    plusItems.length ? `<ul class="blog-compare-plus">${plusItems.join("")}</ul>` : "",
    minusItems.length ? `<ul class="blog-compare-minus">${minusItems.join("")}</ul>` : "",
    `</aside>`,
  ].join("");
}

function convertComparisonCards(html) {
  let output = "";
  let index = 0;
  while (index < html.length) {
    const marker = html.indexOf("comparison-card-shimmer", index);
    if (marker < 0) {
      output += html.slice(index);
      break;
    }
    const open = html.lastIndexOf("<div", marker);
    const end = matchDiv(html, open);
    output += html.slice(index, open) + convertCard(html.slice(open, end));
    index = end;
  }
  return output;
}

function wrapTables(html) {
  return html.replace(/<table[\s\S]*?<\/table>/gi, (table) =>
    table.includes("blog-table-scroll")
      ? table
      : `<figure class="blog-table-scroll">${table}</figure>`,
  );
}

function keepBlogClass(html) {
  return html.replace(/\sclass="([^"]*)"/g, (_, className) => {
    const kept = className.split(/\s+/).filter((name) => name.startsWith("blog-"));
    return kept.length ? ` class="${kept.join(" ")}"` : "";
  });
}

function rewriteLinks(html) {
  return html.replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi, (_, attrs, inner) => {
    const href = (attrs.match(/href="([^"]*)"/i) || [])[1];
    if (!href) return inner;
    const next = rewriteHref(href);
    const text = inner.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    if (!next || !text) return text;
    return `<a href="${next}">${text}</a>`;
  });
}

function repairLinks(html) {
  const tokens = html.split(/(<a href="[^"]*">|<\/a>)/i);
  let output = "";
  let open = null;
  let buffer = "";

  const flushPlain = () => {
    output += buffer;
    open = null;
    buffer = "";
  };

  const flushLink = () => {
    const plain = buffer.replace(/<[^>]+>/g, "");
    const hasBlock = /<(?:p|h2|h3|h4|ul|ol|li|aside|figure|table|\/p|\/h2|\/h3)\b/i.test(buffer);
    if (!open || hasBlock || plain.length > 90) output += buffer;
    else output += `${open}${buffer}</a>`;
    open = null;
    buffer = "";
  };

  for (const token of tokens) {
    if (/^<a href="/i.test(token)) {
      if (open) flushPlain();
      open = token;
      buffer = "";
    } else if (/^<\/a>$/i.test(token)) {
      if (open) flushLink();
    } else if (open) {
      buffer += token;
    } else {
      output += token;
    }
  }

  if (open) output += buffer;
  return output;
}

function sanitize(raw) {
  let html = raw
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<\/?astro-island[^>]*>/g, "")
    .replace(/<\/?astro-slot[^>]*>/g, "")
    .replace(/<\/?template[^>]*>/g, "");

  html = rewriteLinks(html);
  html = convertComparisonCards(html);
  html = convertPointLists(html);
  html = wrapTables(html);

  html = html.replace(/<img([^>]*)>/gi, (_, attrs) => {
    const alt = (attrs.match(/alt="([^"]*)"/) || [])[1] || "";
    return alt ? `<img alt="${alt}" />` : "";
  });

  html = keepBlogClass(html);

  html = html.replace(/<span(\s[^>]*)?>([\s\S]*?)<\/span>/gi, (full, attrs = "", inner) =>
    /class="[^"]*blog-/.test(attrs) ? full : inner,
  );

  html = html
    .replace(/\sstyle="[^"]*"/g, "")
    .replace(/\s(?:data|aria)-[a-z-]+="[^"]*"/gi, "")
    .replace(/\s(?:loading|height|width|fetchpriority|sizes|itemprop|itemscope|itemtype)="[^"]*"/g, "")
    .replace(/<div[^>]*>/gi, "")
    .replace(/<\/div>/gi, "")
    .replace(/<b>/g, "<strong>")
    .replace(/<\/b>/g, "</strong>")
    .replace(/\s+/g, " ")
    .replace(/> </g, "><")
    .trim();

  html = html.replace(
    /<(?!\/?(?:p|h2|h3|h4|ul|ol|li|table|thead|tbody|tr|th|td|strong|em|a|blockquote|br|img|figure|figcaption|aside|span)\b)[a-z][^>]*>/gi,
    "",
  );
  html = html.replace(
    /<\/(?!p|h2|h3|h4|ul|ol|li|table|thead|tbody|tr|th|td|strong|em|a|blockquote|img|figure|figcaption|aside|span)\w+>/gi,
    "",
  );

  return repairLinks(html);
}

function sanitizeFaq(html) {
  return sanitize(html).replace(/<h2[\s\S]*?<\/h2>/gi, "").trim();
}

function displayName(name) {
  if (name === "nexosai experts") return "nexos.ai experts";
  return name;
}

const FEATURED_FILE = {
  "best-ai-gateway": "best-ai-gateway-featured.webp",
  "portkey-alternatives": "portkey-alternatives-featured.webp",
  "claude-alternatives": "claude-alternatives-featured.webp",
  "ai-usage-tracking": "ai-usage-tracking-featured.webp",
  "litellm-alternatives": "litellm-alternatives-featured.webp",
  "is-openrouter-safe": "is-openrouter-safe-featured.webp",
  "llm-observability-tools": "llm-observability-tools-featured.webp",
  "openclaw-alternatives": "openclaw-alternatives-featured.webp",
  "grok-4-benchmarks": "grok-4-benchmarks-featured.webp",
  "how-to-automate-linkedin-outreach": "ai-usage-tracking-featured.webp",
  "langdock-alternatives": "llm-observability-tools-featured.webp",
  "eu-ai-act": "openclaw-alternatives-featured.webp",
  "nexos-ai-credits": "ai-usage-tracking-featured.webp",
  "ai-governance": "claude-alternatives-featured.webp",
  "requesty-alternatives": "llm-observability-tools-featured.webp",
};

const AUTHOR_FILE = {
  "mindaugas-jancis": "mindaugas-jancis.webp",
  "eanna-motherway": "eanna-motherway.webp",
  "vytautas-vaitkevicius": "vytautas-vaitkevicius.webp",
  "nexosai-experts": "nexosai-experts.webp",
};

const ORDER = [...SLUGS];

const meta = JSON.parse(
  await readFile(join(ROOT, "tmp/blog-html/posts-meta.json"), "utf8"),
);

const posts = [];
for (const slug of ORDER) {
  const entry = meta[slug];
  if (!entry) throw new Error(`missing meta ${slug}`);
  const bodyPath = join(ROOT, "tmp/blog-html", `body-${slug}.html`);
  let raw = "";
  try {
    raw = await readFile(bodyPath, "utf8");
  } catch {
    throw new Error(`missing body ${slug}`);
  }
  const bodyHtml = sanitize(raw);
  const faq = (entry.faq || []).map((item) => ({
    question: item.question,
    answerHtml: sanitizeFaq(item.answerHtml || ""),
  }));
  posts.push({
    slug,
    title: entry.title,
    description: entry.description,
    excerpt: entry.intro?.[0] || entry.description,
    intro: entry.intro || [],
    publishedLabel: entry.publishedLabel,
    readTime: entry.readTime,
    articleDate: entry.articleDate,
    articleReadTime: entry.articleReadTime,
    datePublished: entry.datePublished,
    author: {
      name: displayName(entry.author.name),
      slug: entry.author.slug,
      bio: entry.author.bio,
      image: AUTHOR_FILE[entry.author.slug] || "",
    },
    toc: entry.toc || [],
    faq,
    bodyHtml,
    featuredFile: FEATURED_FILE[slug],
    featuredAlt: entry.featuredAlt || entry.title,
    sourceUrl: `https://nexos.ai/blog/${slug}/`,
    cta: {
      heading: "Make AI work your way.",
      body: "Test AI Agents and no-code automation.",
      ctaLabel: "Get nexos.ai",
      ctaHref: "/pricing",
    },
  });
}

await mkdir(join(ROOT, "src/data/blog/content"), { recursive: true });
await writeFile(
  join(ROOT, "src/data/blog/content/posts.json"),
  JSON.stringify(posts, null, 2),
);

for (const post of posts) {
  console.log(
    post.slug,
    "body",
    post.bodyHtml.length,
    "toc",
    post.toc.length,
    "faq",
    post.faq.length,
    "h2",
    (post.bodyHtml.match(/<h2/g) || []).length,
    "cards",
    (post.bodyHtml.match(/blog-compare-card/g) || []).length,
    "plus",
    (post.bodyHtml.match(/blog-point-plus/g) || []).length,
    "table",
    (post.bodyHtml.match(/<table/g) || []).length,
  );
}
