import {
  ChalkboardTeacher,
  Ear,
  Exam,
  Eye,
  MusicNotes,
  MusicNotesPlus,
  PencilSimpleLine,
  Repeat,
  Smiley,
  Sparkle,
  Target,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import Reveal from "./Reveal";
import BookTitle from "./BookTitle";

// Le voci di "Il percorso prevede", dal testo ufficiale. I colori dei riquadri
// ruotano sui personaggi della copertina.
const STEPS: { icon: Icon; label: string; tile: string }[] = [
  { icon: Repeat, label: "Esercizi di imitazione", tile: "bg-cherry/10 text-cherry" },
  { icon: Ear, label: "Attività di ascolto e percezione", tile: "bg-ocean/10 text-ocean" },
  { icon: Sparkle, label: "Improvvisazioni", tile: "bg-grape/10 text-grape" },
  { icon: MusicNotes, label: "Lettura musicale", tile: "bg-mango/15 text-mango-dark" },
  { icon: MusicNotesPlus, label: "Un gran numero di brani inediti", tile: "bg-bubble/10 text-bubble-dark" },
  { icon: Exam, label: "Esercizi teorici", tile: "bg-ocean/10 text-ocean" },
  { icon: Smiley, label: "Attività introspettive", tile: "bg-cherry/10 text-cherry" },
  { icon: Eye, label: "Lettura a prima vista", tile: "bg-grape/10 text-grape" },
  { icon: PencilSimpleLine, label: "Scrittura musicale", tile: "bg-mango/15 text-mango-dark" },
];

export default function PathSection() {
  return (
    <section id="percorso" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-700 leading-[1.05] text-ink sm:text-5xl">
            Il percorso
          </h2>
          <p className="mt-5 font-body text-lg leading-relaxed text-ink/75">
            <BookTitle className="text-ink" /> accosta esercitazioni pratiche,
            nozioni tecnico-teoriche e momenti introspettivi dedicati alla
            scoperta delle proprie emozioni suscitate dalla musica, con
            l’obiettivo di formare gradualmente e in maniera completa i piccoli
            musicisti.
          </p>
        </Reveal>

        <ul className="mx-auto mt-14 grid max-w-5xl gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal
              key={s.label}
              as="li"
              from="up"
              delay={(i % 3) * 0.06}
              className="flex items-center gap-4"
            >
              <span
                className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${s.tile}`}
              >
                <s.icon size={28} weight="duotone" aria-hidden />
              </span>
              <span className="font-display text-xl font-500 leading-snug text-ink">
                {s.label}
              </span>
            </Reveal>
          ))}
        </ul>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-[28px] bg-lime p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <Target size={32} weight="duotone" className="text-ink" aria-hidden />
              <h3 className="font-display text-2xl font-700 text-ink">
                L’obiettivo
              </h3>
            </div>
            <p className="mt-5 font-body text-lg leading-relaxed text-ink/80">
              Alla fine del percorso, l’allievo non solo avrà acquisito tutte le
              basi teoriche e pratiche per leggere e suonare la musica con
              sicurezza, ma sarà pronto a iniziare a esplorare con entusiasmo e
              creatività l’infinito repertorio pianistico.
            </p>
          </Reveal>

          <Reveal
            delay={0.08}
            className="rounded-[28px] bg-[#FADB5E] p-8 sm:p-10"
          >
            <div className="flex items-center gap-3">
              <ChalkboardTeacher
                size={32}
                weight="duotone"
                className="text-ink"
                aria-hidden
              />
              <h3 className="font-display text-2xl font-700 text-ink">
                Per l’insegnante
              </h3>
            </div>
            <div className="mt-5 space-y-4 font-body text-lg leading-relaxed text-ink/80">
              <p>
                All’interno del libro, l’insegnante troverà alcuni suggerimenti
                per lo svolgimento della lezione, proposte di improvvisazione e
                accompagnamenti dei brani.
              </p>
              <p>
                Il percorso continua anche online, con registrazioni dei brani,
                accompagnamenti musicali e materiali aggiuntivi pensati per
                arricchire l’esperienza di studio.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
