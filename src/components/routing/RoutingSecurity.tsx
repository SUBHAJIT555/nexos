import Link from "next/link";
import { Container } from "@/components/layout/Container";
import {
  RoutingBriefcaseIcon,
  RoutingCloudCheckIcon,
  RoutingFingerprintIcon,
  RoutingGlobeIcon,
  RoutingIconTile,
  RoutingSealIcon,
  RoutingShieldCheckIcon,
  RoutingSparkleIcon,
  RoutingUptimeIcon,
} from "@/components/routing/RoutingIcons";
import { routingSecurity } from "@/data/features/routing";

const cardIcons = {
  eu: RoutingGlobeIcon,
  zdr: RoutingFingerprintIcon,
  sdk: RoutingBriefcaseIcon,
  failover: RoutingSparkleIcon,
} as const;

const pillIcons = {
  iso: RoutingGlobeIcon,
  uptime: RoutingUptimeIcon,
  gdpr: RoutingShieldCheckIcon,
  soc2: RoutingSealIcon,
  eu: RoutingCloudCheckIcon,
} as const;

export function RoutingSecurity() {
  return (
    <section id="security-and-compliance" className="relative bg-[#071013] py-16 md:py-24">
      <Container>
        <h2 className="mx-auto max-w-[740px] text-center font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
          {routingSecurity.heading}
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {routingSecurity.cards.map((card) => {
            const Icon = cardIcons[card.id as keyof typeof cardIcons];
            return (
              <article
                key={card.id}
                className="flex h-full flex-col gap-6 rounded-2xl border border-[#262B30] bg-[#131921] p-6"
              >
                <RoutingIconTile>
                  <Icon className="size-6" />
                </RoutingIconTile>
                <div>
                  <h3 className="font-heading text-[22px] leading-[28.6px] font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-[21px] text-[#A3B4C2]">
                    {"before" in card ? (
                      <>
                        {card.before}
                        <Link href="/eu-gateway" className="text-accent hover:text-[var(--accent-hover)]">
                          {card.link}
                        </Link>
                        {card.after}
                      </>
                    ) : (
                      card.body
                    )}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-10 overflow-hidden rounded-md py-4">
          <div className="flex w-max motion-reduce:animate-none [animation:home-marquee_40s_linear_infinite]">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center gap-4 pe-4">
                {routingSecurity.pills.map((pill) => {
                  const Icon = pillIcons[pill.id as keyof typeof pillIcons];
                  return (
                    <span
                      key={`${pill.label}-${copy}`}
                      className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-[#401D91] px-4 py-[6px] text-sm font-medium text-[#EFF4F8]"
                    >
                      <Icon className="size-4 text-[#9690F8]" />
                      {pill.label}
                    </span>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
