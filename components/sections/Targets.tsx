"use client";

import Section, { FadeUp } from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { TARGETS } from "@/lib/constants";

export default function Targets() {
  return (
    <Section id="targets" className="py-24 md:py-32">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Pour qui ?</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
            Conçu pour les équipes qui veulent aller droit au but, sans
            complexité inutile.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TARGETS.map((t, i) => (
            <FadeUp key={t.title} delay={(i % 3) * 0.08}>
              <Card className="flex h-full items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-surface-elevated text-accent">
                  <Icon name={t.icon} className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ink">
                    {t.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {t.description}
                  </p>
                </div>
              </Card>
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}
