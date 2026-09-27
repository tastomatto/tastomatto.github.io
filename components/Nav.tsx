import { PianoKeys } from "@phosphor-icons/react/dist/ssr";
import { SITE } from "@/lib/data";
import { BuyButton } from "./BuyDialog";

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
  // { href: "#recensioni", label: "Recensioni" },
  // { href: "#video", label: "Video" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 py-3 sm:py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2 rounded-full border-[3px] border-ink/10 bg-white/90 py-1.5 pl-2 pr-4 shadow-pop backdrop-blur transition-transform hover:-rotate-2"
        >
          <PianoMark />
          <span className="font-display text-base font-700 leading-none text-ink sm:text-xl">
            {SITE.title}
          </span>
        </a>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 rounded-full border-[3px] border-ink/10 bg-white/90 px-2 py-1.5 shadow-pop backdrop-blur lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-1.5 font-display text-base font-500 text-ink/70 transition-colors hover:bg-lime-light hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <BuyButton
            icon={false}
            compact
            className="!px-5 !py-2.5 !text-base"
          />
        </div>
      </div>
    </header>
  );
}

export function PianoMark() {
  return (
    <span
      aria-hidden
      className="grid h-9 w-9 place-items-center rounded-full bg-lime text-ink"
    >
      <PianoKeys size={22} weight="fill" />
    </span>
  );
}
