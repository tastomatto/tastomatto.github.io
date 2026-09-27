import { BOOK, SITE } from "@/lib/data";
import BookTitle from "./BookTitle";
import { BuyButton } from "./BuyDialog";
import { PianoMark } from "./Nav";

const LINKS = [
  { href: "#libro", label: "Il libro" },
  { href: "#metodo", label: "Il metodo" },
  { href: "#percorso", label: "Il percorso" },
  { href: "#autori", label: "Autori" },
  { href: "#contatti", label: "Contatti" },
  // Sezioni disattivate (vedi app/page.tsx):
  // { href: "#brani", label: "Brani" },
  // { href: "#improvvisa", label: "Improvvisa" },
  // { href: "#attivita", label: "Attività" },
  // { href: "#pentagramma", label: "Pentagramma PDF" },
  // { href: "#recensioni", label: "Recensioni" },
  // { href: "#video", label: "Video" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-end gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="font-display text-3xl font-700 leading-tight sm:text-5xl">
              E ora è il momento di suonare…
              <br />
              il <BookTitle className="text-lime" />!
            </p>
          </div>
          <BuyButton className="justify-self-start md:justify-self-end" />
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className="flex items-center gap-2">
            <PianoMark />
            <span className="font-display text-xl font-700">{SITE.title}</span>
          </a>

          <nav className="flex flex-wrap gap-x-8 gap-y-2 font-body text-white/70">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-lime"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`mailto:${SITE.email}`}
              className="transition-colors hover:text-lime"
            >
              {SITE.email}
            </a>
          </nav>
        </div>

        <div className="mt-8 space-y-1 font-body text-sm text-white/50">
          <p>{BOOK.copyright}. Tutti i diritti sono riservati.</p>
          <p>
            Grafica di copertina: {BOOK.coverArt}. ISBN {BOOK.isbn}. Imprint:{" "}
            {BOOK.imprint}.
          </p>
        </div>
      </div>
    </footer>
  );
}
