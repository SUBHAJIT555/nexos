import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { assetSrc } from "@/assets/home";
import { productCertBadges } from "@/assets/products";
import { EarthIcon, KeyIcon, ShieldCheckIcon } from "@/components/icons/UiIcons";
import { gatewaySecurity } from "@/data/products/gateway";
import { productDocs } from "@/data/products/shared";
import { cn } from "@/lib/utils";

const icons = [ShieldCheckIcon, KeyIcon, EarthIcon];

export function GatewaySecurity() {
  return (
    <section id="data-security" className="bg-white py-16 md:py-24">
      <Container>
        <p className="mb-6 text-base font-semibold leading-6 text-[#8193A2]">Protecting your data</p>
        <h2 className="max-w-[1168px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
          {gatewaySecurity.heading}
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {gatewaySecurity.cards.map((card, index) => {
            const Icon = icons[index] ?? KeyIcon;
            const isCertified = card.id === "certified";
            const [before, after] = card.body.split("Check NexEco AI trust center");
            return (
              <article
                key={card.id}
                className={cn(
                  "flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-[#dbe4eb] p-6",
                  isCertified
                    ? "bg-[linear-gradient(180deg,#F8FAFC_28.37%,#D0C5FD_100%)]"
                    : "bg-[linear-gradient(to_top,#ffffff,#f8fafc)]",
                )}
              >
                {!isCertified ? (
                  <span className="flex h-fit w-fit items-center justify-center rounded-lg border border-[#dbe4eb] bg-white p-3 text-accent shadow-[0_0_0_1px_rgba(56,60,67,0.05),0_1px_3px_rgba(56,60,67,0.15)]">
                    <Icon className="size-8" />
                  </span>
                ) : null}
                <h3 className="font-heading text-[22px] leading-[28.6px] font-semibold text-neutral-900">
                  {card.title}
                </h3>
                <p className="text-base leading-6 text-[#65717B]">
                  {isCertified ? (
                    <>
                      {before}
                      <Link href={productDocs.trustCenter} className="text-accent hover:text-[var(--accent-hover)]">
                        NexEco AI trust center
                      </Link>
                      {after}
                    </>
                  ) : (
                    card.body
                  )}
                </p>
                {isCertified ? (
                  <div className="mt-auto flex shrink-0 items-center gap-4">
                    {productCertBadges.map((badge) => (
                      <img
                        key={badge.id}
                        src={assetSrc(badge.src)}
                        alt={badge.alt}
                        width={42}
                        height={61}
                        className="h-[61px] w-[42px] object-contain"
                      />
                    ))}
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
