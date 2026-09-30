/**
 * Contenuti del sito "Tasto Matto".
 * Modifica qui testi, brani, recensioni e video: le sezioni si aggiornano da sole.
 * I testi segnati con // TODO sono segnaposto da personalizzare con i dati reali.
 */

export const SITE = {
  title: "Tasto Matto",
  tagline: "Metodo di pianoforte per bambini",
  buyLabel: "Acquista il libro",
  email: "tastomatto.edu@gmail.com",
};

/** Dati editoriali, dal colophon del libro. */
export const BOOK = {
  age: "dai 5 anni",
  isbn: "978-1-291-53839-7",
  imprint: "Lulu.com",
  coverArt: "Andrea Benelle",
  copyright: "© 2026 Federico Matteo Marcucci - Laura Pappalardo",
};

export type Store = {
  name: string;
  url: string;
  description: string;
  /** Non ancora in vendita: mostrato come "Presto disponibile", non cliccabile */
  comingSoon?: boolean;
};

/** Negozi in cui si può acquistare il libro, mostrati nel dialog "Acquista". */
export const STORES: { lulu: Store; amazon: Store } = {
  lulu: {
    name: "Lulu",
    url: "https://www.lulu.com/shop/federico-matteo-marcucci-and-laura-pappalardo/tasto-matto/paperback/product-7k5qqkq.html",
    description: "Stampato su richiesta e spedito da Lulu.",
  },
  amazon: {
    name: "Amazon",
    // TODO: inserisci il link diretto alla pagina del libro su Amazon
    url: "https://www.amazon.it/",
    description: "Comodo se acquisti già su Amazon.",
    comingSoon: true,
  },
};


export type Author = {
  name: string;
  /** Curriculum, un paragrafo per voce dell'array */
  bio: string[];
  color: "grape" | "mango" | "cherry" | "ocean" | "bubble";
  initials: string;
  /** Foto quadrata in /public/media (con le sue misure); senza, si usano le iniziali */
  photo?: { src: string; width: number; height: number };
};

export const AUTHORS: Author[] = [
  {
    name: "Federico Matteo Marcucci",
    bio: [
      "Federico Matteo Marcucci è pianista e docente di pianoforte.",
      "Ha conseguito il diploma accademico in pianoforte con il massimo dei voti presso la Scuola Civica di Musica Claudio Abbado di Milano, sotto la guida dei maestri Gabriele Pinamonti, Simone Pionieri, Silva Costanzo, Alberto Intrieri e Ilaria Costantino.",
      "Ha approfondito la propria formazione partecipando a masterclass con i maestri Michele Campanella e Pierluigi Camicia.",
      "Attualmente svolge attività didattica come docente di pianoforte presso l’Accademia Filarmonica Città di Seregno e presso l’Albero della Musica di Rancate.",
    ],
    color: "grape",
    initials: "FM",
    photo: { src: "/media/federico.jpg", width: 600, height: 600 },
  },
  {
    name: "Laura Pappalardo",
    bio: [
      "Laura Pappalardo è pianista, docente di pianoforte, laureata in lettere moderne e laureanda in musicologia.",
      "Appassionata alla musica fin da bambina, dopo aver studiato per anni con Chiara Di Muzio, ha conseguito il diploma accademico in pianoforte presso la Scuola Civica di Musica Claudio Abbado di Milano, sotto la guida dei maestri Eleonora Zullo e Simone Pionieri.",
      "Si è specializzata in didattica musicale e nelle strategie comunicative per l'autismo, partecipando alle masterclass di Giulia Cremaschi Trovesi.",
      "Attualmente svolge attività didattica come docente di pianoforte presso la scuola di musica Ad Libitum di Renate.",
    ],
    color: "mango",
    initials: "LP",
    photo: { src: "/media/laura.jpg", width: 600, height: 600 },
  },
];

export type Track = {
  id: string;
  title: string;
  subtitle?: string;
  src: string;
  color: "grape" | "mango" | "cherry" | "ocean" | "bubble" | "lime";
};

