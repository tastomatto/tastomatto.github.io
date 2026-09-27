"use client";

import { useEffect, useRef, useState } from "react";

const COLOR: Record<string, { bg: string; bar: string; ring: string }> = {
  grape: { bg: "bg-grape", bar: "bg-grape", ring: "focus-visible:ring-grape" },
  mango: { bg: "bg-mango", bar: "bg-mango", ring: "focus-visible:ring-mango" },
  cherry: { bg: "bg-cherry", bar: "bg-cherry", ring: "focus-visible:ring-cherry" },
  ocean: { bg: "bg-ocean", bar: "bg-ocean", ring: "focus-visible:ring-ocean" },
  bubble: { bg: "bg-bubble", bar: "bg-bubble", ring: "focus-visible:ring-bubble" },
  lime: { bg: "bg-lime-dark", bar: "bg-lime-dark", ring: "focus-visible:ring-lime-dark" },
};

function fmt(t: number) {
  if (!isFinite(t)) return "0:00";
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

type Props = {
  title: string;
  subtitle?: string;
  src: string;
  color?: keyof typeof COLOR;
};

export default function AudioPlayer({
  title,
  subtitle,
  src,
  color = "grape",
}: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [cur, setCur] = useState(0);
  const [dur, setDur] = useState(0);
  const [error, setError] = useState(false);
  const c = COLOR[color] ?? COLOR.grape;

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => setCur(a.currentTime);
    const onMeta = () => setDur(a.duration);
    const onEnd = () => {
      setPlaying(false);
      setCur(0);
    };
    const onErr = () => setError(true);
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("loadedmetadata", onMeta);
    a.addEventListener("ended", onEnd);
    a.addEventListener("error", onErr);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("loadedmetadata", onMeta);
      a.removeEventListener("ended", onEnd);
      a.removeEventListener("error", onErr);
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a || error) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play().then(
        () => setPlaying(true),
        () => setError(true)
      );
    }
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const a = audioRef.current;
    if (!a) return;
    const t = Number(e.target.value);
    a.currentTime = t;
    setCur(t);
  };

  const pct = dur ? (cur / dur) * 100 : 0;

  return (
    <div className="card-toon flex items-center gap-4 p-4 transition-transform hover:-translate-y-1">
      <audio ref={audioRef} src={src} preload="metadata" />

      <button
        onClick={toggle}
        disabled={error}
        aria-label={playing ? `Pausa ${title}` : `Riproduci ${title}`}
        className={`grid h-14 w-14 shrink-0 place-items-center rounded-full text-2xl text-white shadow-pop transition-transform active:translate-y-1 active:shadow-none focus:outline-none focus-visible:ring-4 ${c.bg} ${c.ring} ${
          error ? "opacity-40" : "hover:scale-105"
        }`}
      >
        {error ? "🔇" : playing ? "❚❚" : "▶"}
      </button>

      <div className="min-w-0 flex-1">
        <p className="truncate font-display text-lg font-600 leading-tight text-ink">
          {title}
        </p>
        {subtitle && (
          <p className="truncate font-body text-sm text-ink/55">{subtitle}</p>
        )}

        {error ? (
          <p className="mt-1 font-body text-xs font-600 text-ink/40">
            Traccia in arrivo: aggiungi il file audio in {src}
          </p>
        ) : (
          <div className="mt-2 flex items-center gap-3">
            <span className="w-9 text-right font-body text-xs font-600 tabular-nums text-ink/50">
              {fmt(cur)}
            </span>
            <div className="relative h-2.5 flex-1">
              <div className="absolute inset-0 rounded-full bg-ink/10" />
              <div
                className={`absolute inset-y-0 left-0 rounded-full ${c.bar}`}
                style={{ width: `${pct}%` }}
              />
              <input
                type="range"
                min={0}
                max={dur || 0}
                step={0.1}
                value={cur}
                onChange={seek}
                aria-label={`Avanzamento ${title}`}
                className="absolute inset-0 w-full cursor-pointer appearance-none bg-transparent"
              />
            </div>
            <span className="w-9 font-body text-xs font-600 tabular-nums text-ink/50">
              {fmt(dur)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
