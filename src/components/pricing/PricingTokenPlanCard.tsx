"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CheckoutTokenSlider } from "@/components/checkout/CheckoutTokenSlider";
import { checkoutItemHref, getCatalogItem } from "@/data/checkout";
import type { PricingPlanCard } from "@/data/pricing";
import { formatCurrency } from "@/lib/checkout/format";
import { calculateTokenAmountPaise, formatTokenCount } from "@/lib/checkout/pricing";
import { cn, isExternalHref } from "@/lib/utils";
import { PricingFeatureIcon } from "@/components/pricing/PricingIcons";

const highlightClass =
  "pricing-plan-highlight border border-transparent shadow-sm [background:linear-gradient(138deg,#fff_54%,#f8f5fc_70%,#f7f2f8_82%,#ebe0fc_92%)_padding-box,linear-gradient(160deg,#c0b9ff,#dabcff,#d7c1ff)_border-box]";

type PricingTokenPlanCardProps = {
  plan: PricingPlanCard & { catalogItemId: string };
};

export function PricingTokenPlanCard({ plan }: PricingTokenPlanCardProps) {
  const catalogItem = getCatalogItem(plan.catalogItemId);
  const [tokens, setTokens] = useState(catalogItem?.defaultTokens ?? 10_000);

  if (!catalogItem) {
    return null;
  }

  const amount = calculateTokenAmountPaise(catalogItem, tokens);
  const checkoutHref = checkoutItemHref(plan.catalogItemId, tokens);

  return (
    <article
      className={cn(
        "relative flex h-full flex-col gap-y-8 rounded-lg p-8",
        plan.highlight ? highlightClass : "border border-[#dbe4eb] bg-white shadow-sm",
      )}
    >
      <div>
        <h3 className="font-heading text-[32px] leading-[1.2] font-semibold tracking-[-0.02em] text-neutral-900">
          {plan.name}
        </h3>
        {plan.description ? (
          <p className="mt-1 text-sm leading-[21px] text-[#65717B]">{plan.description}</p>
        ) : null}
        <div className="mt-5">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <span className="font-heading text-[48px] leading-none font-semibold tracking-[-0.03em] text-neutral-900">
              {formatCurrency(amount)}
            </span>
            <span className="text-sm text-[#65717B]">for {formatTokenCount(tokens)} tokens</span>
          </div>
          <p className="mt-2 text-sm text-[#65717B]">All prices in INR · pay-as-you-go</p>
        </div>
      </div>

      <CheckoutTokenSlider item={catalogItem} tokens={tokens} onChange={setTokens} />

      <Button href={checkoutHref} variant="primary" className="w-full">
        {plan.cta.label}
      </Button>

      {plan.guarantee ? (
        <p className="-mt-4 flex items-center justify-center gap-2 text-sm text-[#65717B]">
          <PricingFeatureIcon name="shield" className="size-3.5 text-[#65717B]" />
          {plan.guarantee}
        </p>
      ) : null}

      <div className="flex flex-col gap-3">
        {plan.detailsLabel ? (
          <p className="text-sm font-semibold text-neutral-900">{plan.detailsLabel}</p>
        ) : null}
        <ul className="flex flex-col gap-3">
          {plan.features.map((feature) => (
            <li key={feature.label} className="flex items-center gap-2 text-sm leading-[21px] text-neutral-900">
              <PricingFeatureIcon name={feature.icon} className="size-4 text-accent" />
              <span>{feature.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {plan.note ? (
        <p className="mt-auto text-sm text-[#65717B]">
          {plan.note.text}{" "}
          {isExternalHref(plan.note.href) ? (
            <a
              href={plan.note.href}
              className="text-accent hover:text-[var(--accent-hover)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {plan.note.linkLabel}
            </a>
          ) : (
            <Link href={plan.note.href} className="text-accent hover:text-[var(--accent-hover)]">
              {plan.note.linkLabel}
            </Link>
          )}
        </p>
      ) : null}
    </article>
  );
}
