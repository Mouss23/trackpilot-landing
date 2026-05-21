import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LeadModalProvider } from "@/contexts/LeadModalContext";

// Corps de texte
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Police display moderne pour les titres
const displayFace = Geist({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://trackpilot.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "TrackPilot — Le copilote d'acquisition des équipes marketing",
  description:
    "Centralisez vos données marketing, fiabilisez votre tracking et recevez des recommandations claires. Vos données marketing, enfin lisibles.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "TrackPilot",
    title: "TrackPilot — Le copilote d'acquisition des équipes marketing",
    description:
      "Centralisez vos données marketing, fiabilisez votre tracking et recevez des recommandations claires. Vos données marketing, enfin lisibles.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TrackPilot — dashboard d'acquisition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TrackPilot — Le copilote d'acquisition des équipes marketing",
    description:
      "Centralisez vos données marketing, fiabilisez votre tracking et recevez des recommandations claires.",
    images: ["/og-image.png"],
  },
};

// Schema.org JSON-LD pour le référencement
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TrackPilot",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "TrackPilot centralise vos données marketing, vérifie la qualité de votre tracking et transforme vos chiffres en recommandations claires.",
  offers: {
    "@type": "Offer",
    price: "49",
    priceCurrency: "EUR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${inter.variable} ${displayFace.variable} h-full antialiased`}
    >
      <head>
        {/* Anti-flash : applique le thème avant le premier paint (dark par défaut). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('trackpilot-theme')||'dark';if(t==='dark')document.documentElement.classList.add('dark');}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-ink">
        <ThemeProvider>
          <LeadModalProvider>{children}</LeadModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
