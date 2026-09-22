import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { KeyIcon } from "@/components/icons/UiIcons";
import { assetSrc } from "@/assets/home";
import { routingGraphics } from "@/assets/routing";
import { routingHow } from "@/data/features/routing";

export function RoutingHow() {
  return (
    <section id="how-does-nexeco-ai-smart-llm-routing-work" className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(#071013_0%,#22165d_100%)]"
      />
      <div className="relative py-16 md:py-24">
        <Container className="text-center">
          <h2 className="mx-auto max-w-[740px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
            How does NexEco AI
            <br className="hidden md:block" /> Smart LLM routing work
          </h2>
          <p className="mx-auto mt-5 max-w-[760px] text-base leading-6 text-[#EFF4F8] md:text-[18px] md:leading-[28px]">
            {routingHow.bodyBefore}
            <Link href="/ai-gateway" className="text-accent hover:text-[var(--accent-hover)]">
              {routingHow.bodyLink}
            </Link>
            {routingHow.bodyAfter}
          </p>
        </Container>
        <Container className="mt-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <img
              src={assetSrc(routingGraphics.how)}
              alt={routingHow.imageAlt}
              width={1136}
              height={852}
              className="h-auto w-full max-w-[568px] justify-self-center lg:justify-self-start"
            />
            <ol className="space-y-8 text-left">
              {routingHow.steps.map((step) => (
                <li key={step.n}>
                  <p className="text-sm font-semibold leading-5 text-[#9690F8]">{step.n}</p>
                  <h3 className="mt-1 font-heading text-[22px] leading-[28.6px] font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-6 text-[#A3B4C2]">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
        <Container className="mt-10">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <Button href={routingHow.primary.href} variant="primary" className="w-full md:w-fit">
              {routingHow.primary.label}
            </Button>
            <Button
              href={routingHow.secondary.href}
              variant="outline"
              icon={<KeyIcon className="size-6" />}
              className="w-full md:w-fit"
            >
              {routingHow.secondary.label}
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
