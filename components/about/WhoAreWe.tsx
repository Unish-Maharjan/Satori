
"use client";

import React, { useRef } from "react";
import Paragraph from "../ui/Paragraph";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAre() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      ".word-item",
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.05,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%",
          scrub: 0.8,
          pin: true,

        },
      }
    );
  }, { scope: containerRef });

  const renderWords = (text: string) =>
    text.split(" ").map((word, i) => (
      <span key={i} className="word-item inline-block opacity-20">
        {word}&nbsp;
      </span>
    ));

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col justify-center items-center bg-primary px-6 py-16 md:px-12 lg:px-20 border-b border-secondary/30"
    >
      <div className="mx-auto max-w-4xl w-full flex flex-col items-center 
      justify-center text-center my-auto">
        {/* Hero Headline with Word Opacity Reveal */}
        <div className="mb-8 lg:mb-12">
          <h2 className="text-3xl text-secondary sm:text-4xl md:text-5xl lg:text-6xl font-medium 
          leading-tight tracking-tight text-center">
            ABOUT US
          </h2>
        </div>

        {/* Description Column with Word Opacity Reveal */}
        <div className="flex flex-col items-center justify-center text-center space-y-6 max-w-3xl mx-auto">
          <Paragraph className="text-base sm:text-lg leading-relaxed text-third text-center">
            {renderWords(
              "SATORI AEC brings together planning, architecture, engineering, and construction under one vision. We believe exceptional spaces begin long before construction starts — with a clear understanding of the land, the people, and the purpose behind every project."
            )}
          </Paragraph>

          <Paragraph className="text-base sm:text-lg leading-relaxed text-third text-center">
            {renderWords(
              "From initial feasibility studies to structural engineering and final turn-key delivery, our integrated approach removes friction, ensures transparency, and elevates quality at every stage."
            )}
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
