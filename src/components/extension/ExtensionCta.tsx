import { assetSrc } from "@/assets/home";
import { extensionPageShots } from "@/assets/extension";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { extensionCta } from "@/data/features/extension";

export function ExtensionCta() {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="relative overflow-hidden rounded-md">
          {/* Decorative CTA glow; next/image does not add value for this asset. */}
          <img
            src={assetSrc(extensionPageShots.ctaGlow)}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-bottom"
          />
          <div className="relative flex flex-col items-center gap-10 px-6 py-16 text-center md:px-16">
            <p className="text-base font-semibold text-neutral-900">{extensionCta.eyebrow}</p>
            <h2 className="max-w-[900px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
              {extensionCta.heading}
            </h2>
            <Button href={extensionCta.primary.href} variant="primary">
              {extensionCta.primary.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
