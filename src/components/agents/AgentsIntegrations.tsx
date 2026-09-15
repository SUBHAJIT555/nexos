import { ArrowRight } from "lucide-react";
import { agentsIllustrations } from "@/assets/agents";
import { assetSrc } from "@/assets/home";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { agentsIntegrations } from "@/data/products/agents";

export function AgentsIntegrations() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-medium tracking-[0.04em] text-neutral-600 uppercase">
            {agentsIntegrations.eyebrow}
          </p>
          <h2 className="mt-3 max-w-[768px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
            {agentsIntegrations.heading}
          </h2>
          <p className="mt-5 max-w-[768px] text-base leading-6 text-neutral-700 md:text-[18px] md:leading-[28px]">
            {agentsIntegrations.body}
          </p>
          <div className="mt-10 w-full overflow-hidden">
            {/* Combined SVG strip; next/image does not add value for this asset. */}
            <img
              src={assetSrc(agentsIllustrations.integrationsLogos)}
              alt="integrations logos"
              width={1168}
              height={80}
              className="mx-auto h-auto w-full max-w-[1168px] object-contain"
            />
          </div>
          <Button
            href={agentsIntegrations.cta.href}
            variant="ghost"
            iconPosition="end"
            icon={<ArrowRight className="size-4" />}
            className="mt-8 px-0 text-accent hover:opacity-80"
          >
            {agentsIntegrations.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
