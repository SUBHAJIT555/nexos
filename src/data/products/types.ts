export type ProductLink = {
  label: string;
  href: string;
};

export type RichSegment = string | { href: string; label: string };

export type ProductFaqItem = {
  id: string;
  question: string;
  answer: RichSegment[][];
};

export type SecurityCard = {
  id: string;
  title: string;
  body: string;
};

export type AgentTemplate = {
  id: string;
  title: string;
  description: string;
  category: string;
  tools?: string[];
};

export type AgentCategory = {
  id: string;
  label: string;
  heading: string;
};
