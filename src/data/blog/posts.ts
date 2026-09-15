import type { BlogPost } from "@/types/blog";
import postsJson from "@/data/blog/content/posts.json";

export const blogPosts = postsJson as BlogPost[];

export const blogListingMeta = {
  title: "AI Industry Knowledge Center - Insights & Topics",
  description:
    "Explore our comprehensive blog dedicated to the AI industry. Dive into a wealth of learning resources covering relevant AI topics and stay updated.",
};

export const PAGE_SIZE_RECENT = 9;

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  const index = blogPosts.findIndex((post) => post.slug === slug);
  if (index < 0) return blogPosts.slice(0, count);
  const related: BlogPost[] = [];
  for (let offset = 1; related.length < count && offset < blogPosts.length; offset += 1) {
    related.push(blogPosts[(index + offset) % blogPosts.length]);
  }
  return related;
}

export function getListingPage(page: number) {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);
  const leftover = Math.max(0, rest.length - PAGE_SIZE_RECENT);
  const totalPages = Math.max(1, 1 + Math.ceil(leftover / PAGE_SIZE_RECENT));
  const safePage = Number.isFinite(page) && page >= 1 ? Math.min(page, totalPages) : 1;

  if (safePage === 1) {
    return {
      page: 1,
      totalPages,
      featured,
      recent: rest.slice(0, PAGE_SIZE_RECENT),
    };
  }

  const start = PAGE_SIZE_RECENT * (safePage - 1);
  return {
    page: safePage,
    totalPages,
    featured: null,
    recent: rest.slice(start, start + PAGE_SIZE_RECENT),
  };
}
