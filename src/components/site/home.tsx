"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Disc3, Film, Handshake, Music2 } from "lucide-react";

import { CountUp } from "@/components/unlumen-ui/count-up";
import { HoverExpand } from "@/components/unlumen-ui/hover-expand";
import { MagneticButton } from "@/components/unlumen-ui/magnetic-button";
import { TextReveal } from "@/components/unlumen-ui/text-reveal";
import { brands, genres, hero, site, stats, whatWeDo } from "@/data/site";
import { cn } from "@/lib/utils";
import { ArrowRight, CoverTile, Reveal, SPECTRUM, Section, SpectrumRule } from "./shared";

/* ---------------- Hero ---------------- */

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -24]);

  return (
    <section className="pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="container-x grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="font-bengali text-[18px] font-bold text-sky-ink">{site.bengali}</span>
              <span className="label">{hero.kicker}</span>
            </div>
            <SpectrumRule className="mt-3" />
          </Reveal>
          <h1 className="text-h1 mt-7 max-w-[16ch]">
            <TextReveal as="span" text={hero.title} staggerDelay={0.04} duration={0.45} className="leading-[inherit]" />
          </h1>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-[54ch] text-[clamp(17px,1.4vw,20px)] leading-[1.55] text-ink-muted">{hero.lead}</p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <MagneticButton href={hero.primary.href} radius={24} strength={0.3} className="btn-primary">
                {hero.primary.label}
                <ArrowRight className="size-4" />
              </MagneticButton>
              <Link href={hero.secondary.href} className="btn-ghost">
                {hero.secondary.label}
              </Link>
            </div>
          </Reveal>
        </div>

        <motion.div style={reduce ? undefined : { y }} className="lg:col-span-5">
          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-[28px] bg-sky p-6 md:p-8">
              <Image src="/brand/taranga.png" alt="Taranga emblem: the Bengali word তরঙ্গ above a treble clef on a spectrum" width={624} height={800} priority className="mx-auto h-auto w-[70%] max-w-[300px] rounded-[16px]" />
              <div className="mt-6 grid grid-cols-3 gap-2">
                <CoverTile title="Folk" sub="Baul · Bhatiali" colorClass="bg-white" />
                <CoverTile title="1990s" sub="Cassette era" colorClass="bg-ink text-white" className="[&_span]:text-white/70 [&_p]:text-white" />
                <CoverTile title="20+ yrs" sub="in music" colorClass="bg-white" />
              </div>
            </div>
          </Reveal>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */

export function Stats() {
  return (
    <section aria-label="Key numbers" className="container-x py-12 md:py-16">
      <div className="card grid divide-y divide-line md:grid-cols-4 md:divide-x md:divide-y-0">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.05} className="p-6 md:p-8">
            <div className="font-heading text-[clamp(40px,4vw,56px)] leading-none font-extrabold tracking-[-0.02em] tabular-nums">
              {"value" in s && s.value !== undefined ? (
                <>
                  <CountUp to={s.value} duration={1.2} digitEffect="none" />
                  {s.suffix}
                </>
              ) : (
                s.text
              )}
            </div>
            <p className="mt-3 text-[14px] leading-snug text-ink-muted">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- What we do ---------------- */

const ICONS = [Music2, Disc3, Film, Handshake];

export function WhatWeDo() {
  return (
    <Section id="what" label="What we do" title={whatWeDo.title} sub={whatWeDo.sub} tone="surface">
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {whatWeDo.items.map((it, i) => {
          const Icon = ICONS[i];
          return (
            <Reveal key={it.title} delay={i * 0.06} className="card card-hover flex h-full flex-col p-7">
              <span className={cn("grid size-11 place-items-center rounded-2xl text-ink", SPECTRUM[i])}>
                <Icon className="size-5" strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="text-h3 mt-7">{it.title}</h3>
              <p className="mt-2 text-[15px] text-ink-muted">{it.text}</p>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------------- Catalogue showcase ---------------- */

export function Catalogue() {
  const rows = genres.slice(0, 6);
  return (
    <Section
      id="catalogue"
      label="Catalogue"
      title="Folk first. Then everything else."
      sub="Regional traditions preserved and released — from the largest folk collection in Bangladesh to modern, film and devotional music."
      action={
        <Link href="/music" className="group inline-flex items-center gap-1.5 text-[15px] font-semibold">
          Browse the catalogue
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      }
    >
      <Reveal className="mt-12 hidden md:block">
        <HoverExpand
          collapsedHeight={88}
          expandedHeight={320}
          items={rows.map((g, i) => ({
            label: g,
            sublabel: i === 0 ? "Largest collection" : "Genre",
            image: `/covers/${g.toLowerCase()}.svg`,
            imageAlt: `${g} artwork`,
            description: i === 0 ? "Baul, Bhatiali, Bhawaiya, Lalon and more" : undefined,
          }))}
        />
      </Reveal>
      <div className="mt-10 grid grid-cols-2 gap-3 md:hidden">
        {rows.map((g, i) => (
          <CoverTile key={g} title={g} sub={i === 0 ? "Largest collection" : undefined} colorClass={i === 0 ? "bg-sky" : SPECTRUM[i % 4]} />
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Brands ---------------- */

export function Brands() {
  return (
    <Section id="brands" label="Brands" title="One label. Six names." sub="Taranga Electro Centre is the parent. The brands below are all Taranga." tone="surface">
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {brands.map((b, i) => (
          <Reveal key={b.slug} delay={i * 0.05}>
            <Link href={`/brands#${b.slug}`} className="card card-hover flex h-full flex-col overflow-hidden">
              <div className="flex h-28 items-center justify-center" style={{ background: b.accent }}>
                {b.logo ? <Image src={b.logo} alt={`${b.name} logo`} width={200} height={140} className="h-20 w-auto object-contain" /> : <span className="font-heading text-[28px] font-extrabold tracking-[-0.02em] text-white">{b.name.split(" ")[0]}</span>}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="label">{b.role}</span>
                <h3 className="text-h3 mt-2">{b.name}</h3>
                <p className="mt-2 text-[15px] text-ink-muted">{b.text}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Artists CTA ---------------- */

export function ArtistsCta() {
  return (
    <section className="container-x py-8 md:py-12">
      <Reveal>
        <div className="flex flex-col gap-8 rounded-[32px] bg-sky p-8 md:flex-row md:items-center md:justify-between md:p-14">
          <div className="max-w-[26ch]">
            <span className="label text-ink/70">For artists & composers</span>
            <h2 className="text-h2 mt-3 text-ink">Have a song? Bring it to Taranga.</h2>
          </div>
          <MagneticButton href="/artists" radius={24} strength={0.3} className="btn-primary shrink-0">
            Submit your music
            <ArrowRight className="size-4" />
          </MagneticButton>
        </div>
      </Reveal>
    </section>
  );
}
