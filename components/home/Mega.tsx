"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Mega() {
  const rootRef = useRef<HTMLElement | null>(null);
  const row1Ref = useRef<HTMLDivElement | null>(null);
  const row2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !rootRef.current) return;

    const ctx = gsap.context(() => {
      // Create a pinned timeline for the Mega section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 1,
        },
      });

      // Animate opacity and movement of text rows as user scrolls through the pinned section
      tl.to([row1Ref.current, row2Ref.current], {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      })
      .to(row1Ref.current, {
        x: -100,
        duration: 1,
        ease: "none",
      }, 0)
      .to(row2Ref.current, {
        x: 100,
        duration: 1,
        ease: "none",
      }, 0);
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative bg-offwhite min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-[1500px] mx-auto px-[4vw]">
        <h2 className="font-display font-extrabold leading-[0.95] tracking-tight text-[clamp(36px,7.5vw,130px)] text-charcoal text-center">
          <div ref={row1Ref} className="opacity-0 translate-y-3 whitespace-nowrap">
            WE BUILD MORE
          </div>
          <div
            ref={row2Ref}
            className="opacity-0 translate-y-7 whitespace-nowrap text-green-2"
          >
            THAN STRUCTURES.
          </div>
        </h2>
      </div>
    </section>
  );
}
