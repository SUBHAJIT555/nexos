import type { ReactNode } from "react";
import { Section } from "@/components/layout/Section";

type LegalPageLayoutProps = {
  children: ReactNode;
};

export function LegalPageLayout({ children }: LegalPageLayoutProps) {
  return (
    <Section size="none" className="pt-16 pb-16">
      <div className="mx-4 sm:mx-auto">
        <div className="grid grid-cols-12 gap-y-8 sm:gap-x-8">
          <div className="col-span-12 lg:col-start-3 lg:col-span-8">{children}</div>
        </div>
      </div>
    </Section>
  );
}
