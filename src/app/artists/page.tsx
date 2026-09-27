import type { Metadata } from "next";
import { Check } from "lucide-react";
import { artists, faq } from "@/data/site";
import { ArrowUpRight, PageHead, Reveal, Section } from "@/components/site/shared";
import { Faq } from "@/components/site/faq";

export const metadata: Metadata = { title: "Artists", description: artists.sub };

export default function Artists() {
  return (
    <>
      <PageHead label="For artists" title={artists.title} sub={artists.sub}>
        <Reveal delay={0.1}>
          <a href={`mailto:${artists.email}?subject=Music%20submission`} className="btn-primary mt-8">
            Email your music
            <ArrowUpRight className="size-4" />
          </a>
        </Reveal>
      </PageHead>

      <Section label="How it works" tone="surface">
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {artists.steps.map(([title, text], i) => (
            <Reveal key={title} delay={i * 0.06} className="card flex h-full flex-col p-7">
              <span className="font-heading text-[48px] leading-none font-extrabold tracking-[-0.02em] text-line">0{i + 1}</span>
              <h2 className="text-h3 mt-5">{title}</h2>
              <p className="mt-2 text-[15px] text-ink-muted">{text}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section label="What to send" title="Keep it simple.">
        <div className="mt-10 grid gap-4 md:grid-cols-12">
          <Reveal className="card p-7 md:col-span-7 md:p-9">
            <ul className="space-y-3">
              {artists.include.map((it) => (
                <li key={it} className="flex gap-3 text-[16px]">
                  <Check className="mt-1 size-4 shrink-0 text-sky-ink" />
                  {it}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.06} className="rounded-[12px] border border-ink bg-surface p-7 text-ink md:col-span-5 md:p-9">
            <p className="label">A&amp;R · singers, music directors, lyricists</p>
            <a href={`mailto:${artists.email}?subject=Music%20submission`} className="mt-2 block break-all font-heading text-[clamp(22px,2.2vw,30px)] font-extrabold tracking-[-0.02em] hover:underline">
              {artists.email}
            </a>
            <p className="mt-4 text-[14px] text-ink/75">We listen to every submission and reply with next steps.</p>
          </Reveal>
        </div>
      </Section>

      <Section label="FAQ" title="Before you send." tone="surface" className="pb-20 md:pb-28">
        <div className="mt-10">
          <Faq items={faq} />
        </div>
      </Section>
    </>
  );
}
