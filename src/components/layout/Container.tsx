import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerSize = "default" | "wide" | "full";

const sizeClass: Record<ContainerSize, string> = {
  default: "max-w-[var(--container-standard)]",
  wide: "max-w-[var(--container-wide)]",
  full: "max-w-none",
};

type ContainerProps = {
  as?: "div" | "section" | "article" | "header" | "footer" | "nav" | "main";
  size?: ContainerSize;
  className?: string;
  children: ReactNode;
};

export function Container({
  as: Component = "div",
  size = "default",
  className,
  children,
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-[var(--gutter-x)]",
        sizeClass[size],
        className,
      )}
    >
      {children}
    </Component>
  );
}
