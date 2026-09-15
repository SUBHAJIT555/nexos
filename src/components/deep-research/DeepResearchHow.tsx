import { Container } from "@/components/layout/Container";
import {
  DeepAnalyzeIcon,
  DeepAskIcon,
  DeepPlanIcon,
  DeepReportIcon,
  DeepSearchIcon,
} from "@/components/deep-research/DeepResearchIcons";
import { deepHow } from "@/data/features/deep-research";

const stepIcons = {
  ask: DeepAskIcon,
  plan: DeepPlanIcon,
  search: DeepSearchIcon,
  analyze: DeepAnalyzeIcon,
  report: DeepReportIcon,
} as const;

export function DeepResearchHow() {
  return (
    <section className="bg-neutral-100 py-16">
      <Container>
        <div className="grid grid-cols-12 gap-y-8 sm:gap-x-8">
          <div className="col-span-12 flex h-full flex-col gap-y-4 md:col-span-6 xl:col-span-5">
            <h2 className="max-w-[468px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[40px] md:leading-[48px]">
              {deepHow.heading}
            </h2>
            <p className="max-w-[468px] text-base leading-6 text-neutral-700">{deepHow.intro}</p>
          </div>
          <ol className="col-span-12 md:col-span-6 xl:col-span-7">
            {deepHow.steps.map((step, index) => {
              const Icon = stepIcons[step.id as keyof typeof stepIcons];
              const last = index === deepHow.steps.length - 1;
              return (
                <li
                  key={step.id}
                  className={last ? "pt-6" : "border-b border-neutral-200 py-6 first:pt-0"}
                >
                  <div className="flex items-start gap-3">
                    {Icon ? <Icon className="mt-0.5 shrink-0 text-accent" /> : null}
                    <div>
                      <h3 className="font-heading text-[24px] leading-[1.2] font-semibold text-neutral-900 md:text-[28px]">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-base leading-6 text-neutral-700">{step.body}</p>
                      {last ? (
                        <p className="mt-4 text-base leading-6 text-neutral-700">{deepHow.note}</p>
                      ) : null}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
