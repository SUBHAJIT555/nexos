import type { Metadata } from "next";
import { ModelsPage } from "@/components/models/ModelsPage";
import { modelsMeta } from "@/data/models";

export const metadata: Metadata = {
  title: modelsMeta.title,
  description: modelsMeta.description,
  openGraph: {
    title: modelsMeta.title,
    description: modelsMeta.description,
  },
};

export default function Page() {
  return <ModelsPage />;
}
