import Image from "next/image";
import { nordSecurityGraphics } from "@/assets/customer-stories/nord-security";
import { nordSecurityHero } from "@/data/customer-stories/nord-security";
import { Container } from "@/components/layout/Container";

export function NordSecurityHero() {
  return (
    <section id="hero" className="bg-muted">
      <Container className="py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-8">
          <div className="flex min-w-0 flex-1 flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h1 className="font-heading text-[32px] leading-10 font-semibold tracking-[-0.256px] text-neutral-900 md:text-[40px] md:leading-[48px]">
                {nordSecurityHero.heading}
              </h1>
              <p className="text-base leading-6 text-neutral-900">{nordSecurityHero.intro}</p>
            </div>
            <div className="h-px w-full bg-border" />
            <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-3 sm:gap-x-8">
              {nordSecurityHero.metrics.map((metric) => (
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
                src={nordSecurityGraphics.vytautas}
                alt={nordSecurityHero.authorAlt}
                width={40}
                height={40}
                className="size-10 rounded-full object-cover"
              />
              <p className="text-base leading-6 text-neutral-900">{nordSecurityHero.author}</p>
            </div>
          </div>
          <div className="hidden shrink-0 md:block md:w-[280px] lg:w-[329px]">
            <Image
              src={nordSecurityGraphics.hero}
              alt={nordSecurityHero.heroAlt}
              priority
              sizes="329px"
              className="h-auto w-full rounded-md"
            />
          </div>
        </div>
        <div className="mt-8 md:hidden">
          <Image
            src={nordSecurityGraphics.hero}
            alt={nordSecurityHero.heroAlt}
            sizes="100vw"
            className="h-auto w-full rounded-md"
          />
        </div>
      </Container>
    </section>
  );
}
