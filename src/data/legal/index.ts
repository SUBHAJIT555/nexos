import { readFileSync } from "node:fs";
import { join } from "node:path";

const htmlDir = join(process.cwd(), "src/data/legal/html");

export type LegalDocumentId =
  | "terms-of-use"
  | "privacy-policy"
  | "cookie-policy"
  | "security-practices";

export function getLegalDocumentHtml(id: LegalDocumentId): string {
  return readFileSync(join(htmlDir, `${id}.html`), "utf8");
}

export const legalDocuments = {
  "terms-of-use": {
    title: "Terms of Use",
    description: "Terms of Use for NexEco AI services.",
  },
  "privacy-policy": {
    title: "Privacy Policy",
    description: "Privacy Policy for NexEco AI services.",
  },
  "cookie-policy": {
    title: "Cookie Policy",
    description: "Cookie Policy for NexEco AI website.",
  },
  "security-practices": {
    title: "Security Practices",
    description: "NexEco AI responsible disclosure and security practices.",
  },
} as const satisfies Record<
  LegalDocumentId,
  { title: string; description: string }
>;
