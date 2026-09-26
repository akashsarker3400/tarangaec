import { Marquee } from "@/components/site/shared";
import { ArtistsCta, Brands, Catalogue, Hero, Stats, WhatWeDo } from "@/components/site/home";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={["Since the cassette era", "CD · Cassette · Digital", "Folk · Baul · Bhatiali · Modern", "One of the oldest labels in Bangladesh", "Live the magic of music"]} />
      <Stats />
      <WhatWeDo />
      <Catalogue />
      <Brands />
      <ArtistsCta />
    </>
  );
}
