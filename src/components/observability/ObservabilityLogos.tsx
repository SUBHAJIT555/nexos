import { Container } from "@/components/layout/Container";
import { assetSrc } from "@/assets/home";
import { observabilityGraphics } from "@/assets/observability";
import { observabilityHero } from "@/data/features/observability";

export function ObservabilityLogos() {
  return (
    <section id="trusted-by" className="relative">
      <Container className="relative py-5">
        <p className="text-center text-base font-medium leading-6 text-[#A3B4C2]">{observabilityHero.trustCaption}</p>
        <picture>
          <source media="(min-width: 768px)" srcSet={assetSrc(observabilityGraphics.trustedWhite)} />
          <img
            src={assetSrc(observabilityGraphics.trustedWhiteMobile)}
            alt="Logos of companies that trust NexEco AI"
            width={1168}
            height={64}
            className="mt-4 h-16 w-full object-contain"
          />
        </picture>
      </Container>
    </section>
  );
}
