import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { getLegalDocumentHtml, legalDocuments } from "@/data/legal";

export const metadata: Metadata = {
  title: legalDocuments["security-practices"].title,
  description: legalDocuments["security-practices"].description,
};

export default function SecurityPracticesPage() {
  return (
    <LegalPageLayout>
      <LegalDocument html={getLegalDocumentHtml("security-practices")} />
    </LegalPageLayout>
  );
}
