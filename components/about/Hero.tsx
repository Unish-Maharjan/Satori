
"use client";

import React from "react";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden 
      bg-primary px-6 py-16 text-white sm:px-10 md:px-16 lg:px-20">

      {/* background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about.jpeg"
          alt="About Satori AEC"
          fill
          priority
          className="object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-b  via-primary/30 to-primary" />
      </div>

      {/* content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center justify-center my-auto">
        {/* main heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-secondary leading-tight tracking-tight text-center">
          WE BUILD FOR
          <br />
          WHAT COMES NEXT
        </h1>
      </div>
    </section>
  );
}

