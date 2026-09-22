"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReveal } from "@/lib/useReveal";
import Button from "../ui/Button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const ref = useReveal<HTMLElement>();
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      number: 40,
      label: "+ Projects",
      subtext: "Luxurious Residences & Private Villas",
    },
    {
      number: 10,
      label: "+ Years",
      subtext: "Excellence in Design & Real Estate",
    },
    {
      number: 45,
      label: "Awards",
      subtext: "Recognized for Sustainable Architecture",
    },
    {
      number: 123,
      label: "+ Clients",
      subtext: "Trusted by Homeowners & Global Investors",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image parallax animation
      const imgContainer = document.querySelector(".about-img-parallax");
      if (imgContainer) {
        const img = imgContainer.querySelector("img");
        if (img) {
          gsap.fromTo(
            img,
            { y: "-10%", scale: 1.1 },
            {
              y: "10%",
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: imgContainer,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      }

      const counters = gsap.utils.toArray<HTMLElement>(".stat-number");

      counters.forEach((el) => {
        const target = Number(el.dataset.value);
        const counter = { value: 0 };

        gsap.to(counter, {
          value: target,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = Math.round(counter.value).toString();
          },
        });
      });
    }, statsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="vision" className="bg-[#163e2f] py-[min(12vh,120px)] font-biwa">
      <div className="max-w-[1500px] mx-auto px-[6vw]">
        {/* Top Grid: Left content, Right Image */}
        <div className="grid grid-cols-12 gap-8 items-center mb-16 md:mb-24">
          {/* Left Text Column */}
          <div className="reveal col-span-12 md:col-span-6 
          flex flex-col items-start font-display pr-0 md:pr-6">
            <h2 className="font-display text-[#dca734] text-[clamp(32px,4vw,56px)]
             leading-[1.1] font-medium tracking-tight mb-6">
              A LEGENDARY WELCOME EVERY TIME
            </h2>

            <p className="text-white text-[16px] leading-relaxed mb-6 max-w-[54ch]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatum, facilis ad officia laudantium, cumque magnam atque, porro consequatur animi dolores iste temporibus. Ipsa eligendi placeat nostrum, fugiat reprehenderit optio aperiam nihil, asperiores rem voluptatum voluptatem
            </p>

            <p className="text-white text-[16px] leading-relaxed mb-8 max-w-[54ch]">
              From our architectural spaces that honor local craft to our
              meticulously designed culinary and wellness journeys, we invite
              you to immerse yourself in a legacy of warmth and unforgettable
              elegance.
            </p>

            <a
            href=""
            className="group hidden md:inline-flex items-center gap-2.5 px-5 py-2.5 
            mt-7 text-black
            bg-gradient-to-r from-[#d4af37] to-[#e59f30] text-primary
            font-mono text-xs font-medium tracking-wider 
            uppercase shadow-md 
            transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>ABOUT US</span>
          </a>
          </div>

          {/* Right Image Container */}
          <div className="reveal about-img-parallax col-span-12 md:col-span-6 relative aspect-[16/10] md:aspect-[4/3] rounded-sm overflow-hidden shadow-lg bg-neutral-100">
            <Image
              src="/images/about.jpeg"
              alt="Kirant Hotel Welcome"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom 4 Statistics Grid Cards */}
        <div ref={statsRef} className="grid grid-cols-1 font-display md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="reveal bg-[#DDD9CE] p-8 rounded-sm flex flex-col justify-between
               min-h-[180px]"
            >
              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span
                    className="stat-number text-[clamp(36px,3.5vw,52px)] font-bold text-[#163e2f] leading-none"
                    data-value={stat.number}
                  >
                    0
                  </span>
                  <span className="text-sm font-medium text-[#163e2f]">
                    {stat.label}
                  </span>
                </div>
              </div>
              <p className=" text-[#163e2f]/90 leading-normal mt-6">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}