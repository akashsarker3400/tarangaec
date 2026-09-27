import type { Metadata } from "next";
import { contacts, site } from "@/data/site";
import { PageHead, Reveal } from "@/components/site/shared";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${site.name} handles the little data this website touches: emails you send us, cookieless analytics and YouTube embeds.`,
  alternates: { canonical: "/privacy" },
  openGraph: { title: `Privacy · ${site.name}`, url: "/privacy", images: ["/og.jpg"] },
  twitter: { title: `Privacy · ${site.name}`, images: ["/og.jpg"] },
  robots: { index: true, follow: true },
};

const sections: { h: string; p: string[] }[] = [
  {
    h: "What this website collects",
    p: [
      "Nothing you do not send us. The site has no accounts, no sign-up and no forms that store data on our servers. Cloudflare Web Analytics gives us aggregate page-view counts; it does not use cookies and does not track you across sites.",
    ],
  },
  {
    h: "Emails you send",
    p: [
      "If you email one of our inboxes, for example to submit music, we keep that email and any links or files in it so we can listen and reply. We use it only for that purpose and do not sell or share it with anyone outside Taranga Electro Centre and its parent company, ANS Music.",
      "Ask us at any time to delete a submission and we will.",
    ],
  },
  {
    h: "YouTube embeds",
    p: [
      "Videos on this site are shown as still thumbnails until you press play. When you do, the player loads from youtube-nocookie.com and YouTube (Google) may set its own cookies under its own privacy policy. Nothing loads from YouTube before you press play.",
    ],
  },
  {
    h: "Hosting",
    p: ["The site is served through Cloudflare, which may log requests for security and performance in line with its own policies."],
  },
  {
    h: "Contact",
    p: [`Questions about privacy: ${contacts.find((c) => c.label === "Legal")?.email ?? site.email}.`],
  },
];

export default function Privacy() {
  return (
    <>
      <PageHead label="Privacy" title="Privacy policy." sub="Short, because this website does very little with your data." />
      <div className="container-x pb-20 md:pb-28">
        <Reveal className="max-w-[68ch] space-y-10">
          {sections.map((s) => (
            <section key={s.h}>
              <h2 className="text-h3">{s.h}</h2>
              {s.p.map((t) => (
                <p key={t} className="mt-3 text-[17px] text-ink-muted">
                  {t}
                </p>
              ))}
            </section>
          ))}
          <p className="border-t border-line pt-6 text-[14px] text-ink-muted">Last updated 27 September 2026.</p>
        </Reveal>
      </div>
    </>
  );
}
