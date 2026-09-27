import Image from "next/image";
import Reveal from "./Reveal";
import BookTitle from "./BookTitle";
import { BuyButton } from "./BuyDialog";

export default function BookSection() {
  return (
    <section id="libro" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-14 px-4 lg:grid-cols-12 lg:gap-16">
        {/* Presentazione: testo ufficiale del libro */}
        <Reveal className="lg:col-span-7">
          <h2 className="font-display text-4xl font-700 leading-[1.05] text-ink sm:text-5xl">
            Un nuovo modo di scoprire il pianoforte
          </h2>
          <p className="mt-6 max-w-[60ch] font-body text-xl leading-relaxed text-ink">
            <BookTitle /> nasce dalla volontà di creare un percorso formativo
            stimolante e graduale che sfrutti a pieno lo straordinario
            potenziale di apprendimento dei bambini.
          </p>
          <div className="mt-6 max-w-[62ch] space-y-5 font-body text-lg leading-relaxed text-ink/75">
            <p>
              Attraverso un primo approccio spontaneo con la tastiera, il
              giovane allievo esplorerà il pianoforte in tutti i suoi aspetti,
              suonando fin da subito in ogni registro e ascoltando i diversi
              suoni che si possono generare.
            </p>
            <p>
              Numerosi esercizi di improvvisazione, accompagnati dal maestro,
              permetteranno all’allievo di suonare e sviluppare la propria
              musicalità fin dalle prime lezioni,{" "}
              <strong className="font-700 text-ink">
                ancor prima di approcciarsi al complicato processo di lettura
                dello spartito
              </strong>
              .
            </p>
            <p>
              Così facendo l’aspirante pianista avrà familiarizzato e preso
              confidenza con la tastiera, affidandosi alla propria sensibilità e
              al proprio orecchio.
            </p>
          </div>
          <div className="mt-10">
            <BuyButton />
          </div>
        </Reveal>

        {/* Retro di copertina: resta in vista mentre si legge */}
        <Reveal
          from="right"
          delay={0.1}
          className="lg:sticky lg:top-28 lg:col-span-5"
        >
          <figure className="relative mx-auto max-w-[340px] lg:max-w-none">
            <div
              aria-hidden
              className="absolute inset-0 -translate-x-3 translate-y-3 -rotate-2 rounded-[28px] bg-lime/50"
            />
            <Image
              src="/retro.jpg"
              alt="Retro del libro Tasto Matto, con la presentazione del metodo e l'elenco delle attività. Consigliato dai 5 anni."
              width={1128}
              height={1600}
              sizes="(min-width: 1024px) 440px, 340px"
              className="relative rotate-2 rounded-[28px] border-[5px] border-white shadow-soft transition-transform duration-500 hover:rotate-0"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
