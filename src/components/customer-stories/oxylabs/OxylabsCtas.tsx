import { assetSrc } from "@/assets/home";
import { oxylabsGraphics } from "@/assets/customer-stories/oxylabs";
import { oxylabsFinalCta, oxylabsMidCta } from "@/data/customer-stories/oxylabs";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

const whiteCtaClass =
  "border-white bg-white text-neutral-900 hover:bg-neutral-100 hover:opacity-100";

export function OxylabsMidCta() {
  return (
    <div className="relative overflow-hidden rounded-md bg-page-dark">
      <img
        src={assetSrc(oxylabsGraphics.midCtaGradient)}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="relative flex flex-col items-center gap-4 p-8 text-center md:flex-row md:items-center md:justify-between md:gap-4 md:text-left">
        <p className="font-heading text-[22px] leading-[28.6px] font-semibold text-white">
          {oxylabsMidCta.heading}
        </p>
        <Button href={oxylabsMidCta.cta.href} variant="primary" className={whiteCtaClass}>
          {oxylabsMidCta.cta.label}
        </Button>
      </div>
    </div>
  );
}

export function OxylabsFinalCta() {
  return (
    <section id="discover-banner" className="scroll-mt-[var(--header-height)] bg-white py-16">
      <Container>
        <div className="relative overflow-hidden rounded-md bg-page-dark">
          <picture className="pointer-events-none absolute inset-0">
            <source media="(max-width: 639px)" srcSet={assetSrc(oxylabsGraphics.bannerMaskPurple)} />
            <img
              src={assetSrc(oxylabsGraphics.bannerBlob)}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </picture>
          <div className="relative flex min-h-[280px] flex-col items-center justify-center gap-10 px-6 py-16 text-center sm:min-h-[392px] sm:p-16">
            <h2 className="max-w-[720px] font-heading text-[32px] leading-10 font-semibold tracking-[-0.256px] text-white md:text-[40px] md:leading-[48px]">
              {oxylabsFinalCta.heading}
            </h2>
            <Button href={oxylabsFinalCta.cta.href} variant="primary" className={whiteCtaClass}>
              {oxylabsFinalCta.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
