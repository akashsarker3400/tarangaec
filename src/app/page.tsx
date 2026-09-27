import { LatestFromTmc } from "@/components/site/latest";
import { ArtistsCta, Catalogue, Channels, Hero, Stats, Videos, WhatWeDo } from "@/components/site/home";

export default function Home() {
  return (
    <>
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
