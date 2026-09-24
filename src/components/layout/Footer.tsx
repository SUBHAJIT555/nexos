import { merchantLegal } from "@/config/merchant";
import { siteConfig } from "@/config/site";
import { footerNavigation, headerCtas } from "@/config/navigation";
import { Container } from "@/components/layout/Container";
import { FooterLegalLinks } from "@/components/layout/FooterLegalLinks";
import { Logo } from "@/components/icons/Logo";
import { LinkButton } from "@/components/ui/LinkButton";
import { isExternalHref } from "@/lib/utils";
import Link from "next/link";

export function Footer() {
  return (
    <footer data-chrome="light" className="mt-auto bg-white text-neutral-900">
      <Container className="pt-[var(--space-section-sm)] pb-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
          <Logo className="text-neutral-900" />
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {headerCtas.map((cta) => (
              <LinkButton
                key={cta.id}
                href={cta.href}
                variant={cta.variant}
                external={cta.external}
                size="sm"
              >
                {cta.label}
              </LinkButton>
            ))}
          </div>
        </div>

        <div className="mt-10 hidden gap-8 md:grid md:grid-cols-3">
          {footerNavigation.map((group) => (
            <nav key={group.id} aria-labelledby={`footer-${group.id}`} className="flex flex-col gap-4">
              <h2 id={`footer-${group.id}`} className="text-base font-semibold">
                {group.title}
              </h2>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={`${group.id}-${item.id}`}>
                    <FooterLink item={item} />
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200 md:hidden">
          {footerNavigation.map((group) => (
            <details key={group.id} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold [&::-webkit-details-marker]:hidden">
                {group.title}
                <span className="text-neutral-500 transition-transform group-open:rotate-180" aria-hidden="true">
                  <svg viewBox="0 0 16 16" className="size-4" fill="currentColor">
                    <path d="M4.2 6.2a.75.75 0 0 1 1.06 0L8 8.94l2.74-2.74a.75.75 0 1 1 1.06 1.06l-3.27 3.27a.75.75 0 0 1-1.06 0L4.2 7.26a.75.75 0 0 1 0-1.06Z" />
                  </svg>
                </span>
              </summary>
              <ul className="mt-3 flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={`${group.id}-${item.id}`}>
                    <FooterLink item={item} />
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>

        <div className="mt-10 border-t border-neutral-200 pt-6">
          <p className="text-xs leading-5 text-neutral-600">
            {siteConfig.name} is operated by {merchantLegal.legalName}. Registered office:{" "}
            {merchantLegal.registeredAddress}
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-neutral-600">
            © 2026 {siteConfig.name}. All rights reserved.
          </p>
          <FooterLegalLinks />
        </div>
      </Container>
    </footer>
  );
}

function FooterLink({ item }: { item: { label: string; href?: string; external?: boolean } }) {
  const href = item.href ?? "#";
  const className =
    "text-sm text-neutral-900 transition-colors duration-[150ms] ease-[cubic-bezier(0,0,0.2,1)] hover:text-neutral-800";

  if (isExternalHref(href, item.external)) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {item.label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {item.label}
    </Link>
  );
}
