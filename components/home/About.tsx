"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReveal } from "@/lib/useReveal";

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
      subtext: "Excellence in Design & Real Estate Development",
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
    <section ref={ref} id="vision" className="bg-white py-[min(12vh,120px)] font-biwa">
      <div className="max-w-[1500px] mx-auto px-[6vw]">
        {/* Top Grid: Left content, Right Image */}
        <div className="grid grid-cols-12 gap-8 items-center mb-16 md:mb-24">
          {/* Left Text Column */}
          <div className="reveal col-span-12 md:col-span-6 flex flex-col items-start pr-0 md:pr-6">
            <h2 className="font-biwa text-[#1e523e] text-[clamp(32px,4vw,56px)] leading-[1.1] font-bold tracking-tight mb-6">
              A LEGENDARY WELCOME EVERY TIME
            </h2>

            <p className="text-neutral-700 text-[16px] leading-relaxed mb-6 max-w-[54ch]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatum, facilis ad officia laudantium, cumque magnam atque, porro consequatur animi dolores iste temporibus. Ipsa eligendi placeat nostrum, fugiat reprehenderit optio aperiam nihil, asperiores rem voluptatum voluptatem
            </p>

            <p className="text-neutral-700 text-[16px] leading-relaxed mb-8 max-w-[54ch]">
              From our architectural spaces that honor local craft to our
              meticulously designed culinary and wellness journeys, we invite
              you to immerse yourself in a legacy of warmth and unforgettable
              elegance.
            </p>

            <a
              href="#about"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#1e523e] text-white font-medium text-sm rounded-sm hover:bg-[#163e2f] transition-colors"
            >
              About Us
            </a>
          </div>

          {/* Right Image Container */}
          <div className="reveal col-span-12 md:col-span-6 relative aspect-[16/10] md:aspect-[4/3] rounded-sm overflow-hidden shadow-lg bg-neutral-100">
            <Image
              src="/images/BeyondStructure.jpg"
              alt="Kirant Hotel Welcome"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom 4 Statistics Grid Cards */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="reveal bg-[#f9f8f6] p-8 rounded-sm flex flex-col justify-between min-h-[180px] border border-neutral-100"
            >
              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span
                    className="stat-number font-biwa text-[clamp(36px,3.5vw,52px)] font-bold text-neutral-900 leading-none"
                    data-value={stat.number}
                  >
                    0
                  </span>
                  <span className="text-sm font-medium text-neutral-600">
                    {stat.label}
                  </span>
                </div>
              </div>
              <p className="text-xs text-neutral-500 leading-normal mt-6">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}