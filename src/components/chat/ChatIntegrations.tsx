import { ArrowRight } from "lucide-react";
import { chatIllustrations } from "@/assets/chat";
import { assetSrc } from "@/assets/home";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { integrationsCopy } from "@/data/products/shared";

export function ChatIntegrations() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <picture className="pointer-events-none absolute inset-x-0 bottom-0">
        <img
          src={assetSrc(chatIllustrations.gridGlowBottomLight)}
          alt=""
          width={1400}
          height={709}
          className="mx-auto h-auto w-full max-w-none"
        />
      </picture>
      <Container className="relative">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-medium text-neutral-600">{integrationsCopy.eyebrow}</p>
          <h2 className="mt-3 max-w-[768px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
            {integrationsCopy.heading}
          </h2>
          <p className="mt-5 max-w-[768px] text-base leading-6 text-neutral-700 md:text-[18px] md:leading-[28px]">
            {integrationsCopy.body}
          </p>
          <div className="mt-10 w-full overflow-hidden">
            <img
              src={assetSrc(chatIllustrations.integrationsLogos)}
              alt="integrations logos"
              width={1168}
              height={127}
              className="mx-auto h-auto w-full max-w-[1168px] object-contain"
            />
          </div>
          <Button
            href={integrationsCopy.cta.href}
            variant="ghost"
            iconPosition="end"
            icon={<ArrowRight className="size-4" />}
            className="mt-8 px-0 text-accent hover:opacity-80"
          >
            {integrationsCopy.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
