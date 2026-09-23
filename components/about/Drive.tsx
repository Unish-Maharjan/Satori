"use client";

import React from "react";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger)

export default function WhatDrivesUs() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!triggerRef.current || !imageWrapRef.current || !titleRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "center center",
        end: "+=140%",
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    // Expand image to full screen
    tl.fromTo(
      imageWrapRef.current,
      {
        width: "85vw",
        height: "55vh",
      },
      {
        width: "100vw",
        height: "100vh",
        borderRadius: "0px",
        ease: "none",
      }
    );

    // Fade in title after expansion
    tl.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
      },
      "> -0.2"
    );
  }, []);

  return (
    <section className="w-full bg-primary py-24 -mt-2 text-primary overflow-x-hidden">
      {/* main statement */}
      <div className="mx-auto mt-10 max-w-[1600px] px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="flex justify-center items-center gap-16 lg:mx-auto lg:gap-24">
          {/* main content */}
          <div>
            <h2 className="max-w-275 text-center text-secondary text-[46px] font-medium leading-[1.02] 
            tracking-[-0.035em] sm:text-[58px] md:text-[72px] lg:text-[88px]">
              We create spaces that influence how life unfolds.  
            </h2>

            <p className="mx-auto mt-20 text-center max-w-170 text-third text-lg leading-[1.7]">
              That means looking beyond construction and thinking about the
              experience a space creates, the relationship it has with its
              surroundings, and the value it can provide long after completion.
            </p>
          </div>
        </div>
      </div>

      {/* image */}
      <div
        ref={triggerRef}
        className="relative my-16 w-full h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          ref={imageWrapRef}
          className="relative overflow-hidden shadow-xl bg-third will-change-transform 
          flex items-center justify-center"
        >
          <Image
            src="/images/BeyondStructure.jpg"
            alt="architectural space"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center pointer-events-none">
            <h2
              ref={titleRef}
              className="font-display font-medium text-secondary text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-wider text-center px-6 max-w-5xl opacity-0 drop-shadow-md"
            >
              CREATING PLACES THAT MATTER
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

