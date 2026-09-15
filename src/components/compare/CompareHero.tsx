import Image from "next/image";
import { compareIllustrations, compareShots, compareTrustLogos } from "@/assets/compare";
import { assetSrc } from "@/assets/home";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { compareHero } from "@/data/products/compare";

function DiscList({ items }: { items: string[] }) {
  return (
    <ul className="flex list-inside flex-col gap-2">
      {items.map((item) => (
        <li key={item} className="flex text-neutral-900">
          <span className="mt-1 mr-2 whitespace-nowrap">
            <span className="block h-4 w-4 rounded-full border-[5px] border-solid border-transparent bg-current bg-clip-content" />
          </span>
          <span className="text-base leading-6">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CompareHero() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <picture className="pointer-events-none absolute top-0 left-1/2 hidden -translate-x-1/2 md:block">
          <img
            src={assetSrc(compareIllustrations.gridCentered)}
            alt=""
            width={1400}
            height={1200}
            className="h-auto w-[1400px] max-w-none"
          />
        </picture>
        <Container className="relative">
          <div className="grid grid-cols-1 items-center gap-y-8 py-16 md:grid-cols-2 md:gap-x-8">
            <div className="flex min-w-0 max-w-[568px] flex-col justify-center gap-6">
              <h1 className="font-heading text-[36px] leading-[1.15] font-semibold tracking-[-0.02em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
                {compareHero.heading}
              </h1>
              <p className="text-[18px] leading-[28px] text-neutral-700 md:text-[20px] md:leading-[30px]">
                {compareHero.body}
              </p>
              <DiscList items={[...compareHero.bullets]} />
              <div>
                <Button href={compareHero.cta.href} variant="primary" size="sm" className="w-fit">
                  {compareHero.cta.label}
                </Button>
              </div>
            </div>
            <div className="flex min-w-0 items-center justify-center">
              <Image
                src={compareShots.hero}
                alt="Compare AI models dashboard"
                width={555}
                height={555}
                sizes="(min-width: 1024px) 555px, 100vw"
                priority
                className="h-auto w-full max-w-[555px]"
              />
            </div>
          </div>
        </Container>
      </section>
      <div className="py-10">
        <Container>
          <div className="hidden items-center justify-between gap-4 md:flex">
            <p className="text-base text-[#65717B]">{compareHero.trustCaption}</p>
            <div className="flex shrink-0 items-center gap-8 lg:gap-10">
              {compareTrustLogos.map((logo) => (
                <img
                  key={logo.id}
                  src={assetSrc(logo.src)}
                  alt={logo.alt}
                  width={107}
                  height={48}
                  className="h-12 w-[107px] object-contain"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 md:hidden">
            <p className="text-base text-[#65717B]">{compareHero.trustCaption}</p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {compareTrustLogos.map((logo) => (
                <img
                  key={logo.id}
                  src={assetSrc(logo.src)}
                  alt={logo.alt}
                  width={107}
                  height={48}
                  className="h-12 w-[107px] object-contain"
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
