import type { Metadata } from "next";
import { BlogListingPage } from "@/components/blog/BlogListingPage";
import { blogListingMeta, getListingPage } from "@/data/blog/posts";

export const metadata: Metadata = {
  title: blogListingMeta.title,
  description: blogListingMeta.description,
  openGraph: {
    title: blogListingMeta.title,
    description: blogListingMeta.description,
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const requested = Number.parseInt(params.page ?? "1", 10);
  const listing = getListingPage(requested);

  return <BlogListingPage page={listing.page} />;
}
