import { Container } from "@/components/layout/Container";
import { assetSrc } from "@/assets/home";
import { gatewayGraphics } from "@/assets/gateway";
import { gatewayLogos } from "@/data/products/gateway";

export function GatewayLogos() {
  return (
    <section id="trusted-logos-chosen-by-leading-engineering-teams" className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(#28125f_0%,#36137e_100%)]"
      />
      <Container className="relative py-5">
        <h2 className="sr-only">How does the NexEco AI Gateway work</h2>
        <p className="text-center text-base font-medium leading-6 text-[#A3B4C2]">
          {gatewayLogos.caption}
        </p>
        <picture>
          <source media="(min-width: 768px)" srcSet={assetSrc(gatewayGraphics.trustedWhite)} />
          <img
            src={assetSrc(gatewayGraphics.trustedWhiteMobile)}
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
