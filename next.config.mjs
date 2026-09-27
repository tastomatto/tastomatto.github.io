/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // GitHub Pages serve solo file statici: `next build` genera il sito in ./out
  output: "export",
  images: {
    // Niente server per l'ottimizzatore di next/image: le immagini in /public
    // vengono servite così come sono.
    unoptimized: true,
  },
};

export default nextConfig;
