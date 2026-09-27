"use client";

import { useState, type FormEvent } from "react";
import { PaperPlaneTilt, WarningCircle } from "@phosphor-icons/react";
import Reveal from "./Reveal";
import { SITE } from "@/lib/data";

/**
 * Nessun backend: il modulo compone un link mailto: con oggetto e testo già
 * pronti e apre l'app di posta di chi scrive, che invia da lì.
 */
export default function ContactSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      setError(true);
      return;
    }
    const who = name.trim();
    const subject = who ? `Tasto Matto - messaggio da ${who}` : "Tasto Matto - messaggio dal sito";
    const body = who ? `${message.trim()}\r\n\r\n${who}` : message.trim();
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const field =
    "w-full rounded-2xl border-[3px] border-ink/15 bg-white px-4 py-3 font-body text-lg text-ink placeholder:text-ink/50 transition-colors focus:border-ink focus:outline-none";

  return (
    <section id="contatti" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal className="grid gap-10 rounded-[28px] bg-lime p-6 sm:p-12 md:grid-cols-[0.8fr_1fr] md:gap-12">
          <div>
            <h2 className="font-display text-4xl font-700 leading-[1.05] text-ink sm:text-5xl">
              Scrivici
            </h2>
            <p className="mt-4 max-w-[40ch] font-body text-lg leading-relaxed text-ink/80">
              Hai domande sul metodo, sul libro o su come usarlo a lezione?
              Scrivici, ti risponderemo il prima possibile.
            </p>
            <p className="mt-6 font-body text-ink/70">
              Oppure all’indirizzo{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="break-all font-700 text-ink underline decoration-ink/30 decoration-2 underline-offset-4 transition-colors hover:decoration-ink"
              >
                {SITE.email}
              </a>
            </p>
          </div>

          <form onSubmit={submit} noValidate className="grid gap-5">
            <div className="grid gap-2">
              <label htmlFor="contact-name" className="font-display text-lg font-600 text-ink">
                Il tuo nome
              </label>
              <input
                id="contact-name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={field}
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="contact-message" className="font-display text-lg font-600 text-ink">
                Messaggio
              </label>
              <textarea
                id="contact-message"
                rows={5}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (error && e.target.value.trim()) setError(false);
                }}
                aria-invalid={error}
                aria-describedby={error ? "contact-error" : undefined}
                className={`${field} resize-y ${error ? "!border-cherry-dark" : ""}`}
              />
              {error && (
                // Testo in ink: il rosso sul lime non avrebbe contrasto sufficiente
                <p id="contact-error" className="flex items-center gap-2 font-body font-700 text-ink">
                  <WarningCircle size={20} weight="fill" className="shrink-0 text-cherry-dark" aria-hidden />
                  Scrivi un messaggio prima di inviare.
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <button type="submit" className="btn-pop bg-ink">
                <PaperPlaneTilt size={22} weight="bold" aria-hidden />
                Scrivi l’email
              </button>
              {/* <p className="font-body text-sm text-ink/70">
                Si apre la tua app di posta con il messaggio già pronto.
              </p> */}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
