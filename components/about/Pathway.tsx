"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    number: "01",
    title: "Explore",
    description:
      "We identify the right opportunities by understanding the land, location, market, and potential.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We establish the vision, development strategy, budget, and roadmap for the project.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We shape the opportunity into thoughtful architecture, functional spaces, and a clear development plan.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "We turn the design into reality through disciplined construction, quality materials, and precise execution.",
  },
  {
    number: "05",
    title: "Deliver",
    description:
      "We complete, refine, and deliver spaces designed for lasting value and meaningful everyday living.",
  },
];

export default function Pathway() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineFillRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Grow the fill line as the timeline scrolls through view
      gsap.to(lineFillRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 30%",
          end: "bottom 70%",
          scrub: 0.3,
        },
      });

      // Increase opacity of text elements as each step item scrolls into view
      itemRefs.current.forEach((item) => {
        if (!item) return;

        const textElements = item.querySelectorAll(".step-text");

        gsap.fromTo(
          textElements,
          { opacity: 0.25, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "top 50%",
              scrub: 0.5,
            },
          }
        );

        // Highlight dot when reaching active point
        const dot = item.querySelector(".dot");
        if (dot) {
          ScrollTrigger.create({
            trigger: item,
            start: "top 60%",
            toggleClass: { targets: dot, className: "is-active" },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-primary px-6 pb-24 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Left column*/}
        <div className="lg:sticky lg:top-24 lg:h-fit lg:self-start">
          <h2 className="mt-4 text-4xl font-bold leading-tight text-secondary md:text-5xl">
            From opportunity to something built to last.
          </h2>

          <p className="mt-6 max-w-sm text-base leading-relaxed text-third">
            We bring together real estate insight and construction expertise to
            guide every project from site selection and planning to design,
            construction, and final delivery.
          </p>
        </div>

        {/* Right column */}
        <div ref={containerRef} className="relative mt-5">
        {/* Background line */}
        <div className="absolute left-1.5 top-2 ml-1 bottom-2 w-0.5 bg-secondary/20" />
        {/* Animated fill line */}
        <div
          ref={lineFillRef}
          className="absolute left-1.5 top-2 ml-1 h-0 w-0.5 bg-secondary"
        />

          <ul className="ml-1">
            {steps.map((step, index) => (
              <li
                key={step.number}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className="relative -mt-3 ml-2 border-b border-secondary/30 py-10 pl-10 first:pt-2 last:border-b-0"
              >
                <span
                  className="dot absolute left-0 top-3 h-3 w-3 rounded-full border-2 border-secondary bg-primary transition-colors duration-300"
                />
                <p className="step-text text-lg font-bold text-secondary opacity-25">
                  {step.number}
                </p>
                <h3 className="step-text mt-1 text-2xl font-bold text-secondary opacity-25">
                  {step.title}
                </h3>
                <p className="step-text mt-2 text-lg max-w-md leading-relaxed text-third opacity-25">
                  {step.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
