import { ReviewsCommunity } from "@/components/reviews/ReviewsCommunity";
import { ReviewsFeaturedIn } from "@/components/reviews/ReviewsFeaturedIn";
import { ReviewsHero } from "@/components/reviews/ReviewsHero";
import { ReviewsHow } from "@/components/reviews/ReviewsHow";
import { ReviewsIntegrations } from "@/components/reviews/ReviewsIntegrations";
import { ReviewsTabs } from "@/components/reviews/ReviewsTabs";
import { ReviewsWhy } from "@/components/reviews/ReviewsWhy";
import { ProductFaq } from "@/components/product/ProductFaq";
import { reviewsFaq } from "@/data/reviews";

export function ReviewsPage() {
  return (
    <>
      <ReviewsHero />
      <ReviewsFeaturedIn />
      <ReviewsTabs />
      <ReviewsWhy />
      <ReviewsIntegrations />
      <ReviewsHow />
      <ReviewsCommunity />
      <ProductFaq
        heading={reviewsFaq.heading}
        items={reviewsFaq.items}
        variant="cards"
        className="bg-white py-16 md:py-16"
        headingClassName="md:text-[40px] md:leading-[48px]"
      />
    </>
  );
}
