import { IntegrationsAnalyze } from "@/components/integrations/IntegrationsAnalyze";
import { IntegrationsApps } from "@/components/integrations/IntegrationsApps";
import { IntegrationsCta } from "@/components/integrations/IntegrationsCta";
import { IntegrationsHero } from "@/components/integrations/IntegrationsHero";
import { IntegrationsHow } from "@/components/integrations/IntegrationsHow";
import { IntegrationsWhy } from "@/components/integrations/IntegrationsWhy";
import { IntegrationsCatalog } from "@/components/features/IntegrationsCatalog";
import { ProductSecurity } from "@/components/product/ProductSecurity";
import { integrationsSecurity } from "@/data/features/integrations";

export function IntegrationsPage() {
  return (
    <>
      <IntegrationsHero />
      <IntegrationsApps />
      <IntegrationsWhy />
      <IntegrationsHow />
      <IntegrationsAnalyze />
      <IntegrationsCatalog />
      <ProductSecurity
        heading={integrationsSecurity.heading}
        cards={integrationsSecurity.cards}
        extraCard={integrationsSecurity.extraCard}
        trustHref={integrationsSecurity.trustHref}
        trustLabel={integrationsSecurity.trustLabel}
        layout="agents"
      />
      <IntegrationsCta />
    </>
  );
}
