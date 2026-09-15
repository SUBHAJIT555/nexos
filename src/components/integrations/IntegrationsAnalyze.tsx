import Image from "next/image";
import { integrationsShots } from "@/assets/integrations";
import { Container } from "@/components/layout/Container";
import { integrationsAnalyze } from "@/data/features/integrations";

export function IntegrationsAnalyze() {
  return (
    <section className="bg-[linear-gradient(#FFFFFF,#F8FAFC)] py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-y-8 md:grid-cols-2 md:gap-x-8">
          <Image
            src={integrationsShots.files}
            alt="integrations files"
            sizes="(min-width: 768px) 568px, 100vw"
            className="h-auto w-full max-w-[568px]"
          />
          <div className="min-w-0">
            <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[40px] md:leading-[48px]">
              {integrationsAnalyze.heading}
            </h2>
            <p className="mt-5 text-base leading-6 text-neutral-700">{integrationsAnalyze.body}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
