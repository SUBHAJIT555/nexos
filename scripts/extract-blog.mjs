/**
 * One-off extractor for 15 public nexos.ai blog articles.
 * Writes sanitized JSON + downloads permitted images locally.
 */
import { execFile } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

const ROOT = process.cwd();
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36";

const LISTING = [
  {
    slug: "best-ai-gateway",
    title: "Best AI Gateway in 2026: Top 6 platforms compared",
    publishedLabel: "7/9/2026",
    readTime: "17 min read",
    excerpt:
      "AI adoption usually starts small: one team tries ChatGPT, another tests Claude, and engineers start wiring models into products. Before you know it, those tools are shaping customer support, internal research, product features, and everyday decisions — and usage grows, costs spread, API keys multiply, and visibility goes out the window.",
  },
  {
    slug: "portkey-alternatives",
    title: "Best Portkey alternatives for AI teams in 2026",
    publishedLabel: "9/14/2026",
    readTime: "16 min read",
  },
  {
    slug: "claude-alternatives",
    title: "Best Claude alternatives in 2026: Chat, code, and agent tools",
    publishedLabel: "9/10/2026",
    readTime: "29 min read",
  },
  {
    slug: "ai-usage-tracking",
    title: "AI usage tracking: How to monitor tokens, costs, and governance",
    publishedLabel: "9/8/2026",
    readTime: "13 min read",
  },
  {
    slug: "litellm-alternatives",
    title: "Best LiteLLM alternatives in 2026",
    publishedLabel: "9/3/2026",
    readTime: "19 min read",
  },
  {
    slug: "is-openrouter-safe",
    title: "Is OpenRouter safe? What you need to know before using it in 2026",
    publishedLabel: "9/2/2026",
    readTime: "11 min read",
  },
  {
    slug: "llm-observability-tools",
    title: "10 best LLM observability tools to monitor and evaluate (2026)",
    publishedLabel: "8/31/2026",
    readTime: "24 min read",
  },
  {
    slug: "openclaw-alternatives",
    title: "Best OpenClaw alternatives for small businesses and teams",
    publishedLabel: "8/27/2026",
    readTime: "17 min read",
  },
  {
    slug: "grok-4-benchmarks",
    title: "Grok 4 benchmarks: performance analysis & comparison",
    publishedLabel: "8/18/2026",
    readTime: "21 min read",
  },
  {
    slug: "how-to-automate-linkedin-outreach",
    title: "How to automate LinkedIn outreach with AI agents in 2026",
    publishedLabel: "8/24/2026",
    readTime: "6 min read",
  },
  {
    slug: "langdock-alternatives",
    title: "Best Langdock alternatives for enterprise AI in 2026",
    publishedLabel: "8/17/2026",
    readTime: "13 min read",
  },
  {
    slug: "eu-ai-act",
    title: "EU AI Act explained: risk tiers, deadlines, and what it means for your business",
    publishedLabel: "8/14/2026",
    readTime: "15 min read",
  },
  {
    slug: "nexos-ai-credits",
    title: "nexos.ai credits: How they work and how to use them",
    publishedLabel: "8/12/2026",
    readTime: "11 min read",
  },
  {
    slug: "ai-governance",
    title: "AI governance: frameworks, tools, and best practices",
    publishedLabel: "8/11/2026",
    readTime: "18 min read",
  },
  {
    slug: "requesty-alternatives",
    title: "Best 7 Requesty alternatives in 2026",
    publishedLabel: "8/10/2026",
    readTime: "15 min read",
  },
];

const SLUGS = new Set(LISTING.map((p) => p.slug));

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

async function fetchText(url) {
  const { stdout } = await execFileAsync(
    "curl",
    ["-fsSL", "-A", UA, "-H", "Accept: text/html", "-H", "Accept-Language: en-US,en;q=0.9", url],
    { maxBuffer: 20 * 1024 * 1024, encoding: "utf8" },
  );
  return stdout;
}

async function download(url, dest) {
  await mkdir(dirname(dest), { recursive: true });
  await execFileAsync("curl", ["-fsSL", "-A", UA, "-o", dest, url], {
    maxBuffer: 20 * 1024 * 1024,
  });
}

