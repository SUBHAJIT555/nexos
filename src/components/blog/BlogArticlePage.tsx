import type { BlogPost } from "@/types/blog";
import { getRelatedPosts } from "@/data/blog/posts";
import { Container } from "@/components/layout/Container";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogTableOfContents } from "@/components/blog/BlogTableOfContents";
import { BlogArticleBody } from "@/components/blog/BlogArticleBody";
import { BlogFaq } from "@/components/blog/BlogFaq";
import { BlogAuthor } from "@/components/blog/BlogAuthor";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { BlogCTA } from "@/components/blog/BlogCTA";

export function BlogArticlePage({ post }: { post: BlogPost }) {
  const related = getRelatedPosts(post.slug);

  return (
    <article className="bg-white">
      <BlogArticleHero post={post} />

      {post.toc.length ? (
        <section id="table-of-contents" className="py-6">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-12 sm:gap-x-8">
              <div className="lg:col-span-10 lg:col-start-2">
                <BlogTableOfContents items={post.toc} />
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="pt-4 pb-16">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-12 sm:gap-x-8">
            <div className="lg:col-span-7 lg:col-start-2">
              <BlogArticleBody html={post.bodyHtml} />
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <BlogFaq items={post.faq} />
        <BlogAuthor post={post} />
        <RelatedArticles posts={related} />
      </Container>

      <BlogCTA
        heading={post.cta.heading}
        body={post.cta.body}
        ctaLabel={post.cta.ctaLabel}
        ctaHref={post.cta.ctaHref}
      />
    </article>
  );
}
