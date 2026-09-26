import type { Metadata } from "next";
import Image from "next/image";
import { brands } from "@/data/site";
import { PageHead, Reveal } from "@/components/site/shared";

export const metadata: Metadata = { title: "Brands", description: "Taranga Electro Centre and its five brands: Taranga Music Centre, Taranga Music, Taranga Entertainment, Bangla Entertainment and Bangla Drama." };

export default function Brands() {
  return (
    <>
      <PageHead label="Brands" title="One label. Six names." sub="Taranga Electro Centre is the parent label. Every brand below is built and operated by Taranga." />
      <div className="container-x space-y-4 pb-20 md:pb-28">
        {brands.map((b, i) => (
          <Reveal key={b.slug} delay={Math.min(i * 0.04, 0.2)}>
            <article id={b.slug} className="card grid scroll-mt-24 overflow-hidden md:grid-cols-12">
              <div className="flex min-h-[200px] items-center justify-center p-8 md:col-span-4" style={{ background: b.accent }}>
                {b.logo ? <Image src={b.logo} alt={`${b.name} logo`} width={260} height={200} className="h-32 w-auto object-contain" /> : <span className="text-center font-heading text-[32px] leading-tight font-extrabold tracking-[-0.02em] text-white">{b.name}</span>}
              </div>
              <div className="p-8 md:col-span-8 md:p-10">
                <span className="label">{b.role}</span>
                <h2 className="text-h2 mt-3">{b.name}</h2>
                <p className="mt-4 max-w-[60ch] text-[17px] text-ink-muted">{b.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </>
  );
}