/** Registrazioni dei brani con accompagnamento */
export const PLAY_ALONG: Track[] = [
  { id: "pa1", title: "La marcia dei tastini", subtitle: "Brano 1 · con accompagnamento", src: "/audio/marcia.mp3", color: "cherry" },
  { id: "pa2", title: "Valzer del polpo", subtitle: "Brano 2 · con accompagnamento", src: "/audio/valzer.mp3", color: "grape" },
  { id: "pa3", title: "Il leone che sbadiglia", subtitle: "Brano 3 · con accompagnamento", src: "/audio/leone.mp3", color: "mango" },
  { id: "pa4", title: "Salti sui tasti", subtitle: "Brano 4 · con accompagnamento", src: "/audio/salti.mp3", color: "ocean" },
];

/** Basi audio per improvvisare */
export const IMPROV: Track[] = [
  { id: "im1", title: "Base blues in Do", subtitle: "Improvvisa sui tasti neri", src: "/audio/blues.mp3", color: "ocean" },
  { id: "im2", title: "Groove funky", subtitle: "Tempo medio · 4/4", src: "/audio/funky.mp3", color: "bubble" },
  { id: "im3", title: "Nuvole lente", subtitle: "Atmosfera calma per esplorare", src: "/audio/nuvole.mp3", color: "lime" },
];

export type Activity = {
  id: string;
  kind: "Ascolto" | "Prima vista";
  title: string;
  description: string;
  src?: string; // audio opzionale per gli esercizi di ascolto
  color: "grape" | "mango" | "cherry" | "ocean" | "bubble";
};

/** Attività aggiuntive di ascolto e di prima vista */
export const ACTIVITIES: Activity[] = [
  {
    id: "ac1",
    kind: "Ascolto",
    title: "Indovina la nota",
    description: "Ascolta e riconosci se la melodia sale o scende sui tasti. Un gioco per allenare l'orecchio.",
    src: "/audio/ascolto1.mp3",
    color: "bubble",
  },
  {
    id: "ac2",
    kind: "Ascolto",
    title: "Alto o basso?",
    description: "Due suoni: quale è più acuto? Esercizi brevi per scoprire il registro dello strumento.",
    src: "/audio/ascolto2.mp3",
    color: "grape",
  },
  {
    id: "pv1",
    kind: "Prima vista",
    title: "Leggo e suono",
    description: "Piccoli spartiti da leggere a prima vista, dal più facile al più curioso, per prendere confidenza con il pentagramma.",
    color: "mango",
  },
  {
    id: "pv2",
    kind: "Prima vista",
    title: "Ritmi da battere",
    description: "Schede con ritmi da leggere e battere le mani prima di portarli sui tasti.",
    color: "ocean",
  },
];

export type Review = {
  id: string;
  name: string;
  age: number;
  text: string;
  color: "grape" | "mango" | "cherry" | "ocean" | "bubble";
};

/** Recensioni degli allievi */
export const REVIEWS: Review[] = [
  { id: "r1", name: "Sofia", age: 7, text: "Il mio brano preferito è il Valzer del polpo! Lo suono con la base ed è come essere in un concerto.", color: "grape" },
  { id: "r2", name: "Leo", age: 6, text: "Mi piace tantissimo improvvisare sui tasti neri con il blues. Sembra facile ma sono io che suono!", color: "ocean" },
  { id: "r3", name: "Emma", age: 8, text: "I disegni sono buffissimi e il leone che sbadiglia mi fa ridere ogni volta.", color: "mango" },
  { id: "r4", name: "Matteo", age: 7, text: "Ho imparato a leggere le note giocando. Adesso suono anche per la nonna!", color: "cherry" },
  { id: "r5", name: "Giulia", age: 6, text: "La marcia dei tastini è la prima canzone che ho imparato tutta da sola.", color: "bubble" },
];

export type Video = {
  id: string;
  title: string;
  student: string;
  // URL di embed (YouTube/Vimeo) — TODO: sostituire con i video reali
  embedUrl?: string;
  color: "grape" | "mango" | "cherry" | "ocean" | "bubble";
};

/** Video degli allievi */
export const VIDEOS: Video[] = [
  { id: "v1", title: "La marcia dei tastini", student: "Sofia, 7 anni", color: "cherry" },
  { id: "v2", title: "Valzer del polpo", student: "Matteo, 7 anni", color: "grape" },
  { id: "v3", title: "Improvvisazione blues", student: "Leo, 6 anni", color: "ocean" },
];
