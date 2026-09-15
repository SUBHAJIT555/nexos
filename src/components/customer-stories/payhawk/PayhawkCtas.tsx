import { assetSrc } from "@/assets/home";
import { payhawkGraphics } from "@/assets/customer-stories/payhawk";
import { payhawkFinalCta, payhawkMidCta } from "@/data/customer-stories/payhawk";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

const whiteCtaClass =
  "border-white bg-white text-neutral-900 hover:bg-neutral-100 hover:opacity-100";

export function PayhawkMidCta() {
  return (
    <section id="banner" className="scroll-mt-[var(--header-height)] bg-white py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8 lg:col-start-3">
            <div className="relative overflow-hidden rounded-lg bg-page-dark">
          <img
            src={assetSrc(payhawkGraphics.bannerBlob)}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
          />
              <div className="relative flex flex-col items-center gap-4 px-6 py-16 text-center md:px-10 lg:px-16">
                <p className="text-base leading-6 font-medium text-[#eff4f8]">
                  {payhawkMidCta.kicker}
                </p>
                <div className="flex w-full flex-col items-center gap-6">
                  <h2 className="font-heading text-[24px] leading-[31.2px] font-semibold text-white md:text-[28px] md:leading-[36.4px]">
                    {payhawkMidCta.heading}
                  </h2>
                  <Button href={payhawkMidCta.cta.href} variant="primary" className={whiteCtaClass}>
                    {payhawkMidCta.cta.label}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function PayhawkFinalCta() {
  return (
    <section id="discover-banner" className="scroll-mt-[var(--header-height)] bg-white py-16">
      <Container>
        <div className="relative overflow-hidden rounded-md bg-page-dark">
          <picture className="pointer-events-none absolute inset-0">
            <source
              media="(max-width: 639px)"
              srcSet={assetSrc(payhawkGraphics.bannerMaskPurple)}
            />
            <img
              src={assetSrc(payhawkGraphics.bannerBlob)}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </picture>
          <div className="relative flex min-h-[280px] flex-col items-center justify-center gap-10 px-6 py-16 text-center sm:min-h-[392px] sm:p-16">
            <h2 className="max-w-[720px] font-heading text-[32px] leading-10 font-semibold tracking-[-0.256px] text-white md:text-[40px] md:leading-[48px]">
              {payhawkFinalCta.heading}
            </h2>
            <Button href={payhawkFinalCta.cta.href} variant="primary" className={whiteCtaClass}>
              {payhawkFinalCta.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
