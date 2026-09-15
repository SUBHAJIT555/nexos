import Image from "next/image";
import { reviewsHeroShot } from "@/assets/reviews";
import { reviewsHero } from "@/data/reviews";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { KeyIcon } from "@/components/icons/UiIcons";
import { ReviewsCheckIcon } from "@/components/reviews/ReviewsIcons";

export function ReviewsHero() {
  return (
    <section id="hero" className="bg-white">
      <Container>
        <div className="grid grid-cols-1 items-center gap-y-8 py-16 md:grid-cols-2 md:gap-x-8">
          <div className="flex min-w-0 max-w-[568px] flex-col justify-center gap-6">
            <h1 className="font-heading text-[32px] leading-10 font-semibold tracking-[-0.256px] text-neutral-900 md:text-[64px] md:leading-[76.8px] md:tracking-[-0.752px]">
              <span className="text-accent">{reviewsHero.headingAccent}</span>
              {reviewsHero.headingRest}
            </h1>
            <p className="text-base leading-6 text-neutral-900">{reviewsHero.body}</p>
            <ul className="flex flex-col gap-2">
              {reviewsHero.bullets.map((item) => (
                <li key={item} className="flex items-start text-base leading-6 text-neutral-900">
                  <span className="mt-1 mr-2 inline-flex shrink-0">
                    <ReviewsCheckIcon />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-3">
              <Button href={reviewsHero.primaryCta.href} variant="primary">
                {reviewsHero.primaryCta.label}
              </Button>
              <Button
                href={reviewsHero.secondaryCta.href}
                variant="outline"
                icon={<KeyIcon className="size-[1.1em]" />}
              >
                {reviewsHero.secondaryCta.label}
              </Button>
            </div>
          </div>
          <div className="flex min-w-0 items-center justify-center overflow-hidden rounded-[24px]">
            <Image
              src={reviewsHeroShot}
              alt={reviewsHero.imageAlt}
              width={568}
              height={568}
              sizes="(min-width: 768px) 568px, 100vw"
              priority
              className="h-auto w-full max-w-[568px] object-cover object-[58%_center]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
