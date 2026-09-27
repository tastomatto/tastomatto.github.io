"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { BookOpen } from "@phosphor-icons/react";
import { BuyButton } from "./BuyDialog";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const ran = useRef(false);

  useEffect(() => {
    // Animazione d'ingresso one-shot: gira una sola volta. Il guard evita che il
    // doppio-mount di React StrictMode (in dev) uccida la timeline a metà.
    if (ran.current) return;
    ran.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tl = gsap.timeline({ defaults: { ease: "back.out(1.6)" } });
    tl.from(".hero-title span", { y: 60, opacity: 0, stagger: 0.08, duration: 0.7 })
      .from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.5 }, "-=0.35")
      .from(".hero-lead", { y: 24, opacity: 0, duration: 0.5 }, "-=0.3")
      .from(".hero-cta", { y: 20, opacity: 0, stagger: 0.1, duration: 0.5 }, "-=0.2")
      .from(".hero-cover", { y: 40, rotation: -6, opacity: 0, duration: 0.9 }, "-=0.8");
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="relative overflow-hidden bg-lime pb-40 pt-28 sm:pt-32 lg:pb-44"
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        {/* Testo */}
        <div className="text-center lg:text-left">
          <h1 className="hero-title whitespace-nowrap font-title text-6xl font-extrabold leading-[0.95] text-ink sm:text-7xl xl:text-8xl">
            <span className="inline-block">Tasto</span>{" "}
            <span className="inline-block">Matto</span>
          </h1>

          <p className="hero-eyebrow mt-3 font-display text-2xl font-500 text-ink/75 sm:text-3xl">
            Metodo di pianoforte per bambini
          </p>

          <p className="hero-lead mx-auto mt-6 max-w-md font-body text-lg leading-relaxed text-ink/80 lg:mx-0 lg:text-xl">
            Un percorso stimolante e graduale per scoprire il pianoforte,
            pensato per bambini dai 5 anni.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            {/* GSAP anima il wrapper, non il bottone: così la transition CSS di
                .btn-pop (hover/press) non entra in conflitto con l'animazione. */}
            <span className="hero-cta inline-block">
              <BuyButton />
            </span>
            <span className="hero-cta inline-block">
              <a href="#libro" className="btn-pop bg-white !text-ink">
                <BookOpen size={22} weight="bold" aria-hidden />
                Scopri il libro
              </a>
            </span>
          </div>
        </div>

        {/* Copertina */}
        <div className="relative mx-auto w-full max-w-[300px] sm:max-w-sm lg:max-w-[380px]">
          <div className="hero-cover relative">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 rotate-2 rounded-[28px] bg-ink/10"
            />
            <Image
              src="/copertina.jpg"
              alt="Copertina del libro Tasto Matto di Federico Marcucci e Laura Pappalardo: un polpo, un leone e uno scoiattolo attorno a un pianoforte a coda"
              width={1124}
              height={1600}
              priority
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 384px, 300px"
              className="relative -rotate-2 rounded-[28px] border-[5px] border-white shadow-soft transition-transform duration-500 hover:rotate-0"
            />
          </div>
        </div>
      </div>

      {/* Tastiera di pianoforte come divisore verso la sezione successiva */}
      <div className="absolute inset-x-0 bottom-0">
        <PianoKeyboard />
      </div>
    </section>
  );
}

/**
 * Divisore a tastiera di pianoforte che ondeggia, come quella in copertina.
 *
 * Niente viewBox: le unità utente dell'SVG coincidono così con i pixel CSS, i
 * tasti restano della stessa misura a ogni larghezza (invece di stirarsi come
 * con preserveAspectRatio="none") e i pezzi oltre il viewport vengono ritagliati
 * dall'SVG stesso. Da qui MAX_W: disegniamo una tastiera più larga di qualsiasi
 * schermo realistico e lasciamo che sia il ritaglio a deciderne la fine.
 */
