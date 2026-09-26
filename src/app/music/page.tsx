import type { Metadata } from "next";
import { genres, socials } from "@/data/site";
import { ArrowUpRight, CoverTile, PageHead, Reveal, SPECTRUM, Section } from "@/components/site/shared";

export const metadata: Metadata = { title: "Music", description: "The Taranga catalogue: one of the largest folk-music collections in Bangladesh, plus modern, film and devotional music." };

export default function Music() {
  return (
    <>
      <PageHead label="Catalogue" title="One of the largest folk-music collections in Bangladesh." sub="Songs, artists and traditions from every region — preserved and released to the world. Browse by genre, then listen on your platform." />
      <div className="container-x">
        <Reveal>
          <ul className="flex flex-wrap gap-2">
            {genres.map((g, i) => (
              <li key={g} className={`inline-flex h-10 items-center rounded-full px-4 text-[14px] font-semibold text-ink ${i === 0 ? "bg-sky" : SPECTRUM[i % 4]}`}>
                {g}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      <Section label="Genres" title="Folk first. Then everything else.">
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <Reveal className="col-span-2 row-span-2">
            <CoverTile title="Folk" sub="Baul · Bhatiali · Bhawaiya · Lalon" colorClass="bg-sky" large className="h-full" />
          </Reveal>
          {genres.slice(1).map((g, i) => (
            <Reveal key={g} delay={i * 0.04}>
              <CoverTile title={g} colorClass={SPECTRUM[i % 4]} />
            </Reveal>
          ))}
        </div>
      </Section>
      <Section label="Watch" title="Six channels on YouTube." tone="surface" className="pb-20 md:pb-28">
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socials.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="card card-hover group flex items-center justify-between p-6">
                <span className="text-h3">{s.label}</span>
                <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
