"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { useLeadModal } from "@/hooks/useLeadModal";
import { CTA_LABEL } from "@/lib/constants";

export default function Hero() {
  const reduce = useReducedMotion();
  const { openModal } = useLeadModal();

  // Apparition en cascade (titre -> sous-titre -> CTA), décalage 100ms.
  const item = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: 0.1 * i,
    },
  });

  return (
    <section
      id="top"
      className="grain relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28"
    >
      {/* Glow radial indigo en arrière-plan */}
      <div className="glow-radial pointer-events-none absolute inset-0 -z-0" />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.div {...item(0)}>
          <Badge>
            <Sparkles size={14} className="text-accent" />
            Le copilote d&apos;acquisition pour équipes marketing
          </Badge>
        </motion.div>

        <motion.h1
          {...item(1)}
          className="mt-7 max-w-4xl text-[40px] font-semibold leading-[1.05] text-ink sm:text-6xl md:text-7xl"
        >
          Vos données marketing,
          <br />{" "}
          <span className="text-gradient">enfin lisibles.</span>
        </motion.h1>

        <motion.p
          {...item(2)}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
        >
          TrackPilot centralise vos données marketing, vérifie la qualité de
          votre tracking et transforme vos chiffres en recommandations claires.
          Vous voyez enfin ce qui fonctionne, ce qui bloque, et quoi faire
          ensuite.
        </motion.p>

        <motion.div {...item(3)} className="mt-9">
          <Button
            size="lg"
            ctaSource="hero"
            onClick={() => openModal("hero")}
          >
            {CTA_LABEL}
            <ArrowRight size={18} />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
