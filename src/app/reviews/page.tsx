import type { Metadata } from "next";
import { ReviewsPage } from "@/components/reviews/ReviewsPage";
import { reviewsMeta } from "@/data/reviews";

export const metadata: Metadata = {
  title: reviewsMeta.title,
  description: reviewsMeta.description,
  openGraph: {
    title: reviewsMeta.title,
    description: reviewsMeta.description,
  },
};

export default function Page() {
  return <ReviewsPage />;
}
