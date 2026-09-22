"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useReveal } from "@/lib/useReveal";

export default function FinalCTA() {
  const revealRef = useReveal<HTMLElement>();
  const markRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !revealRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(markRef.current, {
        y: -90,
        scrollTrigger: { trigger: revealRef.current, start: "top bottom", end: "bottom bottom", scrub: true },
      });
    }, revealRef);

    return () => ctx.revert();
  }, [revealRef]);

  return (
    <section
      ref={revealRef}
      id="final-cta"
      className="relative bg-green text-offwhite min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <svg
        ref={markRef}
        viewBox="0 0 200 200"
        className="absolute left-1/2 -bottom-[10vh] -translate-x-1/2 w-[min(70vw,760px)] text-[#e59f30] opacity-[0.18]"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M 100,20 L 190,180 L 145,180 L 100,90 L 55,180 L 10,180 Z"
        />
      </svg>

      <div className="relative z-[2] max-w-[1500px] mx-auto px-[6vw] text-center">
       <h2 className="reveal text-[#e59f30] font-display font-extrabold text-[clamp(52px,11vw,168px)] leading-[0.9] tracking-tight">
          LET&apos;S BUILD
          <br />
          WHAT&apos;S NEXT.
        </h2>

        <p className="reveal mt-8 text-lg text-offwhite/80">
          Have an idea, opportunity or project in mind?
        </p>

         <a
            href=""
            className="group hidden md:inline-flex items-center gap-2.5 px-5 py-2.5 
            mt-7 text-black
            bg-gradient-to-r from-[#d4af37] to-[#e59f30] text-primary
            font-mono text-xs font-medium tracking-wider 
            uppercase shadow-md 
            transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>CONTACT US</span>
          </a>
      </div>
    </section>
  );
}
