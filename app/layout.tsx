import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Font locali (variabili, sottoinsieme latino, licenza OFL in ./fonts): la
// build non scarica nulla da Google Fonts, quindi funziona anche in CI.
const fredoka = localFont({
  src: "./fonts/fredoka.woff2",
  weight: "300 700",
  variable: "--font-fredoka",
  display: "swap",
});

const baloo = localFont({
  src: "./fonts/baloo-2.woff2",
  weight: "400 800",
  variable: "--font-baloo",
  display: "swap",
});

const nunito = localFont({
  src: "./fonts/nunito.woff2",
  weight: "200 1000",
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
