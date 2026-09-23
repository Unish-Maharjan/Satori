"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./ui/Button";

const NAV = [
  { label: "HOME", href: "#vision" },
  { label: "ABOUT", href: "#vision" },
  { label: "VISION", href: "#beyond" },
  { label: "PORTFOLIO", href: "#story" },
  { label: "CONTACT", href: "#final-cta" },
];

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      // Solid background after scrolling past 60px
      setSolid(currentScrollY > 60);

      if (currentScrollY <= 50) {
        setHidden(false);
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
          hidden && !menuOpen ? "-translate-y-full" : "translate-y-0"
        } ${solid || menuOpen ? "bg-primary shadow-md" : "bg-transparent"}`}
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        <div
          className={`flex items-center justify-between px-6 md:px-[6vw] py-3 md:py-0 border-b transition-all duration-300 ${
            solid || menuOpen ? "border-white/10" : "border-transparent"
          }`}
        >
          <a href="#hero" className="flex items-center gap-3">
            <Image
              src="/logo/Goldenlogo.png"
              width={140}
              height={140}
              alt="Logo"
              className="w-28 md:w-36 h-auto"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 lg:gap-10 items-center">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`group relative py-1 font-display text-[11px] font-semibold tracking-widest transition-colors duration-300 ${
                  solid ? "text-white hover:text-[#dca734]" : "text-offwhite hover:text-secondary"
                }`}
              >
                {item.label}
                <span className={`absolute left-0 bottom-0 h-[2px] w-0 transition-all duration-300 ease-out group-hover:w-full ${
                  solid ? "bg-[#dca734]" : "bg-[#d4af37] shadow-[0_0_8px_#d4af37]"
                }`} />
              </a>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <a
            href="#final-cta"
            className="group hidden md:inline-flex items-center gap-2.5 px-5 py-2.5 
            mt-2
            bg-gradient-to-r from-[#d4af37] to-[#e59f30] text-black
            font-display text-xs font-semibold tracking-wider 
            uppercase shadow-md 
            transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>CONTACT US</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="md:hidden bg-primary/95 backdrop-blur-md border-b border-white/10 px-6 py-6 flex flex-col gap-5">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-sm font-semibold tracking-widest text-white hover:text-secondary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#final-cta"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center px-5 py-3 
              bg-gradient-to-r from-[#d4af37] to-[#e59f30] text-black
              font-display text-xs font-semibold tracking-wider 
              uppercase shadow-md text-center mt-2"
            >
              CONTACT US
            </a>
          </div>
        )}
      </header>
    </>
  );
}


