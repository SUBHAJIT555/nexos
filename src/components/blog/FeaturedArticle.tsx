import Image from "next/image";
import Link from "next/link";
import { blogFeaturedSrc } from "@/assets/blog";
import type { BlogPost } from "@/types/blog";
import { BlogReadMeta } from "@/components/blog/BlogReadMeta";

export function FeaturedArticle({ post }: { post: BlogPost }) {
  return (
    <article className="relative grid grid-cols-1 gap-y-8 md:grid-cols-12 md:gap-x-8">
      <div className="flex flex-col justify-center gap-6 md:col-span-5 lg:col-span-4">
        <div className="flex flex-col gap-4">
          <h1 className="font-heading text-[32px] leading-10 font-semibold tracking-[-0.256px] text-neutral-900 md:text-[40px] md:leading-[48px]">
            <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 hover:text-neutral-800">
              {post.title}
            </Link>
          </h1>
          <p className="text-base leading-6 text-neutral-600">{post.excerpt}</p>
        </div>
        <BlogReadMeta date={post.publishedLabel} readTime={post.readTime} />
      </div>
      <div className="h-full min-h-[220px] overflow-hidden rounded-lg md:col-span-7 md:min-h-[320px] lg:col-span-8 lg:min-h-[490px]">
        <Image
          src={blogFeaturedSrc(post.featuredFile)}
          alt={post.featuredAlt}
          priority
          sizes="(min-width: 1024px) 768px, (min-width: 640px) 60vw, 100vw"
          className="h-full w-full object-cover"
        />
      </div>
    </article>
  );
}
