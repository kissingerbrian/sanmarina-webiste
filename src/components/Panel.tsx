import type { HTMLAttributes, ReactNode } from "react";

type PanelProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "aside";
} & Omit<HTMLAttributes<HTMLElement>, "className" | "children">;

export function Panel({
  children,
  className = "",
  as: Tag = "div",
  ...rest
}: PanelProps) {
  return (
    <Tag
      className={`border-border bg-bg-elevated border ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
