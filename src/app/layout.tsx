import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope, Noto_Sans_Bengali } from "next/font/google";
import { site } from "@/data/site";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"], display: "swap" });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });
const bengali = Noto_Sans_Bengali({ variable: "--font-bengali", subsets: ["bengali"], weight: ["700"], display: "swap" });

const title = `${site.name} — ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: { default: title, template: `%s · ${site.short}` },
  description: site.description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", url: site.domain, siteName: site.name, title, description: site.description, images: [{ url: "/og.jpg", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description: site.description, images: ["/og.jpg"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.domain}/#org`,
  name: site.name,
  alternateName: [site.short, site.bengali],
  url: site.domain,
  logo: `${site.domain}/brand/taranga.png`,
  email: site.email,
  description: site.description,
  areaServed: "BD",
  brand: ["Taranga Music Centre", "Taranga Music", "Taranga Entertainment", "Bangla Entertainment", "Bangla Drama"].map((n) => ({ "@type": "Brand", name: n })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${manrope.variable} ${bengali.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <a href="#main" className="sr-only z-[200] rounded-full bg-ink px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1 pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
