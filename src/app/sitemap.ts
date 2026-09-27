import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Bump when page content changes; a build timestamp would change on every deploy.
  const now = new Date("2026-09-27");
  return ["", "/about", "/music", "/channels", "/artists", "/contact", "/privacy"].map((p) => ({
    url: `${site.domain}${p}`,
    lastModified: now,
    images: p === "" ? [`${site.domain}/og.jpg`] : p === "/about" ? [`${site.domain}/founder.jpg`] : undefined,
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : p === "/privacy" ? 0.2 : 0.7,
  }));
}
