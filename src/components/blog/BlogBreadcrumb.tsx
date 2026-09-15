import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function BlogBreadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-x-1">
      <Link href="/" className="whitespace-nowrap text-accent hover:text-[var(--accent-hover)]">
        Home
      </Link>
      <ChevronRight aria-hidden="true" className="size-4 text-accent" />
      <Link href="/blog" className="whitespace-nowrap text-accent hover:text-[var(--accent-hover)]">
        Blog
      </Link>
    </nav>
  );
}
