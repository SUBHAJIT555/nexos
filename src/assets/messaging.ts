import type { StaticImageData } from "next/image";
import hero from "@/assets/images/messaging/nexosai-assistant-2.webp";
import connected from "@/assets/images/messaging-apps/connected-to-data-4-3.webp";
import brain from "@/assets/images/messaging-apps/pick-the-right-brain-automatically.webp";
import memory from "@/assets/images/messaging/conversation-memory.webp";
import formats from "@/assets/images/messaging/different-formats.webp";
import sales from "@/assets/images/messaging/sales-team-slack.webp";
import marketing from "@/assets/images/messaging/marketing-team-slack.webp";
import hr from "@/assets/images/messaging/hr-team-slack.webp";
import ops from "@/assets/images/messaging/operations-team-slack.webp";
import role from "@/assets/images/messaging/your-role-slack.webp";
import builtForBadge from "@/assets/images/messaging-apps/badge-apps-upon-request.svg";
import slackTile from "@/assets/images/messaging-apps/app-slack-tile.svg";
import telegramTile from "@/assets/images/messaging-apps/app-telegram-tile.svg";
import whatsappTile from "@/assets/images/messaging-apps/app-whatsapp-tile.svg";
import teamsTile from "@/assets/images/messaging-apps/app-teams-tile.svg";
import pressFeatured from "@/assets/logos/messaging/logo-carousel-press-featured.svg";
import pressSm from "@/assets/logos/messaging/logo-carousel-press-sm.svg";
import pressXs from "@/assets/logos/messaging/logo-carousel-press-xs.svg";
import gridGlowDarkAnimated from "@/assets/illustrations/grid-glow-dark-animated.svg";

export const messagingPageShots = {
  hero,
  connected,
  brain,
  memory,
  formats,
  sales,
  marketing,
  hr,
  ops,
  role,
} as const satisfies Record<string, StaticImageData>;

export const messagingPageGraphics = {
  builtForBadge,
  slackTile,
  telegramTile,
  whatsappTile,
  teamsTile,
  pressFeatured,
  pressSm,
  pressXs,
  gridGlowDarkAnimated,
};
