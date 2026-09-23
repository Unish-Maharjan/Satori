"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";

type Testimonial = {
  text: string;
  avatar: string;
  avatarBg?: string;
  initials?: string;
  name: string;
  rating: number;
};

const testimonialsList: Testimonial[] = [
  {
    name: "Jane Bull",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    rating: 5,
    text: "We are delighted with our new glass roof. We wanted a stylish and contemporary glass roof for our sideway, that complemented our 1826 Grade II listed property in Central London. The service offered by Jake and the team at Fluid Glass was friendly and professional. The whole project from initial design to finished installation was trouble free and...",
  },
  {
    name: "Devon Mothersille",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    rating: 5,
    text: "The service from Fluid Glass has been excellent. Before, during and after installation of our glazing the team demonstrated professionalism and a high standard of execution. We would have no hesitation in recommending Fluid Glass.",
  },
  {
    name: "Steven Goode",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    initials: "S",
    avatarBg: "bg-slate-200 text-slate-700",
    rating: 5,
    text: "What a superb company! Our experience has been top notch. They offer a superb service, selection and product. Great to have a new showroom where clients can view options. Very well laid out and comprehensive. I would highly recommend this organisation. We have had a much better experience than other companies we visited. They have a full...",
  },
  {
    name: "Andreja Beric",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    rating: 5,
    text: "Fluid Glass are great. We have finalised a few projects with them in London (and abroad), and always had very professional, punctual service from them. Would recommend to all other professionals / clients.",
  },
  {
    name: "Simon de Haan",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    initials: "S",
    avatarBg: "bg-[#55a349] text-white",
    rating: 5,
    text: "Fluid Glass came to replace two broken glass units. The whole experience was painless and very efficient . The two workmen were a pleasure to work with and carried out the work in a very professional manor. I would definitely recommend Fluid Glass for all glazing work and will be using them on my next project.",
  },
  {
    name: "Ben K",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    initials: "",
    avatarBg: "bg-black text-emerald-400",
    rating: 5,
    text: "Fluid Glass were an absolute pleasure to work with from beginning to end. We love our installation. Thanks",
  },
];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5 text-[#f5a623]  text-lg">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

function GoogleGIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

export default function Testimonial() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsList.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsList.length - 1 ? 0 : prev + 1));
  };

  return (
    <section ref={sectionRef} className="py-20 px-[5vw] bg-primary text-neutral-800">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Title & Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight
             text-[#dca734] mb-4">
              What our clients <br className="hidden sm:inline" />
              say about us
            </h2>
            <div className="flex items-center gap-3 text-xs md:text-sm font-semibold
             tracking-wider text-[#dca734] uppercase">
              <StarRating count={5} />
              <span>5.0</span>
              <span className="text-[#dca734]">/</span>
              <span className="text-[#dca734]">58 REVIEWS</span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="w-11 h-11  border border-neutral-400/80 bg-third flex items-center justify-center
               text-neutral-800 hover:bg-secondary hover:text-white transition-all duration-300 shadow-sm active:scale-95"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="w-11 h-11 border border-neutral-400/80 bg-third flex items-center justify-center text-neutral-800
               hover:bg-secondary hover:text-white transition-all duration-300 shadow-sm active:scale-95"
            >
              →
            </button>
          </div>
        </div>

        {/* Testimonials Horizontal Carousel */}
        <div className="overflow-hidden" ref={carouselRef}>
          <motion.div
            className="flex gap-6"
            animate={{ x: `calc(-${currentIndex} * (100% / 1.15 + 1.5rem))` }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            style={{
              // Responsive item widths via CSS grid/flex width
              display: "flex",
            }}
          >
            {testimonialsList.map((item, idx) => (
              <div
                key={idx}
                className="bg-third border border-neutral-300/80 p-6 md:p-8 flex flex-col justify-between min-h-[280px] shadow-sm hover:shadow-md transition-shadow shrink-0 w-[88vw] sm:w-[45vw] lg:w-[31vw]"
              >
                <div>
                  {/* Author Info */}
                  <div className="flex items-center gap-3 mb-6">
                    {item.avatar ? (
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-16 h-16 object-cover"
                      />
                    ) : item.initials ? (
                      <div
                        className={`w-11 h-11 rounded-full flex items-center justify-center font-bold 
                            text-lg text-[#163e2f]${
                          item.avatarBg || " text-[#163e2f]"
                        }`}
                      >
                        {item.initials}
                      </div>
                    ) : (
                      <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full border-2 border-emerald-400" />
                      </div>
                    )}

                    <div>
                      <h4 className="font-bold text-[24px] text-[#163e2f] leading-tight">
                        {item.name}
                      </h4>
                      <StarRating count={item.rating} />
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-sm md:text-[15px] leading-relaxed text-neutral-700 font-normal">
                    {item.text}
                  </p>
                </div>

                {/* Card Footer: Read More & Google Icon */}
                <div className="flex items-center justify-between mt-8 pt-2">
                  <button className="flex items-center gap-2 text-xs font-display font-bold tracking-widest
                   text-black uppercase hover:text-secondary">
                    READ MORE
                  </button>
                  <GoogleGIcon />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Carousel Indicators / Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonialsList.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "w-8 bg-[#163e2f]" : "w-2 bg-neutral-400/60 hover:bg-neutral-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}