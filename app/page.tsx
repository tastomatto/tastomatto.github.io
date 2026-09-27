import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import BookSection from "@/components/BookSection";
import MethodSection from "@/components/MethodSection";
import PathSection from "@/components/PathSection";
import AuthorsSection from "@/components/AuthorsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { BuyProvider } from "@/components/BuyDialog";

// Sezioni temporaneamente disattivate: non ci sono ancora contenuti reali.
// Per riattivarle basta togliere il commento qui e nel JSX più sotto (e i
// link corrispondenti in Nav.tsx e Footer.tsx).
// import TracksSection from "@/components/TracksSection";
// import ActivitiesSection from "@/components/ActivitiesSection";
// import PdfSection from "@/components/PdfSection";
// import ReviewsSection from "@/components/ReviewsSection";
// import VideosSection from "@/components/VideosSection";
// import BuyBanner from "@/components/BuyBanner";
// import { PLAY_ALONG, IMPROV } from "@/lib/data";

export default function Home() {
  return (
    <BuyProvider>
      <Nav />
      <main>
        <Hero />
        <BookSection />
        <MethodSection />
        <PathSection />
        <AuthorsSection />
        <ContactSection />

        {/*
        <TracksSection
          id="brani"
          eyebrow="🎧 Suona con noi"
          title="Registrazioni dei brani"
          desc="Ogni brano del libro con il suo accompagnamento: premi play e suona la melodia insieme alla base."
          tracks={PLAY_ALONG}
          variant="cream"
        />

        <TracksSection
          id="improvvisa"
          eyebrow="✨ Libera la fantasia"
          title="Audio per improvvisare"
          desc="Basi musicali su cui inventare la tua musica. Premi play, appoggia le dita sui tasti e divertiti: ogni nota è quella giusta!"
          tracks={IMPROV}
          variant="lime"
        />

        <ActivitiesSection />
        <PdfSection />
        <ReviewsSection />
        <VideosSection />
        <BuyBanner />
        */}
      </main>
      <Footer />
    </BuyProvider>
  );
}
