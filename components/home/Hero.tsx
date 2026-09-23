"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import Button from "../ui/Button";

export default function Hero() {
  const heroContentRef = useRef<HTMLDivElement | null>(null);
  const openingSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Clean entrance animation for Hero content
      if (heroContentRef.current) {
        gsap.fromTo(
          heroContentRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
          }
        );
      }

      // Opening section pinned scrub timeline with word-by-word stagger
      if (openingSectionRef.current) {
        const words = openingSectionRef.current.querySelectorAll(".word-item");
        if (words.length > 0) {
          gsap.fromTo(
            words,
            {
              opacity: 0.15,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              stagger: 0.25,
              ease: "power2.out",
              scrollTrigger: {
                trigger: openingSectionRef.current,
                start: "top top",
                end: "+=120%",
                pin: true,
                scrub: 0.2,
                anticipatePin: 1,
              },
            }
          );
        }
      }
    });

    return () => ctx.revert();
  }, []);

  const headingText = "REAL ESTATE,BUILT DIFFERENT";
  const paragraphText =
    "SATORI AEC designs and develops with a single measure of success: whether what we build still matters decades from now. We bring architecture, engineering and real estate under one point of view, so every decision — from the first line drawn to the last key handed over — serves the life the place will hold long after we've moved on.";

  const heroStats = [
    {
      icon: (
        <svg className="w-5 h-5 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      value: "300+",
      label: "Clients Served",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      value: "400+",
      label: "Projects Delivered",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      value: "50+",
      label: "Prime Locations",
    },
  ];

  return (
    <>
      {/* Primary Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen min-h-[100svh] w-full flex flex-col justify-center items-center overflow-hidden pt-28 pb-16 bg-neutral-900"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero1.jpeg"
            alt="PropXperts Architecture"
            fill
            priority
            className="object-top object-cover"
          />
        </div>


        {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/10"></div>

        {/* Hero Content Box */}
        <div
          ref={heroContentRef}
          className="relative z-10 max-w-[1000px] w-full mx-auto px-6 sm:px-[6vw] text-center flex flex-col items-center my-auto"
        >
          <div className="w-full flex flex-col items-center justify-center">
            {/* Main Title */}
            <h1 className="font-display font-medium text-offwhite text-[clamp(28px,4.5vw,64px)] leading-[1.1] tracking-tight mb-4 text-center w-full">
              WELCOME TO <span className="text-white">SATORI AEC</span>
            </h1>

            {/* Subtitle */}
            <p className="text-white mx-auto font-body font-normal text-[clamp(14px,1.2vw,18px)] max-w-[48ch] leading-relaxed mb-8 px-2">
              Planning, design, and construction expertise to turn every project into a lasting structure, not just another build.
            </p>

            {/* Call to Action Button */}
            <Button size="sm">
              Book An Appointment
            </Button>
          </div>
        </div>
      </section>

      {/* Opening Section Pinned with Scrubbed Staggered Word Reveal
      <section
        ref={openingSectionRef}
        id="opening"
        className="bg-offwhite min-h-screen flex items-center justify-center py-16 overflow-hidden text-center"
      >
        <div className="max-w-[1200px] w-full mx-auto px-[6vw] flex flex-col items-center justify-center">
          <h2 className="font-display font-bold text-primary leading-[0.98] text-[clamp(38px,7vw,104px)] flex flex-wrap justify-center gap-x-[0.28em] perspective-1000">
            {headingText.split(" ").map((word, i) => (
              <span key={i} className="word-item inline-block will-change-transform">
                {word}
              </span>
            ))}
          </h2>

          <div className="mt-8 md:mt-12 max-w-[52ch] text-center">
            <p className="text-[19px] leading-relaxed text-charcoal/80 flex flex-wrap justify-center gap-x-[0.25em] perspective-1000">
              {paragraphText.split(" ").map((word, i) => (
                <span key={i} className="word-item inline-block will-change-transform">
                  {word}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section> */}
    </>
  );
}
