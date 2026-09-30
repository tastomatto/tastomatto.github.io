"use client";

import Image from "next/image";
import {
  createContext,
  useCallback,
  useContext,
  useRef,
  type ReactNode,
} from "react";
import {
  ArrowUpRight,
  HandHeart,
  Heart,
  ShoppingBag,
  X,
} from "@phosphor-icons/react";
import { SITE, STORES, type Store } from "@/lib/data";

const BuyContext = createContext<() => void>(() => {});

/**
 * Tiene un unico <dialog> per tutta la pagina: qualsiasi <BuyButton> lo apre.
 * showModal() gestisce già focus, tasto Esc e inerzia del resto della pagina.
 */
export function BuyProvider({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);

  const open = useCallback(() => ref.current?.showModal(), []);
  const close = () => ref.current?.close();

  return (
    <BuyContext.Provider value={open}>
      {children}

      <dialog
        ref={ref}
        aria-labelledby="buy-title"
        aria-describedby="buy-desc"
        // Un click sul backdrop arriva al <dialog> stesso: chiude.
        onClick={(e) => e.target === e.currentTarget && close()}
        className="buy-dialog m-auto w-[calc(100%-2rem)] max-w-lg rounded-[28px] bg-cream p-0 text-ink shadow-soft backdrop:bg-ink/55 backdrop:backdrop-blur-sm"
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <Image
              src="/copertina.jpg"
              alt=""
              width={96}
              height={132}
              className="hidden w-16 shrink-0 -rotate-3 rounded-xl border-[3px] border-white shadow-pop sm:block"
            />
            <div className="flex-1">
              <h2
                id="buy-title"
                className="font-display text-3xl font-700 leading-tight"
              >
                Dove vuoi acquistarlo?
              </h2>
              <p id="buy-desc" className="mt-1 font-body text-ink/70">
                {SITE.title} è disponibile su Lulu, e presto anche su Amazon.
              </p>
            </div>
            <button
              onClick={close}
              aria-label="Chiudi"
              className="-mr-2 -mt-2 grid h-11 w-11 shrink-0 place-items-center rounded-full text-ink/60 transition-colors hover:bg-ink/5 hover:text-ink focus:outline-none focus-visible:ring-4 focus-visible:ring-cherry/40"
            >
              <X size={22} weight="bold" />
            </button>
          </div>

          <div className="mt-6 grid gap-3">
            <StoreLink store={STORES.lulu} recommended />
            <StoreLink store={STORES.amazon} />
          </div>

          <div className="mt-5 flex gap-3 rounded-2xl bg-lime-light/35 p-4">
            <HandHeart
              size={24}
              weight="duotone"
              className="mt-0.5 shrink-0 text-lime-dark"
              aria-hidden
            />
            <p className="font-body text-sm leading-relaxed text-ink/75">
              <strong className="font-700 text-ink">Perché Lulu?</strong>{" "}
              {SITE.title} è pubblicato con Lulu: scegliendolo, gran parte di
              ciò che spendi arriva direttamente agli autori e li aiuta a
              continuare a scrivere musica per i più piccoli.
            </p>
          </div>
        </div>
      </dialog>
    </BuyContext.Provider>
  );
}

function StoreLink({
  store,
  recommended = false,
}: {
  store: Store;
  recommended?: boolean;
}) {
  if (store.comingSoon) {
    return (
      <div className="flex items-center gap-4 rounded-2xl border-[3px] border-dashed border-ink/10 bg-white/40 p-4 sm:p-5">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-display text-2xl font-700 text-ink/50">
              {store.name}
            </span>
            <span className="inline-flex items-center rounded-full bg-ink/5 px-2.5 py-0.5 font-display text-sm font-600 text-ink/60">
              Presto disponibile
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <a
      href={store.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-4 rounded-2xl border-[3px] p-4 transition-all hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-cherry/40 active:translate-y-0 sm:p-5 ${
        recommended
          ? "border-cherry bg-white shadow-pop"
          : "border-ink/10 bg-white/60 hover:border-ink/20"
      }`}
    >
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-display text-2xl font-700">{store.name}</span>
          {recommended && (
            <span className="inline-flex items-center gap-1 rounded-full bg-cherry/10 px-2.5 py-0.5 font-display text-sm font-600 text-cherry-dark">
              <Heart size={14} weight="fill" aria-hidden />
              Sostiene di più gli autori
            </span>
          )}
        </div>
        <p className="mt-0.5 font-body text-sm text-ink/65">
          {store.description}
        </p>
      </div>
      <span
        className={`grid h-11 w-11 shrink-0 place-items-center rounded-full transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
          recommended ? "bg-cherry text-white" : "bg-ink/5 text-ink"
        }`}
      >
        <ArrowUpRight size={20} weight="bold" aria-hidden />
      </span>
    </a>
  );
}

type BuyButtonProps = {
  className?: string;
  /** Mostra l'icona a sinistra dell'etichetta */
  icon?: boolean;
  /** Sotto i 640px mostra solo "Acquista", per stare nella barra del menu */
  compact?: boolean;
};

/** Pulsante che apre il dialog di acquisto. Unico CTA d'acquisto del sito. */
export function BuyButton({
  className = "",
  icon = true,
  compact = false,
}: BuyButtonProps) {
  const open = useContext(BuyContext);
  return (
    <button
      type="button"
      onClick={open}
      aria-haspopup="dialog"
      className={`btn-pop bg-cherry ${className}`}
    >
      {icon && <ShoppingBag size={22} weight="bold" aria-hidden />}
      {compact ? (
        <span>
          Acquista<span className="hidden sm:inline"> il libro</span>
        </span>
      ) : (
        SITE.buyLabel
      )}
    </button>
  );
}
