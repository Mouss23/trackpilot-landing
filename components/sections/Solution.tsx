"use client";

import { Check } from "lucide-react";
import Section, { FadeUp } from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { SOLUTIONS } from "@/lib/constants";

export default function Solution() {
  return (
    <Section id="solution" className="bg-background-secondary py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>La solution</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
            Un copilote, trois superpouvoirs.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            TrackPilot n&apos;est pas un énième outil d&apos;analytics.
            C&apos;est l&apos;assistant qui transforme votre donnée en
            décisions.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SOLUTIONS.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.1}>
              <Card className="flex h-full flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-accent ring-1 ring-inset ring-primary/30">
                  <Icon name={s.icon} className="h-6 w-6" />
                </div>
                <span className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {s.eyebrow}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {s.description}
                </p>

                {s.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 text-sm text-muted">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}
