"use client";

import React from "react";
import { motion } from "motion/react";

type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(
                ({ text, image, name, role }, i) => (
                  <div
                    className="p-8 rounded-2xl bg-white border border-black/8 shadow-sm max-w-xs w-full text-charcoal"
                    key={i}
                  >
                    <p className="text-[15px] leading-relaxed text-charcoal/80">
                      &ldquo;{text}&rdquo;
                    </p>

                    <div className="flex items-center gap-3 mt-6 pt-4 border-t border-black/5">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={name}
                        className="h-10 w-10 rounded-full object-cover border border-black/10"
                      />

                      <div className="flex flex-col">
                        <div className="font-display font-bold text-sm text-charcoal">
                          {name}
                        </div>

                        <div className="font-mono text-xs text-charcoal/60 uppercase tracking-wider mt-0.5">
                          {role}
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};