"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CheckoutPageContent } from "@/components/checkout/CheckoutPageContent";
import { parsePreselectedItems } from "@/data/checkout";

function CheckoutPageInner() {
  const searchParams = useSearchParams();
  const itemsParam = searchParams.get("items");
  const product = searchParams.get("product");
  const plan = searchParams.get("plan");
  const legacyItems =
    product === "gateway" && plan === "payg"
      ? ["gateway-tokens"]
      : product === "workspace" && plan === "month"
        ? ["workspace-subscription"]
        : [];
  const preselectedItems = parsePreselectedItems(itemsParam ?? legacyItems.join(","));
  const tokensParam = Number(searchParams.get("tokens"));
  const preselectedTokens = Number.isFinite(tokensParam) ? tokensParam : undefined;

  return (
    <CheckoutPageContent
      preselectedItems={preselectedItems}
      preselectedTokens={preselectedTokens}
    />
  );
}

export function CheckoutPageWithSearchParams() {
  return (
    <Suspense fallback={<p className="text-sm text-neutral-600">Loading checkout…</p>}>
      <CheckoutPageInner />
    </Suspense>
  );
}
