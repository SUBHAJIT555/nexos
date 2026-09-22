import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn, isExternalHref } from "@/lib/utils";
import type { PricingPlanCard } from "@/data/pricing";
import { PricingFeatureIcon } from "@/components/pricing/PricingIcons";
import { PricingTokenPlanCard } from "@/components/pricing/PricingTokenPlanCard";

const highlightClass =
  "pricing-plan-highlight border border-transparent shadow-sm [background:linear-gradient(138deg,#fff_54%,#f8f5fc_70%,#f7f2f8_82%,#ebe0fc_92%)_padding-box,linear-gradient(160deg,#c0b9ff,#dabcff,#d7c1ff)_border-box]";

export function PricingPlans({ plans }: { plans: PricingPlanCard[] }) {
  return (
    <div className="grid gap-6 min-[480px]:grid-cols-2">
      {plans.map((plan) =>
        plan.catalogItemId ? (
          <PricingTokenPlanCard key={plan.id} plan={{ ...plan, catalogItemId: plan.catalogItemId }} />
        ) : (
        <article
          key={plan.id}
          className={cn(
            "relative flex h-full flex-col gap-y-8 rounded-lg p-8",
            plan.highlight ? highlightClass : "border border-[#dbe4eb] bg-white shadow-sm",
          )}
        >
          <div>
            <h3 className="font-heading text-[32px] leading-[1.2] font-semibold tracking-[-0.02em] text-neutral-900">
              {plan.name}
            </h3>
            {plan.price?.period ? (
              <div className="mt-5">
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-[48px] leading-none font-semibold tracking-[-0.03em] text-neutral-900">
                    {plan.price.amount}
                  </span>
                  <span className="text-sm text-[#65717B]">{plan.price.period}</span>
                </div>
                {plan.price.renews ? (
                  <p className="mt-2 flex items-center gap-2 text-sm text-[#65717B]">
                    <PricingFeatureIcon name="refresh" className="size-3.5 text-accent" />
                    {plan.price.renews}
                  </p>
                ) : null}
              </div>
            ) : plan.price?.amount ? (
              <>
                <p className="mt-3 font-heading text-[40px] leading-[1.1] font-semibold tracking-[-0.03em] text-neutral-900 md:text-[48px]">
                  {plan.price.amount}
                </p>
                {plan.description ? (
                  <p className="mt-2 text-sm leading-[21px] text-[#65717B]">{plan.description}</p>
                ) : null}
              </>
            ) : plan.description ? (
              <p className="mt-1 text-sm leading-[21px] text-[#65717B]">{plan.description}</p>
            ) : null}
          </div>

          <Button href={plan.cta.href} variant="primary" className="w-full">
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
        ),
      )}
    </div>
  );
}
