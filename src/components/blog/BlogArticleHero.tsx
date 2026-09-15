import Image from "next/image";
import { blogAuthorSrc, blogFeaturedSrc } from "@/assets/blog";
import type { BlogPost } from "@/types/blog";
import { BlogBreadcrumb } from "@/components/blog/BlogBreadcrumb";
import { BlogReadMeta } from "@/components/blog/BlogReadMeta";
import { Container } from "@/components/layout/Container";

export function BlogArticleHero({ post }: { post: BlogPost }) {
  return (
    <section id="blog-article" className="pt-16 pb-16">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-12 sm:gap-x-8">
          <div className="flex flex-col gap-6 lg:col-span-10 lg:col-start-2">
            <BlogBreadcrumb />
            <h1 className="font-heading text-[32px] leading-10 font-semibold tracking-[-0.256px] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
              {post.title}
            </h1>
            <div className="space-y-4">
              {post.intro.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-base leading-6 text-neutral-900 md:text-[20px] md:leading-[30px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <Image
              src={blogFeaturedSrc(post.featuredFile)}
              alt={post.featuredAlt}
              priority
              sizes="(min-width: 1024px) 960px, 100vw"
              className="w-full rounded-lg"
            />
            <div className="flex flex-wrap items-center gap-4">
              <Image
                src={blogAuthorSrc(post.author.image)}
                alt={post.author.name}
                width={48}
                height={48}
                className="size-12 rounded-full object-cover"
              />
              <div className="flex flex-col gap-1">
                <p className="text-base leading-6 text-neutral-900">{post.author.name}</p>
                <BlogReadMeta date={post.articleDate} readTime={post.articleReadTime} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
