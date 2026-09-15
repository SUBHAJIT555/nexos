"use client";

import { agentsIllustrations } from "@/assets/agents";
import { AgentsFeatures } from "@/components/agents/AgentsFeatures";
import { AgentsHero } from "@/components/agents/AgentsHero";
import { AgentsIntegrations } from "@/components/agents/AgentsIntegrations";
import { AgentsPress } from "@/components/agents/AgentsPress";
import { AgentsTestimonials } from "@/components/agents/AgentsTestimonials";
import { AgentGallery } from "@/components/product/AgentGallery";
import { ProductCta } from "@/components/product/ProductCta";
import { ProductFaq } from "@/components/product/ProductFaq";
import { ProductSecurity } from "@/components/product/ProductSecurity";
import { agentCategories, agentTemplates } from "@/data/products/agent-templates";
import {
  agentsCta,
  agentsFaq,
  agentsGallery,
  agentsSecurity,
  agentsTemplateCopy,
} from "@/data/products/agents";

export function AgentsPage() {
  const templates = agentTemplates
    .filter((item) => agentCategories.some((category) => category.label === item.category))
    .map((item) => ({
      ...item,
      description: agentsTemplateCopy[item.title] ?? item.description,
    }));

  return (
    <>
      <AgentsHero />
      <AgentsFeatures />
      <AgentsIntegrations />
      <AgentGallery
        heading={agentsGallery.heading}
        body={agentsGallery.body}
        categories={agentCategories}
        templates={templates}
        ctaHeading={agentsGallery.ctaHeading}
        ctaVariant="pill"
        categoryHeadings={agentsGallery.categoryHeadings}
        gridXl={agentsIllustrations.gridHomepageXlV2}
        gridXs={agentsIllustrations.gridHomepageXsV2}
      />
      <ProductSecurity
        heading={agentsSecurity.heading}
        cards={agentsSecurity.cards}
        extraCard={agentsSecurity.extraCard}
        trustHref={agentsSecurity.trustHref}
        trustLabel={agentsSecurity.trustLabel}
        layout="agents"
      />
      <AgentsTestimonials />
      <AgentsPress />
      <ProductCta
        heading={agentsCta.heading}
        primary={agentsCta.primary}
        primaryVariant="outline"
        primaryClassName="border-white bg-white text-neutral-900 hover:bg-white/90"
      />
      <ProductFaq heading="FAQ" items={agentsFaq} variant="cards" className="bg-neutral-100" />
    </>
  );
}
