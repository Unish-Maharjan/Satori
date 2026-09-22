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
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${solid ? "bg-[#163e2f] shadow-md" : "bg-transparent"}`}
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        <div
          className={`flex items-center justify-between px-[6vw] border-b transition-all duration-300 ${
            solid ? "border-white/10" : "border-transparent"
          }`}
        >
          <a href="#hero" className="flex items-center gap-3">
            <Image src="/logo/Goldenlogo.png" width={140} height={140} alt="Logo" />
          </a>

          <nav className="hidden md:flex gap-10 items-center">
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

       

          <a
            href=""
            className="group hidden md:inline-flex items-center gap-2.5 px-5 py-2.5 
            mt-2 text-black
            bg-gradient-to-r from-[#d4af37] to-[#e59f30] text-primary
            font-display text-xs font-semibold tracking-wider 
            uppercase shadow-md 
            transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>CONTACT US</span>
          </a>
        </div>
      </header>
    </>
  );
}


