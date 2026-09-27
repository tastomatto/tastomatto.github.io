import Reveal from "./Reveal";
import { BuyButton } from "./BuyDialog";

export default function BuyBanner() {
  return (
    <section className="relative overflow-hidden bg-cherry py-16 sm:py-20">
      <div
        aria-hidden
        className="absolute inset-0 opacity-15"
        style={{
          background:
            "repeating-linear-gradient(90deg,#fff 0 4px, transparent 4px 44px)",
        }}
      />
      <Reveal from="scale" className="relative mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-display text-4xl font-700 leading-tight text-white sm:text-5xl">
          Pronti a suonare? 🎹
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-body text-lg text-white/90">
          Porta a casa <strong>Tasto Matto</strong> e regala ai bambini il modo
          più allegro per iniziare a suonare il pianoforte.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <BuyButton className="!bg-white !text-cherry" />
          <a href="#brani" className="btn-pop bg-ocean">
            🎧 Riascolta i brani
          </a>
        </div>
      </Reveal>
    </section>
  );
}
