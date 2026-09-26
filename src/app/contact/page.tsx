import type { Metadata } from "next";
import { site, socials } from "@/data/site";
import { ArrowUpRight, PageHead, Reveal } from "@/components/site/shared";

export const metadata: Metadata = { title: "Contact", description: `Get in touch with ${site.name}.` };

export default function Contact() {
  return (
    <>
      <PageHead label="Contact" title="Get in touch." sub="For releases, partnerships, licensing or press — email us and we'll reply within a few business days." />
      <div className="container-x grid gap-4 pb-20 md:grid-cols-12 md:pb-28">
        <Reveal className="rounded-[24px] bg-sky p-8 md:col-span-7 md:p-10">
          <p className="label text-ink/70">Write to</p>
          <a href={`mailto:${site.email}`} className="mt-3 block break-all font-heading text-[clamp(26px,3.4vw,44px)] leading-tight font-extrabold tracking-[-0.02em] text-ink hover:underline">
            {site.email}
          </a>
          <a href={`mailto:${site.email}`} className="btn-primary mt-8">
            Email us
            <ArrowUpRight className="size-4" />
          </a>
        </Reveal>
        <Reveal delay={0.06} className="card p-8 md:col-span-5 md:p-10">
          <p className="label">Follow</p>
          <ul className="mt-4 space-y-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-[17px] font-semibold hover:text-sky-ink">
                  {s.label}
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 border-t border-line pt-5 text-[14px] text-ink-muted">{site.name}, Bangladesh.</p>
        </Reveal>
      </div>
    </>
  );
}
