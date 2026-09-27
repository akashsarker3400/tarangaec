import type { Metadata } from "next";
import Image from "next/image";
import { site, timeline } from "@/data/site";
import { PageHead, Reveal, Section } from "@/components/site/shared";
import { Stats } from "@/components/site/home";
import { Faq } from "@/components/site/faq";
import { faq } from "@/data/site";

export const metadata: Metadata = {
  title: "About: founded by Subrata Kumar Deb",
  description: `${site.name} was started by ${site.founder} in the cassette and CD era, before 2000. One of the oldest music labels in Bangladesh with one of the largest folk catalogues.`,
  alternates: { canonical: "/about" },
  openGraph: { title: `About ${site.name}`, description: site.description, url: "/about", images: ["/founder.jpg"] },
  twitter: { title: `About ${site.name}`, description: site.description, images: ["/founder.jpg"] },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function About() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageHead label="About" title="Since the 1990s: from cassette to streaming." sub={site.description} />
      <Stats />
      <Section label="The founder" tone="surface">
        <div className="mt-10 grid gap-8 md:grid-cols-12 md:gap-12">
          <Reveal className="md:col-span-5">
            <div className="overflow-hidden rounded-[12px] border border-line bg-white">
              <Image src="/founder.jpg" alt="Subrata Kumar Deb at his desk, with Taranga's YouTube Creator Awards on the shelf behind him" width={1085} height={1400} className="h-auto w-full" sizes="(min-width: 768px) 40vw, 100vw" />
            </div>
            <p className="mt-4 text-[14px] text-ink-muted">
              <span className="font-semibold text-ink">{site.founder}</span> · Founder, Taranga Electro Centre
            </p>
          </Reveal>
          <Reveal delay={0.05} className="md:col-span-7">
            <h2 className="text-h2">It started with one man and a shop full of cassettes.</h2>
            <div className="mt-6 space-y-5 text-[17px] text-ink-muted">
              <p>Before 2000, {site.founder} started Taranga Electro Centre in the age of cassettes and CDs. There was no online music, no streaming and no YouTube. A song reached a listener only if someone recorded it, pressed it and put it on a shop shelf, so that is what he did.</p>
              <p>The early years were a struggle. Building a label from nothing meant finding artists nobody had recorded, paying for studio time and pressing before a single copy was sold, and earning the trust of shopkeepers one town at a time. He kept going.</p>
              <p>It paid off. In the cassette and CD era Taranga became one of the most successful music companies in the country and an integral part of entertainment in rural Bangladesh. Its folk recordings, Baul, Bhatiali, Bhawaiya and more, sold across the country and grew into one of the largest folk catalogues in Bangladesh.</p>
              <p>Music moved online, and after 2016 Taranga moved with it. The same catalogue now lives on six YouTube channels; the YouTube Creator Awards on the shelf behind him mark the milestones. More than 25 years on, his belief is unchanged: music brings the world closer together.</p>
            </div>
          </Reveal>
        </div>
      </Section>
      <Section label="Timeline" title="The road so far.">
        <ol className="mt-12 grid gap-4 md:grid-cols-4">
          {timeline.map((t, i) => (
            <Reveal key={t.when} delay={i * 0.06} className="card flex h-full flex-col p-6">
              <span className="label">{t.when}</span>
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