function decode(html) {
  return html
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
}

function sectionHtml(html, id) {
  const re = new RegExp(
    `<section[^>]*id="${id}"[^>]*>([\\s\\S]*?)</section>`,
    "i",
  );
  const m = html.match(re);
  return m ? m[1] : "";
}

function metaContent(html, attr, value) {
  const re = new RegExp(
    `<meta[^>]+${attr}="${value}"[^>]+content="([^"]*)"|<meta[^>]+content="([^"]*)"[^>]+${attr}="${value}"`,
    "i",
  );
  const m = html.match(re);
  return decode(m?.[1] || m?.[2] || "");
}

function jsonLdArticle(html) {
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  for (const block of blocks) {
    try {
      const data = JSON.parse(block[1]);
      const graph = data["@graph"] || (Array.isArray(data) ? data : [data]);
      const article = graph.find((n) => n["@type"] === "Article");
      if (article) return article;
    } catch {
      /* skip */
    }
  }
  return {};
}

function extractToc(html) {
  const m = html.match(/TableOfContents[\s\S]*?props="([^"]+)"/);
  if (!m) return [];
  try {
    const props = JSON.parse(decode(m[1]));
    const items = props.items?.[1] || [];
    return items
      .map((entry) => entry?.[0]?.[1] || entry)
      .map((item) => {
        if (!item || typeof item !== "object") return null;
        const id = item.id?.[1] ?? item.id?.[0] ?? item.id;
        const text = item.text?.[1] ?? item.text?.[0] ?? item.text;
        const level = item.level?.[1] ?? item.level?.[0] ?? item.level;
        if (!id || !text) return null;
        return { id, text, level: Number(level) || 2 };
      })
      .filter(Boolean);
  } catch {
    return [...html.matchAll(/"id":\[0,"([^"]+)"\],"text":\[0,"([^"]+)"\],"level":\[0,(\d+)\]/g)].map(
      (x) => ({ id: x[1], text: decode(x[2]), level: Number(x[3]) }),
    );
  }
}

