"use client";

import { useEffect, useId, useState, useSyncExternalStore, type ReactNode } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import type { NavigationCta, NavigationItem } from "@/types/navigation";
import { hasMegaMenu } from "@/types/navigation";
import { Logo } from "@/components/icons/Logo";
import { LinkButton } from "@/components/ui/LinkButton";
import { dropdownTransition } from "@/lib/animation/motion";
import { cn, isExternalHref } from "@/lib/utils";

type MobileNavigationProps = {
  items: NavigationItem[];
  ctas: NavigationCta[];
};

function subscribe() {
  return () => {};
}

function useIsClient() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}

export function MobileNavigation({ items, ctas }: MobileNavigationProps) {
  const panelId = useId();
  const [open, setOpen] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const isClient = useIsClient();

  useEffect(() => {
    if (!open) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const panel = (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-50 bg-page-dark/50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={dropdownTransition}
            onClick={() => setOpen(false)}
          />
          <motion.nav
            id={panelId}
            aria-label="Mobile"
            data-chrome="light"
            className="fixed inset-0 z-[60] flex h-dvh flex-col bg-white text-neutral-900 lg:hidden"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={dropdownTransition}
          >
            <div className="flex h-[var(--header-height)] items-center justify-between px-4 md:px-6">
              <Logo />
              <button
                type="button"
                aria-label="Close menu"
                className="inline-flex size-8 items-center justify-center rounded-full text-neutral-900"
                onClick={() => setOpen(false)}
              >
                <CloseIcon />
              </button>
            </div>
            <ul className="flex-1 overflow-y-auto px-4 pb-8 md:px-6">
              {items.map((item) => {
                const isMenu = hasMegaMenu(item);
                const isExpanded = expandedId === item.id;
                const href = item.href ?? "/";

                return (
                  <li key={item.id} className="border-b border-neutral-200">
                    {isMenu ? (
                      <>
                        <button
                          type="button"
                          className="flex w-full items-center justify-between py-4 text-left text-base font-semibold"
                          aria-expanded={isExpanded}
                          onClick={() => setExpandedId(isExpanded ? null : item.id)}
                        >
                          {item.label}
                          <ChevronIcon open={isExpanded} />
                        </button>
                        {isExpanded ? (
                          <div className="pb-4">
                            <MobileMenuChildren
                              item={item}
                              onNavigate={() => setOpen(false)}
                            />
                          </div>
                        ) : null}
                      </>
                    ) : (
                      <MobileNavLink
                        href={href}
                        external={item.external}
                        className="block py-4 text-base font-semibold"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </MobileNavLink>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col gap-3 border-t border-neutral-200 px-4 py-5 md:px-6">
              {ctas.map((cta) => (
                <LinkButton
                  key={cta.id}
                  href={cta.href}
                  variant={cta.variant}
                  external={cta.external}
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  {cta.label}
                </LinkButton>
              ))}
            </div>
          </motion.nav>
        </>
      ) : null}
    </AnimatePresence>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={panelId}
        className="inline-flex size-8 items-center justify-center rounded-full text-header-fg"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>
      {isClient ? createPortal(panel, document.body) : null}
    </div>
  );
}

function MobileMenuChildren({
  item,
  onNavigate,
}: {
  item: NavigationItem;
  onNavigate: () => void;
}) {
  if (item.groups?.length) {
    return (
      <div className="space-y-5">
        {item.groups.map((group) => (
          <div key={group.id}>
            <p className="text-[12px] leading-[18px] text-accent">{group.label}</p>
            <ul className="mt-2">
              {group.items.map((child) => (
                <li key={child.id}>
                  <MobileNavLink
                    href={child.href ?? "#"}
                    external={child.external}
                    className="block py-2 text-sm font-medium text-neutral-900"
                    onClick={onNavigate}
                  >
                    {child.label}
                  </MobileNavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  return (
    <ul>
      {(item.children ?? []).map((child) => (
        <li key={child.id}>
          <MobileNavLink
            href={child.href ?? "#"}
            external={child.external}
            className="block py-2 text-sm font-medium text-neutral-900"
            onClick={onNavigate}
          >
            {child.label}
          </MobileNavLink>
        </li>
      ))}
      {item.featuredPanel ? (
        <li>
          <Link
            href={item.featuredPanel.href}
            className="block py-2 text-sm font-medium text-neutral-900"
            onClick={onNavigate}
          >
            {item.featuredPanel.ctaLabel}
          </Link>
        </li>
      ) : null}
    </ul>
  );
}

function MobileNavLink({
  href,
  external,
  className,
  onClick,
  children,
}: {
  href: string;
  external?: boolean;
  className?: string;
  onClick: () => void;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const isActive = href === pathname;

  if (isExternalHref(href, external)) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

function MenuIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M6 8.5h20M6 16h20M6 23.5h20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M9 9 23 23M23 9 9 23"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={cn(
        "size-4 text-neutral-600 transition-transform duration-[150ms]",
        open && "rotate-180",
      )}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.2 6.2a.75.75 0 0 1 1.06 0L8 8.94l2.74-2.74a.75.75 0 1 1 1.06 1.06l-3.27 3.27a.75.75 0 0 1-1.06 0L4.2 7.26a.75.75 0 0 1 0-1.06Z" />
    </svg>
  );
}
