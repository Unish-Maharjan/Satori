"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useReveal } from "@/lib/useReveal";
import Image from "next/image";

export default function FinalCTA() {
  const revealRef = useReveal<HTMLElement>();
  


  return (
    <section
      ref={revealRef}
      id="final-cta"
      className="relative bg-[#163e2f] text-offwhite min-h-screen flex 
      flex-col justify-center overflow-hidden"
    >
      {/* Background Satori fav logo (transparent behind text) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 pointer-events-none z-[1]
       w-[min(90vw,850px)] h-[min(90vw,850px)] 
      flex items-center justify-center">
        <Image
          src="/logo/satori_fav.png"
          width={900}
          height={900}
          alt="Satori Logo Watermark"
          className="object-contain w-full h-full"
        />
      </div>

      <div className="relative z-[2] max-w-[1500px] mx-auto px-[6vw] text-center">
        <h2 className="reveal text-[#e59f30] font-display font-medium text-[clamp(44px,9vw,140px)] leading-[0.95] tracking-tight">
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
            font-display text-xs font-medium tracking-wider 
            uppercase shadow-md 
            transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>CONTACT US</span>
          </a>
      </div>
    </section>
  );
}
