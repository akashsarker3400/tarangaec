import Image from "next/image";
import Link from "next/link";

import { brands, contacts, facebookPages, nav, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-white">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Image src="/brand/taranga.png" alt={`${site.name} logo`} width={94} height={120} className="h-20 w-auto" />
            <p className="mt-4 max-w-sm text-[15px] text-white/75">{site.description}</p>
          </div>
          <div className="md:col-span-2">
            <p className="label mb-4 text-white/60">Pages</p>
            <ul className="space-y-2.5 text-[15px] text-white/85">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="label mb-4 text-white/60">YouTube</p>
            <ul className="space-y-2.5 text-[15px] text-white/85">
              {brands.map((b) => (
                <li key={b.slug} className="flex items-center gap-2">
                  <Link href={`/channels#${b.slug}`} className="hover:text-white">
                    {b.name}
                  </Link>
                  <a href={b.youtube} target="_blank" rel="noopener noreferrer" aria-label={`${b.name} on YouTube`} className="text-[12px] text-white/50 hover:text-white">
                    YT ↗
                  </a>
                </li>
              ))}
            </ul>
            <p className="label mt-8 mb-4 text-white/60">Facebook</p>
            <ul className="space-y-2.5 text-[15px] text-white/85">
              {facebookPages.map((f) => (
                <li key={f.href}>
                  <a href={f.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    {f.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="label mb-4 text-white/60">Contact</p>
            <ul className="space-y-3 text-[15px]">
              {contacts.map((c) => (
                <li key={c.email}>
                  <span className="block text-[12px] text-white/55">{c.label}</span>
                  <a href={`mailto:${c.email}`} className="break-all text-white/90 hover:text-white hover:underline">
                    {c.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-6 text-[13px] text-white/60 sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name}. An{" "}
            <a href="https://ansmusic.io" target="_blank" rel="noopener noreferrer" className="text-white/85 underline-offset-2 hover:text-white hover:underline">
              ANS Music
            </a>{" "}
            company. All rights reserved.
          </span>
          <span>{site.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
