"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import type { NavigationGroup, NavigationItem } from "@/types/navigation";
import { dropdownTransition } from "@/lib/animation/motion";
import { assetSrc } from "@/assets/home";
import { cn, isExternalHref } from "@/lib/utils";

type MegaMenuProps = {
  item: NavigationItem;
  labelledBy: string;
  className?: string;
};

export function MegaMenu({ item, labelledBy, className }: MegaMenuProps) {
  const groups = item.groups;
  const links = item.children ?? [];
  const featured = item.featuredPanel;
  const isWide = Boolean(groups?.length);

  return (
    <motion.div
      role="region"
      aria-labelledby={labelledBy}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={dropdownTransition}
      className={cn(
        "absolute top-full z-50 pt-[26px]",
        isWide ? "left-0 -translate-x-5" : "left-1/2 -translate-x-1/2",
        className,
      )}
    >
      <div
        className={cn(
          "max-h-[80vh] overflow-y-auto rounded-2xl bg-white p-6 text-neutral-900 shadow-menu",
          isWide ? "w-[536px] rounded-md" : "w-[min(29rem,calc(100vw-2rem))]",
        )}
      >
        {groups ? (
          <MegaMenuProducts groups={groups} />
        ) : (
          <div
            className={cn(
              featured && "grid items-start gap-8 sm:grid-cols-[minmax(0,1fr)_auto]",
            )}
          >
            <ul>
              {links.map((link) => (
                <li key={link.id}>
                  <MegaMenuListLink item={link} />
                </li>
              ))}
            </ul>
            {featured ? (
              <Link
                href={featured.href}
                className="flex flex-col items-center gap-1 rounded-md p-2 transition-colors duration-[150ms] ease-[cubic-bezier(0,0,0.2,1)] hover:bg-neutral-100/70"
              >
                {featured.image ? (
                  <span className="block h-[165px] w-[220px] overflow-hidden rounded-md">
                    <img
                      src={assetSrc(featured.image)}
                      alt={featured.imageAlt ?? featured.title}
                      width={220}
                      height={165}
                      className="h-full w-full rounded-sm object-cover object-top"
                    />
                  </span>
                ) : (
                  <>
                    <span className="self-start text-[12px] font-normal leading-[18px] text-accent">
                      Featured
                    </span>
                    <span className="mt-2 self-start text-[16px] font-semibold leading-6">
                      {featured.title}
                    </span>
                    {featured.description ? (
                      <span className="mt-1 self-start text-[12px] leading-[18px] text-[#65717b]">
                        {featured.description}
                      </span>
                    ) : null}
                  </>
                )}
                <span className="flex items-center">
                  <span className="p-2 text-sm font-medium text-neutral-900">
                    {featured.ctaLabel}
                  </span>
                  <StoryArrowIcon className="ml-2 text-accent" />
                </span>
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function MegaMenuProducts({ groups }: { groups: NavigationGroup[] }) {
  const featuredRow = groups.map((group) => {
    const featured = group.items.find((item) => item.featured);
    return { group, featured };
  });

  return (
    <div>
      <div className="flex gap-2 pb-4">
        {featuredRow.map(({ group, featured }) =>
          featured ? (
            <div key={group.id} className="flex min-w-0 flex-1 flex-col">
              <MegaMenuFeatured item={featured} groupLabel={group.label} />
            </div>
          ) : null,
        )}
      </div>
      <div className="flex gap-8">
        {groups.map((group) => (
          <ul key={group.id} className="flex flex-1 flex-col">
            {group.items
              .filter((item) => !item.featured)
              .map((item) => (
                <li key={item.id}>
                  <MegaMenuListLink item={item} />
                </li>
              ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

function MegaMenuFeatured({
  item,
  groupLabel,
}: {
  item: NavigationItem;
  groupLabel: string;
}) {
  const pathname = usePathname();
  const href = item.href ?? "#";
  const isActive = href === pathname;
  const className = cn(
    "block rounded-sm p-2 transition-colors duration-[150ms] ease-[cubic-bezier(0,0,0.2,1)] hover:bg-neutral-100/70",
    isActive && "bg-neutral-100",
  );

  const content = (
    <div className="flex flex-col gap-2 border-b border-neutral-200 pb-4">
      <p className="text-[12px] leading-[18px] text-accent">{groupLabel}</p>
      <p className="flex items-center text-[16px] font-semibold leading-6 text-neutral-900">
        {item.label}
        <ArrowIcon className="ml-2 text-accent" />
      </p>
      {item.description ? (
        <p className="text-[12px] leading-[18px] text-[#65717b]">{item.description}</p>
      ) : null}
    </div>
  );

  if (isExternalHref(href, item.external)) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className} aria-current={isActive ? "page" : undefined}>
      {content}
    </Link>
  );
}

function MegaMenuListLink({ item }: { item: NavigationItem }) {
  const pathname = usePathname();
  const href = item.href ?? "#";
  const isActive = href === pathname;
  const className = cn(
    "flex items-center rounded-[6px] p-2 text-[14px] font-medium leading-[21px] text-neutral-900 transition-colors duration-[150ms] ease-[cubic-bezier(0,0,0.2,1)] hover:bg-neutral-100/70 hover:text-neutral-800",
    isActive && "bg-neutral-100",
  );

  if (isExternalHref(href, item.external)) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {item.label}
      </a>
    );
  }

  return (
    <Link href={href} className={className} aria-current={isActive ? "page" : undefined}>
      {item.label}
    </Link>
  );
}

function StoryArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-96 -64 640 640"
      fill="currentColor"
      className={cn("size-4 shrink-0", className)}
      aria-hidden="true"
    >
      <path d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={cn("size-4 shrink-0", className)}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8h8.2M8.4 4.4 12.2 8l-3.8 3.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