function extractAuthor(html) {
  const href = html.match(/\/blog\/author\/([^/"']+)\//);
  const name =
    html.match(/alt="([^"]+)"[^>]*class="h-12 w-12/) ||
    html.match(/<p class="body-md text-secondary[^"]*"[^>]*>([^<]+)<\/p>/);
  const portraitMatch = html.match(
    /<img alt="([^"]+)" loading="lazy" height="1110" width="1110"[^>]*src="https:\/\/sb\.nordcdn\.com\/transform\/([a-f0-9-]+)\/([^"?]+)/,
  );
  return {
    slug: href?.[1] || "",
    name: decode(portraitMatch?.[1] || name?.[1] || "").trim(),
    imageId: portraitMatch?.[2] || "",
    imageFile: portraitMatch?.[3] || "",
  };
}

function extractIntro(html) {
  const hero = sectionHtml(html, "blog-article");
  const paras = [...hero.matchAll(/<p class="body-md md:body-lg[^"]*"[^>]*>([\s\S]*?)<\/p>/g)].map(
    (m) =>
      decode(
        m[1]
          .replace(/<style[\s\S]*?<\/style>/g, "")
          .replace(/<[^>]+>/g, "")
          .replace(/\s+/g, " ")
          .trim(),
      ),
  );
  return paras.filter(Boolean);
}

function extractFaq(html) {
  const faq = sectionHtml(html, "faq");
  if (!faq) return [];
  const items = [];
  const re =
    /<p class="heading-xs[^"]*"[^>]*>([\s\S]*?)<\/p>[\s\S]*?<div class="rich-text[^"]*"[^>]*>([\s\S]*?)<\/div>/g;
  for (const m of faq.matchAll(re)) {
    items.push({
      question: decode(m[1].replace(/<[^>]+>/g, "").trim()),
      answerHtml: sanitize(m[2]),
    });
  }
  return items;
}

function extractBio(html) {
  const sec = sectionHtml(html, "blog-article-content-2");
  const paras = [...sec.matchAll(/<p class="[^"]*"[^>]*>([\s\S]*?)<\/p>/g)].map((m) =>
    decode(m[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()),
  );
  return paras.filter((p) => p && !/^Mindaugas|^Eanna|^[A-Z][a-z]+ [A-Z]/.test(p) || p.length > 80).pop() || paras[paras.length - 1] || "";
}

function rewriteHref(href) {
  try {
    const url = new URL(href, "https://nexos.ai");
    if (url.hostname === "nexos.ai" || url.hostname === "www.nexos.ai") {
      const path = url.pathname.replace(/\/$/, "") || "/";
      const blog = path.match(/^\/blog\/([^/]+)$/);
      if (blog) {
        return SLUGS.has(blog[1]) ? `/blog/${blog[1]}` : null;
      }
      if (path.startsWith("/blog/author")) return null;
      if (LOCAL_ROUTES.has(path)) return path;
      if (path.startsWith("/features/") || path.startsWith("/ai-")) return path;
      return path;
    }
    if (url.protocol === "http:" || url.protocol === "https:") return url.href;
  } catch {
    /* ignore */
  }
  return href;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

function sanitize(raw, imageMap = new Map()) {
  let html = raw
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<\/?astro-island[^>]*>/g, "")
    .replace(/<\/?astro-slot[^>]*>/g, "")
    .replace(/<picture[\s\S]*?<img([^>]*)>[\s\S]*?<\/picture>/gi, "<img$1>");

  html = html.replace(/<a([^>]*)>([\s\S]*?)<\/a>/gi, (_, attrs, inner) => {
    const href = (attrs.match(/href="([^"]*)"/) || [])[1];
    if (!href) return inner;
    const next = rewriteHref(href);
    if (!next) return inner.replace(/<[^>]+>/g, "");
    const text = inner.replace(/<[^>]+>/g, "");
    return `<a href="${next}">${text}</a>`;
  });

  html = html.replace(/<img([^>]*)>/gi, (all, attrs) => {
    const src = (attrs.match(/src="([^"]*)"/) || [])[1] || "";
    const alt = (attrs.match(/alt="([^"]*)"/) || [])[1] || "";
    if (!src.startsWith("http") || src.includes("placeholder") || src.startsWith("data:")) return "";
    const file = src.split("/").pop().split("?")[0];
    const key = slugify(file || alt || "inline");
    imageMap.set(key, src.replace(/format=avif/, "format=webp").replace(/,width:\d+/, ""));
    return `<img alt="${alt}" data-asset="${key}" />`;
  });

  html = html
    .replace(/\sclass="[^"]*"/g, "")
    .replace(/\sstyle="[^"]*"/g, "")
    .replace(/\sdata-(?!asset)[a-z-]+="[^"]*"/g, "")
    .replace(/\s(loading|height|width|fetchpriority|sizes)="[^"]*"/g, "")
    .replace(/<span(?:\s[^>]*)?>/g, "")
    .replace(/<\/span>/g, "")
    .replace(/<div(?:\s[^>]*)?>/g, "")
    .replace(/<\/div>/g, "")
    .replace(/<b>/g, "<strong>")
    .replace(/<\/b>/g, "</strong>")
    .replace(/\s+/g, " ")
    .replace(/> </g, "><")
    .trim();

  return html;
}

function extractBody(html, imageMap) {
  const sec = sectionHtml(html, "blog-article-content-0");
  const rich = sec.match(/<div class="rich-text[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/);
  const raw = rich ? rich[1] : sec;
  return sanitize(raw, imageMap);
}

async function extractPost(entry) {
  const url = `https://nexos.ai/blog/${entry.slug}/`;
  const html = await fetchText(url);
  const article = jsonLdArticle(html);
  const imageMap = new Map();
  const author = extractAuthor(html);
  const og = metaContent(html, "property", "og:image");
  const description =
    article.description || metaContent(html, "name", "description") || entry.excerpt || "";
  const intro = extractIntro(html);
  const toc = extractToc(html);
  const bodyHtml = extractBody(html, imageMap);
  const faq = extractFaq(html);
  const bio = extractBio(html);

  const featuredFile = `${entry.slug}-featured.webp`;
  if (og) {
    imageMap.set("__featured", `${og}${og.includes("?") ? "&" : "?"}format=webp`.replace("format=avif", "format=webp"));
  }

  return {
    ...entry,
    url,
    description,
    intro,
    author,
    bio,
    toc,
    faq,
    bodyHtml,
    og,
    images: Object.fromEntries(imageMap),
    featuredFile,
    datePublished: article.datePublished || "",
  };
}

const posts = [];
for (const entry of LISTING) {
  process.stdout.write(`extract ${entry.slug}...\n`);
  const post = await extractPost(entry);
  posts.push(post);
}

await mkdir(join(ROOT, "src/data/blog/content"), { recursive: true });
await mkdir(join(ROOT, "src/assets/images/blog/featured"), { recursive: true });
await mkdir(join(ROOT, "src/assets/images/blog/authors"), { recursive: true });
await mkdir(join(ROOT, "src/assets/images/blog/articles"), { recursive: true });
await mkdir(join(ROOT, "src/assets/images/blog/shared"), { recursive: true });

const authors = new Map();
for (const post of posts) {
  if (post.author.imageId && post.author.imageFile) {
    authors.set(post.author.slug || slugify(post.author.name), post.author);
  }
  if (post.og) {
    const dest = join(ROOT, "src/assets/images/blog/featured", post.featuredFile);
    const url = post.og.includes("format=")
      ? post.og.replace("format=avif", "format=webp")
      : `${post.og}?io=transform:fill&format=webp`;
    try {
      await download(url, dest);
    } catch (err) {
      console.warn("featured fail", post.slug, err.message);
    }
  }
  for (const [key, src] of Object.entries(post.images)) {
    if (key === "__featured") continue;
    const dest = join(ROOT, "src/assets/images/blog/articles", `${post.slug}-${key}.webp`);
    const url = src.includes("format=") ? src.replace("format=avif", "format=webp") : `${src}&format=webp`;
    try {
      await download(url.split("&format=")[0].includes("?") ? url : `${url}${url.includes("?") ? "&" : "?"}format=webp`, dest);
      post.images[key] = `${post.slug}-${key}.webp`;
    } catch (err) {
      console.warn("inline fail", post.slug, key, err.message);
    }
  }
}

for (const [key, author] of authors) {
  const dest = join(ROOT, "src/assets/images/blog/authors", `${key}.webp`);
  const url = `https://sb.nordcdn.com/transform/${author.imageId}/${author.imageFile}?io=transform:fill&format=webp`;
  try {
    await download(url, dest);
    author.local = `${key}.webp`;
  } catch (err) {
    console.warn("author fail", key, err.message);
  }
}

for (const name of ["abstract-grid-bg-xl", "abstract-grid-bg-xs"]) {
  const ids = {
    "abstract-grid-bg-xl": "98249b9b-c233-4126-8254-3c147bd9a80a",
    "abstract-grid-bg-xs": "5b39906a-523f-44fb-87ab-66c0497da343",
  };
  const dest = join(ROOT, "src/assets/images/blog/shared", `${name}.webp`);
  try {
    await download(
      `https://sb.nordcdn.com/transform/${ids[name]}/${name}?io=transform:fill&format=webp`,
      dest,
    );
  } catch (err) {
    console.warn("cta bg fail", name, err.message);
  }
}

const slim = posts.map((post) => ({
  slug: post.slug,
  title: post.title,
  description: post.description,
  excerpt: post.excerpt || post.intro[0] || post.description,
  intro: post.intro,
  publishedLabel: post.publishedLabel,
  readTime: post.readTime,
  datePublished: post.datePublished,
  author: {
    name: post.author.name,
    slug: post.author.slug,
    image: authors.get(post.author.slug || slugify(post.author.name))?.local || "",
    bio: post.bio,
  },
  toc: post.toc,
  faq: post.faq,
  bodyHtml: post.bodyHtml,
  featuredFile: post.featuredFile,
  inlineImages: post.images,
  sourceUrl: post.url,
}));

await writeFile(
  join(ROOT, "src/data/blog/content/posts.json"),
  JSON.stringify(slim, null, 2),
);
console.log("wrote", slim.length, "posts");
for (const p of slim) {
  console.log(
    p.slug,
    "toc",
    p.toc.length,
    "faq",
    p.faq.length,
    "html",
    p.bodyHtml.length,
    "author",
    p.author.name,
  );
}
