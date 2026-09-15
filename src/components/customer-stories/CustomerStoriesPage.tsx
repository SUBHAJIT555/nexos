import { CustomerStoriesCta } from "@/components/customer-stories/CustomerStoriesCta";
import { CustomerStoriesDirectory } from "@/components/customer-stories/CustomerStoriesDirectory";
import { CustomerStoriesHero } from "@/components/customer-stories/CustomerStoriesHero";
import { FeaturedCustomerStory } from "@/components/customer-stories/FeaturedCustomerStory";

export function CustomerStoriesPage() {
  return (
    <div className="bg-white">
      <CustomerStoriesHero />
      <FeaturedCustomerStory />
      <CustomerStoriesDirectory />
      <CustomerStoriesCta />
    </div>
  );
}
