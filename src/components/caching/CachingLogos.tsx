import { Container } from "@/components/layout/Container";
import { assetSrc } from "@/assets/home";
import { cachingGraphics } from "@/assets/caching";
import { cachingHero } from "@/data/features/caching";

export function CachingLogos() {
  return (
    <section id="trusted-logos-chosen-by-leading-engineering-teams" className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(#2e136c_0%,#331378_32%,#3f1493_100%)]"
      />
      <Container className="relative py-5">
        <p className="text-center text-base font-medium leading-6 text-[#A3B4C2]">{cachingHero.trustCaption}</p>
        <picture>
          <source media="(min-width: 768px)" srcSet={assetSrc(cachingGraphics.trustedWhite)} />
          <img
            src={assetSrc(cachingGraphics.trustedWhiteMobile)}
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
