import Image from "next/image";
import { builderShots } from "@/assets/builder";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { builderHero } from "@/data/products/builder";

export function BuilderHero() {
  return (
    <section className="relative bg-white pt-10 pb-8 md:pt-16 md:pb-12">
      <Container>
        <div className="grid items-center gap-8 md:gap-8 lg:grid-cols-2">
          <div className="min-w-0 max-w-[568px]">
            <h1 className="font-heading text-[36px] leading-[1.15] font-semibold tracking-[-0.02em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
              <span className="text-accent">{builderHero.headingBefore}</span>
              <br />
              {builderHero.headingAfter}
            </h1>
            <p className="mt-5 text-[18px] leading-[28px] text-neutral-700 md:text-[20px] md:leading-[30px]">
              {builderHero.body}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href={builderHero.cta.href} variant="hero" className="w-full sm:w-fit">
                {builderHero.cta.label}
              </Button>
              <p className="text-base text-neutral-700">{builderHero.guarantee}</p>
            </div>
          </div>
          <div className="flex min-w-0 items-center justify-center">
            <Image
              src={builderShots.hero}
              alt="agent builder hero"
              sizes="(min-width: 1024px) 568px, 100vw"
              priority
              className="h-auto w-full max-w-[568px] overflow-hidden rounded-[24px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
