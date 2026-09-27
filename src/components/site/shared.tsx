"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

export const EASE = [0.22, 1, 0.36, 1] as const;
export { ArrowRight, ArrowUpRight };

/** A short ink hairline. Section openers pair it with a small-caps label. */
export function Rule({ className }: { className?: string }) {
  return <span aria-hidden className={cn("block h-px w-8 bg-ink", className)} />;
}

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      data-reveal
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
            <Rule />
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
            <Rule />
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

/** Typographic genre tile: serif title on paper, hairline border. No stock imagery. */
export function CoverTile({ title, sub, className, large = false, index }: { title: string; sub?: string; className?: string; large?: boolean; index?: number }) {
  return (
    <div className={cn("relative flex aspect-square flex-col justify-between overflow-hidden rounded-[12px] border border-line bg-background p-5 text-ink", className)}>
      <span className="label">{index !== undefined ? String(index + 1).padStart(2, "0") : "তরঙ্গ"}</span>
      <div>
        <p className={cn("font-heading leading-[1.05] font-medium text-balance", large ? "text-[clamp(32px,3.4vw,48px)]" : "text-[24px]")}>{title}</p>
        {sub && <p className="mt-1.5 text-[13px] text-ink-muted">{sub}</p>}
      </div>
    </div>
  );
}
