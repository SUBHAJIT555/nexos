import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { CachingCheckIcon } from "@/components/caching/CachingIcons";
import { assetSrc } from "@/assets/home";
import { cachingGraphics } from "@/assets/caching";
import { cachingHero } from "@/data/features/caching";

export function CachingHero() {
  return (
    <section id="hero" className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(#071013_0%,#071013_52%,#12112c_65.5%,#1d1246_79.5%,#2e136c_100%)]"
      />
      <div className="relative pt-16 pb-10 md:pt-24 md:pb-12">
        <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,568px)_minmax(0,555px)] lg:justify-between">
          <div>
            <h1 className="max-w-[568px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
              {cachingHero.heading}
            </h1>
            <p className="mt-5 max-w-[568px] text-base leading-6 text-[#EFF4F8]">{cachingHero.body}</p>
            <ul className="mt-6 space-y-3">
              {cachingHero.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-base leading-6 text-[#EFF4F8]">
                  <CachingCheckIcon className="mt-0.5 size-5 shrink-0 text-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex w-full flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <Button href={cachingHero.primary.href} variant="hero" className="w-full sm:w-fit">
                {cachingHero.primary.label}
              </Button>
              <Button href={cachingHero.secondary.href} variant="primary" className="w-full sm:w-fit">
                {cachingHero.secondary.label}
              </Button>
            </div>
          </div>
          <img
            src={assetSrc(cachingGraphics.hero)}
            alt={cachingHero.visualAlt}
            width={555}
            height={555}
            className="mx-auto h-auto w-full max-w-[555px] lg:mx-0 lg:justify-self-end"
          />
        </Container>
      </div>
    </section>
  );
}