function PianoKeyboard() {
  const H = 136; // altezza della fascia: onda (±11) + spessore del nastro + crema
  const MAX_W = 3840;
  const STEP = 16; // passo di campionamento dell'onda

  const WHITE_W = 30;
  const GAP = 2; // fuga scura fra un tasto bianco e l'altro
  const KEY_TOP = 16; // cornice (12) + feltro (4)
  const KEY_H = 72;
  const BODY_H = 96; // spessore del nastro, dal bordo cornice allo zoccolo
  const BLACK_W = 18;
  const BLACK_H = 42;
  const R = 5; // raccordo in punta ai tasti bianchi

  // Perno di rotazione dei tasti: a metà del tasto bianco, non sul suo bordo
  // alto. Ruotando attorno al bordo la punta oscilla il doppio e, dove la
  // curvatura cambia in fretta, i tasti vicini si mangiano la fuga fra loro.
  // Lo usano anche i tasti neri, così la tastiera si piega tutta insieme.
  const PIVOT_Y = KEY_TOP + KEY_H / 2;

  // L'onda: gonfia abbastanza da vedersi, piatta abbastanza da non stortare i
  // tasti (la pendenza massima resta sotto i 7°).
  const AMP = 11;
  const PERIOD = 560;
  const PHASE = -0.6;
  const k = (2 * Math.PI) / PERIOD;

  const waveY = (x: number) => AMP * Math.sin(k * x + PHASE) + 20;
  const waveDeg = (x: number) =>
    (Math.atan(AMP * k * Math.cos(k * x + PHASE)) * 180) / Math.PI;

  /** Polilinea che segue l'onda a una data distanza dal bordo superiore. */
  const edge = (offset: number) => {
    const pts: string[] = [];
    for (let x = 0; x < MAX_W; x += STEP) {
      pts.push(`${x},${(waveY(x) + offset).toFixed(1)}`);
    }
    pts.push(`${MAX_W},${(waveY(MAX_W) + offset).toFixed(1)}`);
    return pts;
  };

  const topEdge = edge(0);
  const bottomEdge = edge(BODY_H);

  // Corpo del nastro: bordo superiore verso destra, poi quello inferiore a
  // ritroso. La crema sotto raccorda l'onda alla sezione successiva.
  const body = `M${topEdge.join("L")}L${[...bottomEdge].reverse().join("L")}Z`;
  const cream = `M${bottomEdge.join("L")}L${MAX_W},${H}L0,${H}Z`;

  const whiteCount = Math.ceil(MAX_W / WHITE_W);
  const whiteKey = `M${-(WHITE_W - GAP) / 2},${KEY_TOP} h${WHITE_W - GAP} V${KEY_TOP + KEY_H - R} a${R},${R} 0 0 1 ${-R},${R} h${-(WHITE_W - GAP - 2 * R)} a${R},${R} 0 0 1 ${-R},${-R} Z`;

  // Confini fra tasti bianchi che ospitano un nero: mancano mi–fa e si–do, da
  // cui i gruppi da 2 e da 3.
  const hasBlack = (i: number) => [1, 2, 4, 5, 6].includes(i % 7);

  // Qualche tasto si abbassa da solo, come se il pianoforte si suonasse: presa
  // sparsa e non periodica, così non si legge lo schema.
  const presses = (i: number) => (i * 7) % 11 < 2;
  // Durata di un ciclo di pressione (s): la tastiera "suona" a questo ritmo.
  const CYCLE = 3.6;

  return (
    <svg
      width="100%"
      height={H}
      className="block"
      aria-hidden
      focusable="false"
    >
      <defs>
        <linearGradient id="pk-black" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A3C73" />
          <stop offset="45%" stopColor="#2E2450" />
          <stop offset="100%" stopColor="#241C3A" />
        </linearGradient>
        <linearGradient id="pk-white" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EFE9DC" />
          <stop offset="18%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>

      {/* Nastro scuro: fa da cornice, riempie le fughe e chiude in basso */}
      <path d={body} fill="#241C3A" />
      {/* Feltro rosso dietro ai tasti */}
      <path
        d={`M${edge(14).join("L")}`}
        fill="none"
        strokeWidth="4"
        className="stroke-cherry"
      />

      {Array.from({ length: whiteCount }, (_, i) => {
        const cx = i * WHITE_W + WHITE_W / 2;
        return (
          <g
            key={`w${i}`}
            transform={`translate(${cx} ${waveY(cx).toFixed(1)}) rotate(${waveDeg(cx).toFixed(2)} 0 ${PIVOT_Y})`}
          >
            <path
              d={whiteKey}
              fill="url(#pk-white)"
              className={presses(i) ? "animate-key-press" : undefined}
              style={
                presses(i)
                  ? { animationDelay: `${(i * 1.7) % CYCLE}s`, animationDuration: `${CYCLE}s` }
                  : undefined
              }
            />
          </g>
        );
      })}

      {Array.from({ length: whiteCount }, (_, i) => i)
        .filter(hasBlack)
        .map((i) => {
          const bx = i * WHITE_W;
          return (
            <g
              key={`b${i}`}
              transform={`translate(${bx} ${waveY(bx).toFixed(1)}) rotate(${waveDeg(bx).toFixed(2)} 0 ${PIVOT_Y})`}
            >
              <rect
                x={-BLACK_W / 2}
                y={KEY_TOP}
                width={BLACK_W}
                height={BLACK_H}
                rx="3"
                fill="url(#pk-black)"
                className={presses(i + 3) ? "animate-key-press" : undefined}
                style={
                  presses(i + 3)
                    ? { animationDelay: `${(i * 2.3) % CYCLE}s`, animationDuration: `${CYCLE}s` }
                    : undefined
                }
              />
            </g>
          );
        })}

      {/* Ombra della cornice sulla radice dei tasti */}
      <path
        d={`M${edge(19).join("L")}`}
        fill="none"
        stroke="#241C3A"
        strokeWidth="6"
        opacity="0.22"
      />
      {/* Raccordo verso la sezione color crema */}
      <path d={cream} className="fill-cream" />
    </svg>
  );
}
