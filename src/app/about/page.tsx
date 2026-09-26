import type { Metadata } from "next";
import { site, timeline } from "@/data/site";
import { PageHead, Reveal, Section } from "@/components/site/shared";
import { Stats } from "@/components/site/home";
import { Faq } from "@/components/site/faq";
import { faq } from "@/data/site";

export const metadata: Metadata = { title: "About", description: site.description };

export default function About() {
  return (
    <>
      <PageHead label="About" title="Two decades of music, from cassette to streaming." sub={site.description} />
      <Stats />
      <Section label="Our story" tone="surface">
        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <h2 className="text-h2">We believe in bringing the world closer together through music.</h2>
          </Reveal>
          <Reveal delay={0.05} className="space-y-5 text-[17px] text-ink-muted md:col-span-7">
            <p>Taranga Electro Centre is a music label that holds the largest folk-music collection in Bangladesh. The label began before 2000, in the CD and cassette era, and has been part of the music industry for the two decades since.</p>
            <p>Over those years Taranga became an integral part of the entertainment business in rural Bangladesh. Today the group releases music, video and drama under five brands, reaching listeners on every major platform.</p>
            <p>So, to all the music lovers who believe in the magic of music: come join us, and live the magic of music with Taranga.</p>
          </Reveal>
        </div>
      </Section>
      <Section label="Timeline" title="The road so far.">
        <ol className="mt-12 grid gap-4 md:grid-cols-4">
          {timeline.map((t, i) => (
            <Reveal key={t.when} delay={i * 0.06} className="card flex h-full flex-col p-6">
              <span className="inline-flex w-fit rounded-full bg-sky px-3 py-1 text-[12px] font-semibold text-ink">{t.when}</span>
              <h3 className="text-h3 mt-5">{t.title}</h3>
              <p className="mt-2 text-[15px] text-ink-muted">{t.text}</p>
            </Reveal>
          ))}
        </ol>
      </Section>
      <Section label="Working with us" title="Questions, answered." tone="surface" className="pb-20 md:pb-28">
        <div className="mt-10">
          <Faq items={faq} />
        </div>
      </Section>
    </>
  );
}
