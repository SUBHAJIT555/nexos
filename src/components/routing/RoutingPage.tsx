import { RoutingHero } from "@/components/routing/RoutingHero";
import { RoutingLogos } from "@/components/routing/RoutingLogos";
import { RoutingBenefits } from "@/components/routing/RoutingBenefits";
import { RoutingMore } from "@/components/routing/RoutingMore";
import { RoutingHow } from "@/components/routing/RoutingHow";
import { RoutingUseCases } from "@/components/routing/RoutingUseCases";
import { RoutingSecurity } from "@/components/routing/RoutingSecurity";
import { RoutingCompare } from "@/components/routing/RoutingCompare";
import { RoutingCta } from "@/components/routing/RoutingCta";
import { RoutingFaq } from "@/components/routing/RoutingFaq";

export function RoutingPage() {
  return (
    <>
      <div data-chrome="dark" className="bg-[#071013]">
        <RoutingHero />
        <RoutingLogos />
        <RoutingBenefits />
        <RoutingMore />
        <RoutingHow />
        <RoutingUseCases />
        <RoutingSecurity />
        <RoutingCompare />
        <RoutingCta />
      </div>
      <div data-chrome="light">
        <RoutingFaq />
      </div>
    </>
  );
}
