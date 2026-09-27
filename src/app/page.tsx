import { LatestFromTmc } from "@/components/site/latest";
import { picks } from "@/data/videos";
import { site } from "@/data/site";
import { ArtistsCta, Catalogue, Channels, Hero, Stats, Videos, WhatWeDo } from "@/components/site/home";

const videosJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Taranga top songs",
  itemListElement: picks.map((v, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "VideoObject",
      name: v.title,
      description: `${v.title} by ${v.by}. Released by ${site.name}.`,
      thumbnailUrl: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
      embedUrl: `https://www.youtube-nocookie.com/embed/${v.id}`,
      contentUrl: `https://www.youtube.com/watch?v=${v.id}`,
      publisher: { "@id": `${site.domain}/#org` },
    },
  })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videosJsonLd) }} />
      <Hero />
      <Stats />
      <Videos />
      <LatestFromTmc />
      <WhatWeDo />
      <Catalogue />
      <Channels />
      <ArtistsCta />
    </>
  );
}
