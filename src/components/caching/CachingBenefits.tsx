import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { CachingSlider } from "@/components/caching/CachingSlider";
import { assetSrc } from "@/assets/home";
import { cachingBenefits } from "@/data/features/caching";

function BenefitBody({ id }: { id: string }) {
  if (id === "eng") {
    return (
      <>
        nexos.ai, an{" "}
        <Link href="/" className="text-accent hover:text-[var(--accent-hover)]">
          all-in-one AI platform
        </Link>
        , centralizes provider-specific caching implementations behind one integration, so your engineers spend less time
        maintaining it and more time building products.
      </>
    );
  }

  if (id === "cost") {
    return (
      <>
        A higher cache hit rate means less repeated context to reprocess and fewer input tokens to pay for,{" "}
        <em>direct savings</em> on every cached query, alongside the Gateway&apos;s{" "}
        <Link href="/features/smart-llm-routing" className="text-accent hover:text-[var(--accent-hover)]">
          Smart LLM routing
        </Link>{" "}
        and cost controls.
      </>
    );
  }

  if (id === "speed") {
    return (
      <>
        On a cache hit, nexos.ai returns the stored response directly, no call to the model, no generation time. This
        matters most for requests with large repeated context.
      </>
    );
  }

  return (
    <>
      Caching gets harder to manage with every new agent, model, or provider you add. nexos.ai keeps it working through
      one integration, so it scales with your stack, no rebuild, no lock-in.
    </>
  );
}

export function CachingBenefits() {
  return (
    <section id="benefits-of-llm-caching" className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(#4a1f86_0%,#441d7e_2%,#30185f_10%,#1b1240_18%,#11112a_26.5%,#071013_35%,#071013_100%)]"
      />
      <Container className="relative py-16 md:py-24">
        <h2 className="text-center font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
          {cachingBenefits.heading}
        </h2>
        <CachingSlider className="mt-10" ariaLabel="LLM caching benefits">
          <div data-slide-track className="flex w-max gap-4">
            {cachingBenefits.cards.map((card) => (
              <article
                key={card.id}
                data-slide
                className="flex w-[min(379px,calc(100vw-2rem))] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-[#131921]"
              >
                <img
                  src={assetSrc(card.image)}
                  alt={card.imageAlt}
                  width={662}
                  height={530}
                  className="h-[265px] w-full object-cover object-top"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-[22px] leading-[28.6px] font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-[21px] text-[#A3B4C2]">
                    <BenefitBody id={card.id} />
                  </p>
                </div>
              </article>
            ))}
          </div>
        </CachingSlider>
      </Container>
    </section>
  );
}
