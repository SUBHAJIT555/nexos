import Image from "next/image";
import { integrationsIllustrations, integrationsShots } from "@/assets/integrations";
import { assetSrc } from "@/assets/home";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { integrationsHero } from "@/data/features/integrations";

export function IntegrationsHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <picture className="pointer-events-none absolute top-0 left-1/2 hidden -translate-x-1/2 md:block">
        <img
          src={assetSrc(integrationsIllustrations.gridCentered)}
          alt=""
          width={1400}
          height={1200}
          className="h-auto w-[1400px] max-w-none"
        />
      </picture>
      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-y-8 py-16 md:grid-cols-2 md:gap-x-8">
          <div className="flex min-w-0 max-w-[568px] flex-col justify-center gap-6">
            <h1 className="font-heading text-[36px] leading-[1.15] font-semibold tracking-[-0.02em] text-neutral-900 md:text-[64px] md:leading-[76.8px]">
              {integrationsHero.heading}
            </h1>
            <p className="text-[18px] leading-[28px] text-neutral-700 md:text-[20px] md:leading-[30px]">
              {integrationsHero.body}
            </p>
            <div>
              <Button href={integrationsHero.primary.href} variant="primary" size="sm" className="w-fit">
                {integrationsHero.primary.label}
              </Button>
            </div>
          </div>
          <div className="flex min-w-0 items-center justify-center">
            <Image
              src={integrationsShots.hero}
              alt="AI Integrations"
              width={568}
              height={568}
              sizes="(min-width: 1024px) 568px, 100vw"
              priority
              className="h-auto w-full max-w-[568px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
