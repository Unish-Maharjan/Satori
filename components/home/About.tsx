"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReveal } from "@/lib/useReveal";
import Paragraph from "../ui/Paragraph";

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
    <section ref={ref} id="vision" className="bg-primary py-[15vh]">

      <div className="max-w-[1500px] mx-auto px-[6vw]">
        {/* Top Grid: Left content, Right Image */}
        <div className="grid grid-cols-12 gap-8 items-center mb-16 md:mb-24">
          {/* Left Text Column */}
          <div className="reveal col-span-12 md:col-span-6 
          flex flex-col items-start font-display pr-0 md:pr-6">
            <h2 className="font-display text-[#dca734] text-[clamp(32px,4vw,56px)]
             leading-[1.1] font-medium tracking-tight mb-6">
              BUILT TO BECOME A LEGACY
            </h2>

            <Paragraph className="text-white text-[16px] leading-relaxed mb-6 max-w-[54ch]">
             We believe great construction is more than putting materials together. It is about creating spaces with purpose, precision, and character—spaces designed to stand the test of time.
            </Paragraph>

            <Paragraph className="text-white text-[16px] leading-relaxed mb-8 max-w-[54ch]">
              From thoughtful planning and structural excellence to refined craftsmanship and meticulous execution, we bring every detail together to create buildings that feel as strong as they look. Every project is approached with care, driven by quality, and built with a lasting vision.
            </Paragraph>

            <a
            href=""
            className="group hidden md:inline-flex items-center gap-2.5 px-5 py-2.5 
            mt-6
            bg-gradient-to-r from-[#d4af37] to-[#e59f30] text-primary
            font-display text-xs font-medium tracking-wider 
            uppercase shadow-md 
            transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>ABOUT US</span>
          </a>
          </div>

          {/* Right Image Container */}
          <div className="reveal about-img-parallax col-span-12 
          md:col-span-6 relative aspect-[16/10] md:aspect-[4/3] 
          rounded-sm overflow-hidden shadow-lg bg-neutral-100">
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
                    className="stat-number text-[clamp(36px,3.5vw,52px)] font-bold text-primary leading-none"
                    data-value={stat.number}
                  >
                    0
                  </span>
                  <span className="text-sm font-medium text-primary">
                    {stat.label}
                  </span>
                </div>
              </div>
              <p className=" text-primary/90 leading-normal mt-6">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}