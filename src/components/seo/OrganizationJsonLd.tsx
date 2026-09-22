import { siteConfig, getCanonicalUrl } from "@/config/site";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: getCanonicalUrl("/"),
    email: siteConfig.email,
    description: siteConfig.description,
    logo: getCanonicalUrl("/icon.svg"),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
