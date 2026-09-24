"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/LinkButton";
import { checkoutHref, isCheckoutPlanId, isCheckoutProduct } from "@/data/checkout";

function CheckoutCancelInner() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product");
  const planParam = searchParams.get("plan");
  const product = isCheckoutProduct(productParam) ? productParam : null;
  const planId = isCheckoutPlanId(planParam) ? planParam : null;
  const resumeHref = product && planId ? checkoutHref(product, planId) : "/checkout";

  return (
    <>
      <Card className="p-8 text-center">
        <h1 className="type-h2 text-neutral-900">Checkout cancelled</h1>
        <p className="mt-4 text-base leading-6 text-neutral-600">
          No payment was taken. You can return to checkout whenever you&apos;re ready.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <LinkButton href={resumeHref} variant="primary">
            Resume checkout
          </LinkButton>
          <LinkButton href="/pricing" variant="outline">
            Back to pricing
          </LinkButton>
        </div>
      </Card>
      <p className="mt-6 text-center text-sm text-neutral-600">
        Questions about pricing?{" "}
        <Link href="/pricing" className="text-accent hover:text-[var(--accent-hover)]">
          Compare plans
        </Link>
      </p>
    </>
  );
}

export function CheckoutCancelContent() {
  return (
    <Suspense
      fallback={
        <Card className="p-8 text-center">
          <p className="text-sm text-neutral-600">Loading…</p>
        </Card>
      }
    >
      <CheckoutCancelInner />
    </Suspense>
  );
}
