import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BOOK, SITE } from "@/lib/data";
import { PianoMark } from "@/components/Nav";

export const metadata: Metadata = {
  title: `Privacy policy – ${SITE.title}`,
  description: `Informativa sul trattamento dei dati personali del sito ${SITE.title}.`,
};

const UPDATED = "30 settembre 2026";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <header className="mx-auto flex max-w-3xl items-center justify-between px-4 py-6">
        <a href="/" className="flex items-center gap-2">
          <PianoMark />
          <span className="font-display text-xl font-700">{SITE.title}</span>
        </a>
        <a
          href="/"
          className="font-body text-ink/70 transition-colors hover:text-cherry"
        >
          ← Torna al sito
        </a>
      </header>

      <main className="mx-auto max-w-3xl px-4 pb-20 pt-6 font-body leading-relaxed text-ink/80">
        <h1 className="font-display text-4xl font-700 leading-tight text-ink sm:text-5xl">
          Privacy policy
        </h1>
        <p className="mt-2 text-sm text-ink/60">
          Ultimo aggiornamento: {UPDATED}
        </p>

        <p className="mt-8">
          Questa pagina descrive come vengono trattati i dati personali di chi
          visita questo sito, ai sensi dell’art. 13 del Regolamento (UE)
          2016/679 (“GDPR”). In breve: il sito non usa cookie di profilazione né
          strumenti di statistica, e non raccoglie dati tramite moduli online.
        </p>

        <Section title="Titolari del trattamento">
          <p>
            Federico Matteo Marcucci e Laura Pappalardo, autori di{" "}
            {SITE.title}. Contatto:{" "}
            <Mail />.
          </p>
        </Section>

        <Section title="Quali dati trattiamo">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-ink">Dati di navigazione.</strong> Il
              sito è ospitato su GitHub Pages (GitHub, Inc.). Come ogni server
              web, GitHub registra automaticamente alcuni dati tecnici delle
              visite (ad esempio indirizzo IP, data e ora, pagina richiesta,
              tipo di browser) per garantire il funzionamento e la sicurezza
              del servizio. Noi non abbiamo accesso a questi dati e non li
              usiamo per identificare i visitatori.
            </li>
            <li>
              <strong className="text-ink">Dati che ci invii tu.</strong> Il
              modulo “Contatti” non invia nulla dal sito: apre il tuo programma
              di posta con un messaggio già compilato. Se decidi di scriverci,
              riceviamo il tuo indirizzo email, il nome e quanto scrivi nel
              messaggio.
            </li>
          </ul>
        </Section>

        <Section title="Perché li trattiamo e su quale base">
          <p>
            I dati che ci invii via email servono solo a rispondere alla tua
            richiesta (base giuridica: esecuzione di misure richieste
            dall’interessato, art. 6.1.b GDPR, e nostro legittimo interesse a
            gestire la corrispondenza, art. 6.1.f). I dati di navigazione sono
            trattati da GitHub per erogare il sito in modo sicuro (legittimo
            interesse, art. 6.1.f). Non inviamo newsletter e non usiamo i tuoi
            dati per finalità di marketing.
          </p>
        </Section>

        <Section title="Con chi li condividiamo">
          <p>I dati non vengono venduti né ceduti a terzi. Sono coinvolti solo:</p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <strong className="text-ink">GitHub, Inc.</strong> (hosting del
              sito) –{" "}
              <Ext href="https://docs.github.com/it/site-policy/privacy-policies/github-general-privacy-statement">
                informativa privacy di GitHub
              </Ext>
              ;
            </li>
            <li>
              <strong className="text-ink">Google</strong> (Gmail, casella su
              cui riceviamo le email) –{" "}
              <Ext href="https://policies.google.com/privacy?hl=it">
                informativa privacy di Google
              </Ext>
              .
            </li>
          </ul>
          <p className="mt-2">
            Questi fornitori possono trattare dati anche negli Stati Uniti, sulla
            base delle garanzie previste dal GDPR (EU-US Data Privacy Framework
            e/o clausole contrattuali standard).
          </p>
        </Section>

        <Section title="Per quanto tempo">
          <p>
            Conserviamo le email per il tempo necessario a gestire la tua
            richiesta ed eventuali scambi successivi; puoi chiederci in
            qualsiasi momento di cancellarle. I dati di navigazione sono
            conservati da GitHub secondo le proprie policy.
          </p>
        </Section>

        <Section title="Acquisto del libro">
          <p>
            Il libro si acquista su negozi esterni (ad esempio Lulu). I dati
            inseriti durante l’acquisto sono trattati da quei negozi secondo le
            loro informative: noi non li riceviamo.
          </p>
        </Section>

        <Section title="Cookie">
          <p>
            Questo sito non utilizza cookie di profilazione, né cookie o
            strumenti di statistica di terze parti. Font e immagini sono
            serviti direttamente dal sito, senza richieste a servizi esterni.
          </p>
        </Section>

        <Section title="I tuoi diritti">
          <p>
            Puoi chiederci in qualsiasi momento di accedere ai tuoi dati, di
            correggerli o cancellarli, di limitarne il trattamento, di opporti o
            di riceverli in formato portabile (artt. 15–22 GDPR), scrivendo a{" "}
            <Mail />. Hai anche il diritto di proporre reclamo al{" "}
            <Ext href="https://www.garanteprivacy.it/">
              Garante per la protezione dei dati personali
            </Ext>
            .
          </p>
        </Section>

        <p className="mt-12 border-t border-ink/10 pt-6 text-sm text-ink/50">
          {BOOK.copyright}
        </p>
      </main>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl font-700 text-ink">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function Mail() {
  return (
    <a
      href={`mailto:${SITE.email}`}
      className="font-600 text-cherry-dark underline underline-offset-2"
    >
      {SITE.email}
    </a>
  );
}

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-cherry-dark underline underline-offset-2"
    >
      {children}
    </a>
  );
}
