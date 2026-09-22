import type { CustomerStoryDepartment, CustomerStorySummary } from "@/types/customer-stories";

export const customerStoriesListingMeta = {
  title: "Discover our customer stories",
  description:
    "See how companies use NexEco AI to adopt AI across teams, cut costs, and keep governance in one place.",
};

export const customerStoriesHero = {
  eyebrow: "Customer Stories",
  heading: "Meet the companies already using NexEco AI",
  logoAlt:
    "Logos of companies using NexEco AI: pigu.lt, NordVPN, payabl., Surfshark, and Hostinger",
};

export const featuredCustomerStory = {
  slug: "nord-security",
  name: "Marijus Briedis",
  role: "CTO @NordVPN",
  portraitAlt: "Marijus Briedis",
  quote:
    '"NexEco AI helped us reduce coding-agent LLM costs by 46% without changing our prompts, models, or developer workflows. The optimization was transparent to our engineers, while giving us much better visibility into AI usage and spend."',
  ctaLabel: "Read customer story",
  href: "/customer-stories/nord-security",
};

export const customerStoriesDirectory = {
  heading: "Learn how companies are using NexEco AI",
  searchPlaceholder: "Search stories...",
  filterLabel: "Filter by Department:",
  empty: "No stories match your search.",
};

export const customerStoryDepartments = [
  "All Departments",
  "Finance",
  "Engineering",
  "E-commerce",
] as const;

export const customerStories: CustomerStorySummary[] = [
  {
    slug: "cybercare-nordsecurity",
    company: "Nord Security",
    title: "Nord Security automated 75% of customer support with 86% CSAT",
    department: "Engineering",
    logo: "nord-security",
    logoAlt: "Nord Security",
  },
  {
    slug: "nord-security",
    company: "Nord Security",
    title: "Nord Security cuts coding-agent LLM costs by 46% with NexEco AI",
    department: "Engineering",
    logo: "nord-security",
    logoAlt: "Nord Security",
  },
  {
    slug: "pigu-lt",
    company: "Pigu.lt",
    title: "Pigu.lt integrates AI at the core of e-commerce with NexEco AI",
    department: "E-commerce",
    logo: "pigu-lt",
    logoAlt: "pigu.lt",
  },
  {
    slug: "payhawk",
    company: "Payhawk",
    title: "Payhawk cuts security investigation time by 80% with NexEco AI",
    department: "Finance",
    logo: "payhawk",
    logoAlt: "Payhawk",
  },
  {
    slug: "oxylabs",
    company: "Oxylabs",
    title: "Oxylabs doubles AI output and slashes costs with NexEco AI",
    department: "Engineering",
    logo: "oxylabs",
    logoAlt: "Oxylabs",
  },
  {
    slug: "hostinger",
    company: "Hostinger",
    title: "Hostinger Horizons scales no-code AI web builder with NexEco AI",
    department: "Engineering",
    logo: "hostinger",
    logoAlt: "Hostinger",
  },
];

export const customerStoriesCta = {
  heading: "Discover AI platform for your business",
  ctaLabel: "Get NexEco AI",
  ctaHref: "/pricing",
};

export function filterCustomerStories(
  stories: CustomerStorySummary[],
  query: string,
  department: "All Departments" | CustomerStoryDepartment,
) {
  const needle = query.trim().toLowerCase();
  return stories.filter((story) => {
    const matchesDepartment =
      department === "All Departments" || story.department === department;
    if (!matchesDepartment) return false;
    if (!needle) return true;
    return (
      story.title.toLowerCase().includes(needle) ||
      story.company.toLowerCase().includes(needle) ||
      story.department.toLowerCase().includes(needle)
    );
  });
}
