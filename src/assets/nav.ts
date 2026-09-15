import type { StaticImageData } from "next/image";
import payhawkStory from "@/assets/images/nav/case-study-payhawk.webp";

export const navGraphics = {
  payhawkStory,
} as const satisfies Record<string, StaticImageData>;
