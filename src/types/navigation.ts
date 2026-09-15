import type { StaticImageData } from "next/image";

export type NavigationItem = {
  id: string;
  label: string;
  href?: string;
  description?: string;
  featured?: boolean;
  external?: boolean;
  children?: NavigationItem[];
  groups?: NavigationGroup[];
  featuredPanel?: FeaturedPanel;
};

export type NavigationGroup = {
  id: string;
  label: string;
  items: NavigationItem[];
};

export type FeaturedPanel = {
  id: string;
  title: string;
  href: string;
  ctaLabel: string;
  description?: string;
  image?: StaticImageData | string;
  imageAlt?: string;
};

export type NavigationCta = {
  id: string;
  label: string;
  href: string;
  variant: "primary" | "secondary" | "outline" | "ghost" | "accent";
  external?: boolean;
};

export type FooterNavGroup = {
  id: string;
  title: string;
  items: NavigationItem[];
};

export function hasMegaMenu(item: NavigationItem) {
  return Boolean(item.groups?.length || item.children?.length);
}
