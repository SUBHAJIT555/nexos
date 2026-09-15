import { CompareCta } from "@/components/compare/CompareCta";
import { CompareHero } from "@/components/compare/CompareHero";
import { CompareHow } from "@/components/compare/CompareHow";
import { CompareTeams } from "@/components/compare/CompareTeams";
import { CompareTour } from "@/components/compare/CompareTour";
import { ProductFaq } from "@/components/product/ProductFaq";
import { compareFaq } from "@/data/products/compare";

export function ComparePage() {
  return (
    <>
      <CompareHero />
      <CompareTour />
      <CompareHow />
      <CompareTeams />
      <CompareCta />
      <ProductFaq
        heading="FAQ"
        items={compareFaq}
        variant="cards"
        headingClassName="md:text-[40px] md:leading-[48px]"
        gridClassName="lg:grid-cols-[minmax(0,468px)_minmax(0,668px)]"
      />
    </>
  );
}
