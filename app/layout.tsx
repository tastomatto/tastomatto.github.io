import type { Metadata } from "next";
import { Baloo_2, Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  // Serve a rendere assoluto l'URL dell'immagine di anteprima (Open Graph).
  // In GitHub Actions arriva da configure-pages, e segue l'eventuale dominio
  // personalizzato impostato nelle impostazioni di Pages.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://tastomatto.github.io"
  ),
  title: "Tasto Matto | Metodo di pianoforte per bambini",
  description:
    "Tasto Matto è un metodo di pianoforte per bambini dai 5 anni: un percorso stimolante e graduale fatto di improvvisazione, ascolto, lettura con posizioni mobili, brani inediti e scrittura musicale.",
  keywords: [
    "Tasto Matto",
    "pianoforte bambini",
    "imparare pianoforte",
    "metodo pianoforte",
    "libro musica bambini",
  ],
  openGraph: {
    title: "Tasto Matto | Metodo di pianoforte per bambini",
    description:
      "Metodo di pianoforte per bambini dai 5 anni, di Federico Matteo Marcucci e Laura Pappalardo.",
    images: ["/copertina.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={`${fredoka.variable} ${nunito.variable} ${baloo.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
