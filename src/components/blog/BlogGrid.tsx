import type { BlogPost } from "@/types/blog";
import { BlogCard } from "@/components/blog/BlogCard";

export function BlogGrid({
  posts,
  prioritizeFirstRow = false,
}: {
  posts: BlogPost[];
  prioritizeFirstRow?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3">
      {posts.map((post, index) => (
        <BlogCard key={post.slug} post={post} priority={prioritizeFirstRow && index < 3} />
      ))}
    </div>
  );
}
