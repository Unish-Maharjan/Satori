"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const TOTAL_FRAMES = 242;

export default function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const line1Ref = useRef<HTMLSpanElement | null>(null);
  const line2Ref = useRef<HTMLSpanElement | null>(null);
  const footRef = useRef<HTMLDivElement | null>(null);

  // Opening Section Refs
  const openingSectionRef = useRef<HTMLElement | null>(null);

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

    const ctx = gsap.context(() => {
      // 1. Hero timeline sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=220%",
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
        },
      });

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

      if (overlayRef.current) {
        tl.to(
          overlayRef.current,
          {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          ">-0.2"
        );
      }

      const textLines = [line1Ref.current, line2Ref.current].filter(Boolean);
      if (textLines.length > 0) {
        tl.to(
          textLines,
          {
            y: "0%",
            duration: 1,
            stagger: 0.25,
            ease: "power4.out",
          },
          ">-0.3"
        );
      }

      if (footRef.current) {
        tl.to(
          footRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          ">-0.2"
        );
      }

      // 2. Opening section pinned scrub timeline with word-by-word stagger
      if (openingSectionRef.current) {
        const words = openingSectionRef.current.querySelectorAll(".word-item");
        if (words.length > 0) {
          const openingTl = gsap.timeline({
            scrollTrigger: {
              trigger: openingSectionRef.current,
              start: "top top",
              end: "+=150%", // Pins section while scrolling words
              pin: true,
              scrub: 0.8,
              anticipatePin: 1,
            },
          });

          openingTl.fromTo(
            words,
            {
              opacity: 0.1,
              y: 30,
              rotateX: -15,
            },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              stagger: 0.1,
              ease: "power2.out",
            }
          );
        }
      }
    }, rootRef);

    return () => {
      window.removeEventListener("resize", handleResize);
      ctx.revert();
    };
  }, []);

  const headingText = "BUILDING FOR GENERATIONS.";
  const paragraphText =
    "SATORI AEC designs and develops with a single measure of success: whether what we build still matters decades from now. We bring architecture, engineering and real estate under one point of view, so every decision — from the first line drawn to the last key handed over — serves the life the place will hold long after we've moved on.";

  return (
    <>
      <section
        ref={rootRef}
        id="hero"
        className="relative h-screen w-full flex flex-col justify-end overflow-hidden bg-neutral-950"
      >
        {/* HTML5 Canvas Frame Sequence */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Vignette Gradient Overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 pointer-events-none opacity-0"
        />

        {/* Hero Content */}
        <div className="relative z-10 px-[6vw] pb-[8vh] max-w-[1500px] w-full mx-auto">
          <h1 className="font-display font-bold text-[#d4af37] leading-[0.94] tracking-tight text-[clamp(44px,8.5vw,135px)] max-w-[16ch]">
            <span className="block overflow-hidden">
              <span ref={line1Ref} className="block translate-y-full will-change-transform">
                WE BUILD MORE
              </span>
            </span>
            <span className="block overflow-hidden">
              <span ref={line2Ref} className="block translate-y-full will-change-transform">
                THAN STRUCTURES
              </span>
            </span>
          </h1>

          <div
            ref={footRef}
            className="flex flex-wrap justify-between items-end mt-12 border-t border-white/20 pt-6 text-offwhite opacity-0 translate-y-4"
          >
            <div className="flex items-center gap-2.5 font-mono text-xs tracking-widest uppercase">
              SCROLL TO EXPLORE
            </div>
            <div className="font-mono text-xs tracking-widest text-[#d4af37] uppercase font-bold">
              SATORI AEC — ARCHITECTURE / REAL ESTATE
            </div>
          </div>
        </div>
      </section>

      {/* Opening Section Pinned with Scrubbed Staggered Word Reveal */}
      <section
        ref={openingSectionRef}
        id="opening"
        className="bg-offwhite min-h-screen flex items-center justify-center py-16 overflow-hidden"
      >
        <div className="max-w-[1500px] w-full mx-auto px-[6vw] grid grid-cols-12 gap-6 items-start">
          <h2 className="col-span-12 md:col-start-2 md:col-span-10 font-display font-bold text-black leading-[0.98] text-[clamp(38px,7vw,104px)] mt-4 md:mt-0 flex flex-wrap gap-x-[0.28em] perspective-1000">
            {headingText.split(" ").map((word, i) => (
              <span key={i} className="word-item inline-block will-change-transform">
                {word}
              </span>
            ))}
          </h2>

          <div className="col-span-12 md:col-start-6 md:col-span-7 mt-6 md:mt-10 max-w-[52ch]">
            <p className="text-[19px] leading-relaxed text-charcoal/80 flex flex-wrap gap-x-[0.25em] perspective-1000">
              {paragraphText.split(" ").map((word, i) => (
                <span key={i} className="word-item inline-block will-change-transform">
                  {word}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
