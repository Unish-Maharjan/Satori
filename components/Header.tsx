"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const NAV = [
  { label: "ABOUT", href: "#opening" },
  { label: "SERVICES", href: "#philosophy" },
  { label: "APPROACH", href: "#geo-moment" },
  { label: "LOCATIONS", href: "#journey" },
  { label: "INSIGHTS", href: "#editorial" },
];

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      // Solid background after scrolling past 150px
      setSolid(currentScrollY > 150);

      // Hide header when at the top of page (scrollY <= 50) or scrolling down
      // Reveal header only when scrolled down and scrolling UP
      if (currentScrollY <= 50) {
        setHidden(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    // Initial check on mount
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 transform ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${solid ? "bg-green/90 backdrop-blur-md" : "bg-transparent"}`}
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        <div
          className={`flex items-center justify-between px-[6vw] border-b transition-all duration-300 ${
            solid ? "py-4 border-line" : "py-6 border-transparent"
          }`}
        >
          <a href="#hero" className="flex items-center gap-3 text-offwhite">
            <Image src="/logo/Goldenlogo.png" width={100} height={100} alt="Logo" />
          </a>

          <nav className="hidden md:flex gap-9">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative pb-1 text-offwhite font-mono text-xs tracking-wide2"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="#final-cta"
            className="group hidden md:inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#e59f30] text-primary
            font-mono text-xs font-medium tracking-wider 
            uppercase shadow-md 
            transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>CONTACT US</span>
          </a>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="md:hidden flex items-center gap-2 text-offwhite font-mono text-xs tracking-wide3"
          >
            MENU
            <span className="relative w-[22px] h-[14px]">
              <span className="absolute inset-x-0 top-0 h-px bg-offwhite" />
              <span className="absolute inset-x-0 bottom-0 h-px bg-offwhite" />
            </span>
          </button>
        </div>
      </header>
    </>
  );
}


