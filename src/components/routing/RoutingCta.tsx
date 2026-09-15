import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { KeyIcon } from "@/components/icons/UiIcons";
import { routingCta } from "@/data/features/routing";

export function RoutingCta() {
  return (
    <section id="bottom-banner-cut-your-ai-costs-with-smart-llm-routing" className="relative py-28 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(#071013_10.2%,#331378_41.7%,#5315c0_57.9%,#7d4dd6_75.4%,#ffffff_98.8%)]"
      />
      <Container className="relative">
        <h2 className="mx-auto max-w-[640px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
          Cut your AI costs
          <br /> with Smart LLM routing
        </h2>
        <p className="mx-auto mt-5 max-w-[640px] text-base leading-6 text-[#EFF4F8] md:text-[18px] md:leading-[28px]">
          {routingCta.body}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <Button href={routingCta.primary.href} variant="primary" className="w-full md:w-fit">
            {routingCta.primary.label}
          </Button>
          <Button
            href={routingCta.secondary.href}
            variant="outline"
            icon={<KeyIcon className="size-6" />}
            className="w-full md:w-fit"
          >
            {routingCta.secondary.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
