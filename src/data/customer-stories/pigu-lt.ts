export const piguLtMeta = {
  title: "Pigu.lt optimizes e-commerce engine with nexos.ai",
  description:
    "Leading online retailer faced a dilemma: refining product descriptions and QAing 4.5 million products from a 6.5M catalog. Here’s how we did it with AI in 6 weeks.",
};

export const piguLtHero = {
  heading: "Pigu.lt integrates AI at the core of e-commerce",
  intro:
    "Leading online retailer faced a dilemma: refining product descriptions and QAing 4.5 million products from a 6.5M catalog. Here’s how we did it with AI in 6 weeks.",
  cta: { label: "Buy now", href: "/pricing" },
  metrics: [
    { value: "99.8%", label: "Cost reduction on AI product processing" },
    { value: "4.5M", label: "Product descriptions refined with AI in 1.5 months" },
  ],
  author: "By Mia Lysikova",
  authorAlt: "Mia Lysikova",
  heroAlt: "Pigu.lt logo",
};

export const piguLtMeet = {
  id: "meet-pigult",
  eyebrow: "Client at a glance",
  heading: "Meet Pigu.lt",
  paragraphs: [
    "Pigu.lt is the leading e-commerce center in the Baltics, with a massive catalog of 6.5 million products across multiple languages, categories, and markets.",
    "They manage 4.5 million products needing enrichment to meet quality standards for traffic and sales, and a constant flow of new products that require quality assurance: translation, sensitive content filtering, pricing, and more. Manual QA became too costly and lengthy.",
  ],
  imageAlt: "pigu about",
};

export const piguLtBefore = {
  id: "manually-enriching",
  eyebrow: "Before nexos.ai",
  heading: "Scaling leading online retailer in Northern Europe",
  intro: "Pigu.lt faced a massive task:",
  cards: [
    {
      icon: "cart" as const,
      title: "Manually enriching 4.5M products",
      body: "The process was slow, expensive, and created two-week backlogs. They spent $350K on translations alone.",
    },
    {
      icon: "gear" as const,
      title: "Quality issues",
      body: "Quality issues kept appearing with pricing, filtering inappropriate content, and product information. After working with consultants for 1.5 years with no results, they needed a better solution.",
    },
  ],
  imageAlt: "People working",
};

export const piguLtQuote = {
  id: "quality-issues",
  logoAlt: "pigu.lt",
  quote:
    "“Our content team needed to optimize 4 million products in our catalog – that’s a lot. And to do it by hand would take 3 years and cost us millions of euros. That’s extremely expensive. With nexos.ai, optimizing one item is 99.8% cheaper than doing it manually.”",
  name: "Vytautas Romeika",
  title: "CMO @ Pigu.lt",
  portraitAlt: "vytautas romeika",
};

export const piguLtWithIntro = {
  eyebrow: "With nexos.ai",
  heading: "Integrating AI into the core of e-commerce",
};

export type PiguStat = {
  kicker: string;
  value: string;
  caption: string;
};

export type PiguOutcome = {
  id: string;
  icon:
    | "trendDown"
    | "sparkles"
    | "image"
    | "language"
    | "barcode"
    | "search";
  heading: string;
  without: string;
  withNexos: string;
  from?: PiguStat;
  to?: PiguStat;
  savings?: { value: string; label: string };
  visual?: "descriptionEnhance" | "imageFiltering" | "productTranslation";
  visualAlt?: string;
};

