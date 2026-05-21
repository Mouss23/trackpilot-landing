"use client";

import Section, { FadeUp } from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Badge";
import { MARKET_STATS } from "@/lib/constants";

export default function MarketStats() {
  return (
    <Section id="market" className="bg-background-secondary py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Le contexte</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
            Les équipes marketing B2B font face aux mêmes défis.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            Le tracking marketing est cassé pour la grande majorité des équipes
            B2B. Les chiffres parlent d&apos;eux-mêmes.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {MARKET_STATS.map((stat, i) => (
            <FadeUp key={stat.text} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-surface p-6 md:p-8">
                <div className="text-[56px] font-bold leading-none tracking-tight text-primary md:text-[72px]">
                  {stat.value}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                  {stat.text}
                </p>
                <p className="mt-3 text-xs italic text-faint">{stat.source}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}
