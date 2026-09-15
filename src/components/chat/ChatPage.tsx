import { chatShots } from "@/assets/chat";
import { ChatCompare } from "@/components/chat/ChatCompare";
import { ChatHero } from "@/components/chat/ChatHero";
import { ChatIntegrations } from "@/components/chat/ChatIntegrations";
import { ChatModels } from "@/components/chat/ChatModels";
import { ChatPrompt } from "@/components/chat/ChatPrompt";
import { ChatTeams } from "@/components/chat/ChatTeams";
import { FeatureAccordion } from "@/components/product/FeatureAccordion";
import { ProductCta } from "@/components/product/ProductCta";
import { ProductFaq } from "@/components/product/ProductFaq";
import { ProductSecurity } from "@/components/product/ProductSecurity";
import {
  chatCta,
  chatFaq,
  chatInside,
  chatSecurity,
} from "@/data/products/chat";

const insideVisuals = {
  auto: {
    image: chatShots.autoSelect,
    imageAlt: "auto model select",
  },
  search: {
    image: chatShots.webSearch,
    imageAlt: "web search chat ai",
  },
  research: {
    image: chatShots.deepResearch,
    imageAlt: "run deep reserach chat",
  },
  collaborate: {
    image: chatShots.interactive,
    imageAlt: "interactive chat collaboration",
  },
  files: {
    image: chatShots.files,
    imageAlt: "create ready to use files",
  },
  memory: {
    image: chatShots.memory,
    imageAlt: "enable memory personalization",
  },
} as const;

export function ChatPage() {
  return (
    <>
      <ChatHero />
      <ChatModels />
      <FeatureAccordion
        heading={chatInside.heading}
        body={chatInside.body}
        items={chatInside.items.map((item) => ({
          ...item,
          ...insideVisuals[item.id as keyof typeof insideVisuals],
        }))}
        layout="rail"
        visualSide="left"
      />
      <ChatIntegrations />
      <ChatPrompt />
      <ChatTeams />
      <ChatCompare />
      <ProductSecurity
        heading={chatSecurity.heading}
        cards={chatSecurity.cards}
        extraCard={chatSecurity.extraCard}
        trustHref={chatSecurity.trustHref}
        trustLabel={chatSecurity.trustLabel}
        layout="agents"
      />
      <ProductCta heading={chatCta.heading} primary={chatCta.primary} />
      <ProductFaq
        heading="FAQ"
        items={chatFaq}
        variant="cards"
        headingClassName="md:text-[40px] md:leading-[48px]"
        gridClassName="lg:grid-cols-[minmax(0,468px)_minmax(0,668px)]"
      />
    </>
  );
}
