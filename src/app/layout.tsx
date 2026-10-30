import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { site, siteUrl } from "@/content/site";
import { Providers } from "@/components/Providers";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const title = "Mudasir Mushtaq | Co-Founder & CEO of DRE Homes, Dubai Real Estate Entrepreneur";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | Mudasir Mushtaq" },
  description: site.description,
  keywords: [
    "Mudasir Mushtaq",
    "Mudasir Mushtaq DRE Homes",
    "Mudasir Mushtaq Dubai Real Estate",
    "Mudasir Mushtaq Entrepreneur",
    "Mudasir Mushtaq Awards",
    "Mudasir Wani DRE",
    "DRE Homes Co-Founder",
    "DRE Homes CEO",
  ],
  alternates: { canonical: "/" },
  authors: [{ name: site.name }],
  openGraph: {
    type: "profile",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
    locale: "en_AE",
    images: [{ url: site.portrait, width: 675, height: 1024, alt: "Mudasir Mushtaq, Co-Founder & CEO of DRE Homes" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    images: [site.portrait],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#faf8f5",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-charcoal focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
