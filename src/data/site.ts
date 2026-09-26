// All site content lives here. Only facts from the brand brief — no invented names, numbers or awards.

export const site = {
  name: "Taranga Electro Centre",
  short: "Taranga",
  bengali: "তরঙ্গ",
  domain: "https://tarangaec.com",
  tagline: "Live the magic of music with TARANGA.",
  description:
    "Taranga Electro Centre is a Bangladeshi music label holding the largest folk-music collection in Bangladesh. Two decades in the music industry, from the cassette era to streaming.",
  email: "info@tarangaec.com",
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Music", href: "/music" },
  { label: "Brands", href: "/brands" },
  { label: "Artists", href: "/artists" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  kicker: "Music label · Bangladesh · since the cassette era",
  title: "The largest folk-music collection in Bangladesh.",
  lead: "Taranga Electro Centre has been part of the music industry for two decades — from CDs and cassettes to every streaming platform. We believe in bringing the world closer together through music.",
  primary: { label: "Explore the catalogue", href: "/music" },
  secondary: { label: "Submit your music", href: "/artists" },
};

export const stats = [
  { value: 20, suffix: "+", label: "Years in music" },
  { value: 5, label: "Brands under Taranga" },
  { label: "Largest folk catalogue in Bangladesh", text: "#1" },
  { label: "From cassette to streaming", text: "1990s" },
];

export const whatWeDo = {
  title: "A label built on folk, grown into everything.",
  sub: "Taranga started with folk music and became an integral part of entertainment in rural Bangladesh. Today the group releases music, video and drama under five brands.",
  items: [
    { title: "Folk music", text: "The largest folk collection in Bangladesh: songs, artists and traditions from every region, preserved and released." },
    { title: "Music releases", text: "New singles and albums released to streaming platforms and video channels under the Taranga labels." },
    { title: "Video & drama", text: "Music videos, drama and entertainment content produced and published under Bangla Drama and the entertainment brands." },
    { title: "Artist partnerships", text: "Working with artists and composers on releases, rights and reach — from first recording to global platforms." },
  ],
};

export const genres = ["Folk", "Baul", "Bhatiali", "Bhawaiya", "Lalon", "Modern", "Film", "Devotional", "Drama"];

export const brands = [
  { slug: "taranga-electro-centre", name: "Taranga Electro Centre", role: "Parent label", text: "The founding label and home of the folk catalogue. Every Taranga brand sits under it.", logo: "/brand/taranga.png", accent: "#00a0e0" },
  { slug: "taranga-music-centre", name: "Taranga Music Centre", role: "Music label · TMC", text: "Music releases and recordings under the TMC name.", logo: "/brand/tmc.png", accent: "#e01020" },
  { slug: "taranga-music", name: "Taranga Music", role: "Music channel", text: "The music brand for releases and video channels.", accent: "#302080" },
  { slug: "taranga-entertainment", name: "Taranga Entertainment", role: "Entertainment", text: "Entertainment programming and video content.", accent: "#f0a000" },
  { slug: "bangla-entertainment", name: "Bangla Entertainment", role: "Entertainment", text: "Bengali entertainment content for a wide audience.", accent: "#10a060" },
  { slug: "bangla-drama", name: "Bangla Drama", role: "Drama", text: "Bengali drama productions and series.", accent: "#c02080" },
];

export const timeline = [
  { when: "1990s", title: "The cassette era", text: "Taranga Electro Centre begins releasing music on cassette and CD, building a folk catalogue from the ground up." },
  { when: "2000s", title: "Rural Bangladesh", text: "Taranga becomes an integral part of the entertainment business in rural Bangladesh." },
  { when: "2010s", title: "Digital", text: "The catalogue moves to video channels and streaming platforms; new brands for music, entertainment and drama." },
  { when: "Today", title: "Two decades on", text: "The largest folk-music collection in Bangladesh, released to the world under five Taranga brands." },
];

export const artists = {
  title: "Release your music with Taranga.",
  sub: "We work with folk and modern artists, composers and producers. Send us your music and we'll get back to you.",
  steps: [
    ["Send", "Email a link to your music (private YouTube, Drive or SoundCloud) with a short note about you."],
    ["Listen", "Our team listens to every submission and replies with next steps."],
    ["Release", "Agreement, recording or mastering where needed, then release to platforms under a Taranga brand."],
  ],
  include: ["Your name and where you're from", "Links to 1–3 songs", "Whether the songs are released already", "How to reach you"],
};

export const faq = [
  { q: "What kind of music does Taranga release?", a: "Folk first — Baul, Bhatiali, Bhawaiya, Lalon and regional traditions — alongside modern, film and devotional music, plus drama and entertainment video." },
  { q: "How do I submit my music?", a: "Email us links to your songs and a short note. We listen to everything and reply with next steps." },
  { q: "Where can I listen to Taranga releases?", a: "On the major streaming platforms and on the Taranga video channels. The Music page links to them." },
  { q: "Is Taranga only for folk artists?", a: "No. Folk is our heritage and our largest catalogue, but we release modern, film and devotional music too." },
  { q: "How long has Taranga been around?", a: "Since the cassette era, before 2000 — more than two decades in the music industry." },
];

export const socials = [
  { label: "YouTube", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Spotify", href: "#" },
];
