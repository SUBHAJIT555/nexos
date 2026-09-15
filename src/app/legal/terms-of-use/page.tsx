import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { getLegalDocumentHtml, legalDocuments } from "@/data/legal";

export const metadata: Metadata = {
  title: legalDocuments["terms-of-use"].title,
  description: legalDocuments["terms-of-use"].description,
};

export default function TermsOfUsePage() {
  return (
    <LegalPageLayout>
      <LegalDocument html={getLegalDocumentHtml("terms-of-use")} />
    </LegalPageLayout>
  );
}
