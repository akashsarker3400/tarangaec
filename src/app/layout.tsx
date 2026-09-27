import type { Metadata } from "next";
import { Inter, Noto_Sans_Bengali, Source_Serif_4 } from "next/font/google";
import { brands, contacts, facebookPages, site } from "@/data/site";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import "./globals.css";

const serif = Source_Serif_4({ variable: "--font-serif", subsets: ["latin"], weight: ["500", "600"], display: "swap" });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const bengali = Noto_Sans_Bengali({ variable: "--font-bengali", subsets: ["bengali"], weight: ["700"], display: "swap" });

const title = `${site.name} — ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: { default: title, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  keywords: ["Taranga Electro Centre", "Taranga", "তরঙ্গ", "Bangla folk music", "Bangladeshi music label", "Baul", "Bhatiali", "Bhawaiya", "Lalon", "Bangla gaan", "Sharif Uddin", "Emon Khan", "Taranga Music Centre", "Bangla Drama", "Bangla Entertainment", "music label Bangladesh", "folk music Bangladesh"],
  category: "music",
  creator: site.name,
  publisher: "ANS Music",
  alternates: { canonical: "/" },
  formatDetection: { email: false, telephone: false },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", url: site.domain, siteName: site.name, title, description: site.description, images: [{ url: "/og.jpg", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description: site.description, images: ["/og.jpg"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.domain}/#org`,
      name: site.name,
      alternateName: [site.short, site.bengali, "Taranga EC", "TEC"],
      url: site.domain,
      logo: { "@type": "ImageObject", url: `${site.domain}/brand/taranga.png`, width: 624, height: 800 },
      image: `${site.domain}/og.jpg`,
      email: site.email,
      description: site.description,
      slogan: site.tagline,
      foundingDate: "1990s",
      founder: { "@id": `${site.domain}/about#founder` },
      parentOrganization: { "@type": "Organization", name: "ANS Music", url: "https://ansmusic.io" },
      areaServed: "BD",
      knowsAbout: ["Bangla folk music", "Baul", "Bhatiali", "Bhawaiya", "Lalon Geeti", "Bangla music videos", "Bangla drama"],
      knowsLanguage: ["bn", "en"],
      sameAs: [...brands.map((b) => b.youtube), ...facebookPages.map((f) => f.href)],
      brand: brands.slice(1).map((b) => ({ "@type": "Brand", name: b.name, url: b.youtube })),
      contactPoint: contacts.map((c) => ({ "@type": "ContactPoint", contactType: c.label, email: c.email, availableLanguage: ["bn", "en"] })),
    },
    {
      "@type": "Person",
      "@id": `${site.domain}/about#founder`,
      name: site.founder,
      jobTitle: "Founder",
      worksFor: { "@id": `${site.domain}/#org` },
      image: `${site.domain}/founder.jpg`,
      url: `${site.domain}/about`,
    },
    {
      "@type": "WebSite",
      "@id": `${site.domain}/#website`,
      url: site.domain,
      name: site.name,
      publisher: { "@id": `${site.domain}/#org` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${inter.variable} ${bengali.variable}`}>
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
