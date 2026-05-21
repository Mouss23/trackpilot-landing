"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function TimeSaved() {
  return (
    <Section className="grain relative overflow-hidden bg-background-secondary py-32 md:py-44">
      <div className="glow-radial pointer-events-none absolute inset-0" />
      <Container className="relative z-10 flex flex-col items-center text-center">
        {/* Chiffre central énorme */}
        <span className="text-gradient text-[110px] font-bold leading-none tracking-tighter sm:text-[140px] md:text-[160px]">
          ~6h
        </span>
        <span className="mt-2 text-xl font-medium text-ink md:text-2xl">
          gagnées par semaine
        </span>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          C&apos;est ce qu&apos;estime Théa, consultante marketing, en utilisant
          un outil comme TrackPilot. 6 heures de tableurs, d&apos;exports, de
          réunions data en moins. 6 heures de stratégie en plus.
        </p>

        <blockquote className="mt-12 max-w-2xl border-l-2 border-primary/50 pl-5 text-left text-base italic leading-relaxed text-muted md:text-lg">
          “En multicanal, on sait toujours à peu près d&apos;où viennent les
          prospects. Mais pas précisément pourquoi, ni comment. TrackPilot
          répondrait exactement à ce besoin.”
          <footer className="mt-3 text-sm not-italic text-faint">
            — Théa, consultante marketing
          </footer>
        </blockquote>
      </Container>
    </Section>
  );
}
