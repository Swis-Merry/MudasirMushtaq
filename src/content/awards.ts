import { sources } from "./sources";

export type Award = {
  title: string;
  year?: number;
  organisation: string;
  description: string;
  source?: string;
  sourceLabel: string;
  image?: string;
  kind: "award" | "recognition" | "feature";
};

/** Recognition given to Mudasir Mushtaq by name. Add entries only when a source confirms them. */
export const personalAwards: Award[] = [
  {
    title: "Bayut TruBroker\u2122",
    organisation: "Bayut",
    description:
      "Holder of Bayut's TruBroker\u2122 badge, which recognises trusted, high-performing agents. He also appears in Bayut's TruBroker\u2122 outdoor campaign.",
    sourceLabel: "Bayut \u00d7 DRE campaign creative",
    image: "/images/bayut-trubroker-creative.jpg",
    kind: "recognition",
  },
  {
    title: "GN Focus \u201cBenchmarking Success\u201d feature",
    year: 2024,
    organisation: "Gulf News",
    description:
      "Interviewed alongside co-founder Qurat Ul Ain for \u201cStay Focused on Personalised Service\u201d, published 30 September 2024. This is a media feature, not an award.",
    source: sources.gulfNewsPersonalised,
    sourceLabel: "Gulf News",
    image: "/images/gulf-news-gn-focus-2024.jpg",
    kind: "feature",
  },
];

/** Awarded to DRE Homes Real Estate as an organisation, under his leadership. */
export const companyAwards: Award[] = [
  {
    title: "Black Onyx Platinum Award",
    year: 2024,
    organisation: "Dubai Holding",
    description: "Awarded to DRE Homes for AED 2 billion in 2023\u201324 sales across Meraas and Nakheel developments.",
    source: sources.gulfNewsBlackOnyx,
    sourceLabel: "Gulf News",
    kind: "award",
  },
  {
    title: "Dubai Land Department Recognition",
    year: 2024,
    organisation: "Dubai Land Department",
    description: "Recognition from Dubai Land Department, listed among DRE Homes' 2024 honours.",
    source: sources.dreAbout,
    sourceLabel: "DRE Homes",
    kind: "award",
  },
  {
    title: "Great Place to Work",
    year: 2024,
    organisation: "Great Place to Work",
    description: "DRE Homes recognised for its workplace culture, listed among the company's 2024 honours.",
    source: sources.dreAbout,
    sourceLabel: "DRE Homes",
    kind: "award",
  },
  {
    title: "RERA Annual Award",
    year: 2021,
    organisation: "Real Estate Regulatory Agency (RERA)",
    description: "Annual recognition from Dubai's real estate regulator, listed among DRE Homes' 2021 honours.",
    source: sources.dreAbout,
    sourceLabel: "DRE Homes",
    kind: "award",
  },
];

/** Year-by-year company honours, transcribed from the DRE Homes "Our Awards" listing. */
export const developerAwards: { year: number; awards: string[] }[] = [
  { year: 2026, awards: ["Sobha Partnership Award", "Azizi Channel Partner Award"] },
  {
    year: 2025,
    awards: [
      "DAMAC Signature Success",
      "Emaar Partner Excellence",
      "Aldar Envoy Top Broker Q4 2025",
      "BNW Broker Award",
      "Sobha Top Broker Q3 2025",
      "DAMAC Q1 2025 Broker Award",
    ],
  },
  {
    year: 2024,
    awards: ["Emaar Properties", "Dubai Land Department", "Dubai Holding & Nakheel", "Great Place to Work", "Nshama Town Square", "Ellington"],
  },
  { year: 2023, awards: ["Nshama Town Square", "Binghatti", "Emaar Properties", "Deyaar", "DAMAC Properties"] },
  { year: 2022, awards: ["DAMAC Properties", "Nshama Town Square", "SLS Dubai"] },
  { year: 2021, awards: ["DAMAC Unity", "Sobha", "Deyaar", "Dubai Holding", "RERA Annual Award", "Meydan & Nakheel"] },
  { year: 2020, awards: ["Tilal Al Ghaf", "Deyaar", "DAMAC"] },
  { year: 2019, awards: ["Emaar Properties", "Meraas Properties"] },
  { year: 2018, awards: ["Emaar Properties", "Meraas Properties", "Dubai Holding"] },
  { year: 2017, awards: ["Dubai South", "Dubai Properties", "Nshama Town Square", "Deyaar"] },
  { year: 2016, awards: ["Dubai South", "Dubai Properties", "Emaar Properties", "Danube Properties", "Nshama Town Square"] },
  { year: 2015, awards: ["Dubai Properties", "Nshama Town Square", "Danube"] },
  { year: 2014, awards: ["Deyaar"] },
];

export const companyAwardCount = developerAwards.reduce((n, y) => n + y.awards.length, 0);
export const awardYears = { from: Math.min(...developerAwards.map((y) => y.year)), to: Math.max(...developerAwards.map((y) => y.year)) };
