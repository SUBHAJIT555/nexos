import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { deepDepth } from "@/data/features/deep-research";
import { cn } from "@/lib/utils";

const cardTheme: Record<(typeof deepDepth.cards)[number]["theme"], string> = {
  lavender: "bg-[linear-gradient(180deg,#B9B5F5_0%,#EFF4F8_100%)] text-neutral-900",
  dark: "bg-[linear-gradient(180deg,#5B12D9_0%,#071013_72.12%)] text-white",
  light: "bg-neutral-100 text-neutral-900",
};

export function DeepResearchDepth() {
  return (
    <section className="bg-white py-16">
      <Container>
        <h2 className="mx-auto max-w-[768px] text-center font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[40px] md:leading-[48px]">
          {deepDepth.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-[768px] text-center text-base leading-6 text-neutral-700">
          {deepDepth.intro}
        </p>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {deepDepth.cards.map((card) => {
            const dark = card.theme === "dark";
            return (
              <article
                key={card.id}
                className={cn(
                  "flex min-h-[462px] flex-col overflow-hidden rounded-md p-6",
                  cardTheme[card.theme],
                )}
              >
                <div className="flex h-full flex-col justify-between gap-y-6">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    className="h-auto w-full"
                    sizes="(min-width: 1024px) 331px, 100vw"
                  />
                  <div>
                    <h3 className="text-[20px] leading-[1.3] font-semibold">{card.title}</h3>
                    <p
                      className={cn(
                        "mt-3 text-base leading-6",
                        dark ? "text-[#eff4f8]" : "text-neutral-700",
                      )}
                    >
                      {"href" in card && card.href ? (
                        <>
                          {card.bodyBefore}
                          <Link href={card.href} className="text-accent-soft hover:underline">{card.linkLabel}</Link>{card.bodyAfter}
                        </>
                      ) : (
                        "body" in card && card.body
                      )}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
