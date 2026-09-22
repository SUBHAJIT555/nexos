export const siteConfig = {
  name: "NexEco AI",
  shortName: "NexEco",
  description:
    "NexEco AI is a modern AI platform for intelligent automation, model access, and sustainable technology — optimize spend, build responsibly, and scale with confidence.",
  /**
   * Production origin. Set NEXT_PUBLIC_SITE_URL=https://nexeco-ai.com in production.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  docsUrl: process.env.NEXT_PUBLIC_DOCS_URL ?? "/docs",
  locale: "en_US",
  domain: "nexeco-ai.com",
  email: "info@nexeco-ai.com",
} as const;

export type SiteConfig = typeof siteConfig;

export function getMetadataBase(): URL {
  if (siteConfig.url) {
    return new URL(siteConfig.url);
  }

  return new URL("https://nexeco-ai.com");
}

export function hasProductionUrl(): boolean {
  return siteConfig.url.length > 0;
}

export function getCanonicalUrl(path = ""): string {
  const base = siteConfig.url || "https://nexeco-ai.com";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base.replace(/\/$/, "")}${normalized === "/" ? "" : normalized}`;
}
