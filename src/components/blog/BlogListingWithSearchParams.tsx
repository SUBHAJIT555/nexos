"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { BlogListingPage } from "@/components/blog/BlogListingPage";

function BlogListingInner() {
  const searchParams = useSearchParams();
  const requested = Number.parseInt(searchParams.get("page") ?? "1", 10);
  const page = Number.isFinite(requested) && requested > 0 ? requested : 1;
  return <BlogListingPage page={page} />;
}

export function BlogListingWithSearchParams() {
  return (
    <Suspense fallback={<p className="py-16 text-center text-sm text-neutral-600">Loading articles…</p>}>
      <BlogListingInner />
    </Suspense>
  );
}
