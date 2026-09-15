export const siteConfig = {
  name: "Brand",
  shortName: "Brand",
  description:
    "One platform to access leading AI models, see every request, and optimize spend.",
  /**
   * Production origin. Leave empty until a real public URL is available.
   * Canonical URLs, Open Graph, and sitemap use this value only when set.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  docsUrl: process.env.NEXT_PUBLIC_DOCS_URL ?? "/docs",
  locale: "en_US",
} as const;

export type SiteConfig = typeof siteConfig;

export function getMetadataBase(): URL {
  if (siteConfig.url) {
    return new URL(siteConfig.url);
  }

  return new URL("http://localhost:3000");
}

export function hasProductionUrl(): boolean {
  return siteConfig.url.length > 0;
}
