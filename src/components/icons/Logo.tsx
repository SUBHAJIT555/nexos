import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  markClassName?: string;
};

export function Logo({ className, markClassName }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 text-header-fg transition-opacity duration-[150ms] ease-[cubic-bezier(0,0,0.2,1)] hover:opacity-80",
        className,
      )}
      aria-label={`${siteConfig.name} home`}
    >
      <BrandMark className={markClassName} />
      <span className="text-[1.05rem] font-semibold tracking-tight">
        {siteConfig.name}
      </span>
    </Link>
  );
}

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-6 w-6 shrink-0", className)}
      fill="none"
      aria-hidden="true"
    >
      <path d="M7 8.5h6.2L25 23.5h-6.2L7 8.5Z" fill="currentColor" />
      <path
        d="M18.8 8.5H25v3.1l-6.2 7.4V8.5Z"
        fill="currentColor"
        opacity="0.55"
      />
      <path d="M7 20.4V23.5h6.2l1.9-2.3H7Z" fill="currentColor" opacity="0.55" />
    </svg>
  );
}
