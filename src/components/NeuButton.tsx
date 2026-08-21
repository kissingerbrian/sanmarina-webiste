import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

const base =
  "inline-flex min-h-11 items-center justify-center rounded-2xl px-5 py-3 font-display text-sm font-semibold tracking-wide transition-[box-shadow,transform,color,background-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neu-accent disabled:cursor-not-allowed disabled:opacity-60 xs:px-6";

const variants = {
  primary:
    "bg-neu-accent text-white shadow-[6px_6px_14px_#b8c2cf,-6px_-6px_14px_#f5f8fc] hover:bg-neu-accent-deep active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.25)]",
  soft: "neu-raised-sm text-neu-text hover:text-neu-accent active:neu-pressed",
} as const;

type Variant = keyof typeof variants;

type Shared = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type NeuButtonAsButton = Shared &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type NeuButtonAsLink = Shared &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function NeuButton(props: NeuButtonAsButton | NeuButtonAsLink) {
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
