import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { modelsCta } from "@/data/models";

export function ModelsCta() {
  return (
    <section id="bottom-banner-reduce-your-ai-spend" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,#071013_10.19%,#331378_41.71%,#5315C0_57.92%,#7D4DD6_75.38%,#FFF_98.82%)]"
      />
      <div className="relative pt-16 pb-16">
        <Container className="px-4 xl:px-0">
          <div className="mx-auto max-w-[761px] text-center">
            <h2 className="mb-6 font-heading text-[30px] leading-[37.5px] font-semibold tracking-[-0.496px] text-white lg:text-[48px] lg:leading-[57.6px]">
              {modelsCta.heading}
            </h2>
            <p className="text-base leading-6 text-[#BFCBD4]">{modelsCta.body}</p>
          </div>
          <div className="mt-10 flex w-full flex-col flex-wrap items-center justify-center gap-3 max-md:text-center md:flex-row">
            <Button href={modelsCta.primary.href} variant="accent">
              {modelsCta.primary.label}
            </Button>
            <Button href={modelsCta.secondary.href} variant="primary">
              {modelsCta.secondary.label}
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
