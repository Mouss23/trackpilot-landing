"use client";

import { createContext, useCallback, useState } from "react";
import LeadFormModal from "@/components/sections/LeadFormModal";

type LeadModalCtx = {
  isOpen: boolean;
  /** source du CTA (hero, pricing-pro, final...) pour le tracking */
  source: string | null;
  openModal: (source?: string) => void;
  closeModal: () => void;
};

export const LeadModalContext = createContext<LeadModalCtx | null>(null);

export function LeadModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState<string | null>(null);

  const openModal = useCallback((src?: string) => {
    setSource(src ?? null);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <LeadModalContext.Provider value={{ isOpen, source, openModal, closeModal }}>
      {children}
      {/* Monté une seule fois pour toute la page */}
      <LeadFormModal />
    </LeadModalContext.Provider>
  );
}
