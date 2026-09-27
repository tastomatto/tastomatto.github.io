/**
 * Il titolo del libro dentro il testo corrente. Il testo ufficiale lo scrive
 * sempre in maiuscolo: qui prende anche il carattere del titolo in hero.
 * Il colore si eredita, così funziona anche sul footer scuro.
 */
export default function BookTitle({ className = "" }: { className?: string }) {
  return (
    <span
      className={`whitespace-nowrap font-title font-extrabold uppercase tracking-[0.03em] ${className}`}
    >
      Tasto Matto
    </span>
  );
}
