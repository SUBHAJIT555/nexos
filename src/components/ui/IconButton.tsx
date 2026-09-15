import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Button, type ButtonSize, type ButtonVariant } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const iconSizeClass = {
  sm: "size-9 px-0",
  md: "size-11 px-0",
  lg: "size-12 px-0",
} as const;

type IconButtonProps = Omit<
  ComponentPropsWithoutRef<"button">,
  "children" | "aria-label"
> & {
  label: string;
  icon: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function IconButton({
  label,
  icon,
  size = "md",
  variant = "ghost",
  className,
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <Button
      type={type}
      variant={variant}
      size={size}
      aria-label={label}
      className={cn(iconSizeClass[size], className)}
      {...props}
    >
      {icon}
    </Button>
  );
}
