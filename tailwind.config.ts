import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette presa dalla copertina di "Tasto Matto"
        lime: {
          DEFAULT: "#BFD73A",
          light: "#D3E85C",
          dark: "#A6C022",
        },
        grape: {
          DEFAULT: "#8A63B8",
          light: "#A784D6",
          dark: "#6E4B99",
        },
        mango: {
          DEFAULT: "#FF9A1F",
          light: "#FFB84D",
          dark: "#F27C00",
        },
        cherry: {
          DEFAULT: "#E5382B",
          light: "#F35A4E",
          dark: "#C22A1F",
        },
        ocean: {
          DEFAULT: "#2E5A9C",
          light: "#3E79C9",
          dark: "#22447A",
        },
        bubble: {
          DEFAULT: "#F0479A",
          light: "#F773B4",
          dark: "#D12E7F",
        },
        cream: "#FFFBF0",
        ink: "#241C3A",
      },
      fontFamily: {
        display: ["var(--font-fredoka)", "system-ui", "sans-serif"],
        body: ["var(--font-nunito)", "system-ui", "sans-serif"],
        title: ["var(--font-baloo)", "system-ui", "cursive"],
      },
      boxShadow: {
        pop: "0 8px 0 0 rgba(36,28,58,0.18)",
        "pop-lg": "0 14px 0 0 rgba(36,28,58,0.16)",
        soft: "0 20px 45px -20px rgba(36,28,58,0.45)",
      },
      borderRadius: {
        blob: "42% 58% 63% 37% / 41% 44% 56% 59%",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        spinslow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        // Il tasto sta fermo quasi tutto il ciclo e si abbassa un attimo: sono
        // i ritardi sfalsati dei singoli tasti a creare il motivo.
        "key-press": {
          "0%, 88%, 100%": { transform: "translateY(0)" },
          "92%, 96%": { transform: "translateY(3.5px)" },
        },
      },
      animation: {
        wiggle: "wiggle 2.5s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "bounce-slow": "bounce-slow 3s ease-in-out infinite",
        spinslow: "spinslow 18s linear infinite",
        "key-press": "key-press 3.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
