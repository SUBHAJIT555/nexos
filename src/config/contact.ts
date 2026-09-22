import { siteConfig } from "@/config/site";

export const primaryEmail = siteConfig.email;

export const salesEmail = primaryEmail;
export const supportEmail = primaryEmail;
export const legalEmail = "legal@nexeco-ai.com";
export const securityEmail = "security@nexeco-ai.com";

export const primaryMailto = `mailto:${primaryEmail}`;
export const salesMailto = `mailto:${salesEmail}`;
export const supportMailto = `mailto:${supportEmail}`;
export const legalMailto = `mailto:${legalEmail}`;
export const securityMailto = `mailto:${securityEmail}`;
