import { ProductCta } from "@/components/product/ProductCta";
import { ProductFaq } from "@/components/product/ProductFaq";
import { BuilderHero } from "@/components/builder/BuilderHero";
import { BuilderShowcase } from "@/components/builder/BuilderShowcase";
import { BuilderTodo } from "@/components/builder/BuilderTodo";
import { BuilderUseCases } from "@/components/builder/BuilderUseCases";
import { BuilderHowTo } from "@/components/builder/BuilderHowTo";
import { builderCta, builderFaq } from "@/data/products/builder";

export function BuilderPage() {
  return (
    <>
      <BuilderHero />
      <BuilderShowcase />
      <BuilderTodo />
      <BuilderUseCases />
      <BuilderHowTo />
      <ProductCta heading={builderCta.heading} primary={builderCta.primary} />
      <ProductFaq
        heading="FAQ"
        items={builderFaq}
        variant="cards"
        headingClassName="md:text-[40px] md:leading-[48px]"
        gridClassName="lg:grid-cols-[minmax(0,468px)_minmax(0,668px)]"
      />
    </>
  );
}
