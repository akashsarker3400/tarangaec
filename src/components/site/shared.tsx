"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

export const EASE = [0.22, 1, 0.36, 1] as const;
export { ArrowRight, ArrowUpRight };

/** The emblem's spectrum as four hard-edged solid segments. Never a gradient. */
export function SpectrumRule({ className, height = 4 }: { className?: string; height?: number }) {
  return (
    <span aria-hidden className={cn("flex w-24 overflow-hidden rounded-full", className)} style={{ height }}>
      <span className="flex-1 bg-sp-r" />
      <span className="flex-1 bg-sp-y" />
      <span className="flex-1 bg-sp-g" />
      <span className="flex-1 bg-sp-b" />
    </span>
  );
}

export const SPECTRUM = ["bg-sp-r", "bg-sp-y", "bg-sp-g", "bg-sp-b"] as const;

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.4, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Section({ id, label, title, sub, action, children, className, tone = "white" }: { id?: string; label: string; title?: ReactNode; sub?: string; action?: ReactNode; children?: ReactNode; className?: string; tone?: "white" | "surface" }) {
  return (
    <section id={id} className={cn("py-16 md:py-24", tone === "surface" && "bg-surface", className)}>
      <div className="container-x">
        <Reveal>
          <div className="flex items-center gap-3">
            <SpectrumRule className="w-10" />
            <span className="label">{label}</span>
          </div>
        </Reveal>
        {(title || sub) && (
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal delay={0.05} className="max-w-3xl">
              {title && <h2 className="text-h2">{title}</h2>}
              {sub && <p className="mt-4 max-w-[60ch] text-[17px] text-ink-muted">{sub}</p>}
            </Reveal>
            {action && <Reveal delay={0.1}>{action}</Reveal>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function PageHead({ label, title, sub, children }: { label: string; title: string; sub?: string; children?: ReactNode }) {
  return (
    <section className="pt-14 pb-10 md:pt-20 md:pb-14">
      <div className="container-x">
        <Reveal>
          <div className="flex items-center gap-3">
            <SpectrumRule className="w-10" />
            <span className="label">{label}</span>
          </div>
        </Reveal>
        <Reveal delay={0.05} className="mt-6 max-w-3xl">
          <h1 className="text-h1">{title}</h1>
          {sub && <p className="mt-5 max-w-[62ch] text-[18px] text-ink-muted">{sub}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

/** Typographic release/cover placeholder: title on a solid spectrum colour. No stock imagery. */
export function CoverTile({ title, sub, colorClass, className, large = false }: { title: string; sub?: string; colorClass: string; className?: string; large?: boolean }) {
  return (
    <div className={cn("relative flex aspect-square flex-col justify-between overflow-hidden rounded-[20px] p-4 text-ink", colorClass, className)}>
      <span className="font-bengali text-[13px] font-bold opacity-70">তরঙ্গ</span>
      <div>
        <p className={cn("font-heading leading-[1] font-extrabold tracking-[-0.02em] text-balance", large ? "text-[clamp(28px,3vw,40px)]" : "text-[20px]")}>{title}</p>
        {sub && <p className="mt-1 text-[12px] font-semibold opacity-75">{sub}</p>}
      </div>
    </div>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="marquee overflow-hidden bg-ink py-5 text-white">
      <div className="marquee-track flex w-max items-center gap-10">
        {row.map((t, i) => (
          <span key={i} aria-hidden={i >= items.length} className="flex items-center gap-10 font-heading text-[20px] font-bold tracking-[-0.01em] whitespace-nowrap">
            {t}
            <span className={cn("size-2 rounded-full", SPECTRUM[i % 4])} />
          </span>
        ))}
      </div>
    </div>
  );
}
