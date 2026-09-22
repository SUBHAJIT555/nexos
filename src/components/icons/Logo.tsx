import Link from "next/link";
import { BrandMark } from "@/components/icons/BrandMark";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  markClassName?: string;
  /** Hide wordmark — icon only (compact spaces). */
  iconOnly?: boolean;
};

export function Logo({ className, markClassName, iconOnly = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 text-header-fg transition-opacity duration-[150ms] ease-[cubic-bezier(0,0,0.2,1)] hover:opacity-80",
        className,
      )}
      aria-label={`${siteConfig.name} home`}
    >
      <BrandMark className={markClassName} />
      {!iconOnly ? (
        <span className="text-[1.05rem] font-semibold tracking-tight">
          <span>NexEco</span>{" "}
          <span className="font-medium text-accent">AI</span>
        </span>
      ) : null}
    </Link>
  );
}

export { BrandMark, BrandMarkLight } from "@/components/icons/BrandMark";
