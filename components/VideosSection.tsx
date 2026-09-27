import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { VIDEOS } from "@/lib/data";

const BORDER: Record<string, string> = {
  grape: "bg-grape",
  mango: "bg-mango",
  cherry: "bg-cherry",
  ocean: "bg-ocean",
  bubble: "bg-bubble",
};

export default function VideosSection() {
  return (
    <section id="video" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="🎬 In azione"
          title="I video degli allievi"
          desc="Guarda i bambini che suonano i brani di Tasto Matto. Bravissimi!"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.map((v, i) => (
            <Reveal
              key={v.id}
              delay={(i % 3) * 0.1}
              from="scale"
              as="article"
              className="card-toon overflow-hidden"
            >
              <div className="relative aspect-video bg-ink/5">
                {v.embedUrl ? (
                  <iframe
                    src={v.embedUrl}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                ) : (
                  <VideoPlaceholder color={v.color} />
                )}
              </div>
              <div className="flex items-center gap-3 p-5">
                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-white ${BORDER[v.color]}`}
                >
                  ▶
                </span>
                <div>
                  <h3 className="font-display text-lg font-600 leading-tight text-ink">
                    {v.title}
                  </h3>
                  <p className="font-body text-sm text-ink/55">{v.student}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10 text-center">
          <p className="font-body text-ink/55">
            Anche il tuo bimbo suona con Tasto Matto?{" "}
            <a
              href="mailto:tastomatto.edu@gmail.com"
              className="font-600 text-grape underline decoration-wavy underline-offset-4"
            >
              Inviaci il suo video
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function VideoPlaceholder({ color }: { color: string }) {
  return (
    <div
      className={`grid h-full w-full place-items-center ${BORDER[color]} bg-opacity-90`}
    >
      <div className="text-center text-white/90">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-white/25 text-3xl backdrop-blur">
          ▶
        </div>
        <p className="mt-3 font-display text-sm font-600">
          Video in arrivo
        </p>
      </div>
    </div>
  );
}
