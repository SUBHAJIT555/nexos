import { ExtensionBenefits } from "@/components/extension/ExtensionBenefits";
import { ExtensionCta } from "@/components/extension/ExtensionCta";
import { ExtensionHero } from "@/components/extension/ExtensionHero";
import { ExtensionHow } from "@/components/extension/ExtensionHow";
import { ExtensionIntro } from "@/components/extension/ExtensionIntro";
import { ExtensionUse } from "@/components/extension/ExtensionUse";
import { ProductFaq } from "@/components/product/ProductFaq";
import { extensionFaq } from "@/data/features/extension";

export function ExtensionPage() {
  return (
    <>
      <ExtensionHero />
      <ExtensionIntro />
      <ExtensionBenefits />
      <ExtensionHow />
      <ExtensionUse />
      <ExtensionCta />
      <ProductFaq
        heading="FAQ"
        items={extensionFaq}
        variant="cards"
        headingClassName="md:text-[40px] md:leading-[48px]"
        gridClassName="lg:grid-cols-[minmax(0,468px)_minmax(0,668px)]"
      />
    </>
  );
}
