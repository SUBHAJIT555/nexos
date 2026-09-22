import { reviewsHow } from "@/data/reviews";
import { Container } from "@/components/layout/Container";
import { ReviewsRichText } from "@/components/reviews/ReviewsWhy";

export function ReviewsHow() {
  return (
    <section id="how-does-nexeco-ai-work" className="bg-white py-16">
      <Container>
        <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[40px] md:leading-[48px]">
          {reviewsHow.heading}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-[1fr_32px_1fr_32px_1fr] md:gap-0">
          {reviewsHow.steps.map((step, index) => (
            <div key={step.id} className="contents">
              <article className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-8">
                <div className="flex w-fit flex-col gap-1">
                  <span className="text-[20px] leading-[30px] font-bold text-accent">{step.id}</span>
                  <hr className="my-0 w-[26px] border-accent" />
                </div>
                <h3 className="mt-4 font-heading text-[24px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-6 text-neutral-700">
                  <ReviewsRichText segments={step.body} />
                </p>
              </article>
              {index < reviewsHow.steps.length - 1 ? (
                <div className="hidden items-center md:flex" aria-hidden="true">
                  <span className="block h-px w-full bg-neutral-200" />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
