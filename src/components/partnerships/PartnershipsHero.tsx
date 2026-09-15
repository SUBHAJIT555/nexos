import Image from "next/image";
import { partnershipsGraphics } from "@/assets/partnerships";
import { assetSrc } from "@/assets/home";
import { partnershipsHero } from "@/data/partnerships";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function PartnershipsHero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-white">
      <picture className="pointer-events-none absolute top-0 left-1/2 hidden -translate-x-1/2 md:block">
        <img
          src={assetSrc(partnershipsGraphics.gridCentered)}
          alt=""
          width={1400}
          height={1200}
          className="h-auto w-[1400px] max-w-none"
        />
      </picture>
      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-y-8 py-16 md:grid-cols-2 md:gap-x-8">
          <div className="flex min-w-0 max-w-[568px] flex-col justify-center gap-6">
            <h1 className="font-heading text-[32px] leading-10 font-semibold tracking-[-0.256px] text-neutral-900 md:text-[64px] md:leading-[76.8px] md:tracking-[-0.752px]">
              {partnershipsHero.headingBefore}
              <span className="text-accent">{partnershipsHero.headingAccent}</span>
            </h1>
            <p className="text-base leading-6 font-medium text-neutral-700">{partnershipsHero.body}</p>
            <div>
              <Button href={partnershipsHero.cta.href} variant="hero" className="w-fit">
                {partnershipsHero.cta.label}
              </Button>
            </div>
          </div>
          <div className="flex min-w-0 items-center justify-center">
            <Image
              src={partnershipsGraphics.hero}
              alt={partnershipsHero.imageAlt}
              width={555}
              height={555}
              sizes="(min-width: 1024px) 555px, 100vw"
              priority
              className="h-auto w-full max-w-[555px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
