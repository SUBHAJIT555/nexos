import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { messagingMore } from "@/data/features/messaging";
import { cn } from "@/lib/utils";

export function MessagingMore() {
  return (
    <section className="bg-white py-16">
      <Container>
        <h2 className="text-center font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
          {messagingMore.headingBefore}{" "}
          <br className="hidden md:block" />
          {messagingMore.headingAfter}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-8">
          {messagingMore.cards.map((card) => {
            const copy = (
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-[22px] leading-[28.6px] font-semibold text-neutral-900">
                  {card.title}
                </h3>
                {"bodyBefore" in card && card.bodyBefore ? (
                  <p className="text-base leading-6 text-neutral-600">
                    {card.bodyBefore}
                    <Link href={card.href ?? "/features/ai-agents"} className="text-accent hover:text-[var(--accent-hover)]">
                      {card.linkLabel}
                    </Link>
                    {card.bodyAfter}
                  </p>
                ) : (
                  <p className="text-base leading-6 text-neutral-600">{card.body}</p>
                )}
              </div>
            );
            const visual = (
              <Image
                src={card.image}
                alt={card.alt}
                sizes="(min-width: 768px) 520px, 100vw"
                className="h-auto w-full"
              />
            );
            return (
              <article
                key={card.id}
                className={cn(
                  "flex h-full flex-col gap-6 overflow-hidden rounded-md border border-[#dbe4eb] p-6",
                  card.visualFirst ? "" : "",
                )}
                style={{ background: card.background }}
              >
                {card.visualFirst ? (
                  <>
                    {visual}
                    {copy}
                  </>
                ) : (
                  <>
                    {copy}
                    {visual}
                  </>
                )}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
