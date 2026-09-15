import { Container } from "@/components/layout/Container";
import { compareHow } from "@/data/products/compare";
import { cn } from "@/lib/utils";

export function CompareHow() {
  return (
    <section className="bg-white pb-16">
      <Container>
        <div className="mx-auto max-w-[768px] text-center">
          <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[40px] md:leading-[48px]">
            {compareHow.heading}
          </h2>
          <p className="mt-5 text-base leading-6 text-neutral-700 md:text-[18px] md:leading-[28px]">
            {compareHow.body}
          </p>
        </div>
        <div className="mt-10 flex w-full flex-col md:flex-row md:justify-center">
          {compareHow.steps.map((step, index) => (
            <div
              key={step.id}
              className="flex grow text-wrap md:block md:max-w-[240px] lg:max-w-[290px]"
            >
              <div className="flex w-5 justify-center md:w-auto">
                <p className="heading-sm mr-3 font-heading text-[22px] font-semibold text-accent md:mr-0 md:mb-6 md:text-[32px] md:leading-[38px]">
                  {step.n}
                </p>
              </div>
              <div className="flex flex-col items-center self-stretch md:mb-6 md:flex-row">
                <div
                  className={cn(
                    "min-h-[64px] w-0.5 grow bg-blue-300 md:h-[2px] md:min-h-[2px] md:w-auto",
                    index === 0 ? "hidden md:block md:invisible" : "visible",
                  )}
                />
                <div className="bg-accent my-3 h-2 w-2 rounded-full md:mx-2 md:my-0 md:h-4 md:w-4" />
                <div
                  className={cn(
                    "min-h-[64px] w-0.5 grow bg-blue-300 md:h-[2px] md:min-h-[2px] md:w-auto",
                    index === compareHow.steps.length - 1 ? "invisible hidden md:block" : "visible",
                  )}
                />
              </div>
              <div className="mt-1 mb-6 flex flex-col gap-2 px-2 sm:mb-0 md:mt-0 md:text-center">
                <h3 className="text-base font-medium text-neutral-900">{step.title}</h3>
                <p className="text-base leading-6 text-neutral-700">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
