"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const TOTAL_FRAMES = 120;

export default function Immersive() {
  const rootRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const tagRef = useRef<HTMLDivElement | null>(null);
  const line1Ref = useRef<HTMLSpanElement | null>(null);
  const line2Ref = useRef<HTMLSpanElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const root = rootRef.current;
    if (!canvas || !root) return;

    const ctx2d = canvas.getContext("2d");
    if (!ctx2d) return;

    // Preload image frame sequence array
    const images: HTMLImageElement[] = [];
    const frameObj = { frame: 1 };

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/frames/${i}.jpg`;
      images.push(img);
    }

    const renderFrame = () => {
      const currentFrameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(frameObj.frame) - 1)
      );
      const img = images[currentFrameIndex];
      if (img && img.complete) {
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShiftX = (canvas.width - img.width * ratio) / 2;
        const centerShiftY = (canvas.height - img.height * ratio) / 2;

        ctx2d.clearRect(0, 0, canvas.width, canvas.height);
        ctx2d.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShiftX,
          centerShiftY,
          img.width * ratio,
          img.height * ratio
        );
      }
    };

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        renderFrame();
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    if (images[0]) {
      images[0].onload = renderFrame;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=250%",
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
        },
      });

      // 1. Scrub canvas frame sequence
      tl.to(
        frameObj,
        {
          frame: TOTAL_FRAMES,
          snap: "frame",
          ease: "none",
          onUpdate: renderFrame,
        },
        0
      );

      // Darken overlay as user scrolls
      if (overlayRef.current) {
        tl.to(
          overlayRef.current,
          { opacity: 0.8, ease: "power1.inOut" },
          0
        );
      }

      // 2. Reveal text lines smoothly near end of frame sequence
      if (!reduceMotion) {
        const lines = [line1Ref.current, line2Ref.current].filter(Boolean);
        if (lines.length > 0) {
          tl.fromTo(
            lines,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.2, ease: "power3.out", duration: 0.6 }
          );
        }
      }
    }, root);

    return () => {
      window.removeEventListener("resize", handleResize);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="beyond"
      className="relative h-screen overflow-hidden flex items-end bg-neutral-950"
    >
      {/* HTML5 Canvas Frame Sequence Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay for Contrast */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none opacity-40"
      />

      {/* Typography Content */}
      <div className="relative z-10 px-[6vw] pb-[10vh] max-w-[1500px] w-full mx-auto">

        <h2 className="text-offwhite font-display font-medium 
        text-[clamp(38px,8.5vw,120px)] leading-[0.9] tracking-tight
         flex flex-col perspective-1000">
          <span
            ref={line1Ref}
            className="inline-block will-change-transform opacity-0 text-white"
          >
            BEYOND
          </span>
          <span
            ref={line2Ref}
            className="inline-block will-change-transform opacity-0 text-white"
          >
            THE STRUCTURE.
          </span>
        </h2>
      </div>
    </section>
  );
}


