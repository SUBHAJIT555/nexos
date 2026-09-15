import type { StaticImageData } from "next/image";
import hero from "@/assets/images/customer-stories/nord-security/nord-security-hero.webp";
import marijusAvatar from "@/assets/images/customer-stories/nord-security/marijus-briedis-avatar.webp";
import relatedPayhawk from "@/assets/images/customer-stories/nord-security/related-payhawk-hero.webp";
import relatedHostinger from "@/assets/images/customer-stories/nord-security/related-hostinger-hero.webp";
import relatedPigu from "@/assets/images/customer-stories/nord-security/related-pigu-hero.webp";
import relatedOxylabs from "@/assets/images/customer-stories/nord-security/related-oxylabs-hero.webp";
import { blogAuthorImages } from "@/assets/blog";
import { payhawkGraphics } from "@/assets/customer-stories/payhawk";

export const nordSecurityGraphics = {
  hero,
  marijusAvatar,
  vytautas: blogAuthorImages["vytautas-vaitkevicius.webp"],
  relatedPayhawk,
  relatedHostinger,
  relatedPigu,
  relatedOxylabs,
  bannerBlob: payhawkGraphics.bannerBlob,
  bannerMaskPurple: payhawkGraphics.bannerMaskPurple,
} as const satisfies Record<string, StaticImageData | string>;
