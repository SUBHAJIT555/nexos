import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { getLegalDocumentHtml, legalDocuments } from "@/data/legal";

export const metadata: Metadata = {
  title: legalDocuments["privacy-policy"].title,
  description: legalDocuments["privacy-policy"].description,
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout>
      <LegalDocument html={getLegalDocumentHtml("privacy-policy")} />
    </LegalPageLayout>
  );
}
