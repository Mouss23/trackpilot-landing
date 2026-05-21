"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  // Gradient indigo + glow
  primary:
    "gradient-primary text-white shadow-[0_8px_30px_-8px_var(--primary-glow)] hover:shadow-[0_12px_40px_-6px_var(--primary-glow)]",
  // Surface discrète avec bordure
  secondary:
    "border border-line-strong bg-surface/60 text-ink backdrop-blur hover:bg-surface-elevated",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[15px]",
  lg: "px-8 py-4 text-base md:text-lg",
};

type ButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  /** ouvre dans un nouvel onglet (lien externe) */
  external?: boolean;
  onClick?: () => void;
  /** source du CTA pour le tracking analytics (data-cta-source) */
  ctaSource?: string;
  type?: "button" | "submit";
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  external = false,
  onClick,
  ctaSource,
  type = "button",
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        className={classes}
        data-cta-source={ctaSource}
        {...motionProps}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      data-cta-source={ctaSource}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
