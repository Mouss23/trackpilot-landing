"use client";

import { useContext } from "react";
import { LeadModalContext } from "@/contexts/LeadModalContext";

export function useLeadModal() {
  const ctx = useContext(LeadModalContext);
  if (!ctx)
    throw new Error("useLeadModal doit être utilisé dans <LeadModalProvider>");
  return ctx;
}
