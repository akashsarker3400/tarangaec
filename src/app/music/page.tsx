import type { Metadata } from "next";
import { brands } from "@/data/site";
import { picks } from "@/data/videos";
import { LatestFromTmc } from "@/components/site/latest";
import { ArrowUpRight, PageHead, Reveal, Section } from "@/components/site/shared";
import { LiteYouTube } from "@/components/site/youtube";

export const metadata: Metadata = {
  title: "Bangla folk music catalogue",
  description: "The Taranga catalogue: one of the largest Bangla folk-music collections in Bangladesh, with Baul, Bhatiali, Bhawaiya and Lalon, plus modern, film and devotional songs.",
  alternates: { canonical: "/music" },
  openGraph: { title: "Taranga music catalogue", url: "/music", images: ["/og.jpg"] },
  twitter: { title: "Taranga music catalogue", images: ["/og.jpg"] },
};

const TEC = brands[0];
const search = (q: string) => `${TEC.youtube}/search?query=${encodeURIComponent(q)}`;

const traditions = [
  { name: "Baul", bn: "বাউল", text: "The mystic song tradition of Bengal: one voice, an ektara or dotara, and lyrics about the soul and the divine within." },
  { name: "Bhatiali", bn: "ভাটিয়ালি", text: "Boatmen's songs from the rivers of Bangladesh, sung slow and long over the water, often about the river itself and separation." },
  { name: "Bhawaiya", bn: "ভাওয়াইয়া", text: "Folk songs of northern Bengal, from the Rangpur region and around, known for the catch in the voice and songs of longing." },
  { name: "Lalon", bn: "লালন", text: "The songs of Fakir Lalon Shah, the most sung Baul poet, on humanity beyond caste and creed." },
  { name: "Modern", bn: "আধুনিক", text: "Contemporary Bangla songs and music videos: love songs, sad songs and today's artists on the Taranga channels." },
  { name: "Devotional", bn: "ভক্তিমূলক", text: "Songs of devotion across faiths: Islamic, Hindu and shrine songs from the folk catalogue." },
];

const artists = ["Sharif Uddin", "Emon Khan", "Baul Sukumar", "Akash Mahmud"];

export default function Music() {
  return (
    <>
      <PageHead label="Catalogue" title="Bangla folk, from the source." sub="One of the largest folk-music collections in Bangladesh, recorded since the cassette era and released on YouTube today. Start with the most-played songs, or go by tradition." />

      <Section label="Top songs" title="Most played.">
        <div className="mt-10 grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {picks.map((v, i) => (
            <Reveal key={v.id} delay={Math.min(i * 0.05, 0.25)}>
              <LiteYouTube video={v} />
              <div className="mt-4 min-w-0">
                <p lang="bn" className="truncate font-bengali text-[16px] font-bold text-ink">{v.title}</p>
                <p className="mt-0.5 text-[14px] text-ink-muted">
                  {v.by} · {v.views} views
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section label="Traditions" title="Folk first. Then everything else." sub="The catalogue is built on the folk traditions of Bengal. Each one opens a search on the Taranga Electro Centre channel." tone="surface">
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {traditions.map((t, i) => (
            <Reveal key={t.name} delay={Math.min(i * 0.04, 0.2)}>
              <a href={search(t.name)} target="_blank" rel="noopener noreferrer" className="card card-hover group flex h-full flex-col p-7">
                <div className="flex items-baseline justify-between">
                  <span className="label tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span lang="bn" className="font-bengali text-[15px] font-bold text-ink-muted">
                    {t.bn}
                  </span>
                </div>
                <h3 className="text-h3 mt-8">{t.name}</h3>
                <p className="mt-2 text-[15px] text-ink-muted">{t.text}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-ink">
                  Listen on YouTube
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section label="Artists" title="Voices on Taranga." sub="Some of the artists whose songs have carried the catalogue. Each name opens their songs on the channel.">
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {artists.map((a, i) => (
            <Reveal key={a} delay={i * 0.04}>
              <a href={search(a)} target="_blank" rel="noopener noreferrer" className="card card-hover group flex items-center justify-between gap-4 p-6">
                <span className="text-h3">{a}</span>
                <ArrowUpRight className="size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          ))}
        </ul>
      </Section>

      <LatestFromTmc />
    </>
  );
}
