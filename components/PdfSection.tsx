import Reveal from "./Reveal";

export default function PdfSection() {
  return (
    <section id="pentagramma" className="relative overflow-hidden bg-ocean py-20 sm:py-24">
      {/* Tasti decorativi */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-8 opacity-30"
        style={{
          background:
            "repeating-linear-gradient(90deg,#fff 0 3px, transparent 3px 34px)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4">
        <Reveal from="scale">
          <div className="card-toon relative overflow-hidden bg-white p-8 sm:p-12">
            <div className="grid items-center gap-8 sm:grid-cols-[1fr_auto]">
              <div>
                <span className="section-eyebrow">📄 Scarica gratis</span>
                <h2 className="mt-4 font-display text-3xl font-700 text-ink sm:text-4xl">
                  Pentagramma vuoto da stampare
                </h2>
                <p className="mt-3 font-body text-lg text-ink/70">
                  Un PDF pronto da stampare per scrivere le tue melodie,
                  esercitarti a disegnare le note o inventare nuove canzoni.
                  Formato A4, senza registrazione.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/pentagramma-vuoto.pdf"
                    download
                    className="btn-pop bg-cherry"
                  >
                    ⬇️ Scarica il PDF
                  </a>
                  <a
                    href="/pentagramma-vuoto.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pop bg-grape"
                  >
                    👀 Anteprima
                  </a>
                </div>
              </div>

              {/* Mini anteprima pentagramma */}
              <div className="mx-auto w-40 rotate-3 rounded-xl border-[3px] border-ink/10 bg-cream p-4 shadow-pop">
                <StaffPreview />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StaffPreview() {
  const staves = [0, 1, 2, 3];
  return (
    <svg viewBox="0 0 120 150" className="w-full" aria-hidden>
      {staves.map((s) => {
        const y = 12 + s * 34;
        return (
          <g key={s}>
            {[0, 1, 2, 3, 4].map((l) => (
              <line
                key={l}
                x1="6"
                x2="114"
                y1={y + l * 5}
                y2={y + l * 5}
                stroke="#241c3a"
                strokeWidth="1"
                opacity="0.7"
              />
            ))}
          </g>
        );
      })}
    </svg>
  );
}
