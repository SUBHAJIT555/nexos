import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";
import { cn, isExternalHref } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "accent"
  | "hero";
export type ButtonSize = "sm" | "md" | "lg";

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] border border-[var(--btn-primary-border)] hover:opacity-90",
  secondary: "border border-border bg-muted text-foreground hover:bg-neutral-100",
  outline:
    "border border-[var(--btn-outline-border)] bg-[var(--btn-outline-bg)] text-[var(--btn-outline-fg)] hover:opacity-90",
  ghost: "border border-transparent bg-transparent text-header-fg hover:opacity-80",
  accent:
    "border border-accent bg-accent text-accent-foreground hover:bg-[var(--accent-hover)] hover:border-[var(--accent-hover)]",
  hero: "home-hero-cta hover:brightness-110",
};

const sizeClass: Record<ButtonSize, string> = {
  sm: "h-[37px] gap-1.5 px-6 text-xs font-semibold",
  md: "h-12 gap-2 px-7 text-base font-semibold",
  lg: "h-12 gap-2 px-7 text-base font-semibold",
};

const buttonBaseClass = cn(
  "inline-flex items-center justify-center rounded-pill",
  "transition-[color,background-color,border-color,opacity] duration-[150ms] ease-[cubic-bezier(0,0,0.2,1)]",
  "motion-reduce:transition-none",
  "disabled:pointer-events-none disabled:opacity-50",
);

type ButtonShared = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "start" | "end";
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
};

type ButtonAsButton = ButtonShared &
  Omit<ComponentPropsWithoutRef<"button">, keyof ButtonShared | "href"> & {
    href?: undefined;
    external?: never;
  };

type ButtonAsLink = ButtonShared &
  Omit<ComponentPropsWithoutRef<"a">, keyof ButtonShared | "href"> & {
    href: string;
    external?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function isLinkProps(props: ButtonProps): props is ButtonAsLink {
  return typeof props.href === "string";
}

function omitKeys<T extends object, K extends keyof T>(
  obj: T,
  keys: readonly K[],
): Omit<T, K> {
  const clone = { ...obj };

  for (const key of keys) {
    delete clone[key];
  }

  return clone;
}

function ButtonContent({
  icon,
  iconPosition = "start",
  children,
}: Pick<ButtonShared, "icon" | "iconPosition" | "children">) {
  return (
    <>
      {icon && iconPosition !== "end" ? (
        <span className="inline-flex size-[1.1em] shrink-0 items-center justify-center">
          {icon}
        </span>
      ) : null}
      {children}
      {icon && iconPosition === "end" ? (
        <span className="inline-flex size-[1.1em] shrink-0 items-center justify-center">
          {icon}
        </span>
      ) : null}
    </>
  );
}

export function buttonClassName({
  variant = "primary",
  size = "md",
  className,
}: Pick<ButtonShared, "variant" | "size" | "className">) {
  return cn(buttonBaseClass, variantClass[variant], sizeClass[size], className);
}

export function Button(props: ButtonProps) {
  const classes = buttonClassName({
    variant: props.variant,
    size: props.size,
    className: props.className,
  });
  const content = (
    <ButtonContent icon={props.icon} iconPosition={props.iconPosition}>
      {props.children}
    </ButtonContent>
  );

  if (isLinkProps(props)) {
    const { href, external, disabled } = props;
    const linkRest = omitKeys(props, [
      "href",
      "external",
      "variant",
      "size",
      "icon",
      "iconPosition",
      "className",
      "children",
      "disabled",
    ]);

    if (disabled) {
      return (
        <span className={classes} aria-disabled="true">
          {content}
        </span>
      );
    }

    if (isExternalHref(href, external)) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...linkRest}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...linkRest}>
        {content}
      </Link>
    );
  }

  const { disabled, type = "button" } = props;
  const buttonRest = omitKeys(props, [
    "variant",
    "size",
    "icon",
    "iconPosition",
    "className",
    "children",
    "disabled",
    "type",
    "href",
    "external",
  ]);

  return (
    <button type={type} className={classes} disabled={disabled} {...buttonRest}>
      {content}
    </button>
  );
}
