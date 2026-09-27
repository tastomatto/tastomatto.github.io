"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ReactNode;
  className?: string;
  /** Ritardo a cascata in secondi */
  delay?: number;
  /** Direzione di entrata */
  from?: "up" | "down" | "left" | "right" | "scale";
  as?: "div" | "section" | "li" | "article";
};

const OFFSETS: Record<NonNullable<Props["from"]>, gsap.TweenVars> = {
  up: { y: 48 },
  down: { y: -48 },
  left: { x: -48 },
  right: { x: 48 },
  scale: { scale: 0.85 },
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  from = "up",
  as = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Rispetta chi preferisce meno animazioni
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, ...OFFSETS[from] },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, from]);

  const Tag = as as any;
  return (
    <Tag ref={ref} className={`reveal-init ${className}`}>
      {children}
    </Tag>
  );
}
