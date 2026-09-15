import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { KeyIcon } from "@/components/icons/UiIcons";
import { assetSrc } from "@/assets/home";
import { euGatewayGraphics } from "@/assets/eu-gateway";
import { euCta } from "@/data/features/eu";

export function EuCta() {
  return (
    <section
      id="bottom-banner-ready-to-elevate-your-content"
      className="relative py-28 text-center md:py-56"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-page-dark" />
      <picture className="pointer-events-none absolute inset-0">
        <source media="(max-width: 767px)" srcSet={assetSrc(euGatewayGraphics.ctaGridXs)} />
        <img
          src={assetSrc(euGatewayGraphics.ctaGrid)}
          alt=""
          className="h-full w-full object-cover object-bottom"
        />
      </picture>
      <Container className="relative">
        <h2 className="mx-auto max-w-[640px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
          Compliance-ready,
          <br /> without compromise
        </h2>
        <p className="mx-auto mt-5 max-w-[640px] text-[18px] leading-[28px] text-on-dark md:text-[20px] md:leading-[30px]">
          {euCta.body}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <Button href={euCta.primary.href} variant="primary" className="w-full md:w-fit">
            {euCta.primary.label}
          </Button>
          <Button
            href={euCta.secondary.href}
            variant="outline"
            icon={<KeyIcon className="size-6" />}
            className="w-full md:w-fit"
          >
            {euCta.secondary.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
