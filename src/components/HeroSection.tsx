"use client";

import React from "react";
import { Calendar, MapPin, Clock } from "lucide-react";
import { NilavilakkuDiya, OrnateCornerMandala } from "./OrnateKeralaFrame";

export default function HeroSection() {
  return (
    <section className="relative pt-6 sm:pt-10 pb-16 px-4 text-center max-w-4xl mx-auto">
      {/* Main Royal Wedding Card Inspired by Reference Image 2 */}
      <div className="relative rounded-3xl p-7 sm:p-10 md:p-12 bg-gradient-to-b from-[#6b0d13] via-[#52080c] to-[#380407] border-2 border-[#d4af37]/80 shadow-[0_22px_60px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* 4 Image-2 Style Corner Mandalas */}
        <OrnateCornerMandala position="tl" />
        <OrnateCornerMandala position="tr" />
        <OrnateCornerMandala position="bl" />
        <OrnateCornerMandala position="br" />

        {/* Inner Gold Frame */}
        <div className="absolute inset-2 sm:inset-3 rounded-2xl border border-[#d4af37]/35 pointer-events-none" />

        {/* Auspicious Lamps & Traditional Arch Header */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-4">
          <NilavilakkuDiya className="hidden sm:inline-flex" />
          <div className="flex items-center gap-2">
            <span className="text-[#ffd778] text-base">✦</span>
            <span className="font-cinzel text-xs sm:text-sm text-[#ffd778] tracking-[0.3em] uppercase font-bold">
              Wedding Invitation
            </span>
            <span className="text-[#ffd778] text-base">✦</span>
          </div>
          <NilavilakkuDiya className="hidden sm:inline-flex" />
        </div>

        {/* Subtle Horizontal Divider */}
        <div className="flex items-center justify-center gap-2 max-w-xs mx-auto my-3">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#d4af37]/60" />
          <span className="text-[#ffd778] text-xs">❦</span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#d4af37]/60" />
        </div>

        {/* Traditional Invitation Preamble (Reference Image 2) */}
        <p className="font-cormorant italic text-base sm:text-lg md:text-xl text-[#fdebd0] tracking-wide my-4 leading-relaxed max-w-lg mx-auto">
          request the honor of your presence<br />
          at the wedding of
        </p>

        {/* Royal Couple Names (Reference Image 2 styling) */}
        <div className="my-6 space-y-2">
          <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-extrabold gold-gradient-text tracking-wide drop-shadow-[0_4px_16px_rgba(212,175,55,0.4)]">
            Shamith
          </h1>

          <div className="flex items-center justify-center gap-3 py-1">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#ffd778]" />
            <span className="font-cormorant italic text-lg sm:text-xl text-[#fce8b3]">with</span>
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#ffd778]" />
          </div>

          <h2 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-extrabold gold-gradient-text tracking-wide drop-shadow-[0_4px_16px_rgba(212,175,55,0.4)]">
            Harishma
          </h2>
        </div>

        {/* Subtitle Line (Reference Image 2: "Son & Daughter of loving families") */}
        <p className="font-cinzel text-xs sm:text-sm text-[#ffd778] tracking-[0.2em] uppercase font-bold mt-4">
          Son &amp; Daughter of loving families
        </p>

        {/* Parent Lineage Brief */}
        <div className="font-cormorant italic text-sm sm:text-base text-[#f5ebd2] mt-2 space-y-0.5">
          <p>S/o. <strong className="text-[#ffd778]">Sri. Mohanan P</strong> &amp; <strong className="text-[#ffd778]">Smt. Sreeja N</strong></p>
          <p>D/o. <strong className="text-[#ffd778]">Sri. Harindran P</strong> &amp; <strong className="text-[#ffd778]">Smt. Nisha K (Late)</strong></p>
        </div>

        {/* Decorative Golden Knot */}
        <div className="flex items-center justify-center gap-3 max-w-xs mx-auto my-6">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#ffd778]" />
          <span className="text-[#ffd778] text-sm">🪔</span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#ffd778]" />
        </div>

        {/* Date, Muhurtham & Venue (Formatted like Image 2) */}
        <div className="space-y-2">
          <p className="font-cinzel text-base sm:text-lg md:text-xl font-bold text-[#fff7d6] tracking-wide">
            Saturday, 19th of December 2026
          </p>
          <p className="font-cormorant italic text-sm sm:text-base text-[#ffd778]">
            Muhurtham: Morning Auspicious Hours &bull; Reception: 6:00 PM Onwards
          </p>
          <p className="font-cinzel text-sm sm:text-base font-semibold text-[#f5ebd2] pt-1">
            Kannur Gardens
          </p>
          <p className="font-cormorant text-xs sm:text-sm text-[#e0a66d]">
            Thazhe Chovva, Kannur, Kerala
          </p>
        </div>
      </div>

      {/* Date, Venue, Reception Highlight Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-8 items-stretch">
        <div className="p-4 rounded-2xl bg-[#52090e]/90 border border-[#d4af37]/50 flex items-center justify-center gap-3.5 h-full min-h-[82px] shadow-lg">
          <Calendar className="w-5 h-5 text-[#ffd778] shrink-0" />
          <div className="text-left flex flex-col justify-center">
            <p className="font-cinzel text-[10px] text-[#fce8b3] uppercase tracking-wider font-semibold">Date</p>
            <p className="font-cinzel text-xs sm:text-sm font-bold text-white">
              Saturday, 19 Dec 2026
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#52090e]/90 border border-[#d4af37]/50 flex items-center justify-center gap-3.5 h-full min-h-[82px] shadow-lg">
          <MapPin className="w-5 h-5 text-[#ffd778] shrink-0" />
          <div className="text-left flex flex-col justify-center">
            <p className="font-cinzel text-[10px] text-[#fce8b3] uppercase tracking-wider font-semibold">Venue</p>
            <p className="font-cinzel text-xs sm:text-sm font-bold text-white">
              Kannur Gardens
            </p>
            <p className="text-[11px] text-[#ffd778]">Thazhe Chovva, Kannur</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#52090e]/90 border border-[#d4af37]/50 flex items-center justify-center gap-3.5 h-full min-h-[82px] shadow-lg">
          <Clock className="w-5 h-5 text-[#ffd778] shrink-0" />
          <div className="text-left flex flex-col justify-center">
            <p className="font-cinzel text-[10px] text-[#fce8b3] uppercase tracking-wider font-semibold">Reception</p>
            <p className="font-cinzel text-xs sm:text-sm font-bold text-white">
              6:00 PM Onwards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
