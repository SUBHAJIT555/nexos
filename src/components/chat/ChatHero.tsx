import Image from "next/image";
import { chatIllustrations, chatLogos, chatShots } from "@/assets/chat";
import { assetSrc } from "@/assets/home";
import { Container } from "@/components/layout/Container";
import { TrustMarquee } from "@/components/product/TrustMarquee";
import { Button } from "@/components/ui/Button";
import { chatHero } from "@/data/products/chat";

export function ChatHero() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-10 pb-8 md:pt-16 md:pb-12">
        <picture className="pointer-events-none absolute inset-x-0 top-0 hidden md:block">
          <img
            src={assetSrc(chatIllustrations.gridCentered)}
            alt=""
            width={1400}
            height={1200}
            className="mx-auto h-auto w-[1400px] max-w-none"
          />
        </picture>
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="min-w-0 max-w-[568px]">
              <h1 className="font-heading text-[36px] leading-[1.15] font-semibold tracking-[-0.02em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
                {chatHero.headingLine1}
                <br />
                {chatHero.headingLine2}
              </h1>
              <p className="mt-5 text-[18px] leading-[28px] text-neutral-700 md:text-[20px] md:leading-[30px]">
                {chatHero.body}
              </p>
              <div className="mt-8">
                <Button href={chatHero.cta.href} variant="hero" className="w-full sm:w-fit">
                  {chatHero.cta.label}
                </Button>
              </div>
            </div>
            <div className="flex min-w-0 items-center justify-center">
              <Image
                src={chatShots.hero}
                alt="hero chat prompts"
                sizes="(min-width: 1024px) 568px, 100vw"
                priority
                className="h-auto w-full max-w-[568px] overflow-hidden rounded-[24px]"
              />
            </div>
          </div>
        </Container>
      </section>
      <TrustMarquee
        caption={chatHero.trustCaption}
        mobileSrc={chatLogos.customerStoriesXs}
      />
    </>
  );
}
