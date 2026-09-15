import Image from "next/image";
import { assetSrc } from "@/assets/home";
import { piguLtGraphics } from "@/assets/customer-stories/pigu-lt";
import { piguLtQuote } from "@/data/customer-stories/pigu-lt";
import { Container } from "@/components/layout/Container";

export function PiguQuote() {
  return (
    <section id={piguLtQuote.id} className="scroll-mt-[var(--header-height)] bg-muted py-16">
      <Container>
        <figure className="mx-auto flex max-w-[768px] overflow-hidden rounded-md bg-white">
          <div className="flex min-w-0 flex-1 flex-col justify-between gap-6 p-6 md:gap-8 md:p-8">
            <div className="flex flex-col gap-6 md:gap-8">
              <img
                src={assetSrc(piguLtGraphics.quoteLogo)}
                alt={piguLtQuote.logoAlt}
                width={115}
                height={34}
                className="h-[34px] w-[115px] max-w-none shrink-0 object-contain object-left"
              />
              <blockquote className="text-[18px] leading-[27px] text-neutral-900 md:text-[20px] md:leading-[30px]">
                {piguLtQuote.quote}
              </blockquote>
            </div>
            <div className="md:hidden">
              <p className="text-sm leading-[21px] font-semibold text-neutral-900">
                {piguLtQuote.name}
              </p>
              <p className="text-sm leading-[21px] text-neutral-700">{piguLtQuote.title}</p>
            </div>
          </div>
          <div className="relative hidden w-[220px] shrink-0 sm:w-[240px] md:block md:w-[260px]">
            <Image
              src={piguLtGraphics.vytautasRomeika}
              alt={piguLtQuote.portraitAlt}
              width={331}
              height={218}
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute right-0 bottom-5 left-5">
              <p className="text-sm leading-[21px] font-semibold text-neutral-900">
                {piguLtQuote.name}
              </p>
              <p className="text-sm leading-[21px] text-neutral-700">{piguLtQuote.title}</p>
            </div>
          </div>
        </figure>
      </Container>
    </section>
  );
}
