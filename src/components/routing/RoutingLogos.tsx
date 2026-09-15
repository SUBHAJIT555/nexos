import { Container } from "@/components/layout/Container";
import { assetSrc } from "@/assets/home";
import { routingGraphics } from "@/assets/routing";
import { routingHero } from "@/data/features/routing";

export function RoutingLogos() {
  return (
    <section id="trusted-logos-chosen-by-leading-engineering-teams" className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(#35137c_0%,#4915ab_100%)]"
      />
      <Container className="relative py-5">
        <p className="text-center text-base font-medium leading-6 text-[#A3B4C2]">{routingHero.trustCaption}</p>
        <picture>
          <source media="(min-width: 768px)" srcSet={assetSrc(routingGraphics.trustedWhite)} />
          <img
            src={assetSrc(routingGraphics.trustedWhiteMobile)}
            alt="Logos of companies that trust nexos.ai"
            width={1168}
            height={64}
            className="mt-4 h-16 w-full object-contain"
          />
        </picture>
      </Container>
    </section>
  );
}
