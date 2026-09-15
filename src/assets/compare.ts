import type { StaticImageData } from "next/image";
import hero from "@/assets/images/compare-ai-models/hero.webp";
import marketing from "@/assets/images/compare-ai-models/marketing.webp";
import developers from "@/assets/images/compare-ai-models/developers.webp";
import legal from "@/assets/images/compare-ai-models/legal.webp";
import tourBanner from "@/assets/images/compare-ai-models/tour-banner.webp";
import tourBannerXs from "@/assets/images/compare-ai-models/tour-banner-xs.webp";
import oxylabs from "@/assets/logos/compare/oxylabs.svg";
import payhawk from "@/assets/logos/compare/payhawk.svg";
import hostinger from "@/assets/logos/compare/hostinger.svg";
import nordSecurity from "@/assets/logos/nord-security.svg";
import playFilled from "@/assets/icons/ui/play-filled.svg";
import animatedGradient from "@/assets/illustrations/animated-gradient-single.svg";
import { agentsIllustrations } from "@/assets/agents";

export const compareShots = {
  hero,
  marketing,
  developers,
  legal,
  tourBanner,
  tourBannerXs,
} as const satisfies Record<string, StaticImageData>;

export const compareTrustLogos = [
  { id: "oxylabs", src: oxylabs, alt: "Oxylabs" },
  { id: "payhawk", src: payhawk, alt: "Payhawk" },
  { id: "nord", src: nordSecurity, alt: "Nord Security" },
  { id: "hostinger", src: hostinger, alt: "Hostinger" },
] as const;

export const compareIllustrations = {
  gridCentered: agentsIllustrations.gridCentered,
  animatedGradient,
  playFilled,
};
