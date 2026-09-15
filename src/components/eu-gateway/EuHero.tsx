import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { KeyIcon } from "@/components/icons/UiIcons";
import { assetSrc } from "@/assets/home";
import { euGatewayGraphics } from "@/assets/eu-gateway";
import { euHero } from "@/data/features/eu";

export function EuHero() {
  return (
    <div className="relative pt-12 pb-8 text-center md:pt-16 md:pb-10">
      <Container className="flex flex-col items-center">
        {/* Decorative badge; next/image does not add value for this SVG. */}
        <img
          src={assetSrc(euGatewayGraphics.badge)}
          alt="EU Data Residency"
          width={176}
          height={33}
          className="h-8 w-auto"
        />
        <h1 className="mt-5 max-w-[768px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
          {euHero.heading}
        </h1>
        <p className="mt-5 max-w-[640px] text-base leading-6 text-[#EFF4F8] md:text-[18px] md:leading-[28px]">
          {euHero.bodyBeforeBreak}{" "}
          <br className="hidden lg:block" />
          {euHero.bodyAfterBreak}
        </p>
        <div className="mt-8 flex w-full flex-col items-center gap-4 md:flex-row md:justify-center">
          <Button href={euHero.primary.href} variant="hero" className="w-full md:w-fit">
            {euHero.primary.label}
          </Button>
          <Button
            href={euHero.secondary.href}
            variant="primary"
            icon={<KeyIcon className="size-6" />}
            className="w-full md:w-fit"
          >
            {euHero.secondary.label}
          </Button>
        </div>
        <div className="mt-12 w-full max-w-[1168px] md:mt-16">
          <picture>
            <source media="(max-width: 767px)" srcSet={assetSrc(euGatewayGraphics.heroXs)} />
            <img
              src={assetSrc(euGatewayGraphics.heroXl)}
              alt="nexos.ai AI Gateway routing traffic to GPT, Claude, Gemini, and Mistral through EU-hosted infrastructure"
              width={1168}
              height={360}
              className="h-auto w-full"
            />
          </picture>
        </div>
      </Container>
    </div>
  );
}
