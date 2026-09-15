import { assetSrc } from "@/assets/home";
import { deepResearchPageShots } from "@/assets/deep-research";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { deepCta } from "@/data/features/deep-research";

export function DeepResearchCta() {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="relative overflow-hidden rounded-md">
          {/* Decorative CTA glow; next/image does not add value for this asset. */}
          <img
            src={assetSrc(deepResearchPageShots.ctaGlow)}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-bottom"
          />
          <div className="relative flex flex-col items-center gap-8 px-6 py-20 text-center md:px-16 md:py-24">
            <p className="text-base text-neutral-700">{deepCta.eyebrow}</p>
            <h2 className="max-w-[768px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[40px] md:leading-[48px]">
              {deepCta.heading}
            </h2>
            <p className="max-w-[640px] text-base leading-6 text-neutral-700 md:text-[20px] md:leading-[30px]">
              {deepCta.body}
            </p>
            <Button href={deepCta.primary.href} variant="hero">
              {deepCta.primary.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
