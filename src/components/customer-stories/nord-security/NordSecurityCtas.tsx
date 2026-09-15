import { assetSrc } from "@/assets/home";
import { nordSecurityGraphics } from "@/assets/customer-stories/nord-security";
import { nordSecurityFinalCta, nordSecurityMidCta } from "@/data/customer-stories/nord-security";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { KeyIcon } from "@/components/icons/UiIcons";

const whiteCtaClass =
  "border-white bg-white text-neutral-900 hover:bg-neutral-100 hover:opacity-100";

function DualCtas({
  primary,
  secondary,
}: {
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
      <Button href={primary.href} variant="hero" className="w-full sm:w-fit">
        {primary.label}
      </Button>
      <Button
        href={secondary.href}
        variant="primary"
        icon={<KeyIcon className="size-6" />}
        className={`w-full sm:w-fit ${whiteCtaClass}`}
      >
        {secondary.label}
      </Button>
    </div>
  );
}

export function NordSecurityMidCta() {
  return (
    <section id="banner" className="scroll-mt-[var(--header-height)] bg-white py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8 lg:col-start-3">
            <div className="relative overflow-hidden rounded-lg bg-page-dark">
              <img
                src={assetSrc(nordSecurityGraphics.bannerBlob)}
                alt=""
                className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="relative flex flex-col items-center gap-4 px-6 py-16 text-center md:px-10 lg:px-16">
                <p className="text-base leading-6 font-medium text-[#eff4f8]">
                  {nordSecurityMidCta.kicker}
                </p>
                <div className="flex w-full flex-col items-center gap-6">
                  <h2 className="font-heading text-[24px] leading-[31.2px] font-semibold text-white md:text-[28px] md:leading-[36.4px]">
                    {nordSecurityMidCta.heading}
                  </h2>
                  <DualCtas
                    primary={nordSecurityMidCta.primary}
                    secondary={nordSecurityMidCta.secondary}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function NordSecurityFinalCta() {
  return (
    <section id="bannerbottom" className="scroll-mt-[var(--header-height)] bg-white py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8 lg:col-start-3">
            <div className="relative overflow-hidden rounded-md bg-page-dark">
              <picture className="pointer-events-none absolute inset-0">
                <source
                  media="(max-width: 639px)"
                  srcSet={assetSrc(nordSecurityGraphics.bannerMaskPurple)}
                />
                <img
                  src={assetSrc(nordSecurityGraphics.bannerBlob)}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </picture>
              <div className="relative flex min-h-[236px] flex-col items-center justify-center gap-10 px-6 py-16 text-center sm:p-16">
                <h2 className="max-w-[720px] font-heading text-[32px] leading-10 font-semibold tracking-[-0.256px] text-white md:text-[40px] md:leading-[48px]">
                  {nordSecurityFinalCta.heading}
                </h2>
                <DualCtas
                  primary={nordSecurityFinalCta.primary}
                  secondary={nordSecurityFinalCta.secondary}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
