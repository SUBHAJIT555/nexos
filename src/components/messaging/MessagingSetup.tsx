import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { messagingSetup } from "@/data/features/messaging";

export function MessagingSetup() {
  return (
    <section className="relative bg-[#F8FAFC] py-16">
      <Container>
        <div className="mx-auto mb-10 max-w-[768px] text-center">
          <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
            {messagingSetup.heading}
          </h2>
          <p className="mt-6 text-left text-base leading-6 text-neutral-700 md:text-center">
            {messagingSetup.body}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_32px_1fr_32px_1fr] md:items-stretch">
          {messagingSetup.steps.map((step, index) => (
            <div key={step.id} className="contents">
              {index > 0 ? (
                <div className="mx-auto h-8 w-px self-center bg-neutral-300 md:h-px md:w-8 md:min-w-8" />
              ) : null}
              <article className="flex h-full flex-col overflow-hidden rounded-md border border-[#dbe4eb] bg-white p-8">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-lg font-bold text-accent">{step.n}</span>
                    <hr className="my-0 w-[26px] border-accent" />
                  </div>
                  <h3 className="font-heading text-[22px] leading-[28.6px] font-semibold text-neutral-900">
                    {step.title}
                  </h3>
                  {"bodyBefore" in step && step.bodyBefore ? (
                    <p className="text-base leading-6 text-neutral-700">
                      {step.bodyBefore}
                      <Link href={step.href ?? "/features/ai-integrations"} className="text-accent hover:text-[var(--accent-hover)]">
                        {step.linkLabel}
                      </Link>
                      {step.bodyAfter}
                    </p>
                  ) : (
                    <p className="text-base leading-6 text-neutral-700">{step.body}</p>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href={messagingSetup.cta.href} variant="primary">
            {messagingSetup.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
