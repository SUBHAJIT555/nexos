export type CustomerStoryDepartment = "Finance" | "Engineering" | "E-commerce";

export type CustomerStorySummary = {
  slug: string;
  company: string;
  title: string;
  department: CustomerStoryDepartment;
  logo: "nord-security" | "pigu-lt" | "payhawk" | "oxylabs" | "hostinger";
  logoAlt: string;
};
