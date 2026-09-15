import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SecurityCard } from "@/data/products/types";
import { Container } from "@/components/layout/Container";
import { assetSrc } from "@/assets/home";
import { productCertBadges } from "@/assets/products";
import {
  BuildingColumnsIcon,
  CloudCheckIcon,
  EarthIcon,
  FileShieldIcon,
  KeyIcon,
  ServersIcon,
  ShieldCheckIcon,
} from "@/components/icons/UiIcons";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const defaultIcons = [FileShieldIcon, ServersIcon, CloudCheckIcon, KeyIcon];
const workspaceIcons = [ShieldCheckIcon, KeyIcon, EarthIcon];
const agentsIcons: Record<string, typeof ShieldCheckIcon> = {
  "no-training": ShieldCheckIcon,
  sso: KeyIcon,
  europe: EarthIcon,
  trust: BuildingColumnsIcon,
};

type ProductSecurityProps = {
  eyebrow?: string;
  heading: string;
  cards: SecurityCard[];
  trustHref?: string;
  trustLabel?: string;
  extraCard?: SecurityCard;
  className?: string;
  layout?: "default" | "workspace" | "agents";
};

export function ProductSecurity({
  eyebrow = "Protecting your data",
  heading,
  cards,
  trustHref,
  trustLabel,
  extraCard,
  className,
  layout = "default",
}: ProductSecurityProps) {
  const display = extraCard ? [...cards.slice(0, 3), extraCard, cards[3]] : cards;
  const isWorkspace = layout === "workspace";
  const isAgents = layout === "agents";
  const isSplit = isWorkspace || isAgents;
  const certBadges = isAgents ? productCertBadges.slice(0, 3) : productCertBadges;

  return (
    <section className={cn(isSplit ? "bg-white py-16 md:py-24" : "bg-neutral-100 py-16 md:py-24", className)}>
      <Container>
        <p
          className={
            isSplit
              ? "mb-6 text-base font-semibold leading-6 text-[#8193A2]"
              : "text-sm font-medium tracking-[0.04em] text-neutral-600 uppercase"
          }
        >
          {eyebrow}
        </p>
        {isSplit ? (
          <h2 className="max-w-[1168px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
            {heading}
          </h2>
        ) : (
          <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <h2 className="max-w-[640px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
              {heading}
            </h2>
            <div className="flex flex-wrap items-end gap-2 lg:justify-end">
              {productCertBadges.map((badge) => (
                <img
                  key={badge.id}
                  src={assetSrc(badge.src)}
                  alt={badge.alt}
                  width={92}
                  height={132}
                  className="h-[110px] w-auto"
                />
              ))}
            </div>
          </div>
        )}

        <div
          className={cn(
            "mt-10 grid",
            isAgents
              ? "gap-8 sm:grid-cols-2 xl:grid-cols-3"
              : isWorkspace
                ? "gap-8 sm:grid-cols-2 xl:grid-cols-4"
                : "gap-4 sm:grid-cols-2 xl:grid-cols-4",
          )}
        >
          {display.map((card, index) => {
            const Icon = isAgents
              ? (agentsIcons[card.id] ?? KeyIcon)
              : ((isWorkspace ? workspaceIcons : defaultIcons)[index] ?? KeyIcon);
            const isCertified = isSplit && card.id === "certified";
            return (
              <article
                key={card.id}
                className={cn(
                  "flex h-full flex-col border",
                  isAgents ? "overflow-visible" : "overflow-hidden",
                  isAgents && isCertified ? "gap-6 rounded-3xl border-[#dbe4eb] p-8" : "p-6",
                  !(isAgents && isCertified) &&
                    (isSplit ? "gap-6 rounded-3xl border-[#dbe4eb]" : "gap-4 rounded-md border-neutral-200"),
                  isCertified
                    ? "bg-[linear-gradient(180deg,#F8FAFC_28.37%,#D0C5FD_100%)]"
                    : isSplit
                      ? "bg-[linear-gradient(to_top,#ffffff,#f8fafc)]"
                      : "bg-white",
                  isAgents && isCertified && "xl:col-span-2",
                )}
              >
                {!isCertified ? (
                  <span
                    className={cn(
                      "flex items-center justify-center text-accent",
                      isSplit
                        ? "h-fit w-fit rounded-lg border border-[#dbe4eb] bg-white p-3 shadow-[0_0_0_1px_rgba(56,60,67,0.05),0_1px_3px_rgba(56,60,67,0.15)]"
                        : "size-10 rounded-lg bg-neutral-100",
                    )}
                  >
                    <Icon className={isSplit ? "size-8" : "size-5"} />
                  </span>
                ) : null}
                <h3
                  className={cn(
                    "font-semibold text-neutral-900",
                    isSplit ? "font-heading text-[22px] leading-[28.6px]" : "text-base leading-6",
                  )}
                >
                  {card.title}
                </h3>
                <p
                  className={cn(
                    isSplit ? "text-base leading-6 text-[#65717B]" : "text-sm leading-[21px] text-neutral-600",
                  )}
                >
                  {card.body}
                </p>
                {isCertified ? (
                  <div
                    className={cn(
                      "mt-auto flex shrink-0 items-end",
                      isAgents ? "gap-8 pt-6" : "items-center gap-4",
                    )}
                  >
                    {certBadges.map((badge) => (
                      <img
                        key={badge.id}
                        src={assetSrc(badge.src)}
                        alt={badge.alt}
                        width={isAgents ? 92 : 42}
                        height={isAgents ? 132 : 61}
                        className={
                          isAgents
                            ? "h-[110px] w-auto object-contain"
                            : "h-[61px] w-[42px] object-contain"
                        }
                      />
                    ))}
                  </div>
                ) : null}
                {card.id === "trust" && trustHref && trustLabel ? (
                  isAgents ? (
                    <Link
                      href={trustHref}
                      className="mt-auto inline-flex items-center gap-2 text-base font-medium text-accent hover:opacity-80"
                    >
                      {trustLabel}
                      <ArrowRight className="size-4" />
                    </Link>
                  ) : (
                    <Button href={trustHref} variant="outline" className="mt-auto w-fit">
                      {trustLabel}
                    </Button>
                  )
                ) : null}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
