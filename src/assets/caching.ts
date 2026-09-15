import type { StaticImageData } from "next/image";
import hero from "@/assets/images/llm-caching/llm-caching-hero.svg";
import saveTime from "@/assets/images/llm-caching/save-engineering-time.webp";
import reduceCost from "@/assets/images/llm-caching/reduce-ai-costs.webp";
import faster from "@/assets/images/llm-caching/improve-response-times.webp";
import scale from "@/assets/images/llm-caching/scale-without-rebuilding.webp";
import { homeLogos } from "@/assets/home";

export const cachingGraphics = {
  hero,
  saveTime,
  reduceCost,
  faster,
  scale,
  trustedWhite: homeLogos.trustedWhite,
  trustedWhiteMobile: homeLogos.trustedWhiteMobile,
} as const satisfies Record<string, string | StaticImageData>;
