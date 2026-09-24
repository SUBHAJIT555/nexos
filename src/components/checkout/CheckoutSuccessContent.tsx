"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/LinkButton";
import { formatCurrency } from "@/lib/checkout/format";

function CheckoutSuccessInner() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session");
  const totalParam = Number(searchParams.get("total"));
  const totalPaise =
    Number.isFinite(totalParam) && totalParam > 0 ? totalParam : null;

  return (
    <Card className="p-8 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.08em] text-accent">Order confirmed</p>
      <h1 className="mt-3 type-h2 text-neutral-900">Thank you for your order</h1>
      <p className="mt-4 text-base leading-6 text-neutral-600">
        Your custom plan payment was received via UPI.
      </p>
      {totalPaise ? (
        <p className="mt-2 text-sm text-neutral-600">Total paid: {formatCurrency(totalPaise)}</p>
      ) : null}
      {sessionId ? <p className="mt-2 text-xs text-neutral-500">Reference: {sessionId}</p> : null}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <LinkButton href="/" variant="primary">
          Back to home
        </LinkButton>
        <LinkButton href="/pricing" variant="outline">
          View pricing
        </LinkButton>
      </div>
    </Card>
  );
}

export function CheckoutSuccessContent() {
  return (
    <Suspense
      fallback={
        <Card className="p-8 text-center">
          <p className="text-sm text-neutral-600">Loading confirmation…</p>
        </Card>
      }
    >
      <CheckoutSuccessInner />
    </Suspense>
  );
}

export function CheckoutSuccessSupport() {
  return (
    <p className="mt-6 text-center text-sm text-neutral-600">
      Need help?{" "}
      <Link href="mailto:info@nexeco-ai.com" className="text-accent hover:text-[var(--accent-hover)]">
        Contact support
      </Link>
    </p>
  );
}
