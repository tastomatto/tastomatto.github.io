import Reveal from "./Reveal";
import BookTitle from "./BookTitle";

// I metodi da cui parte Tasto Matto, citati nel testo ufficiale.
const SOURCES = [
  { work: "Mikrokosmos", by: "Béla Bartók" },
  {
    work: "Il metodo di Chopin",
    by: "Frédéric Chopin e i suoi allievi Tellefsen e Mikuli",
  },
  { work: "Adult Piano Method", by: "Kern, Keveren, Kreader e Rejino" },
];

export default function MethodSection() {
  return (
    <section id="metodo" className="relative scroll-mt-20 bg-lime/20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="max-w-3xl">
          <p className="font-display text-lg font-600 text-ink/60">
            Il punto di forza
          </p>
          <h2 className="mt-2 font-display text-4xl font-700 leading-[1.05] text-ink sm:text-5xl">
            Posizioni mobili, su tutta la tastiera
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 font-body text-lg leading-relaxed text-ink/75 md:grid-cols-2 md:gap-12">
          <Reveal>
            <p>
              Uno dei punti di forza di <BookTitle className="text-ink" /> è
              l’approccio alla lettura. Abbiamo deciso di diversificare il
              nostro libro dai metodi più diffusi, i quali impostano il percorso
              didattico per “posizioni” che mantengono la mano fissa sul do per
              molti brani consecutivi. La nostra scelta nasce dall’esigenza di
              evitare possibili rigidità mentali e fisiche dettate
              dall’associazione tra dito e nota e da posizioni statiche fisse
              nel tempo.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p>
              Il nostro metodo fa leva sull’incredibile elasticità della mente
              dei bambini, in grado di assimilare velocemente i cambiamenti e di
              apprendere moltissime nozioni con facilità. Se educati fin da
              subito a non fossilizzarsi su una singola posizione, i piccoli
              pianisti cresceranno con un approccio molto più duttile e
              versatile, senza rischiare di associare la diteggiatura ad una
              nota specifica,{" "}
              <strong className="font-700 text-ink">
                permettendo di muoversi con fluidità sull’intera tastiera
              </strong>
              .
            </p>
          </Reveal>
        </div>

        {/* Le fonti */}
        <Reveal className="mt-16 border-t-[3px] border-ink/10 pt-10">
          <p className="max-w-3xl font-body text-lg leading-relaxed text-ink/75">
            Partendo dallo studio dei più importanti e stimati metodi per
            pianoforte dall’Ottocento ad oggi, abbiamo elaborato il nostro
            metodo, che riporta l’approccio “mobile” delle posizioni in un nuovo
            percorso didattico adatto ai bambini.
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-3">
            {SOURCES.map((s) => (
              <li key={s.work} className="border-l-[3px] border-lime-dark pl-4">
                <p className="font-display text-xl font-600 leading-snug text-ink">
                  {s.work}
                </p>
                <p className="mt-1 font-body text-ink/65">{s.by}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
