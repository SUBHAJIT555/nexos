import { assetSrc } from "@/assets/home";
import { productCertBadges } from "@/assets/products";
import { Container } from "@/components/layout/Container";
import { EarthIcon, KeyIcon, ShieldCheckIcon } from "@/components/icons/UiIcons";
import { messagingSecurity } from "@/data/features/messaging";

const icons = [ShieldCheckIcon, KeyIcon, EarthIcon];
const certBadges = productCertBadges.slice(0, 3);
const [first, second, third, certified] = messagingSecurity.cards;

export function MessagingSecurity() {
  const featureCards = [first, second, third];

  return (
    <section className="relative bg-white py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 bottom-px"
        style={{ backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)" }}
      />
      <Container className="relative">
        <p className="text-base font-semibold leading-6 text-neutral-600">Protecting your data</p>
        <h2 className="mt-2 font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
          {messagingSecurity.heading}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-x-8">
          {featureCards.map((card, index) => {
            const Icon = icons[index];
            return (
              <article
                key={card.id}
                className="flex h-full flex-col gap-6 overflow-hidden rounded-md border border-[#dbe4eb] bg-[#F8FAFC] p-6"
              >
                <span className="flex h-fit w-fit rounded-sm border border-[#dbe4eb] bg-white p-3 shadow-[0_0_0_1px_rgba(56,60,67,0.05),0_1px_3px_rgba(56,60,67,0.15)]">
                  <Icon className="size-8 text-accent" />
                </span>
                <h3 className="font-heading text-[22px] leading-[28.6px] font-semibold text-neutral-900">
                  {card.title}
                </h3>
                <p className="text-base leading-6 text-neutral-600">{card.body}</p>
              </article>
            );
          })}
        </div>
        <article className="mt-6 overflow-hidden rounded-md border border-[#dbe4eb] bg-[linear-gradient(180deg,#F8FAFC_28.37%,#D0C5FD_100%)] p-6 md:p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex max-w-[640px] flex-col gap-4">
              <h3 className="font-heading text-[22px] leading-[28.6px] font-semibold text-neutral-900">
                {certified.title}
              </h3>
              <p className="text-base leading-6 text-neutral-600">{certified.body}</p>
            </div>
            <div className="flex shrink-0 items-end gap-4 md:gap-8">
              {certBadges.map((badge) => (
                <img
                  key={badge.id}
                  src={assetSrc(badge.src)}
                  alt={badge.alt}
                  width={92}
                  height={132}
                  className="h-[110px] w-auto object-contain"
                />
              ))}
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}
