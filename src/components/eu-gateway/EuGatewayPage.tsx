import { EuHero } from "@/components/eu-gateway/EuHero";
import { EuQuote } from "@/components/eu-gateway/EuQuote";
import { EuNeeds } from "@/components/eu-gateway/EuNeeds";
import { EuMigrate } from "@/components/eu-gateway/EuMigrate";
import { EuWhy } from "@/components/eu-gateway/EuWhy";
import { EuModels } from "@/components/eu-gateway/EuModels";
import { EuCompare } from "@/components/eu-gateway/EuCompare";
import { EuCta } from "@/components/eu-gateway/EuCta";
import { EuFaq } from "@/components/eu-gateway/EuFaq";

export function EuGatewayPage() {
  return (
    <>
      <div data-chrome="dark">
        <section id="you-shouldnt-have-to-choose" className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#071013_0%,#071013_42%,#5F16DD_68%,#5F16DD_82%,#8862D3_88%,#E3D8FF_95%,#FFFFFF_100%)]"
          />
          <EuHero />
          <EuQuote />
        </section>
      </div>
      <div data-chrome="light">
        <EuNeeds />
        <EuMigrate />
        <EuWhy />
        <EuModels />
        <EuCompare />
        <EuCta />
        <EuFaq />
      </div>
    </>
  );
}
