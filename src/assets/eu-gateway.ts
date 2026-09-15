import badgeDataResidencyDark from "@/assets/images/eu-gateway/badge-data-residency-dark.svg";
import heroXl from "@/assets/images/eu-gateway/eu-data-residency-hero-xl.svg";
import heroXs from "@/assets/images/eu-gateway/eu-data-residency-hero-xs.svg";
import apiUrl from "@/assets/images/eu-gateway/eu-data-api-url.svg";
import governance from "@/assets/images/eu-gateway/eu-secure-ai-governance.webp";
import dottedBg from "@/assets/images/eu-gateway/dotted-bg-glow-bottom.svg";
import { productIllustrations } from "@/assets/products";

export const euGatewayGraphics = {
  badge: badgeDataResidencyDark,
  heroXl,
  heroXs,
  apiUrl,
  governance,
  dottedBg,
  ctaGrid: productIllustrations.gridGlowBottomDark,
  ctaGridXs: productIllustrations.gridGlowBottomDarkXs,
} as const;
