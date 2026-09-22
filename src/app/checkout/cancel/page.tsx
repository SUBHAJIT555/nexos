import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/LinkButton";
import { Section } from "@/components/layout/Section";
import { checkoutHref, isCheckoutPlanId, isCheckoutProduct } from "@/data/checkout";

export const metadata: Metadata = {
  title: "Checkout cancelled",
  description: "Your checkout was cancelled.",
  robots: {
    index: false,
    follow: false,
  },
};

type CheckoutCancelPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function CheckoutCancelPage({ searchParams }: CheckoutCancelPageProps) {
  const params = await searchParams;
  const productParam = typeof params.product === "string" ? params.product : null;
  const planParam = typeof params.plan === "string" ? params.plan : null;

  const product = isCheckoutProduct(productParam) ? productParam : null;
  const planId = isCheckoutPlanId(planParam) ? planParam : null;
  const resumeHref =
    product && planId ? checkoutHref(product, planId) : "/checkout";

  return (
    <Section size="md">
      <div className="mx-auto max-w-xl">
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
      </div>
    </Section>
  );
}
