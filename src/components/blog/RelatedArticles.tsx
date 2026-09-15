import type { BlogPost } from "@/types/blog";
import { BlogCard } from "@/components/blog/BlogCard";

export function RelatedArticles({ posts }: { posts: BlogPost[] }) {
  if (!posts.length) return null;

  return (
    <section id="trending-articles" className="pt-16 pb-16">
      <p className="mb-8 font-heading text-[28px] leading-9 font-semibold tracking-[-0.256px] text-neutral-900 md:text-[32px] md:leading-10">
        Trending Articles
      </p>
      <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
