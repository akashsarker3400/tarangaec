import type { Metadata } from "next";
import { contacts, site, socials } from "@/data/site";
import { ArrowUpRight, PageHead, Reveal } from "@/components/site/shared";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Contact", description: `Get in touch with ${site.name}: A&R, publishing and sync, legal.` };

export default function Contact() {
  return (
    <>
      <PageHead label="Contact" title="Please contact the following for your requirements." sub="Three inboxes, one team. Pick the one that fits and we'll reply within a few business days." />
      <div className="container-x grid gap-4 pb-20 md:grid-cols-3 md:pb-28">
        {contacts.map((c, i) => (
          <Reveal key={c.email} delay={i * 0.06} className={cn("flex flex-col rounded-[12px] p-8 md:p-9", i === 0 ? "border border-ink bg-surface text-ink" : "card")}>
            <span className={cn("block h-px w-8", i === 0 ? "bg-ink" : "bg-ink")} aria-hidden />
            <p className={cn("label mt-6", i === 0 && "text-ink/70")}>{c.label}</p>
            <h2 className="text-h3 mt-2">{c.who}</h2>
            <a href={`mailto:${c.email}`} className="mt-8 block break-all font-heading text-[clamp(20px,1.7vw,24px)] leading-tight font-extrabold tracking-[-0.02em] hover:underline">
              {c.email}
            </a>
            <a href={`mailto:${c.email}`} className={cn("mt-6 w-fit", i === 0 ? "btn-primary" : "btn-ghost")}>
              Email
              <ArrowUpRight className="size-4" />
            </a>
          </Reveal>
        ))}
        <Reveal delay={0.2} className="card p-8 md:col-span-3 md:p-10">
          <p className="label">Watch &amp; follow · YouTube</p>
          <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
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
