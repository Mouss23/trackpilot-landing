"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Compass } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useLeadModal } from "@/hooks/useLeadModal";
import { NAV_LINKS, CTA_LABEL } from "@/lib/constants";
import { cn } from "@/lib/cn";

// Wordmark logo : icône Compass + "Track" (ink) / "Pilot" (primary indigo).
function Logo() {
  return (
    <a
      href="#top"
      aria-label="TrackPilot — retour en haut"
      className="flex items-center gap-2"
      style={{ fontFamily: "var(--font-display)" }}
    >
      <Compass className="h-7 w-7 text-primary" aria-hidden="true" />
      <span className="text-[22px] font-bold tracking-tight md:text-[28px]">
        <span className="text-ink">Track</span>
        <span className="text-primary">Pilot</span>
      </span>
    </a>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openModal } = useLeadModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Logo />

        {/* Liens centrés (desktop) */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions desktop : toggle thème + CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button
            variant="secondary"
            size="sm"
            ctaSource="nav"
            onClick={() => openModal("nav")}
          >
            {CTA_LABEL}
          </Button>
        </div>

        {/* Actions mobile : toggle + burger */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-ink"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line bg-background/95 backdrop-blur-xl md:hidden"
          >
            <Container className="flex flex-col gap-4 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="primary"
                size="md"
                ctaSource="nav-mobile"
                className="mt-2 w-full"
                onClick={() => {
                  setOpen(false);
                  openModal("nav-mobile");
                }}
              >
                {CTA_LABEL}
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
