import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import FloatingNotes from "./FloatingNotes";
import { REVIEWS } from "@/lib/data";

const AVATAR: Record<string, string> = {
  grape: "bg-grape",
  mango: "bg-mango",
  cherry: "bg-cherry",
  ocean: "bg-ocean",
  bubble: "bg-bubble",
};

export default function ReviewsSection() {
  return (
    <section
      id="recensioni"
      className="relative overflow-hidden bg-lime py-20 sm:py-28"
    >
      <FloatingNotes count={8} />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="⭐ La parola ai piccoli pianisti"
          title="Recensioni degli allievi"
          desc="Cosa dicono i bambini che stanno imparando con Tasto Matto."
        />

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {REVIEWS.map((r, i) => (
            <Reveal
              key={r.id}
              delay={(i % 3) * 0.08}
              from="up"
              as="article"
              className="card-toon break-inside-avoid p-6"
            >
              <div className="flex text-mango" aria-label="5 stelle">
                {"★★★★★"}
              </div>
              <p className="mt-3 font-body text-lg leading-snug text-ink/80">
                “{r.text}”
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span
                  className={`grid h-11 w-11 place-items-center rounded-full font-display text-lg font-700 text-white ${AVATAR[r.color]}`}
                >
                  {r.name[0]}
                </span>
                <div>
                  <p className="font-display font-600 text-ink">{r.name}</p>
                  <p className="font-body text-sm text-ink/55">
                    {r.age} anni
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
