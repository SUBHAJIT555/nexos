import type { StaticImageData } from "next/image";
import aiGatewayHeroTabs from "@/assets/images/home/ai-gateway-hero-tabs.webp";
import aiWorkspaceHeroTabs from "@/assets/images/home/ai-workspace-hero-tabs.webp";
import observabilityHeroTabs from "@/assets/images/home/observability-hero-tabs.webp";
import governanceHeroTabs from "@/assets/images/home/governance-hero-tabs.webp";
import smartRoutingCard from "@/assets/images/home/smart-routing-card.webp";
import llmCachingCard from "@/assets/images/home/llm-caching-card.webp";
import contextCompressionCard from "@/assets/images/home/context-compression-card.webp";
import fallbacksCard from "@/assets/images/home/fallbacks-card.webp";
import badgeGdpr from "@/assets/images/home/badge-gdpr.webp";
import badgeAicpa from "@/assets/images/home/badge-aicpa.webp";
import badgeIso27001 from "@/assets/images/home/badge-iso-27001.webp";
import badgeIso42001 from "@/assets/images/home/badge-iso-42001.webp";
import marijusBriedis from "@/assets/images/home/marijus-briedis.webp";
import testimonialJuras from "@/assets/images/home/testimonial-juras.webp";
import testimonialDainius from "@/assets/images/home/testimonial-dainius.webp";
import testimonialBoyko from "@/assets/images/home/testimonial-boyko.webp";
import testimonialRomas from "@/assets/images/home/testimonial-romas.webp";
import testimonialVytautas from "@/assets/images/home/testimonial-vytautas.webp";
import testimonialIlma from "@/assets/images/home/testimonial-ilma.webp";
import testimonialVismantas from "@/assets/images/home/testimonial-vismantas.webp";
import testimonialGiedre from "@/assets/images/home/testimonial-giedre.webp";
import testimonialLauryna from "@/assets/images/home/testimonial-lauryna.webp";
import trustedWhite from "@/assets/logos/trusted-white.svg";
import trustedWhiteMobile from "@/assets/logos/trusted-white-mobile.svg";

export const homeProductShots = {
  "ai-gateway": aiGatewayHeroTabs,
  observability: observabilityHeroTabs,
  governance: governanceHeroTabs,
  workspace: aiWorkspaceHeroTabs,
} as const satisfies Record<string, StaticImageData>;

export const homeCostShots = {
  "smart-routing": smartRoutingCard,
  "llm-caching": llmCachingCard,
  "context-compression": contextCompressionCard,
  fallbacks: fallbacksCard,
} as const satisfies Record<string, StaticImageData>;

export const homeCertBadges = [
  { id: "gdpr", src: badgeGdpr, alt: "GDPR round badge" },
  { id: "aicpa", src: badgeAicpa, alt: "AICPA round badge" },
  { id: "iso-27001", src: badgeIso27001, alt: "ISO 27001 round badge" },
  { id: "iso-42001", src: badgeIso42001, alt: "ISO 42001 round badge" },
] as const;

export const homePortraits = {
  featured: marijusBriedis,
  juras: testimonialJuras,
  dainius: testimonialDainius,
  boyko: testimonialBoyko,
  romas: testimonialRomas,
  vytautas: testimonialVytautas,
  ilma: testimonialIlma,
  vismantas: testimonialVismantas,
  giedre: testimonialGiedre,
  lauryna: testimonialLauryna,
} as const satisfies Record<string, StaticImageData>;

export const homeLogos = {
  trustedWhite,
  trustedWhiteMobile,
};

export function assetSrc(value: string | { src: string }) {
  return typeof value === "string" ? value : value.src;
}
