// Top videos per brand, taken from each channel's "Popular" tab. Refresh by hand when needed.

export type Video = { id: string; title: string };

export const videos: Record<string, Video[]> = {
  "taranga-electro-centre": [
    { id: "V2_aC7JVWro", title: "সোনা বন্ধু ।সিরাজ উদ্দিন ।Taranga Electro Centre" },
    { id: "J04KVHpT2Kc", title: "জাত ফকিরী । হারুন । Taranga Electro Centre" },
    { id: "fyLMP4mTXvA", title: "খাজার জীবনী । হারুন । Taranga Electro Centre" },
    { id: "Jf_wiRXyikc", title: "রূপের কন্যা । শাহাবুদ্দিন & স্বপ্না । Taranga Electro Centre" },
  ],
  "taranga-music-centre": [
    { id: "lAP6Aq58xkk", title: "এ কেমন জীবন বিধি আমারে দিলে 💔 Emon Khan | New Bangla Sad Song 2026 | Official Music Video" },
    { id: "Gq7wi3iKe3U", title: "বিধি তোমার আদালতে একটা বিচার চাই | Emon khan | Bidhi Tumar Adalote Ekta Bicar Cai" },
    { id: "kA1Bb-dBJ5k", title: "তোমার নামে বিচার দিলাম | Emon Khan | Tumar Name Becher Delam Khodare Dorbare | Taranga Music Centre" },
    { id: "fPbE9WVViwg", title: "স্বার্থের ভালোবাসা কভু টিকে না |  Emon Khan | Sarrther Valobasa Kovu Tike na | Bangla Music Video" },
  ],
  "taranga-music": [
    { id: "j-6Iqv86yV4", title: "Osomoye Miss Call | Shorif Uddin | অসময়ে মিস কল | শরীফ উদ্দিন | Taranga Music" },
    { id: "Nm-mGCc4vso", title: "এস. আলমের গাড়ীতে | শরীফ উদ্দিন | As. Alom Er Garite | Sharif Uddin Song | Taranga Music" },
    { id: "8ZgL2ugY8co", title: "Tumi Raj Vandari ।  তুমি রাজ ভাণ্ডারী । Shorif Uddin |Taranga Music" },
    { id: "YT5pCYfaZf0", title: "সজনীগো | মুন | Moon | Sojonigo | Bangla Song | Moon Song । Taranga Music" },
  ],
  "taranga-entertainment": [
    { id: "YHlg0_UHoV4", title: "Dipor Patri dekha | দিপুর পাত্রী দেখা | Taranga Entertainment" },
    { id: "igoNz9pVYZE", title: "দুই ফকিরের কোরবানির ছাগল | তারছেড়া ভাদাইমার নতুন কৌতুক | Sona Mia | Dui Fokirer korbanir chagol" },
    { id: "YkiblbC2vCE", title: "বউ তালাক | তারছেড়া ভাদাইমার নতুন কৌতুক | সোনা মিয়া | Tarchera Vadaima New koutuk | Sona Miah" },
    { id: "xXgR5De5xcA", title: "বাচ্চার মা ভাইজ্ঞা গেছে | তারছেড়া ভাদাইমার নতুন কৌতুক | সোনা মিয়া | | Tarchera Vadaima | Sona Mia" },
  ],
  "bangla-entertainment": [
    { id: "0XQNfHDcvmQ", title: "Vairal Har Kipta Sasuri | হার কিপটা শাশুড়ি | বিমুর নতুন নাটক | Bimu Khandokar | Bangla Entertainment" },
    { id: "QhK_NG1F7nE", title: "বিদেশ ফেরত জামাই | Bidesh Ferot Jamai | Bangla Entertainment" },
    { id: "4_OwEG6l4gs", title: "গার্ল ফ্রেন্ড | Girl Friend | Hero Alom | Bangla New Comedy Video | New Drama Natok 2024" },
    { id: "gGmpFRemZao", title: "ভালোবাসার পাওয়ার | বাংলা নতুন শর্টফ্লিম | Valobasar pawer | Bangla New Shortflim" },
  ],
  "bangla-drama": [
    { id: "U2wr7ElDRLg", title: "dipor buer din mosol mani" },
    { id: "ij3mF5gPzcc", title: "নতুন তুফান বউ । Notun Tufan Bou । বিমুর  নতুন নাটক | Bimu Khandokar । Bangla Drama" },
    { id: "5OZ03r-9X4U", title: "প্রবাসীর মেয়ের কষ্ট । Probashir Meyer Kosto । বিমুর  নতুন নাটক | Bimu Khandokar । Bangla Drama" },
    { id: "JDY1MAXLMzE", title: "ললীপপ পাগল নতুন বউ । Lolipop Pagol Notun Bow । বিমুর  নতুন নাটক | Bimu Khandokar । Bangla Drama" },
  ],
};

export const featured: Video = videos["taranga-electro-centre"][0];
