"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { toggleTheme } = useTheme();

  // Icônes pilotées par la classe .dark (variante CSS) => pas d'état, pas de
  // mismatch d'hydratation.
  // - Dark : on montre Sun (action = passer en clair).
  // - Light : on montre Moon (action = passer en sombre).
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Changer de thème (clair / sombre)"
      title="Changer de thème"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-surface-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <Sun className="hidden h-[18px] w-[18px] dark:block" />
      <Moon className="block h-[18px] w-[18px] dark:hidden" />
    </button>
  );
}
