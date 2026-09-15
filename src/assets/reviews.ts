import type { StaticImageData } from "next/image";
import { agentsIllustrations, agentsPressLogos, agentsShots } from "@/assets/agents";
import { homePortraits } from "@/assets/home";
import observabilityHero from "@/assets/images/observability/hero.webp";
import hero from "@/assets/images/reviews/reviews-hero.webp";
import creator20vc from "@/assets/images/reviews/creator-20vc.webp";
import creatorFocused from "@/assets/images/reviews/creator-focused.webp";
import creatorThisWeek from "@/assets/images/reviews/creator-this-week.webp";
import creatorCortex from "@/assets/images/reviews/creator-cortex.webp";
import creatorUpgrade from "@/assets/images/reviews/creator-upgrade.webp";
import creatorEconomicsHelp from "@/assets/images/reviews/creator-economics-help.webp";
import creatorProductiveConversation from "@/assets/images/reviews/creator-productive-conversation.webp";
import vilniusTechfusion from "@/assets/images/reviews/vilnius-techfusion.webp";
import gra from "@/assets/images/reviews/gra.webp";
import greenfield from "@/assets/images/reviews/greenfield.webp";
import firstpick from "@/assets/images/reviews/firstpick.webp";
import versloZinios from "@/assets/images/reviews/verslo-zinios.webp";
import euroSeed from "@/assets/images/reviews/euro-seed.webp";
import eventGartner from "@/assets/images/reviews/event-gartner-xpo.webp";
import eventHackathon from "@/assets/images/reviews/event-ai-hackathon.webp";
import modelSelection from "@/assets/images/reviews/reviews-model-selection.webp";
import techcrunchColored from "@/assets/logos/reviews/techcrunch-colored.svg";
import cybernewsLogo from "@/assets/logos/reviews/cybernews-logo.svg";
import bloombergColored from "@/assets/logos/reviews/bloomberg-colored.svg";
import politicoColored from "@/assets/logos/reviews/politico-colored.svg";
import forbesLogo from "@/assets/logos/reviews/forbes-logo.svg";
import techradarLogo from "@/assets/logos/reviews/techradar-logo.svg";
import logoCarouselPress from "@/assets/logos/reviews/logo-carousel-press.svg";

export const reviewsHeroShot = hero;

export const reviewsCreators = {
  twentyVc: creator20vc,
  focused: creatorFocused,
  thisWeek: creatorThisWeek,
  cortex: creatorCortex,
  upgrade: creatorUpgrade,
  economicsHelp: creatorEconomicsHelp,
  productiveConversation: creatorProductiveConversation,
} as const satisfies Record<string, StaticImageData>;

export const reviewsFeaturedLogos = {
  techcrunch: techcrunchColored,
  cybernews: cybernewsLogo,
  bloomberg: bloombergColored,
  politico: politicoColored,
  forbes: forbesLogo,
  techradar: techradarLogo,
} as const;

export const reviewsAwardLogos = {
  vilnius: vilniusTechfusion,
  gra,
  greenfield,
  techcrunch: techcrunchColored,
  firstpick,
  verslo: versloZinios,
  euroSeed,
} as const;

export const reviewsEventShots = {
  gartner: eventGartner,
  hackathon: eventHackathon,
} as const satisfies Record<string, StaticImageData>;

export const reviewsWhyShots = {
  createAgent: agentsShots.createAgent,
  templates: agentsShots.templates,
  modelSelection,
  observability: observabilityHero,
} as const satisfies Record<string, StaticImageData>;

export const reviewsPortraits = {
  vytautas: homePortraits.vytautas,
  lauryna: homePortraits.lauryna,
  ilma: homePortraits.ilma,
  juras: homePortraits.juras,
  dainius: homePortraits.dainius,
  boyko: homePortraits.boyko,
  romas: homePortraits.romas,
} as const satisfies Record<string, StaticImageData>;

export const reviewsPressLogos = agentsPressLogos;

export const reviewsPressMobile = logoCarouselPress;

export const reviewsIntegrationsLogos = agentsIllustrations.integrationsLogos;
