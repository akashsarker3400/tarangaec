import type { Metadata } from "next";
import Image from "next/image";
import { brands } from "@/data/site";
import { videos } from "@/data/videos";
import { LiteYouTube } from "@/components/site/youtube";
import { ArrowUpRight, PageHead, Reveal } from "@/components/site/shared";

export const metadata: Metadata = {
  title: "Six YouTube channels",
  description: "The six Taranga YouTube channels — Taranga Electro Centre, Taranga Music Centre, Taranga Music, Taranga Entertainment, Bangla Entertainment and Bangla Drama — 7.8M+ subscribers, 2.6B+ views.",
  alternates: { canonical: "/channels" },
  openGraph: { title: "Taranga YouTube channels", url: "/channels" },
};

const channelsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Taranga YouTube channels",
  itemListElement: brands.map((b, i) => ({ "@type": "ListItem", position: i + 1, url: b.youtube, name: b.name })),
};

export default function Channels() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(channelsJsonLd) }} />
      <PageHead label="Channels" title="One label. Six channels." sub="Every channel below is run by Taranga Electro Centre. Press play on the most-watched videos, or open the channel on YouTube." />
      <div className="container-x space-y-4 pb-20 md:pb-28">
        {brands.map((b, i) => (
          <Reveal key={b.slug} delay={Math.min(i * 0.04, 0.2)}>
            <article id={b.slug} className="card grid scroll-mt-24 overflow-hidden md:grid-cols-12">
              <div className="flex min-h-[220px] items-center justify-center rounded-t-[11px] p-8 md:col-span-4 md:rounded-l-[11px] md:rounded-tr-none" style={{ background: b.logoBg }}>
                <Image src={b.logo} alt={`${b.name} logo`} width={300} height={220} className="h-36 w-auto object-contain" />
              </div>
              <div className="p-8 md:col-span-8 md:p-10">
                <span className="label">{b.role}</span>
                <h2 className="text-h2 mt-3">{b.name}</h2>
                <p className="mt-4 max-w-[60ch] text-[17px] text-ink-muted">{b.text}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  <a href={b.youtube} target="_blank" rel="noopener noreferrer" className="btn-ghost btn-sm">
                    YouTube · {b.subscribers} subscribers
                    <ArrowUpRight className="size-4" />
                  </a>
                  {"facebook" in b && b.facebook && (
                    <a href={b.facebook} target="_blank" rel="noopener noreferrer" className="btn-ghost btn-sm">
                      Facebook{"followers" in b && b.followers ? ` · ${b.followers} followers` : ""}
                      <ArrowUpRight className="size-4" />
                    </a>
                  )}
                </div>
              </div>
              {["taranga-electro-centre", "taranga-music-centre"].includes(b.slug) && videos[b.slug]?.length ? (
                <div className="grid gap-3 border-t border-line p-6 sm:grid-cols-3 md:col-span-12">
                  {videos[b.slug].slice(0, 3).map((v) => (
                    <div key={v.id}>
                      <LiteYouTube video={v} className="rounded-[10px]" />
                      <p className="mt-2 truncate font-bengali text-[14px] font-bold text-ink">{v.title.split("।")[0].split("|")[0].split(" - ")[0].trim()}</p>
                      <p className="text-[12px] text-ink-muted">{v.views} views</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </>
  );
}
