"use client";

/**
 * Note musicali decorative che galleggiano sullo sfondo di una sezione.
 * Puramente decorative: aria-hidden.
 */

const NOTES = ["♪", "♫", "♩", "♬", "♪", "♫"];

type Props = {
  className?: string;
  count?: number;
};

export default function FloatingNotes({ className = "", count = 6 }: Props) {
  const items = Array.from({ length: count }, (_, i) => i);
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {items.map((i) => {
        const left = (i * 97 + 13) % 100;
        const size = 18 + ((i * 7) % 26);
        const delay = (i % 5) * 0.7;
        const dur = 5 + (i % 4);
        const top = (i * 53 + 7) % 90;
        return (
          <span
            key={i}
            className="absolute animate-float select-none text-ink/10"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              fontSize: `${size}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${dur}s`,
            }}
          >
            {NOTES[i % NOTES.length]}
          </span>
        );
      })}
    </div>
  );
}
