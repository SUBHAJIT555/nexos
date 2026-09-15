export type BlogTocItem = {
  id: string;
  text: string;
  level: 2 | 3 | 4 | number;
};

export type BlogFaqItem = {
  question: string;
  answerHtml: string;
};

export type BlogAuthor = {
  name: string;
  slug: string;
  bio: string;
  image: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  intro: string[];
  publishedLabel: string;
  readTime: string;
  articleDate: string;
  articleReadTime: string;
  datePublished: string;
  author: BlogAuthor;
  toc: BlogTocItem[];
  faq: BlogFaqItem[];
  bodyHtml: string;
  featuredFile: string;
  featuredAlt: string;
  sourceUrl: string;
  cta: {
    heading: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
};
