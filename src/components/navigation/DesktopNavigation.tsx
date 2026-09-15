"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "motion/react";
import { hasMegaMenu, type NavigationItem } from "@/types/navigation";
import { MegaMenu } from "@/components/navigation/MegaMenu";
import { cn, isExternalHref } from "@/lib/utils";

function matchesPath(item: NavigationItem, pathname: string): boolean {
  if (item.href === pathname) {
    return true;
  }
  if (item.children?.some((child) => child.href === pathname)) {
    return true;
  }
  return Boolean(
    item.groups?.some((group) => group.items.some((child) => child.href === pathname)),
  );
}

type DesktopNavigationProps = {
  items: NavigationItem[];
};

export function DesktopNavigation({ items }: DesktopNavigationProps) {
  const baseId = useId();
  const pathname = usePathname();
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenId(null);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <ul className="flex items-center gap-5">
        {items.map((item) => {
          const isMenu = hasMegaMenu(item);
          const isOpen = openId === item.id;
          const triggerId = `${baseId}-${item.id}`;
          const href = item.href ?? "/";
          const isActive = matchesPath(item, pathname);

          return (
            <li
              key={item.id}
              className="relative"
              onMouseEnter={() => {
                if (isMenu) {
                  setOpenId(item.id);
                }
              }}
              onMouseLeave={() => setOpenId(null)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setOpenId(null);
                }
              }}
            >
              {isMenu ? (
                <button
                  id={triggerId}
                  type="button"
                  className={cn(
                    "inline-flex items-center gap-1 text-[14px] leading-[21px] text-header-fg transition-opacity duration-[150ms] ease-[cubic-bezier(0,0,0.2,1)] hover:opacity-70",
                    (isOpen || isActive) && "opacity-100",
                  )}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  onFocus={() => setOpenId(item.id)}
                >
                  {item.label}
                  <ChevronIcon open={isOpen} />
                </button>
              ) : isExternalHref(href, item.external) ? (
                <a
                  href={href}
                  className="inline-flex text-[14px] leading-[21px] text-header-fg transition-opacity duration-[150ms] ease-[cubic-bezier(0,0,0.2,1)] hover:opacity-70"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={href}
                  className={cn(
                    "inline-flex text-[14px] leading-[21px] text-header-fg transition-opacity duration-[150ms] ease-[cubic-bezier(0,0,0.2,1)] hover:opacity-70",
                    isActive && "opacity-100",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              )}
              <AnimatePresence>
                {isMenu && isOpen ? (
                  <MegaMenu item={item} labelledBy={triggerId} />
                ) : null}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={cn(
        "size-4 text-header-fg transition-transform duration-[150ms] ease-[cubic-bezier(0,0,0.2,1)]",
        open && "rotate-180",
      )}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.2 6.2a.75.75 0 0 1 1.06 0L8 8.94l2.74-2.74a.75.75 0 1 1 1.06 1.06l-3.27 3.27a.75.75 0 0 1-1.06 0L4.2 7.26a.75.75 0 0 1 0-1.06Z" />
    </svg>
  );
}
