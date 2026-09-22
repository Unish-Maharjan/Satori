import React from "react";
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="bg-[#152c25] text-[#F7F7F4] border-t border-[#F4BF67]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-[#F4BF67]/15">
          {/* Logo & Tagline Column */}
          <div className="space-y-4 md:col-span-1">
            <Image src="/logo/Goldenlogo.png" alt="Satori AEC Logo" width={150} height={50}/>
            <p className="text-sm text-[#8fa89b] max-w-sm mt-4 leading-relaxed font-light">
              Engineering future-ready built environments with unyielding precision, architectural excellence, and sustainable vision.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#F4BF67] uppercase mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-[#F7F7F4]/80">
              {["About Us", "Services", "Our Approach", "Insights & News", "Careers", "Contact"].map(
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
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#F4BF67] uppercase mb-5">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-[#8fa89b]">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-[#F4BF67] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>100 AEC Tower Boulevard, Suite 4500<br />Architectural District, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#F4BF67] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h32a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@satoriaec.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#F4BF67] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 (800) 555-SATORI</span>
              </li>
            </ul>
          </div>

          {/* Social & Certifications Column */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#F4BF67] uppercase mb-5">
              Connect & Social
            </h4>
            <div className="flex space-x-4 mb-6">
              {["LinkedIn", "Twitter/X", "Instagram", "Vimeo"].map((platform, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-[#F4BF67]/30 flex items-center justify-center text-[#F4BF67] hover:bg-[#F4BF67] hover:text-[#0A3423] transition-all duration-300 font-bold text-xs"
                >
                  {platform.substring(0, 2).toUpperCase()}
                </a>
              ))}
            </div>
            <p className="text-xs text-[#8fa89b]">
              ISO 9001:2026 Certified Engineering & Construction Firm. LEED Platinum Vanguard Partner.
            </p>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#8fa89b]">
          <p>© {new Date().getFullYear()} SATORI AEC. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#F4BF67]">Privacy Policy</a>
            <a href="#" className="hover:text-[#F4BF67]">Terms of Service</a>
            <a href="#" className="hover:text-[#F4BF67]">ESG Reporting</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
