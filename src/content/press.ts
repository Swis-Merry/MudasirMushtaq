import { sources } from "./sources";

export type PressItem = {
  publication: string;
  headline: string;
  /** ISO date. Omit when the date is not verified. */
  date?: string;
  /** Omit when there is no public URL; the card renders without a link. */
  url?: string;
  image?: string;
  type: "Interview" | "Feature" | "Campaign" | "News";
};

export const press: PressItem[] = [
  {
    publication: "Gulf News \u00b7 GN Focus",
    headline: "Stay Focused on Personalised Service",
    date: "2024-09-30",
    url: sources.gulfNewsPersonalised,
    image: "/images/gulf-news-gn-focus-2024.jpg",
    type: "Interview",
  },
  {
    publication: "Bayut",
    headline: "Bayut TruBroker\u2122 outdoor campaign featuring Mudasir Mushtaq of DRE",
    image: "/images/bayut-billboard.jpg",
    type: "Campaign",
  },
  {
    publication: "Property Time",
    headline: "Trust & Transparency: DRE\u2019s 18-year-old Legacy",
    date: "2025-10-30",
    url: sources.propertyTime,
    image: "/images/mudasir-qurat-property-time.jpg",
    type: "Feature",
  },
  {
    publication: "Gulf News",
    headline: "DRE awarded prestigious Black Onyx Platinum Award by Dubai Holdings",
    date: "2024-09-27",
    url: sources.gulfNewsBlackOnyx,
    type: "News",
  },
];
