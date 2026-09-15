import { Container } from "@/components/layout/Container";
import { BuilderStepIcon } from "@/components/builder/BuilderIcons";
import { builderSteps } from "@/data/products/builder";

export function BuilderHowTo() {
  return (
    <section className="relative py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, #EFF4F8 100%)" }}
      />
      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-5">
            <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
              {builderSteps.heading}
            </h2>
            <p className="text-base leading-6 text-neutral-700">{builderSteps.body}</p>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-7">
            {builderSteps.items.map((step, index) => (
              <div key={step.id} className="flex flex-col gap-6">
                <div className="flex w-fit flex-col gap-4 md:flex-row md:items-center">
                  <BuilderStepIcon id={step.id as "describe" | "refine" | "connect" | "test" | "launch" | "share"} />
                  <h3 className="font-heading text-[24px] leading-[29px] font-semibold text-neutral-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-base leading-6 text-neutral-700">{step.body}</p>
                {index < builderSteps.items.length - 1 ? (
                  <hr className="border-neutral-200" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
