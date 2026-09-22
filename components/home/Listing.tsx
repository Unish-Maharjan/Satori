"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

export default function Listing() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const textContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header text entrance reveal
      if (textContentRef.current) {
        gsap.fromTo(
          textContentRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const storyHouses = [
    {
      src: "/images/house1.jpg",
      title: "Hillside Modern Villa",
      location: "HOLLYWOOD HILLS, CA",
      year: "2024",
      specs: "4 BEDS / 5.5 BATHS",
    },
    {
      src: "/images/house2.jpg",
      title: "Canopy Edge Residence",
      location: "ASPEN, CO",
      year: "2023",
      specs: "6 BEDS / 7 BATHS",
    },
    {
      src: "/images/house3.jpg",
      title: "Heritage Bay Estate",
      location: "MALIBU, CA",
      year: "2024",
      specs: "5 BEDS / 6 BATHS",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="story"
      className="bg-offwhite py-24 overflow-hidden"
    >
      <div className="max-w-[1500px] w-full mx-auto px-[6vw]">
        {/* Header & Text Content */}
        <div
          ref={textContentRef}
          className="grid grid-cols-12 gap-6 items-end mb-16"
        >
          <div className="col-span-12 lg:col-span-7">
            <span className="font-mono text-xs tracking-widest text-[#d4af37] uppercase font-bold block mb-3">
              FEATURED PORTFOLIO
            </span>
            <h2 className="font-display font-extrabold text-charcoal leading-[1.02] text-[clamp(32px,4.5vw,58px)]">
              WE THINK BEYOND <span className="text-primary">THE BUILDING.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[17px] leading-relaxed text-charcoal/80">
              A structure is the visible part of a longer story — the land it sits on,
              the life it enables, and the enduring value it holds for generations to come.
            </p>
          </div>
        </div>

        {/* 3 House Showcase Cards - Clean Human-Designed Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {storyHouses.map((house, idx) => (
            <article
              key={idx}
              className="flex flex-col bg-white rounded-xl overflow-hidden border border-black/8 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full bg-neutral-100 overflow-hidden">
                <Image
                  src={house.src}
                  alt={house.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white font-mono text-[11px] px-2.5 py-1 rounded">
                  {house.year}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-charcoal/60 uppercase tracking-wider mb-2">
                    <span>{house.location}</span>
                    <span className="text-[#d4af37] font-semibold">{house.specs}</span>
                  </div>

                  <h3 className="font-display font-bold text-charcoal text-xl leading-snug">
                    {house.title}
                  </h3>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-xs font-mono text-charcoal/70">
                  <span>EXPLORE PROJECT</span>
                  <span className="text-sm font-bold text-primary">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}





