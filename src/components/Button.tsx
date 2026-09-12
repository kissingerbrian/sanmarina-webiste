import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

const base =
  "inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-2.5 font-display text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent-deep shadow-[0_8px_20px_rgba(26,82,48,0.25)] hover:shadow-[0_10px_24px_rgba(26,82,48,0.32)]",
  secondary:
    "border border-border-strong bg-bg-elevated text-ink hover:border-accent hover:text-accent",
  ghost: "text-accent hover:bg-bg-muted",
} as const;

type Variant = keyof typeof variants;

type Shared = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsButton = Shared &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = Shared &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { children, variant = "primary", className = "", ...rest } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const linkProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={classes} {...linkProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
