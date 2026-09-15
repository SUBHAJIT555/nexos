import type { Metadata } from "next";
import { CustomerStoriesPage } from "@/components/customer-stories/CustomerStoriesPage";
import { customerStoriesListingMeta } from "@/data/customer-stories/listing";

export const metadata: Metadata = {
  title: customerStoriesListingMeta.title,
  description: customerStoriesListingMeta.description,
  openGraph: {
    title: customerStoriesListingMeta.title,
    description: customerStoriesListingMeta.description,
  },
};

export default function Page() {
  return <CustomerStoriesPage />;
}
