import Image from "next/image";
import { homepageSecurity } from "@/data/homepage";
import { homeCertBadges } from "@/assets/home";
import { Container } from "@/components/layout/Container";
import {
  CloudCheckIcon,
  FileShieldIcon,
  KeyIcon,
  ServersIcon,
} from "@/components/icons/UiIcons";

const icons = {
  cloud: CloudCheckIcon,
  lock: ServersIcon,
  file: FileShieldIcon,
  users: KeyIcon,
} as const;

export function Security() {
  return (
    <section id="data-security" className="bg-page-dark py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[552px]">
            <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
              {homepageSecurity.heading}
            </h2>
            <p className="mt-5 text-base leading-6 text-on-dark-muted md:text-[18px] md:leading-[28px]">
              {homepageSecurity.body}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            {homeCertBadges.map((badge) => (
              <Image
                key={badge.id}
                src={badge.src}
                alt={badge.alt}
                width={108}
                height={108}
                className="size-[108px]"
              />
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {homepageSecurity.cards.map((card) => {
            const Icon = icons[card.icon];
            return (
              <article
                key={card.id}
                className="flex flex-col gap-4 rounded-md border border-dark-border bg-dark-surface p-6"
              >
                <span className="flex size-10 items-center justify-center text-[#9690F8]">
                  <Icon className="size-6" />
                </span>
                <h3 className="text-base font-semibold leading-6 text-white">{card.title}</h3>
                <p className="text-sm leading-[21px] text-on-dark-muted">{card.body}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
