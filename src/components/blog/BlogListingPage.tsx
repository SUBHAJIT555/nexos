import { FeaturedArticle } from "@/components/blog/FeaturedArticle";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { BlogPagination } from "@/components/blog/BlogPagination";
import { getListingPage } from "@/data/blog/posts";
import { Container } from "@/components/layout/Container";

export function BlogListingPage({ page }: { page: number }) {
  const listing = getListingPage(page);

  return (
    <div className="bg-white">
      {listing.featured ? (
        <section id="hero-article" className="pt-16 pb-16">
          <Container>
            <FeaturedArticle post={listing.featured} />
          </Container>
        </section>
      ) : null}

      <section id="recent-articles" className={listing.featured ? "pb-16" : "pt-16 pb-16"}>
        <Container>
          <h2 className="mb-8 font-heading text-[28px] leading-9 font-semibold tracking-[-0.256px] text-neutral-900 md:text-[32px] md:leading-10">
            Recent articles
          </h2>
          <BlogGrid posts={listing.recent} prioritizeFirstRow={!listing.featured} />
          <BlogPagination page={listing.page} totalPages={listing.totalPages} />
        </Container>
      </section>
    </div>
  );
}
