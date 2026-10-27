import { sources } from "./sources";

export type Milestone = {
  year: string;
  title: string;
  body: string;
  /** Omit only when the evidence is client-supplied material without a public URL. */
  source?: string;
};

export const timeline: Milestone[] = [
  {
    year: "Foundation",
    title: "A grounding in international business and finance",
    body: "He earned a Master\u2019s degree in International Business and Banking/Finance \u2014 the foundation that would later shape DRE\u2019s financial strategy and overall stability.",
    source: sources.dreAbout,
  },
  {
    year: "2007",
    title: "Co-founding DRE in Karama",
    body: "With a clear vision, limited resources and boundless determination, he co-founded DRE with his sister, Qurat Ul Ain, opening the company\u2019s first office in Karama.",
    source: sources.dreAbout,
  },
  {
    year: "2008",
    title: "Resilience through the downturn",
    body: "As the global financial crisis reached Dubai, the young company pivoted to leasing and kept building from scratch \u2014 without debt.",
    source: sources.propertyTime,
  },
  {
    year: "2014",
    title: "The first of many developer awards",
    body: "Recognition from Deyaar marked the start of an unbroken run of developer and industry honours, as DRE established itself as a major contender in Dubai\u2019s off-plan market.",
    source: sources.dreAbout,
  },
  {
    year: "Growth",
    title: "Beyond off-plan",
    body: "DRE expanded into new business verticals \u2014 secondary residential sales, leasing and property management \u2014 building on long-standing relationships with most of Dubai\u2019s leading developers.",
    source: sources.dreAbout,
  },
  {
    year: "Talent",
    title: "Launching the DRE Academy",
    body: "To power that expansion with a strong sales force, DRE developed the DRE Academy, setting new standards in training and education for its people.",
    source: sources.dreAbout,
  },
  {
    year: "2024",
    title: "Benchmarking success in Gulf News",
    body: "Featured with Qurat Ul Ain in Gulf News GN Focus \u201cBenchmarking Success\u201d, discussing personalised service, developer relationships and innovation.",
    source: sources.gulfNewsPersonalised,
  },
  {
    year: "2025",
    title: "Headquarters in Dubai Hills Estate",
    body: "From that first office in Karama, DRE moved into its new headquarters in Dubai Hills Estate \u2014 regarded by its peers as a Tier One, award-winning real estate company.",
    source: sources.estateMagazine,
  },
  {
    year: "Recognition",
    title: "Bayut TruBroker\u2122",
    body: "Awarded Bayut\u2019s TruBroker\u2122 badge and featured in Bayut\u2019s TruBroker\u2122 outdoor campaign.",
  },
];

export type Quote = { text: string; source: string; publication: string };

/** Verbatim quotations only. Credited in the source as "Mudasir Wani (MW)". */
export const quotes = {
  people: {
    text: "Organisations are always built on people, processes and values.",
    source: sources.gulfNewsPersonalised,
    publication: "Gulf News, GN Focus, 30 September 2024",
  },
  innovation: {
    text: "Innovation is a way of life today.",
    source: sources.gulfNewsPersonalised,
    publication: "Gulf News, GN Focus, 30 September 2024",
  },
} satisfies Record<string, Quote>;

export const philosophy = [
  {
    title: "Leadership with purpose",
    body: "Leadership, for Mudasir, is measured in what endures: a company that grows steadily, serves clients well and stays true to its values across every market cycle.",
  },
  {
    title: "People, processes & values",
    body: "Great organisations are built deliberately. He invests in the right people, disciplined processes and a shared set of values \u2014 and holds all three to the same standard.",
  },
  {
    title: "Consistency",
    body: "Being consistent is the real challenge of growth. Staying focused, process-oriented and committed to sustainable relationships is how DRE has maintained its standard since 2007.",
  },
  {
    title: "Trust & long-term relationships",
    body: "Respect for internal and external customers, and partnerships with most of Dubai\u2019s leading developers, sit at the heart of DRE\u2019s reputation \u2014 and of its results.",
  },
  {
    title: "Innovation & technology",
    body: "DRE has invested heavily in technology to innovate its customer experience journey, and keeps learning so it can stay ahead in an ever-evolving market.",
  },
  {
    title: "Developing talent",
    body: "Through the DRE Academy, the company trains and develops its sales force \u2014 building the capability that each new business vertical demands.",
  },
  {
    title: "Inspiring future entrepreneurs",
    body: "Starting in 2007 with limited resources and a clear vision, his journey shows what financial discipline, resilience and long-term thinking can build.",
  },
];

export type GalleryItem = { src: string; alt: string; category: string; focus: string; width: number; height: number };

export const gallery: GalleryItem[] = [
  {
    src: "/images/mudasir-portrait-studio.jpg",
    alt: "Studio portrait of Mudasir Mushtaq in a pinstripe double-breasted suit, arms crossed",
    category: "Portraits",
    focus: "50% 18%",
    width: 675,
    height: 1024,
  },
  {
    src: "/images/mudasir-qurat-property-time.jpg",
    alt: "Mudasir Mushtaq with his sister and DRE co-founder, Qurat Ul Ain",
    category: "Leadership",
    focus: "42% 30%",
    width: 1600,
    height: 707,
  },
  {
    src: "/images/bayut-trubroker-creative.jpg",
    alt: "Bayut TruBroker\u2122 campaign creative featuring Mudasir Mushtaq of DRE",
    category: "Bayut TruBroker\u2122",
    focus: "70% 40%",
    width: 576,
    height: 1024,
  },
  {
    src: "/images/gulf-news-gn-focus-2024.jpg",
    alt: "Gulf News GN Focus spread, \u201cStay Focused on Personalised Service\u201d, 30 September 2024",
    category: "Media",
    focus: "70% 50%",
    width: 819,
    height: 1024,
  },
  {
    src: "/images/bayut-billboard.jpg",
    alt: "Bayut TruBroker\u2122 outdoor billboard campaign on a Dubai highway",
    category: "Bayut TruBroker\u2122",
    focus: "50% 50%",
    width: 1024,
    height: 632,
  },
  {
    src: "/images/dre-cricket-team.jpg",
    alt: "The DRE cricket team in team kit on the pitch",
    category: "Community",
    focus: "50% 45%",
    width: 1024,
    height: 639,
  },
];
