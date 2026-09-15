import Image from "next/image";
import { partnershipsGraphics } from "@/assets/partnerships";
import { partnershipsHow } from "@/data/partnerships";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

const howImages = {
  integrate: partnershipsGraphics.integrate,
  expand: partnershipsGraphics.expand,
  cocreate: partnershipsGraphics.cocreate,
} as const;

export function PartnershipsHow() {
  return (
    <section id="how-we-work-together" className="bg-white py-16">
      <Container>
        <div className="mb-10">
          <p className="mb-6 text-base leading-6 font-semibold text-neutral-700">
            {partnershipsHow.eyebrow}
          </p>
          <h2 className="font-heading text-[28px] leading-[36.4px] font-semibold tracking-[-0.256px] text-neutral-900 md:text-[40px] md:leading-[48px]">
            {partnershipsHow.heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-y-4 sm:gap-x-4 md:grid-cols-3">
          {partnershipsHow.cards.map((card) => (
            <article
              key={card.id}
              className={cn(
                "flex h-full flex-col items-start gap-4 overflow-hidden rounded-md p-6",
                card.className,
              )}
            >
              <Image
                src={howImages[card.image]}
                alt={card.alt}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="h-auto w-full"
              />
              <h3
                className={cn(
                  "text-[20px] leading-[30px] font-semibold",
                  card.theme === "dark" ? "text-white" : "text-neutral-900",
                )}
              >
                {card.title}
              </h3>
              <p
                className={cn(
                  "text-base leading-6",
                  card.theme === "dark" ? "text-neutral-100" : "text-neutral-700",
                )}
              >
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
