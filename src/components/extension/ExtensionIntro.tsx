import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { extensionIntro } from "@/data/features/extension";

export function ExtensionIntro() {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="overflow-hidden rounded-md bg-[#EFF4F8] p-6 sm:p-10">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <h2 className="font-heading text-[28px] leading-[36.4px] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[32px] md:leading-[40px]">
              {extensionIntro.heading}
            </h2>
            <p className="text-base leading-6 text-neutral-900">
              {extensionIntro.bodyBefore}
              <Link
                href={extensionIntro.linkHref}
                className="text-accent hover:text-[var(--accent-hover)]"
              >
                {extensionIntro.linkLabel}
              </Link>
              {extensionIntro.bodyAfter}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
