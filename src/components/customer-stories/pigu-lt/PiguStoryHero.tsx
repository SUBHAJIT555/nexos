import Image from "next/image";
import { piguLtGraphics } from "@/assets/customer-stories/pigu-lt";
import { piguLtHero } from "@/data/customer-stories/pigu-lt";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function PiguStoryHero() {
  return (
    <section id="hero" className="bg-muted">
      <Container className="py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-8">
          <div className="flex min-w-0 flex-1 flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h1 className="max-w-[709px] font-heading text-[32px] leading-10 font-semibold tracking-[-0.256px] text-neutral-900 md:text-[40px] md:leading-[48px]">
                {piguLtHero.heading}
              </h1>
              <p className="max-w-[709px] text-base leading-6 text-neutral-700">
                {piguLtHero.intro}
              </p>
            </div>
            <Button href={piguLtHero.cta.href} variant="primary" className="w-fit">
              {piguLtHero.cta.label}
            </Button>
            <div className="h-px w-full bg-border" />
            <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-8">
              {piguLtHero.metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col gap-4">
                  <p className="font-heading text-[32px] leading-10 font-semibold tracking-[-0.256px] text-accent md:text-[40px] md:leading-[48px]">
                    {metric.value}
                  </p>
                  <p className="text-base leading-6 text-neutral-700">{metric.label}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={piguLtGraphics.miaLysikova}
                alt={piguLtHero.authorAlt}
                width={40}
                height={40}
                className="size-10 rounded-full object-cover"
              />
              <p className="text-base leading-6 text-neutral-900">{piguLtHero.author}</p>
            </div>
          </div>
          <div className="hidden shrink-0 md:block md:w-[280px] lg:w-[427px]">
            <Image
              src={piguLtGraphics.hero}
              alt={piguLtHero.heroAlt}
              priority
              sizes="427px"
              className="h-auto w-full rounded-md"
            />
          </div>
        </div>
        <div className="mt-8 md:hidden">
          <Image
            src={piguLtGraphics.hero}
            alt={piguLtHero.heroAlt}
            sizes="100vw"
            className="h-auto w-full rounded-md"
          />
        </div>
      </Container>
    </section>
  );
}
