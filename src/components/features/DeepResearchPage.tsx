import { DeepResearchCompare } from "@/components/deep-research/DeepResearchCompare";
import { DeepResearchCta } from "@/components/deep-research/DeepResearchCta";
import { DeepResearchDepth } from "@/components/deep-research/DeepResearchDepth";
import { DeepResearchHero } from "@/components/deep-research/DeepResearchHero";
import { DeepResearchHow } from "@/components/deep-research/DeepResearchHow";
import { DeepResearchTeams } from "@/components/deep-research/DeepResearchTeams";
import { ProductFaq } from "@/components/product/ProductFaq";
import { deepFaq } from "@/data/features/deep-research";

export function DeepResearchPage() {
  return (
    <>
      <DeepResearchHero />
      <DeepResearchDepth />
      <DeepResearchHow />
      <DeepResearchTeams />
      <DeepResearchCta />
      <DeepResearchCompare />
      <ProductFaq
        heading="FAQ"
        items={deepFaq}
        variant="cards"
        headingClassName="md:text-[40px] md:leading-[48px]"
        gridClassName="lg:grid-cols-[minmax(0,468px)_minmax(0,668px)]"
      />
    </>
  );
}
