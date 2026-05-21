"use client";

import Section, { FadeUp } from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { PROBLEMS } from "@/lib/constants";

export default function Problem() {
  return (
    <Section id="problem" className="py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Le problème</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
            Vos données sont dispersées.
            <br />
            Vos décisions méritent mieux.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            GA4, Meta Ads, LinkedIn, CRM, formulaires, appels, partenaires...
            Vous collectez de la donnée tous les jours. Mais vous ne savez
            toujours pas précisément ce qui marche.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p, i) => (
            <FadeUp key={p.title} delay={i * 0.08}>
              <Card className="h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface-elevated text-accent">
                  <Icon name={p.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>
              </Card>
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}
