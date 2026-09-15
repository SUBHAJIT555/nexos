import type { StaticImageData } from "next/image";
import hero from "@/assets/images/smart-llm-routing/smart-llm-routing-hero.svg";
import cutCosts from "@/assets/images/smart-llm-routing/cut-costs-not-quality.webp";
import reliability from "@/assets/images/smart-llm-routing/improve-reliability.webp";
import noLogic from "@/assets/images/smart-llm-routing/no-routing-logic.webp";
import learning from "@/assets/images/smart-llm-routing/continuous-learning.webp";
import how from "@/assets/images/smart-llm-routing/how-routing-works.webp";
import { homeLogos } from "@/assets/home";

export const routingGraphics = {
  hero,
  cutCosts,
  reliability,
  noLogic,
  learning,
  how,
  trustedWhite: homeLogos.trustedWhite,
  trustedWhiteMobile: homeLogos.trustedWhiteMobile,
} as const satisfies Record<string, string | StaticImageData>;
