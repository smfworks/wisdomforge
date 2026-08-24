import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "default" | "sm" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-[background-color,box-shadow,transform,color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]";

const variantCls: Record<Variant, string> = {
  primary: "bg-accent text-accent-fg hover:bg-accent/90 rounded-md",
  secondary:
    "bg-raised text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)] rounded-md",
  ghost: "text-fg hover:bg-raised rounded-md",
  outline:
    "text-fg rounded-md shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
};

const sizeCls: Record<Size, string> = {
  default: "min-h-11 px-4 text-sm",
  sm: "min-h-10 px-3 text-sm",
  lg: "min-h-12 px-5 text-base",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
  children?: ReactNode;
};

export function Button({
  className,
  variant = "primary",
  size = "default",
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const cls = cn(base, variantCls[variant], sizeCls[size], className);

  if (asChild && children) {
    // Render children directly with the class applied (for Link wrappers)
    // We clone the child element and inject className
    const child = children as React.ReactElement<{ className?: string }>;
    return (
      <span className={cls}>
        {child}
      </span>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}