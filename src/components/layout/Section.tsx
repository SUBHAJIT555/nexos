import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";

type SectionSize = "sm" | "md" | "lg" | "none";
type ContainerSize = "default" | "wide" | "full";

const paddingClass: Record<SectionSize, string> = {
  sm: "py-[var(--space-section-sm)]",
  md: "py-[var(--space-section-md)]",
  lg: "py-[var(--space-section-lg)]",
  none: "",
};

type SectionProps = {
  as?: "section" | "div" | "article" | "header" | "footer";
  size?: SectionSize;
  container?: boolean;
  containerSize?: ContainerSize;
  className?: string;
  id?: string;
  children: ReactNode;
};

export function Section({
  as: Component = "section",
  size = "md",
  container = true,
  containerSize = "default",
  className,
  id,
  children,
}: SectionProps) {
  const content = container ? (
    <Container size={containerSize}>{children}</Container>
  ) : (
    children
  );

  return (
    <Component id={id} className={cn(paddingClass[size], className)}>
      {content}
    </Component>
  );
}
