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
          href="#hero"
          className="reveal inline-flex items-center gap-3.5 border border-offwhite px-8 py-[18px] mt-10 font-mono text-[13px] tracking-wide2 transition-colors duration-300 hover:bg-offwhite hover:text-green"
        >
          CONTACT US <span>→</span>
        </a>
      </div>
    </section>
  );
}
