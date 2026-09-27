import Image from "next/image";
import Reveal from "./Reveal";
import { AUTHORS } from "@/lib/data";

const MONOGRAM: Record<string, string> = {
  grape: "bg-grape",
  mango: "bg-mango",
  cherry: "bg-cherry",
  ocean: "bg-ocean",
  bubble: "bg-bubble",
};

export default function AuthorsSection() {
  return (
    <section id="autori" className="relative scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-700 leading-[1.05] text-ink sm:text-5xl">
            Gli autori
          </h2>
          <p className="mt-4 font-body text-lg leading-relaxed text-ink/70">
            Due musicisti e insegnanti che hanno voluto un metodo in cui
            musica, creatività e pedagogia si incontrano.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-0 md:divide-x-[3px] md:divide-ink/10">
          {AUTHORS.map((a, i) => (
            <Reveal
              key={a.name}
              delay={i * 0.1}
              from="up"
              as="article"
              className={i === 0 ? "md:pr-12" : "md:pl-12"}
            >
              {a.photo ? (
                <Image
                  src={a.photo.src}
                  alt={`${a.name} al pianoforte`}
                  width={a.photo.width}
                  height={a.photo.height}
                  sizes="320px"
                  className="h-48 w-48 rounded-[20px] border-[4px] border-white object-cover shadow-pop sm:h-56 sm:w-56"
                />
              ) : (
                <span
                  aria-hidden
                  className={`grid h-24 w-24 place-items-center rounded-full border-[4px] border-white font-title text-4xl font-extrabold text-white shadow-pop ${MONOGRAM[a.color]}`}
                >
                  {a.initials}
                </span>
              )}
              <h3 className="mt-7 font-display text-2xl font-700 leading-tight text-ink sm:text-3xl">
                {a.name}
              </h3>
              <div className="mt-6 max-w-[52ch] space-y-3 font-body leading-relaxed text-ink/75">
                {a.bio.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
