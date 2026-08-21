import type { HTMLAttributes, ReactNode } from "react";

type NeuSurfaceProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "aside";
  variant?: "raised" | "raised-sm" | "inset";
} & Omit<HTMLAttributes<HTMLElement>, "className" | "children">;

const variantClass = {
  raised: "neu-raised",
  "raised-sm": "neu-raised-sm",
  inset: "neu-inset",
} as const;

export function NeuSurface({
  children,
  className = "",
  as: Tag = "div",
  variant = "raised",
  ...rest
}: NeuSurfaceProps) {
  return (
    <Tag
      className={`xs:rounded-3xl rounded-2xl ${variantClass[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
