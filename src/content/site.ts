const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000")
).replace(/\/$/, "");

export const site = {
  name: "Mudasir Mushtaq",
  alternateName: "Mudasir Wani",
  title: "Co-Founder & Chief Executive Officer",
  company: "DRE Homes Real Estate",
  companyUrl: "https://www.drehomes.com/",
  tagline: ["Building Legacies.", "Inspiring Leaders.", "Redefining Real Estate."],
  subtitle: "Co-Founder & Chief Executive Officer of DRE Homes | Entrepreneur | Real Estate Industry Leader",
  description:
    "Mudasir Mushtaq is the Co-Founder & CEO of DRE Homes Real Estate, Dubai. Discover his entrepreneurial journey since 2007, leadership philosophy, recognitions and media features.",
  location: "Dubai, United Arab Emirates",
  portrait: "/images/mudasir-portrait-studio.jpg",
  // Only add verified, official profiles here.
  socials: [] as { label: string; href: string }[],
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Awards", href: "#awards" },
  { label: "DRE Homes", href: "#dre-homes" },
  { label: "Press", href: "#press" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Gallery", href: "#gallery" },
] as const;
