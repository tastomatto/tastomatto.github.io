import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import AudioPlayer from "./AudioPlayer";
import { ACTIVITIES } from "@/lib/data";

const KIND_STYLE: Record<string, { chip: string; icon: string }> = {
  Ascolto: { chip: "bg-bubble text-white", icon: "👂" },
  "Prima vista": { chip: "bg-ocean text-white", icon: "👀" },
};

export default function ActivitiesSection() {
  return (
    <section id="attivita" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeader
          eyebrow="🧩 Attività extra"
          title="Ascolto e prima vista"
          desc="Giochi e schede aggiuntive per allenare l'orecchio e imparare a leggere la musica a prima vista, sempre divertendosi."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {ACTIVITIES.map((a, i) => {
            const k = KIND_STYLE[a.kind];
            return (
              <Reveal
                key={a.id}
                delay={(i % 2) * 0.08}
                from="up"
                as="article"
                className="card-toon flex flex-col p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-lime-light text-2xl">
                    {k.icon}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 font-display text-xs font-600 uppercase tracking-wide ${k.chip}`}
                  >
                    {a.kind}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-700 text-ink">
                  {a.title}
                </h3>
                <p className="mt-2 flex-1 font-body text-ink/70">
                  {a.description}
                </p>
                {a.src && (
                  <div className="mt-4">
                    <AudioPlayer
                      title="Esempio d'ascolto"
                      subtitle="Premi play e prova a indovinare"
                      src={a.src}
                      color={a.color}
                    />
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
