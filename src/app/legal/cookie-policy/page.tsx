import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { getLegalDocumentHtml, legalDocuments } from "@/data/legal";

export const metadata: Metadata = {
  title: legalDocuments["cookie-policy"].title,
  description: legalDocuments["cookie-policy"].description,
};

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout>
      <LegalDocument html={getLegalDocumentHtml("cookie-policy")} />
    </LegalPageLayout>
  );
}
