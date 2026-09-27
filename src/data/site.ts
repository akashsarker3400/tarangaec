// All site content lives here. Only facts from the brand brief: no invented names, numbers or awards.

export const site = {
  name: "Taranga Electro Centre",
  short: "Taranga",
  bengali: "তরঙ্গ",
  domain: "https://tarangaec.com",
  tagline: "Live the magic of music with TARANGA.",
  description:
    "Taranga Electro Centre is one of the oldest music labels in Bangladesh, with one of the largest folk-music catalogues in the country. In music since the 1990s, from the cassette era to streaming.",
  email: "contact@tarangaec.com",
  founder: "Subrata Kumar Deb",
};

export const contacts = [
  { label: "A&R", who: "Singers, music directors, lyricists", email: "ar@tarangaec.com" },
  { label: "Publishing & sync", who: "TV, cable and commercial sync", email: "contact@tarangaec.com" },
  { label: "Legal", who: "All legal matters", email: "legal@ansmusic.io" },
];

export const nav = [
  { label: "About", href: "/about" },
  { label: "Music", href: "/music" },
  { label: "Channels", href: "/channels" },
  { label: "For artists", href: "/artists" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  kicker: "Music label · since the cassette era",
  title: "One of the oldest music labels in Bangladesh.",
  lead: "Taranga Electro Centre has been in music since the 1990s, from cassettes and CDs to YouTube and streaming, and holds one of the largest folk-music catalogues in the country. We believe in bringing the world closer together through music.",
  primary: { label: "Explore the catalogue", href: "/music" },
  secondary: { label: "Submit your music", href: "/artists" },
};

// YouTube totals are summed across the six channels (subscribers, lifetime views, uploads). Checked Sep 2026.
export const stats = [
  { text: "7.8M+", label: "YouTube subscribers" },
  { text: "2.6B+", label: "Video views" },
  { text: "3,600+", label: "Videos published" },
  { text: "25+", label: "Years in music" },
];

export const whatWeDo = {
  title: "A label built on folk, grown into everything.",
  sub: "Taranga started with folk music and became an integral part of entertainment in rural Bangladesh. Today the label releases music, video and drama across six YouTube channels.",
  items: [
    { title: "Folk music", text: "One of the largest folk catalogues in Bangladesh: songs, artists and traditions from every region, preserved and released." },
    { title: "Music releases", text: "New singles and albums released to streaming platforms and video channels under the Taranga labels." },
    { title: "Video & drama", text: "Music videos, drama and entertainment content produced and published on Bangla Drama and the entertainment channels." },
    { title: "Artist partnerships", text: "Working with artists and composers on releases, rights and reach, from first recording to global platforms." },
  ],
};

export const genres = ["Folk", "Baul", "Bhatiali", "Bhawaiya", "Lalon", "Modern", "Film", "Devotional", "Drama"];

// subscribers / followers checked Sep 2026
export const brands = [
  { slug: "taranga-electro-centre", name: "Taranga Electro Centre", role: "Main channel", text: "The main channel and home of the folk catalogue.", logo: "/brand/taranga.png", accent: "#00a0e0", logoBg: "#00a0e0", youtube: "https://www.youtube.com/@TarangaElectroCentre", facebook: "https://www.facebook.com/tarangaec3400", subscribers: "1.86M" },
  { slug: "taranga-music-centre", name: "Taranga Music Centre", role: "Music · TMC", text: "Music releases and recordings under the TMC name.", logo: "/brand/tmc.png", accent: "#e01020", logoBg: "#e01020", youtube: "https://www.youtube.com/@tarangamusiccenter", subscribers: "333K", facebook: "https://www.facebook.com/tarangamusicofficial", followers: "32K" },
  { slug: "taranga-music", name: "Taranga Music", role: "Music", text: "Music videos and new releases.", logo: "/brand/taranga-music.webp", accent: "#2b3990", logoBg: "#2b3990", youtube: "https://www.youtube.com/@TarangaMusic", subscribers: "127K" },
  { slug: "taranga-entertainment", name: "Taranga Entertainment", role: "Entertainment", text: "Comedy and entertainment videos.", logo: "/brand/taranga-entertainment.png", accent: "#1a9be0", logoBg: "#1a9be0", youtube: "https://www.youtube.com/@TarangaEntertainment", subscribers: "1.58M" },
  { slug: "bangla-entertainment", name: "Bangla Entertainment", role: "Entertainment", text: "Bengali comedy and short films for a wide audience.", logo: "/brand/bangla-entertainment.webp", accent: "#008f3e", logoBg: "#00552a", youtube: "https://www.youtube.com/@BanglaEntertainmentNow", facebook: "https://www.facebook.com/BanglaEntertainmentNow", subscribers: "2.67M", followers: "1.1M" },
  { slug: "bangla-drama", name: "Bangla Drama", role: "Drama", text: "Bengali drama and short films.", logo: "/brand/bangla-drama.png", accent: "#008f3e", logoBg: "#00552a", youtube: "https://www.youtube.com/@bangladrama3400", subscribers: "1.29M" },
];

// Facebook pages (followers checked Sep 2026). Some pages stand on their own, apart from the YouTube channels.
export const facebookPages = [
  { name: "Taranga Electro Centre", href: "https://www.facebook.com/tarangaec3400" },
  { name: "Taranga Music Centre", href: "https://www.facebook.com/tarangamusicofficial", followers: "32K" },
  { name: "Bangla Entertainment", href: "https://www.facebook.com/BanglaEntertainmentNow", followers: "1.1M" },
  { name: "Bangla Entertainment Video", href: "https://www.facebook.com/banglaentertainmentvideo.bd", followers: "270K" },
  { name: "Bangla Comedy", href: "https://www.facebook.com/BanglaComedyNow", followers: "732K" },
];

export const timeline = [
  { when: "1990s", title: "The cassette era", text: "Subrata Kumar Deb starts Taranga Electro Centre in the days of cassettes and CDs. There was no online music then; Taranga released CDs and built a folk catalogue from the ground up." },
  { when: "2000s", title: "Rural Bangladesh", text: "Taranga becomes an integral part of the entertainment business in rural Bangladesh." },
  { when: "2016 →", title: "Going digital", text: "After 2016 Taranga moves online. The catalogue goes to YouTube and streaming, and new channels follow for music, entertainment and drama." },
  { when: "Today", title: "More than 25 years on", text: "One of the oldest labels in Bangladesh with one of its largest folk catalogues, released to the world across six Taranga YouTube channels." },
];

export const artists = {
  title: "Release your music with Taranga.",
  sub: "We work with folk and modern artists, composers and producers. Send us your music and we'll get back to you.",
  email: "ar@tarangaec.com",
  steps: [
    ["Send", "Email a link to your music (private YouTube, Drive or SoundCloud) with a short note about you."],
    ["Listen", "Our team listens to every submission and replies with next steps."],
    ["Release", "Agreement, recording or mastering where needed, then release to platforms and a Taranga channel."],
  ],
  include: ["Your name and where you're from", "Links to 1–3 songs", "Whether the songs are released already", "How to reach you"],
};

export const faq = [
  { q: "What kind of music does Taranga release?", a: "Folk first: Baul, Bhatiali, Bhawaiya, Lalon and regional traditions, alongside modern, film and devotional music, plus drama and entertainment video." },
  { q: "How do I submit my music?", a: "Email us links to your songs and a short note. We listen to everything and reply with next steps." },
  { q: "Where can I listen to Taranga releases?", a: "On the six Taranga YouTube channels and the major streaming platforms. The Music and Channels pages link to them." },
  { q: "Is Taranga only for folk artists?", a: "No. Folk is our heritage and our largest catalogue, but we release modern, film and devotional music too." },
  { q: "How long has Taranga been around?", a: "Since the cassette era, before 2000. Subrata Kumar Deb started the label when music was released on CD and there was no online distribution. More than 25 years later, it is one of the oldest labels in Bangladesh." },
];

export const socials = [
  { label: "Taranga Electro Centre", href: "https://www.youtube.com/@TarangaElectroCentre" },
  { label: "Taranga Music Centre", href: "https://www.youtube.com/@tarangamusiccenter" },
  { label: "Taranga Music", href: "https://www.youtube.com/@TarangaMusic" },
  { label: "Taranga Entertainment", href: "https://www.youtube.com/@TarangaEntertainment" },
  { label: "Bangla Entertainment", href: "https://www.youtube.com/@BanglaEntertainmentNow" },
  { label: "Bangla Drama", href: "https://www.youtube.com/@bangladrama3400" },
];
