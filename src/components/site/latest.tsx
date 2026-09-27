import { brands } from "@/data/site";
import { videos as topVideos, type Video } from "@/data/videos";
import { ArrowUpRight, Reveal, Section } from "./shared";
import { LiteYouTube } from "./youtube";

const TMC = brands.find((b) => b.slug === "taranga-music-centre")!;
const TMC_CHANNEL_ID = "UCZY_DLxmDfpb2oBJHCsWOuw";

/** Latest uploads from Taranga Music Centre, via the public RSS feed. Re-fetched once an hour; falls back to the static list. */
async function fetchLatest(limit: number): Promise<{ items: Video[]; live: boolean }> {
  try {
    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${TMC_CHANNEL_ID}`, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(String(res.status));
    const xml = await res.text();
    const items: Video[] = [];
    for (const m of xml.matchAll(/<entry>[\s\S]*?<yt:videoId>([^<]+)<\/yt:videoId>[\s\S]*?<title>([^<]+)<\/title>[\s\S]*?<\/entry>/g)) {
      items.push({ id: m[1], title: decode(m[2]), views: "" });
      if (items.length >= limit) break;
    }
    if (items.length) return { items, live: true };
  } catch {
    // fall through to the static list
  }
  return { items: topVideos[TMC.slug].slice(0, limit), live: false };
}

function decode(s: string) {
  return s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
}

export function shortTitle(t: string) {
  return t.split("।")[0].split("|")[0].split(" - ")[0].trim();
}

export async function LatestFromTmc() {
  const { items } = await fetchLatest(4);
  return (
    <Section
      id="latest"
      label="New releases"
      title="Latest from Taranga Music Centre."
      sub="The newest uploads on the TMC channel, straight from YouTube."
      tone="surface"
      action={
        <a href={TMC.youtube} target="_blank" rel="noopener noreferrer" className="btn-ghost btn-sm">
          Open channel
          <ArrowUpRight className="size-4" />
        </a>
      }
    >
      <div className="mt-12 grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((v, i) => (
          <Reveal key={v.id} delay={Math.min(i * 0.05, 0.2)}>
            <LiteYouTube video={v} className="rounded-[10px]" />
            <p className="mt-3 line-clamp-2 font-bengali text-[15px] leading-snug font-bold text-ink">{shortTitle(v.title)}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
