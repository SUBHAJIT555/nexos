import type { StaticImageData } from "next/image";
import hero from "@/assets/images/customer-stories/pigu-lt/pigu-lt-hero.webp";
import about from "@/assets/images/customer-stories/pigu-lt/pigu-lt-about.webp";
import peopleWorking from "@/assets/images/customer-stories/pigu-lt/pigu-lt-people-working.webp";
import vytautasRomeika from "@/assets/images/customer-stories/pigu-lt/vytautas-romeika.webp";
import descriptionEnhance from "@/assets/images/customer-stories/pigu-lt/pigu-lt-description-enhance.webp";
import imageFiltering from "@/assets/images/customer-stories/pigu-lt/pigu-lt-image-filtering.webp";
import productTranslation from "@/assets/images/customer-stories/pigu-lt/pigu-lt-product-translation.webp";
import videoPoster from "@/assets/images/customer-stories/pigu-lt/pigu-lt-video-poster.jpg";
import gradientLight from "@/assets/images/customer-stories/pigu-lt/pigu-lt-gradient-light.webp";
import gradientDark from "@/assets/images/customer-stories/pigu-lt/pigu-lt-gradient-dark.webp";
import ctaBanner from "@/assets/images/customer-stories/pigu-lt/pigu-lt-cta-banner.webp";
import ctaBannerXs from "@/assets/images/customer-stories/pigu-lt/pigu-lt-cta-banner-xs.webp";
import quoteLogo from "@/assets/images/customer-stories/pigu-lt/pigu-lt-quote-logo.svg";
import { payhawkGraphics } from "@/assets/customer-stories/payhawk";
import { nordSecurityGraphics } from "@/assets/customer-stories/nord-security";

export const piguLtGraphics = {
  hero,
  about,
  peopleWorking,
  vytautasRomeika,
  descriptionEnhance,
  imageFiltering,
  productTranslation,
  videoPoster,
  gradientLight,
  gradientDark,
  ctaBanner,
  ctaBannerXs,
  quoteLogo,
  miaLysikova: payhawkGraphics.miaLysikova,
  relatedPayhawk: nordSecurityGraphics.relatedPayhawk,
  relatedOxylabs: nordSecurityGraphics.relatedOxylabs,
  relatedHostinger: nordSecurityGraphics.relatedHostinger,
} as const satisfies Record<string, StaticImageData | string>;

export const piguLtVideoSrc = "/videos/customer-stories/pigu-lt/pigu-lt-testimonial.mp4";
