import { integrationsShots } from "@/assets/integrations";
import { assetSrc } from "@/assets/home";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { integrationsCta } from "@/data/features/integrations";

export function IntegrationsCta() {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="relative overflow-hidden rounded-md">
          <img
            src={assetSrc(integrationsShots.ctaGlow)}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="relative flex flex-col items-center gap-8 px-6 py-16 text-center md:px-16">
            <p className="text-base font-semibold text-neutral-900">{integrationsCta.eyebrow}</p>
            <h2 className="max-w-[900px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
              {integrationsCta.heading}
            </h2>
            <p className="max-w-[640px] text-base leading-6 text-neutral-700">{integrationsCta.body}</p>
            <Button
              href={integrationsCta.primary.href}
              variant="outline"
              className="border-white bg-white text-neutral-900 hover:bg-white/90"
            >
              {integrationsCta.primary.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
