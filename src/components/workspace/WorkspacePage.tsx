import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { workspaceShots } from "@/assets/products";
import { cn } from "@/lib/utils";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductShot } from "@/components/product/ProductShot";
import { FeatureAccordion } from "@/components/product/FeatureAccordion";
import { AgentGallery } from "@/components/product/AgentGallery";
import { HowItWorks } from "@/components/product/HowItWorks";
import { ProductSecurity } from "@/components/product/ProductSecurity";
import { IntegrationsBand } from "@/components/product/IntegrationsBand";
import { ProductCta } from "@/components/product/ProductCta";
import { ProductFaq } from "@/components/product/ProductFaq";
import {
  agentTemplates,
  workspaceAgentCategories,
} from "@/data/products/agent-templates";
import {
  workspaceAgents,
  workspaceChat,
  workspaceCta,
  workspaceFaq,
  workspaceGallery,
  workspaceHero,
  workspaceHow,
  workspaceSecurity,
  workspaceShare,
} from "@/data/products/workspace";

const chatVisuals = {
  "auto-model": {
    image: workspaceShots["auto-model"],
    imageAlt: "auto model select",
  },
  "web-search": {
    image: workspaceShots["web-search"],
    imageAlt: "web search chat ai",
  },
  asks: {
    image: workspaceShots.asks,
    imageAlt: "interactive chat collaboration",
  },
  files: {
    image: workspaceShots.files,
    imageAlt: "create ready to use files",
  },
  memory: {
    image: workspaceShots.memory,
    imageAlt: "enable memory personalization",
  },
} as const;

const agentCardShots = {
  custom: {
    src: workspaceShots.createAgent,
    alt: "User creating a no-code SEO keyword researcher AI Agent in nexos.ai.",
  },
  templates: {
    src: workspaceShots.agentTemplates,
    alt: "An AI platform library of expert-built AI Agent templates for any team.",
  },
} as const;

export function WorkspacePage() {
  return (
    <>
      <ProductHero
        heading={
          <>
            <span className="block text-accent">{workspaceHero.headingBefore}</span>
            {workspaceHero.headingAfter}
          </>
        }
        body={workspaceHero.body}
        bullets={[...workspaceHero.bullets]}
        primary={workspaceHero.cta}
        visual={
          <ProductShot
            src={workspaceShots.hero}
            alt="nexos.ai Workspace interface showing a team performance report with active integrations"
            priority
          />
        }
        trustCaption={workspaceHero.trustCaption}
        className="pt-16 pb-16 md:pt-16 md:pb-16"
      />

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="overflow-hidden rounded-2xl">
            <div className="flex flex-col items-center gap-8 px-6 py-8 md:flex-row md:gap-16 lg:px-16 lg:py-10">
              <ProductShot
                src={workspaceShots.sharedWork}
                alt={workspaceShare.heading}
                className="md:w-1/2"
              />
              <div className="min-w-0 md:flex-1">
                <h2 className="font-heading text-[32px] leading-10 font-semibold tracking-[-0.015em] text-neutral-900">
                  {workspaceShare.heading}
                </h2>
                <p className="mt-5 text-base leading-6 text-neutral-700">
                  {workspaceShare.body}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FeatureAccordion
        heading={workspaceChat.heading}
        body={workspaceChat.body}
        items={workspaceChat.items.map((item) => ({
          ...item,
          ...chatVisuals[item.id as keyof typeof chatVisuals],
        }))}
        cta={workspaceChat.cta}
        layout="rail"
      />

      <section className="bg-white py-16 md:pt-6 md:pb-6">
        <Container>
          <div className="mx-auto max-w-[768px] text-center">
            <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
              {workspaceAgents.heading}
            </h2>
            <p className="mt-6 text-base leading-6 text-neutral-700">
              {workspaceAgents.body}
            </p>
          </div>
          <div className="mt-16 flex flex-col gap-16">
            {workspaceAgents.cards.map((card, index) => {
              const shot = agentCardShots[card.id as keyof typeof agentCardShots];
              const imageFirst = index % 2 === 0;
              return (
                <div
                  key={card.id}
                  className="grid items-center gap-8 md:grid-cols-2 md:gap-8"
                >
                  {shot ? (
                    <div className={imageFirst ? "md:order-1" : "md:order-2"}>
                      <ProductShot
                        src={shot.src}
                        alt={shot.alt}
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                  ) : null}
                  <div className={cn("flex flex-col justify-center gap-4", imageFirst ? "md:order-2" : "md:order-1")}>
                    <h3 className="font-heading text-[32px] leading-10 font-semibold text-neutral-900 md:text-[40px] md:leading-[48px]">
                      {card.title}
                    </h3>
                    <p className="text-base leading-6 text-neutral-700">{card.body}</p>
                    {"cta" in card && card.cta ? (
                      <Button
                        href={card.cta.href}
                        variant="ghost"
                        iconPosition="end"
                        icon={<ArrowRight className="size-4" />}
                        className="mt-2 w-fit px-0 text-accent hover:opacity-80"
                      >
                        {card.cta.label}
                      </Button>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <AgentGallery
        heading={workspaceGallery.heading}
        body={workspaceGallery.body}
        categories={workspaceAgentCategories}
        templates={agentTemplates}
        ctaHeading={workspaceGallery.ctaHeading}
        ctaVariant="pill"
      />

      <HowItWorks
        heading={
          <>
            How the <span className="text-accent">nexos.ai</span> Workspace
            <br />
            works for your team
          </>
        }
        body={workspaceHow.body}
        items={workspaceHow.items}
      />

      <ProductSecurity
        heading={workspaceSecurity.heading}
        cards={workspaceSecurity.cards}
        layout="workspace"
      />

      <IntegrationsBand
        align="center"
        cta={{ label: "Explore integrations", href: "/features/ai-integrations" }}
      />

      <ProductCta heading={workspaceCta.heading} primary={workspaceCta.primary} />

      <ProductFaq heading="FAQs" items={workspaceFaq} variant="cards" />
    </>
  );
}
