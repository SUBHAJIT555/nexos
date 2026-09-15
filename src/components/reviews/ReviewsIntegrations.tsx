import { ArrowRight } from "lucide-react";
import { reviewsIntegrationsLogos } from "@/assets/reviews";
import { assetSrc } from "@/assets/home";
import { reviewsIntegrations } from "@/data/reviews";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function ReviewsIntegrations() {
  return (
    <section id="bring-knowledge" className="bg-white py-16">
      <Container>
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-medium tracking-[0.04em] text-neutral-600 uppercase">
            {reviewsIntegrations.eyebrow}
          </p>
          <h2 className="mt-3 max-w-[768px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[40px] md:leading-[48px] lg:text-[48px] lg:leading-[57.6px]">
            {reviewsIntegrations.heading}
          </h2>
          <p className="mt-5 max-w-[768px] text-base leading-6 text-neutral-700 md:text-[18px] md:leading-[28px]">
            {reviewsIntegrations.body}
          </p>
          <div className="mt-10 w-full overflow-hidden">
            <img
              src={assetSrc(reviewsIntegrationsLogos)}
              alt="integrations logos"
              width={1168}
              height={80}
              className="mx-auto h-auto w-full max-w-[1168px] object-contain"
            />
          </div>
          <Button
            href={reviewsIntegrations.cta.href}
            variant="ghost"
            iconPosition="end"
            icon={<ArrowRight className="size-4" />}
            className="mt-8 px-0 text-accent hover:opacity-80"
          >
            {reviewsIntegrations.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
