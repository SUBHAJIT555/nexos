import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { cachingResults } from "@/data/features/caching";

export function CachingResults() {
  return (
    <section id="real-world-results-nord-security" className="relative bg-[#071013] py-16 md:py-24">
      <Container>
        <h2 className="mx-auto max-w-[640px] text-center font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
          Real-world results
          <br className="hidden md:block" /> of LLM caching
        </h2>
        <p className="mx-auto mt-5 max-w-[720px] text-center text-base leading-6 text-[#A3B4C2] md:text-[18px] md:leading-[28px]">
          {cachingResults.body}
        </p>
        <div className="mx-auto mt-10 max-w-[960px] rounded-2xl bg-[#131921] px-6 py-8 md:px-12 md:py-10">
          <dl className="grid gap-8 text-center sm:grid-cols-3">
            {cachingResults.stats.map((stat) => (
              <div key={stat.value}>
                <dt className="font-heading text-[40px] leading-[48px] font-semibold text-[#9690F8] md:text-[48px] md:leading-[57.6px]">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sm leading-[21px] text-[#A3B4C2]">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-10 flex justify-center">
          <Button
            href={cachingResults.cta.href}
            variant="primary"
            icon={<ArrowRight className="size-4" />}
            iconPosition="end"
            className="w-full md:w-fit"
          >
            {cachingResults.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
