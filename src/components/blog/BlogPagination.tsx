import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function pageHref(page: number) {
  return page <= 1 ? "/blog" : `/blog?page=${page}`;
}

function PageControl({
  page,
  current,
  children,
  rel,
}: {
  page: number;
  current: number;
  children: ReactNode;
  rel?: string;
}) {
  const isCurrent = page === current;
  const className = cn(
    "body-sm flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm",
    isCurrent
      ? "bg-accent text-white"
      : "bg-muted text-neutral-900 hover:bg-accent hover:text-white",
  );

  if (isCurrent) {
    return (
      <span aria-current="page" className={className}>
        <span className="sr-only">Page </span>
        {children}
      </span>
    );
  }

  return (
    <Link href={pageHref(page)} className={className} rel={rel}>
      <span className="sr-only">Page </span>
      {children}
    </Link>
  );
}

export function BlogPagination({ page, totalPages }: { page: number; totalPages: number }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav aria-label="Pagination" className="pt-16">
      <ul className="flex flex-wrap justify-center gap-2">
        {page > 1 ? (
          <li>
            <Link
              href={pageHref(page - 1)}
              rel="prev"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted hover:bg-accent hover:text-white"
            >
              <span className="sr-only">Previous page</span>
              <ChevronRight aria-hidden="true" className="size-4 rotate-180" />
            </Link>
          </li>
        ) : null}
        {pages.map((item) => (
          <li key={item}>
            <PageControl page={item} current={page}>
              {item}
            </PageControl>
          </li>
        ))}
        {page < totalPages ? (
          <li>
            <Link
              href={pageHref(page + 1)}
              rel="next"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted hover:bg-accent hover:text-white"
            >
              <span className="sr-only">Next page</span>
              <ChevronRight aria-hidden="true" className="size-4" />
            </Link>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}