export const piguLtOutcomes: PiguOutcome[] = [
  {
    id: "massive-cost-reduction",
    icon: "trendDown",
    heading: "Massive cost reduction",
    without:
      "Previously, the Pigu.lt team spent huge budgets to optimize each product description.",
    withNexos:
      "By using AI Gateway to automatically generate and improve product descriptions, product enrichment costs dropped by 99.8%.",
    savings: { value: "99.8%", label: "Savings on AI product refinement" },
    visual: "descriptionEnhance",
    visualAlt: "Description enchance",
  },
  {
    id: "fast-ai-processing",
    icon: "sparkles",
    heading: "Fast AI processing",
    without:
      "Production delays for product descriptions and search optimization extended to 2+ weeks, impacting time-to-market.",
    withNexos:
      "With nexos.ai, Pigu.lt completed catalog enrichment in 1.5 months versus an estimated 3 years for manual processes of all products.",
    from: {
      kicker: "From:",
      value: "3 years",
      caption: "To manually process all QA queries",
    },
    to: {
      kicker: "To:",
      value: "1.5 months",
      caption: "Took for AI to process all products with nexos.ai",
    },
  },
  {
    id: "automatic-image-filtering",
    icon: "image",
    heading: "Automatic image filtering",
    without:
      "Certain inappropriate photos cannot be uploaded to the platform according to regulations. Manual QA takes a long time.",
    withNexos:
      "Instead of a dedicated team of human QA agents, Pigu.lt sends a request through the AI Gateway — if the AI model identifies that the image includes prohibited symbols or other imagery, it won’t allow the product to be uploaded.",
    visual: "imageFiltering",
    visualAlt: "Inappropriate images filtering",
  },
  {
    id: "product-translation",
    icon: "language",
    heading: "Product translation at scale",
    without:
      "Pigu.lt spent $350K on external translation agencies when sellers needed product information in additional languages.",
    withNexos:
      "With nexos.ai, Pigu.lt can translate product descriptions for approximately $30K, reducing translation costs by over 90%.",
    from: {
      kicker: "From:",
      value: "$350K",
      caption: "spent on external translation agencies",
    },
    to: {
      kicker: "To:",
      value: "$30K",
      caption: "AI-generated product translations",
    },
    savings: { value: "90%", label: "Savings:" },
    visual: "productTranslation",
    visualAlt: "Product translation",
  },
  {
    id: "automated-intelligence",
    icon: "barcode",
    heading: "Automated intelligence for sensitive categories",
    without:
      "Pigu.lt struggled to manually create ingredient lists for beauty products and similar items to meet regulatory requirements, creating a significant operational bottleneck.",
    withNexos:
      "Using nexos.ai, they automatically retrieve ingredient information based on product barcodes and autofill the required fields, ensuring regulatory compliance with minimal effort.",
  },
  {
    id: "instant-market-pricing",
    icon: "search",
    heading: "Instant market pricing",
    without:
      "Pigu.lt struggled to manually create ingredient lists for beauty products and similar items to meet regulatory requirements, creating a significant operational bottleneck.",
    withNexos:
      "Using nexos.ai Gateway, the platform automatically gathers market data to recommend optimal price ranges and implement safeguards that prevent sellers from abusing pricing.",
  },
];

export const piguLtFuture = {
  id: "whats-next",
  eyebrow: "Future",
  heading: "What’s next for Pigu.lt x nexos.ai",
  body: "Pigu.lt is taking AI integration to the next level by turning it into a revenue stream. As they scale to 8 million requests, this price difference transforms AI from a cost-saving tool into a profitable business offering, creating value for all parties in their ecosystem.",
};

export const piguLtFinalCta = {
  id: "scale-with-ai",
  heading: "Scale your operations with AI",
  cta: { label: "Buy now", href: "/pricing" },
};

export const piguLtRelated = {
  heading: "Explore more customer stories",
  stories: [
    {
      slug: "payhawk",
      title: "Payhawk cuts security investigation time by 80% with nexos.ai",
      image: "relatedPayhawk" as const,
      alt: "payhawk hero",
    },
    {
      slug: "oxylabs",
      title: "Oxylabs doubles AI output and slashes costs with nexos.ai",
      image: "relatedOxylabs" as const,
      alt: "oxylabs hero",
    },
    {
      slug: "hostinger",
      title: "Hostinger Horizons scaled no-code AI web builder with nexos.ai",
      image: "relatedHostinger" as const,
      alt: "hostinger hero",
    },
  ],
};
