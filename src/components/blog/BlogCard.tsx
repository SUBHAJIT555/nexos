import Image from "next/image";
import Link from "next/link";
import { blogFeaturedSrc } from "@/assets/blog";
import type { BlogPost } from "@/types/blog";
import { BlogReadMeta } from "@/components/blog/BlogReadMeta";

export function BlogCard({
  post,
  heading = "h3",
  priority = false,
}: {
  post: BlogPost;
  heading?: "h2" | "h3";
  priority?: boolean;
}) {
  const TitleTag = heading;

  return (
    <article className="flex flex-col gap-6">
      <Link href={`/blog/${post.slug}`} className="block">
        <Image
          src={blogFeaturedSrc(post.featuredFile)}
          alt={post.featuredAlt}
          sizes="(min-width: 1024px) 368px, (min-width: 768px) 50vw, 100vw"
          priority={priority}
          className="w-full rounded-lg md:aspect-[23/12] md:object-cover"
        />
      </Link>
      <div className="flex flex-col gap-2">
        <BlogReadMeta date={post.publishedLabel} readTime={post.readTime} />
        <TitleTag className="font-heading text-[20px] leading-[26px] font-semibold tracking-[-0.2px] text-neutral-900">
          <Link href={`/blog/${post.slug}`} className="hover:text-neutral-800">
            {post.title}
          </Link>
        </TitleTag>
      </div>
    </article>
  );
}
