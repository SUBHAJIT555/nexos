import type { StaticImageData } from "next/image";
import { homeLogos } from "@/assets/home";
import { productIllustrations } from "@/assets/products";
import heroXl from "@/assets/images/ai-gateway/llm-gateway-hero-animated-xl.svg";
import heroXs from "@/assets/images/ai-gateway/llm-gateway-hero-animated-xs.svg";
import schemaXl from "@/assets/images/ai-gateway/gateway-schema-dark-animated-xl.svg";
import schemaXs from "@/assets/images/ai-gateway/gateway-schema-dark-animated-xs.svg";
import connect from "@/assets/images/ai-gateway/connect-to-every-model.webp";
import optimize from "@/assets/images/ai-gateway/optimize-costs-smart-routing.webp";
import costs from "@/assets/images/ai-gateway/see-ai-costs-real-time.webp";
import everyTeam from "@/assets/images/ai-gateway/one-gateway-every-team.webp";
import moveFast from "@/assets/images/ai-gateway/move-fast-without-scary-invoice.webp";
import secure from "@/assets/images/ai-gateway/secure-by-default.webp";
import gradientXl from "@/assets/images/ai-gateway/gradient-1-xl.webp";
import modelsUi from "@/assets/images/ai-gateway/models-editing-ui-xl.webp";
import modelsUiXs from "@/assets/images/ai-gateway/models-editing-ui-xs.webp";

export const gatewayGraphics = {
  heroXl,
  heroXs,
  schemaXl,
  schemaXs,
  trustedWhite: homeLogos.trustedWhite,
  trustedWhiteMobile: homeLogos.trustedWhiteMobile,
  ctaGrid: productIllustrations.gridGlowBottomDark,
  ctaGridXs: productIllustrations.gridGlowBottomDarkXs,
};

export const gatewayShots = {
  connect,
  optimize,
  costs,
  everyTeam,
  moveFast,
  secure,
  gradientXl,
  modelsUi,
  modelsUiXs,
} as const satisfies Record<string, StaticImageData>;
