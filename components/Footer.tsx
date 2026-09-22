import React from "react";
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="bg-[#163e2f] text-[#F7F7F4] border-t border-[#F4BF67]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-[#F4BF67]/15">
          {/* Logo & Tagline Column */}
          <div className="space-y-4 md:col-span-1">
            <Image src="/logo/Goldenlogo.png" alt="Satori AEC Logo" width={180} height={70}/>
            <p className="text-sm text-[#8fa89b] max-w-sm mt-4 leading-relaxed font-light">
              Building future-ready spaces through uncompromising precision, architectural excellence, and a vision built to last.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="mt-7">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#F4BF67] uppercase mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-[#F7F7F4]/80">
              {["About Us", "Services", "Our Approach", "Insights & News", "Contact"].map(
                (item, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                      className="hover:text-[#F4BF67] transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-[#F4BF67] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="mt-7">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#F4BF67] uppercase mb-5">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-[#8fa89b]">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-[#F4BF67] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Baluwatar, Kathmandu</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#F4BF67] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@satoriaec.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#F4BF67] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+977-4537473</span>
              </li>
            </ul>
          </div>

          {/* Social & Certifications Column */}
          <div className="mt-7">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#F4BF67] uppercase mb-5">
              Connect & Social
            </h4>
            <div className="flex space-x-3 mb-6">
              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 border border-[#F4BF67]/30 flex items-center justify-center text-[#F4BF67] hover:bg-[#F4BF67] hover:text-[#163e2f] transition-all duration-300 rounded-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.73a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                aria-label="Twitter X"
                className="w-10 h-10 border border-[#F4BF67]/30 flex items-center justify-center text-[#F4BF67] hover:bg-[#F4BF67] hover:text-[#163e2f] transition-all duration-300 rounded-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 border border-[#F4BF67]/30 flex items-center justify-center text-[#F4BF67] hover:bg-[#F4BF67] hover:text-[#163e2f] transition-all duration-300 rounded-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
            <p className="text-xs text-[#8fa89b]">
              ISO 9001:2026 Certified Engineering & Construction Firm. LEED Platinum Vanguard Partner.
            </p>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#8fa89b]">
          <p>© {new Date().getFullYear()} SATORI AEC. All rights reserved.</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://webxnepal.com/"
            className="group flex items-center gap-3 transition-opacity duration-300 hover:opacity-90 mt-4 md:mt-0"
          >
            <span className="text-[11px] font-medium tracking-wide text-white">
              DESIGN AND DEVELOPED BY
            </span>

            <div className="relative">
              <Image
                src="/logo/webx-logo.png"
                alt="WebX Nepal"
                width={20}
                height={14}
                className="h-4 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute -bottom-2 left-1/2 h-[2px] w-full -translate-x-1/2">
                <div className="absolute inset-0 -left-[20%] h-[2px] w-[140%] bg-gradient-to-r from-transparent via-white to-transparent" />

                <div className="absolute inset-0 -left-[20%] h-[1px] w-[140%] bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-[1px]" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
