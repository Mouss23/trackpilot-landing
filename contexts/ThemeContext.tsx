"use client";

import { createContext, useContext, useCallback } from "react";

const STORAGE_KEY = "trackpilot-theme";

type ThemeCtx = {
  /** Bascule dark <-> light, persiste dans localStorage. */
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeCtx | null>(null);

/**
 * Le thème est piloté par la classe `.dark` sur <html> :
 * - posée avant le premier paint par le script anti-flash (cf. layout.tsx),
 * - source de vérité unique => pas d'état React à synchroniser (donc pas de
 *   setState en effet, pas de mismatch d'hydratation).
 * Les icônes du toggle réagissent à cette classe via la variante CSS `dark:`.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const toggleTheme = useCallback(() => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
    } catch {
      /* localStorage indisponible : on ignore */
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme doit être utilisé dans <ThemeProvider>");
  return ctx;
}
