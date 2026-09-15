import type { StaticImageData } from "next/image";
import logoCarouselDesktop from "@/assets/images/customer-stories/listing/logo-carousel-customer-stories-v3.svg";
import logoCarouselMobile from "@/assets/images/customer-stories/listing/mobile-logo-carousel-customer-stories-v3.svg";
import marijusBriedis from "@/assets/images/customer-stories/portraits/marijus-briedis-customer-story.webp";
import nordSecurity from "@/assets/images/customer-stories/logos/nord-security.svg";
import piguLt from "@/assets/images/customer-stories/logos/pigu-lt.svg";
import payhawk from "@/assets/images/customer-stories/logos/payhawk.svg";
import oxylabs from "@/assets/images/customer-stories/logos/oxylabs.svg";
import hostinger from "@/assets/images/customer-stories/logos/hostinger.svg";
import { payhawkGraphics } from "@/assets/customer-stories/payhawk";

export const listingGraphics = {
  logoCarouselDesktop,
  logoCarouselMobile,
  marijusBriedis,
  bannerBlob: payhawkGraphics.bannerBlob,
  bannerMaskPurple: payhawkGraphics.bannerMaskPurple,
} as const;

export const listingLogos = {
  "nord-security": nordSecurity,
  "pigu-lt": piguLt,
  payhawk,
  oxylabs,
  hostinger,
} as const satisfies Record<string, StaticImageData | string>;
