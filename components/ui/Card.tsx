"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

// Carte de surface avec lift + bordure lumineuse indigo au hover.
export default function Card({
  children,
  className,
  interactive = true,
}: {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <motion.div
      whileHover={
        interactive
          ? {
              y: -4,
              boxShadow:
                "0 0 0 1px var(--primary-glow), 0 18px 40px -20px var(--primary-glow)",
            }
          : undefined
      }
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
      className={cn(
        "rounded-2xl border border-line bg-surface/60 p-6 backdrop-blur-md",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
