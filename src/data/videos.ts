// Most-watched videos per brand, taken from each channel's "Popular" tab (sorted by views). Refresh by hand when needed.

export type Video = { id: string; title: string; views: string };

export const videos: Record<string, Video[]> = {
  "taranga-electro-centre": [
    { id: "J9c97ttOljI", title: "লাল গোলাপি | Sarif Uddin - O Bondhu Lal Golapi | Bangla Song | Sarif Uddin Modren Song | Taranga Ec", views: "39M" },
    { id: "h8GWWrXeSaI", title: "ওগো পরানের প্রিয়া | ময়ূরী | শারিফ উদ্দিন | Ogo Poraner Priya | Shorif Uddin Model Song | Taranga Ec", views: "33M" },
    { id: "Up6uNs14H50", title: "কেন বন্ধু এত দুঃখ দিলে | Keno bondhu eto dukkho dile | Sharif uddin | Taranga Electro Centre", views: "27M" },
    { id: "bLdkI3qa7mc", title: "Amar Bondhu Moyuri (আমার বন্ধু ময়ূরী) - Sharif Uddin | Bangla Song", views: "24M" },
  ],
  "taranga-music-centre": [
    { id: "5oHoGb2M4MA", title: "রূপা তুমি ভালো থেকো - Emon Khan | Rupa tumi valo theko | Plabon Koreshi | Bangla Music Video", views: "7.4M" },
    { id: "ksI5ojWSiz4", title: "আমার কেহ নাইরে বন্ধু | Amar keho naire bondhu | Tile Tile Marisna | Akash Mahmud |  Bangla music", views: "5.3M" },
    { id: "3SmgoNL2V80", title: "Amar Buker Vitor Ki Jontrona 😭 Emon Khan | Amar Moto Eto Kosto Kaoke dio na", views: "4.9M" },
    { id: "IAfXnbxlv68", title: "Jiboner porajoy | জীবনের পরাজয় | Baul Sukumar | Bangla official song", views: "4.9M" },
  ],
  "taranga-music": [
    { id: "6Js7EQb5GOg", title: "আইলসা কামলা | Ailsha kamla | তারছেরা ভাদাইমা | Bangla New Vadaima Koutuk 2021 | Taranga Music", views: "14M" },
    { id: "H1B9U6FsftA", title: "নতুন চেয়ারম্যান | তারছেরা ভাদাইমা | Notun Cheairman | Bangla New Comedy Koutuk | Tarchera Vadaima", views: "3.6M" },
    { id: "HQDtU5rAGPY", title: "Manus Chino Nigo Tare | Fakir Hobil Sarkar | মানুষ চিননিগো তারে | Bangla New Song 2021", views: "696K" },
    { id: "ejCu80R68lE", title: "১,৫০,০০০ টাকার জামাই | তারছেরা ভাদাইমা | 1,50,000 Takar Jamai | Tarchera Vdaima | Badaima New Koutuk", views: "646K" },
  ],
  "taranga-entertainment": [
    { id: "BR91Rz6nPdA", title: "বউ বাচ্চা দেয় না | তার ছেড়া ভাদাইমা | Bow Baccha Day Na | Tar Chera Tar Vadiama", views: "19M" },
    { id: "HdHyYg-jhQY", title: "১০০% হাসির কৌতুক | সিগারেট খোড় বউ শাশুড়ি | রবি চেংগু | Sigharet Khor Bou Sasuri | Badaima koutuk", views: "18M" },
    { id: "6d6vRxlNJn8", title: "চুরি করার নতুন কৌশল | তার ছিড়া ভাদাইমা | Churi Korar Notun kowshol | Tar Chira Vadaima", views: "16M" },
    { id: "gxi3eJVpR_Q", title: "ঘর জামাইর গুষ্টি | তারা ছেড়া ভাদাইমা | Ghor Jamair Gusti | Tar Chera Vadaima  Bangla New Koutuk 2019", views: "16M" },
  ],
  "bangla-entertainment": [
    { id: "GRzN-Ddfx4g", title: "কি মায়া লাগাইয়া গেলাগো | মিস লিটন | Ki Maya Lagaiya Galago | Miss Liton | New Bangla  song 2018", views: "52M" },
    { id: "3buJqGFP-OQ", title: "দুই ভাই এর লড়াই - মডার্ন ভাদাইমা | Dui Bhai Er Lorai | Modern Vadaima | New Vadaima 2018", views: "33M" },
    { id: "_HQBLEaHb9g", title: "আচার ওয়ালার দুষ্টামি | মডার্ন ভাদাইমা | Achar Walar Dustami  | Modern Vadaima | New Vadaima 2018", views: "23M" },
    { id: "7tNPrRNGMXI", title: "হিজড়ার মায়ের কান্না | Hijrar Mayer Kanna | একটি শিক্ষণীয় গল্প | Bangla New Short Film 2020", views: "22M" },
  ],
  "bangla-drama": [
    { id: "6dGHCM3f1Xg", title: "দুষ্টু বিমুর দুষ্টামি | Dustu Bimur Dustami | একটি বিনোদন মুলক গল্প | অনুধাবন - 89 | Bangla Drama", views: "67M" },
    { id: "LsgEXgrwE8o", title: "দুষ্টু বিমুর দুষ্টামি - ২ | Dustu Bimur Dustami - 2 | একটি বিনোদন মুলক গল্প | অনুধাবন - 92 | 2020", views: "53M" },
    { id: "U5CC1W81nPw", title: "আদর্শ সৎ মা - জীবন বদলে দেয়া একটি শর্ট ফিল্ম | ''Onudhabon'' - 26 | ''অনুধাবন'' ২৬ | Bangla Drama", views: "36M" },
    { id: "HItV0nd1gDI", title: "কাঁঠাল খাওয়া নিয়ে তিন বোনের যুদ্ধ | Kathal Khawya Niye Tin Boner Juddho | Bangla Drama Shortfilm", views: "33M" },
  ],
};

export const featured: Video = videos["taranga-electro-centre"][0];

/** Hand-picked top songs for the home page. `by` is the channel or artist shown under the title. */
export const picks: (Video & { by: string })[] = [
  { id: "bLdkI3qa7mc", title: "আমার বন্ধু ময়ূরী", views: "24M", by: "Sharif Uddin · Taranga Electro Centre" },
  { id: "p736sx5GmqE", title: "মৌসুমি একা একা", views: "20M", by: "Sharif Uddin · Taranga Electro Centre" },
  { id: "W0OqWJhD8Wo", title: "কেমন কেমন লাগে", views: "10M", by: "Emon Khan & Sathi Khan" },
  { id: "J9c97ttOljI", title: "লাল গোলাপি", views: "39M", by: "Sharif Uddin · Taranga Electro Centre" },
  { id: "h8GWWrXeSaI", title: "ওগো পরানের প্রিয়া", views: "33M", by: "Sharif Uddin · Taranga Electro Centre" },
  { id: "5oHoGb2M4MA", title: "রূপা তুমি ভালো থেকো", views: "7.4M", by: "Emon Khan · Taranga Music Centre" },
];
