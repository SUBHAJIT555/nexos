import type { StaticImageData } from "next/image";
import modelIconsDesktop from "@/assets/images/pricing/pricing-model-icons-2.webp";
import modelIconsMobile from "@/assets/images/pricing/pricing-model-icons.webp";
import tableModelIcons from "@/assets/images/pricing/table-model-icons-2.webp";
import tableToolIcons from "@/assets/images/pricing/pricing-table-tools-icons.webp";
import bannerLightGlow from "@/assets/images/ai-integrations/banner-light-glow.webp";

export const pricingImages = {
  modelIconsDesktop,
  modelIconsMobile,
  tableModelIcons,
  tableToolIcons,
  bannerLightGlow,
} as const satisfies Record<string, StaticImageData>;
