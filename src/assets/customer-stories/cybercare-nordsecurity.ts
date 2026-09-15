import type { StaticImageData } from "next/image";
import logosStrip from "@/assets/images/customer-stories/cybercare-nordsecurity/nord-cybercare-nexos-logos.webp";
import heroChart from "@/assets/images/customer-stories/cybercare-nordsecurity/cybercare-hero-chart.webp";
import nordLogoWhite from "@/assets/images/customer-stories/cybercare-nordsecurity/nordsec-horizontal-white.webp";
import cybercareLogoWhite from "@/assets/images/customer-stories/cybercare-nordsecurity/cybercare-white.webp";
import nexosLogoWhite from "@/assets/images/customer-stories/cybercare-nordsecurity/nexos-ai-logo-white.svg";
import karolis from "@/assets/images/customer-stories/cybercare-nordsecurity/karolis-valaika.webp";
import team from "@/assets/images/customer-stories/cybercare-nordsecurity/cybercare-team.webp";
import justas from "@/assets/images/customer-stories/cybercare-nordsecurity/justas-morkunas.webp";
import karina from "@/assets/images/customer-stories/cybercare-nordsecurity/karina-dirvonskiene.webp";
import tomas from "@/assets/images/customer-stories/cybercare-nordsecurity/tomas-vilcinskas.webp";
import { nordSecurityGraphics } from "@/assets/customer-stories/nord-security";

export const cybercareGraphics = {
  logosStrip,
  heroChart,
  nordLogoWhite,
  cybercareLogoWhite,
  nexosLogoWhite,
  karolis,
  team,
  justas,
  karina,
  tomas,
  relatedPayhawk: nordSecurityGraphics.relatedPayhawk,
  relatedOxylabs: nordSecurityGraphics.relatedOxylabs,
  relatedHostinger: nordSecurityGraphics.relatedHostinger,
  relatedNord: nordSecurityGraphics.hero,
} as const satisfies Record<string, StaticImageData | string>;
