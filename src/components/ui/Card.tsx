import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  as?: "div" | "article" | "section" | "li";
  className?: string;
  children: ReactNode;
};

export function Card({ as: Component = "div", className, children }: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-md border border-border bg-card text-card-foreground",
        className,
      )}
    >
      {children}
    </Component>
  );
}
