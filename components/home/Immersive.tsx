"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Immersive() {
  const rootRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const tagRef = useRef<HTMLDivElement | null>(null);
  const line1Ref = useRef<HTMLSpanElement | null>(null);
  const line2Ref = useRef<HTMLSpanElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!rootRef.current) return;

    if (reduceMotion) {
      if (line1Ref.current) line1Ref.current.style.opacity = "1";
      if (line2Ref.current) line2Ref.current.style.opacity = "1";
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "+=160%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // 1. Zoom in background image smoothly
      if (bgRef.current) {
        tl.fromTo(
          bgRef.current,
          { scale: 1 },
          { scale: 1.25, ease: "power2.inOut", duration: 1 }
        );
      }

      // slightly darken overlay during zoom for contrast
      if (overlayRef.current) {
        tl.to(
          overlayRef.current,
          { opacity: 0.75, ease: "power1.inOut", duration: 0.5 },
          "<"
        );
      }

      // 2. Reveal Tag -> Lines -> Subtext

      const lines = [line1Ref.current, line2Ref.current].filter(Boolean);
      if (lines.length > 0) {
        tl.fromTo(
          lines,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.3, ease: "power3.out", duration: 0.8 },
          ">-0.2"
        );
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="beyond"
      className="relative h-screen overflow-hidden flex items-end bg-neutral-950"
    >
      {/* Background Image Container */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url('/images/BeyondStructure.jpg')`,
        }}
      />

      {/* Dark Overlay for High Contrast */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none opacity-60"
      />

      {/* Typography Content */}
      <div className="relative z-10 px-[6vw] pb-[10vh] max-w-[1500px] w-full mx-auto">
        <div
          ref={tagRef}
          className="font-mono text-xs tracking-widest text-[#d4af37] uppercase font-bold mb-4 opacity-0"
        >
          CONCEPT & VISION
        </div>

        <h2 className="text-offwhite font-display font-extrabold text-[clamp(46px,9.5vw,140px)] leading-[0.9] tracking-tight flex flex-col perspective-1000">
          <span
            ref={line1Ref}
            className="inline-block will-change-transform opacity-0 text-offwhite"
          >
            BEYOND
          </span>
          <span
            ref={line2Ref}
            className="inline-block will-change-transform opacity-0 text-[#d4af37]"
          >
            THE STRUCTURE.
          </span>
        </h2>

        <p
          ref={descRef}
          className="mt-6 text-[18px] text-offwhite/80 max-w-[48ch] leading-relaxed opacity-0"
        >
          Designing spaces that transcend raw materials — creating timeless environments where human experience and architectural form unite.
        </p>
      </div>
    </section>
  );
}


