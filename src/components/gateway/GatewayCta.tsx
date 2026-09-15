import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { KeyIcon } from "@/components/icons/UiIcons";
import { assetSrc } from "@/assets/home";
import { gatewayGraphics } from "@/assets/gateway";
import { gatewayCta } from "@/data/products/gateway";

export function GatewayCta() {
  return (
    <section id="bottom-banner-ready-to-elevate-your-content" className="relative py-28 text-center md:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-page-dark" />
      <picture className="pointer-events-none absolute inset-0">
        <source media="(max-width: 767px)" srcSet={assetSrc(gatewayGraphics.ctaGridXs)} />
        <img
          src={assetSrc(gatewayGraphics.ctaGrid)}
          alt=""
          className="h-full w-full object-cover object-bottom"
        />
      </picture>
      <Container className="relative">
        <h2 className="mx-auto max-w-[768px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
          {gatewayCta.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-[768px] text-[18px] leading-[28px] text-on-dark md:text-[20px] md:leading-[30px]">
          {gatewayCta.body}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <Button href={gatewayCta.primary.href} variant="hero" className="w-full md:w-fit">
            {gatewayCta.primary.label}
          </Button>
          <Button
            href={gatewayCta.secondary.href}
            variant="primary"
            icon={<KeyIcon className="size-6" />}
            className="w-full md:w-fit"
          >
            {gatewayCta.secondary.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
