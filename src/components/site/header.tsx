"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { nav, site } from "@/data/site";
import { cn } from "@/lib/utils";
import { SpectrumRule } from "./shared";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className={cn("fixed inset-x-0 top-0 z-50 h-[72px] border-b bg-background transition-colors", scrolled ? "border-line" : "border-transparent")}>
        <div className="container-x flex h-full items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label={site.name}>
            <Image src="/brand/taranga.png" alt="" width={94} height={120} priority className="h-12 w-auto" />
            <span className="hidden font-heading text-[16px] leading-none font-bold tracking-[-0.01em] text-ink sm:block">
              Taranga <span className="text-ink-muted">Electro Centre</span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => {
              const active = pathname.startsWith(n.href);
              return (
                <Link key={n.href} href={n.href} aria-current={active ? "page" : undefined} className={cn("relative rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors hover:text-ink", active ? "text-ink" : "text-ink-muted")}>
                  {n.label}
                  {active && <span className="absolute -bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-sky" />}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/artists" className="btn-primary btn-sm hidden sm:inline-flex">
              Submit music
            </Link>
            <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Menu" className="grid size-10 place-items-center rounded-full border border-line lg:hidden">
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" aria-hidden={!open} className={cn("fixed inset-0 z-40 flex flex-col bg-background px-5 pt-24 pb-8 transition-opacity duration-300 lg:hidden", open ? "opacity-100" : "pointer-events-none opacity-0")}>
        <SpectrumRule className="w-full" />
        <nav aria-label="Mobile" className="mt-6 flex flex-col">
          {nav.map((n, i) => (
            <Link key={n.href} href={n.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className="flex items-baseline gap-4 border-b border-line py-4 font-heading text-[32px] font-extrabold tracking-[-0.02em]">
              <span className="w-8 text-[12px] font-semibold text-sky-ink">{String(i + 1).padStart(2, "0")}</span>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link href="/artists" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className="btn-primary mt-8 w-full">
          Submit music
        </Link>
      </div>
    </>
  );
}
