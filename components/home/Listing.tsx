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
      specs: "$200k",
    },
    {
      src: "/images/house2.jpg",
      title: "Canopy Edge Residence",
      location: "ASPEN, CO",
      year: "2023",
      specs: "$100k",
    },
    {
      src: "/images/house3.jpg",
      title: "Heritage Bay Estate",
      location: "MALIBU, CA",
      year: "2024",
      specs: "$300k",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="story"
      className="bg-[#163e2f] pt-24 overflow-hidden"
    >
      <div className="max-w-[1500px] w-full mx-auto px-[6vw]">
        {/* Header & Text Content */}
        <div
          ref={textContentRef}
          className="grid grid-cols-12 gap-6 items-end mb-16"
        >
          <div className="col-span-12 lg:col-span-7">
            <h2 className="font-display font-medium text-[#dca734] leading-[1.02]
            text-[clamp(30px,4vw,50px)]">
              WE THINK BEYOND <span className="text-primary">THE BUILDING.</span>
            </h2>
          </div>
        </div>

        {/* 3 House Showcase Cards - Clean Human-Designed Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {storyHouses.map((house, idx) => (
            <article
              key={idx}
              className="flex flex-col text-black bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3]
               bg-neutral-100 overflow-hidden">
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
                    <span className="text-black font-semibold">{house.specs}</span>
                  </div>

                  <h3 className="font-display font-bold text-[#163e2f] text-xl leading-snug">
                    {house.title}
                  </h3>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-xs font-mono text-charcoal/70">
                  <a
              href="#about"
              className="inline-flex items-center justify-center px-4 py-2 bg-[#1e523e] text-white
               font-medium text-sm rounded-sm hover:bg-[#163e2f] transition-colors">
              Explore Project
            </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}





