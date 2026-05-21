"use client";

import { Check } from "lucide-react";
import Section, { FadeUp } from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { useLeadModal } from "@/hooks/useLeadModal";
import { PRICING, CTA_LABEL } from "@/lib/constants";
import { cn } from "@/lib/cn";

export default function Pricing() {
  const { openModal } = useLeadModal();
  return (
    <Section id="pricing" className="py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Tarifs</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
            Choisissez votre niveau de pilotage.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            Trois offres simples. Sans engagement. Tarifs indicatifs en bêta.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {PRICING.map((plan, i) => (
            <FadeUp key={plan.name} delay={i * 0.1} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border p-7 backdrop-blur-md",
                  plan.featured
                    ? "border-primary/60 bg-surface shadow-[0_0_0_1px_var(--primary-glow),0_30px_70px_-40px_var(--primary-glow)] lg:-translate-y-3"
                    : "border-line bg-surface/60"
                )}
              >
                {plan.badge && (
                  <span className="gradient-primary absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                    {plan.badge}
                  </span>
                )}

                <h3 className="text-lg font-semibold text-ink">{plan.name}</h3>
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-4xl font-bold tracking-tight text-ink">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="mb-1 text-sm text-muted">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm text-muted">{plan.audience}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feat) => {
                    const isHeading = feat.trim().endsWith(":");
                    return (
                      <li
                        key={feat}
                        className={cn(
                          "flex gap-2.5 text-sm",
                          isHeading
                            ? "font-medium text-ink"
                            : "text-muted"
                        )}
                      >
                        {!isHeading && (
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                        )}
                        <span>{feat}</span>
                      </li>
                    );
                  })}
                </ul>

                <Button
                  variant={plan.featured ? "primary" : "secondary"}
                  size="md"
                  className="mt-8 w-full"
                  ctaSource={`pricing-${plan.name.toLowerCase()}`}
                  onClick={() =>
                    openModal(`pricing-${plan.name.toLowerCase()}`)
                  }
                >
                  {CTA_LABEL}
                </Button>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}
