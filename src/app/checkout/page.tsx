import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/LinkButton";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Checkout shell prepared for a future payment provider.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CheckoutPage() {
  return (
    <Section size="md">
      <div className="mx-auto max-w-xl">
        <h1 className="type-h1">Checkout</h1>
        <p className="mt-4 type-body text-muted-foreground">
          Payment processing is not connected yet. This route exists so a
          provider can be added later without restructuring the app.
        </p>
        <Card className="mt-8 p-6">
          <h2 className="type-h4">Next connection point</h2>
          <p className="mt-3 type-body-small text-muted-foreground">
            Map the checkout session type in `src/types/checkout.ts` to the
            chosen provider. Do not collect or store card details in this
            application.
          </p>
        </Card>
        <div className="mt-8">
          <LinkButton href="/" variant="outline">
            Back home
          </LinkButton>
        </div>
      </div>
    </Section>
  );
}
