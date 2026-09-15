import Image from "next/image";
import { chatShots } from "@/assets/chat";
import { Container } from "@/components/layout/Container";
import { chatTeams } from "@/data/products/chat";

const teamShots = {
  marketing: chatShots.marketing,
  sales: chatShots.sales,
  ta: chatShots.talent,
} as const;

export function ChatTeams() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[768px] text-center">
          <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[40px] md:leading-[48px]">
            {chatTeams.heading}
          </h2>
          <p className="mt-5 text-base leading-6 text-neutral-700 md:text-[18px] md:leading-[28px]">
            {chatTeams.body}
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {chatTeams.cards.map((card) => (
            <article
              key={card.id}
              className="flex h-full flex-col gap-4 overflow-hidden rounded-[24px] p-6"
            >
              <Image
                src={teamShots[card.id as keyof typeof teamShots]}
                alt={card.alt}
                sizes="(min-width: 768px) 320px, 100vw"
                className="h-auto w-full rounded-[16px]"
              />
              <h3 className="font-heading text-[22px] leading-[28.6px] font-semibold text-neutral-900">
                {card.title}
              </h3>
              <p className="text-base leading-6 text-neutral-700">{card.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
