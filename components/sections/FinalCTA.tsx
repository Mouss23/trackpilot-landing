"use client";

import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useLeadModal } from "@/hooks/useLeadModal";
import { CTA_LABEL } from "@/lib/constants";

export default function FinalCTA() {
  const { openModal } = useLeadModal();
  return (
    <Section className="relative overflow-hidden py-28 md:py-36">
      {/* Gradient indigo + glow central */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_50%_50%,rgba(99,102,241,0.28),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-0 mx-auto h-72 max-w-3xl -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl md:text-6xl">
          Prêt à y voir clair ?
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          Créez votre dashboard en 5 minutes. Recevez votre premier score de
          tracking et vos recommandations dans la foulée.
        </p>

        <div className="mt-10">
          <Button
            size="lg"
            className="text-lg"
            ctaSource="final"
            onClick={() => openModal("final")}
          >
            {CTA_LABEL}
            <ArrowRight size={20} />
          </Button>
        </div>

        <p className="mt-5 text-sm text-faint">
          Audit gratuit · Sans carte bancaire · Sans engagement
        </p>
      </Container>
    </Section>
  );
}
