"use client";

import { Check, X, AlertTriangle } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Badge";
import {
  COMPARISON_COLUMNS,
  COMPARISON_ROWS,
  type CompCell,
} from "@/lib/constants";
import { cn } from "@/lib/cn";

// Valeurs de la ligne "Prix d'entrée" (alignées sur COMPARISON_COLUMNS).
const PRICE_ROW = [
  "49 €/mois",
  "Gratuit",
  "890 $/mois + 3 000 $ onboarding",
  "400-950 €/jour",
];

function CellMark({ cell }: { cell: CompCell }) {
  const icon =
    cell.value === "yes" ? (
      <Check className="h-4 w-4 text-success" />
    ) : cell.value === "no" ? (
      <X className="h-4 w-4 text-faint" />
    ) : (
      <AlertTriangle className="h-4 w-4 text-warning" />
    );
  return (
    <span className="inline-flex items-center justify-center gap-1.5 text-sm text-muted">
      {icon}
      {cell.label && <span>{cell.label}</span>}
    </span>
  );
}

export default function Comparison() {
  return (
    <Section id="comparison" className="bg-background-secondary py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Pourquoi TrackPilot</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
            Plus simple que HubSpot. Plus utile que GA4.
          </h2>
        </div>

        {/* Tableau (desktop) */}
        <div className="mt-14 hidden overflow-hidden rounded-2xl border border-line md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-surface/60">
                <th className="px-5 py-4 text-sm font-medium text-muted" />
                {COMPARISON_COLUMNS.map((col, i) => (
                  <th
                    key={col}
                    className={cn(
                      "px-5 py-4 text-center text-sm font-semibold",
                      i === 0
                        ? "bg-primary/10 text-ink"
                        : "text-muted"
                    )}
                  >
                    {i === 0 ? (
                      <span className="text-gradient">{col}</span>
                    ) : (
                      col
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.feature} className="border-t border-line">
                  <td className="px-5 py-4 text-sm font-medium text-ink">
                    {row.feature}
                  </td>
                  {row.cells.map((cell, i) => (
                    <td
                      key={i}
                      className={cn(
                        "px-5 py-4 text-center",
                        i === 0 && "bg-primary/[0.06]"
                      )}
                    >
                      <CellMark cell={cell} />
                    </td>
                  ))}
                </tr>
              ))}
              {/* Ligne prix d'entrée (valeurs texte, pas d'icônes) */}
              <tr className="border-t border-line">
                <td className="px-5 py-4 text-sm font-semibold text-ink">
                  Prix d&apos;entrée
                </td>
                {PRICE_ROW.map((val, i) => (
                  <td
                    key={i}
                    className={cn(
                      "px-5 py-4 text-center text-sm",
                      i === 0
                        ? "bg-primary/[0.06] font-semibold text-ink"
                        : "text-muted"
                    )}
                  >
                    {val}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Cards empilées (mobile) — une carte par colonne */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:hidden">
          {COMPARISON_COLUMNS.map((col, colIdx) => (
            <div
              key={col}
              className={cn(
                "rounded-2xl border p-5",
                colIdx === 0
                  ? "border-primary/50 bg-primary/[0.06]"
                  : "border-line bg-surface/60"
              )}
            >
              <h3 className="text-base font-semibold text-ink">
                {colIdx === 0 ? (
                  <span className="text-gradient">{col}</span>
                ) : (
                  col
                )}
              </h3>
              <ul className="mt-4 space-y-3">
                {COMPARISON_ROWS.map((row) => (
                  <li
                    key={row.feature}
                    className="flex items-center justify-between gap-3 text-sm"
                  >
                    <span className="text-muted">{row.feature}</span>
                    <CellMark cell={row.cells[colIdx]} />
                  </li>
                ))}
                <li className="flex items-center justify-between gap-3 border-t border-line pt-3 text-sm">
                  <span className="text-muted">Prix d&apos;entrée</span>
                  <span
                    className={cn(
                      "text-right",
                      colIdx === 0 ? "font-semibold text-ink" : "text-muted"
                    )}
                  >
                    {PRICE_ROW[colIdx]}
                  </span>
                </li>
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs italic text-faint">
          Source des prix concurrents : HubSpot pricing 2025, Malt 2025-2026.
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-muted md:text-base">
          TrackPilot se positionne entre GA4 (puissant mais brut) et un
          consultant (utile mais cher). Le bon outil pour les équipes qui
          veulent décider sans complexifier.
        </p>
      </Container>
    </Section>
  );
}
