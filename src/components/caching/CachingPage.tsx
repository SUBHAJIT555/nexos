import { CachingHero } from "@/components/caching/CachingHero";
import { CachingLogos } from "@/components/caching/CachingLogos";
import { CachingWhat } from "@/components/caching/CachingWhat";
import { CachingBenefits } from "@/components/caching/CachingBenefits";
import { CachingImprove } from "@/components/caching/CachingImprove";
import { CachingTwoWays } from "@/components/caching/CachingTwoWays";
import { CachingComplexity } from "@/components/caching/CachingComplexity";
import { CachingTackle } from "@/components/caching/CachingTackle";
import { CachingResults } from "@/components/caching/CachingResults";
import { CachingCta } from "@/components/caching/CachingCta";
import { CachingFaq } from "@/components/caching/CachingFaq";

export function CachingPage() {
  return (
    <>
      <div data-chrome="dark">
        <CachingHero />
        <CachingLogos />
        <CachingWhat />
        <CachingBenefits />
        <CachingImprove />
        <CachingTwoWays />
        <CachingComplexity />
        <CachingTackle />
        <CachingResults />
        <CachingCta />
      </div>
      <div data-chrome="light">
        <CachingFaq />
      </div>
    </>
  );
}
