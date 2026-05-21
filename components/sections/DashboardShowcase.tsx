"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Badge";
import { SHOWCASE_BLOCKS, type ShowcaseBlock } from "@/lib/constants";
import { cn } from "@/lib/cn";

// Image dans une card : lift + glow indigo qui apparaît à l'entrée dans le viewport.
function ShowcaseImage({ block }: { block: ShowcaseBlock }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24, boxShadow: "0 0 0 0 transparent" }}
      whileInView={{
        opacity: 1,
        y: 0,
        boxShadow:
          "0 0 0 1px var(--primary-glow), 0 30px 70px -40px var(--primary-glow)",
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-xl border border-line bg-surface"
    >
      <div className="relative aspect-[16/10]">
        <Image
          src={block.src}
          alt={block.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top"
        />
      </div>
    </motion.div>
  );
}

function ShowcaseText({ block }: { block: ShowcaseBlock }) {
  return (
    <div>
      <Eyebrow>{block.eyebrow}</Eyebrow>
      <h3 className="mt-3 text-[28px] font-semibold leading-tight text-ink sm:text-[32px] md:text-[40px]">
        {block.title}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
        {block.description}
      </p>

      {/* Bullets */}
      <ul className="mt-6 space-y-2.5">
        {block.bullets.map((b) => (
          <li key={b} className="flex gap-2.5 text-sm text-muted">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function DashboardShowcase() {
  return (
    <Section id="product" className="py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Le produit</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
            Voici à quoi ça ressemble.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            Un dashboard pensé pour décider vite.
          </p>
        </div>

        {/* Blocs zigzag */}
        <div className="mt-16 flex flex-col gap-16 md:mt-20 md:gap-[120px]">
          {SHOWCASE_BLOCKS.map((block, i) => {
            const imageLeft = i % 2 === 0; // blocs 1,3,5 : screenshot à gauche
            return (
              <div
                key={block.src}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                {/* Image : toujours au-dessus du texte sur mobile (order) */}
                <div
                  className={cn(
                    "order-1",
                    imageLeft ? "lg:order-1" : "lg:order-2"
                  )}
                >
                  <ShowcaseImage block={block} />
                </div>
                <div
                  className={cn(
                    "order-2",
                    imageLeft ? "lg:order-2" : "lg:order-1"
                  )}
                >
                  <ShowcaseText block={block} />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
