import type { Metadata } from "next";
import { BlogListingWithSearchParams } from "@/components/blog/BlogListingWithSearchParams";
import { blogListingMeta } from "@/data/blog/posts";

export const metadata: Metadata = {
  title: blogListingMeta.title,
  description: blogListingMeta.description,
  openGraph: {
    title: blogListingMeta.title,
    description: blogListingMeta.description,
  },
};

export default function Page() {
  return <BlogListingWithSearchParams />;
}
