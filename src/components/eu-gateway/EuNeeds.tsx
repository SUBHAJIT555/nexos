import { Container } from "@/components/layout/Container";
import { euNeeds } from "@/data/features/eu";
import {
  EuGlobeShieldIcon,
  EuSdkIcon,
  EuSparkleIcon,
  EuZeroRetentionIcon,
} from "@/components/eu-gateway/EuIcons";

const icons = {
  inference: EuGlobeShieldIcon,
  retention: EuZeroRetentionIcon,
  sdk: EuSdkIcon,
  failover: EuSparkleIcon,
};

export function EuNeeds() {
  return (
    <section id="everything-compliance-needs" className="bg-white pt-8 pb-16 md:pt-10 md:pb-24">
      <Container>
        <h2 className="mx-auto max-w-[720px] text-center font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
          {euNeeds.heading}
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {euNeeds.cards.map((card) => {
            const Icon = icons[card.id as keyof typeof icons];
            return (
              <article
                key={card.id}
                className="flex h-full flex-col gap-6 rounded-xl border border-[#dbe4eb] bg-[#f7f9fb] p-6"
              >
                <span className="flex h-fit w-fit rounded-md border border-[#dbe4eb] bg-white p-2 shadow-md">
                  <Icon className="text-accent" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-neutral-900">{card.title}</h3>
                  <p className="mt-3 text-sm leading-[21px] text-neutral-600">{card.body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
