import { partnershipsPrograms } from "@/data/partnerships";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { partnershipsProgramIcons } from "@/components/partnerships/PartnershipsIcons";
import { cn } from "@/lib/utils";

export function PartnershipsPrograms() {
  return (
    <section id="find-partnership" className="relative">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, #EFF4F8 100%)" }}
      />
      <Container className="relative py-16">
        <div className="mb-10">
          <h2 className="font-heading text-[28px] leading-[36.4px] font-semibold tracking-[-0.256px] text-neutral-900 md:text-[40px] md:leading-[48px]">
            {partnershipsPrograms.heading}
          </h2>
          <p className="mt-6 text-base leading-6 text-neutral-700">{partnershipsPrograms.intro}</p>
        </div>
        <div className="flex flex-col items-center gap-10">
          <div className="grid w-full grid-cols-1 gap-y-8 sm:gap-x-4 md:grid-cols-3">
            {partnershipsPrograms.cards.map((card) => {
              const Icon = partnershipsProgramIcons[card.icon];
              return (
                <article key={card.id} className="flex h-full flex-col items-start gap-4 rounded-md bg-white p-6">
                  <div
                    className="flex w-fit rounded-md p-3"
                    style={{ backgroundColor: card.iconBg }}
                  >
                    <Icon className={cn("size-8", card.iconClass)} />
                  </div>
                  <h3 className="font-heading text-[22px] leading-[28.6px] font-semibold text-neutral-900">
                    {card.title}
                  </h3>
                  <p className="text-base leading-6 text-neutral-700">{card.body}</p>
                </article>
              );
            })}
          </div>
          <Button href={partnershipsPrograms.cta.href} variant="primary">
            {partnershipsPrograms.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
