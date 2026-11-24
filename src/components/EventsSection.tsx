"use client";

import React from "react";
import { Calendar, Clock, MapPin, Sparkles, Utensils } from "lucide-react";
import OrnateFrame, { OrnateDivider } from "./OrnateKeralaFrame";

export default function EventsSection() {
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <OrnateDivider title="Ceremonies &amp; Celebration" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Card 1: Sacred Wedding Ceremony */}
        <OrnateFrame className="h-full flex flex-col justify-between group hover:border-[#ffd778] transition-colors">
          <div className="flex-1 flex flex-col space-y-4">
            {/* Header Badge */}
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1 rounded-full bg-[#700f15] border border-[#ffd778]/60 text-[#ffd778] text-[10px] font-cinzel font-bold tracking-widest uppercase shadow-sm">
                Sacred Rituals
              </span>
              <span className="text-xl">🪔</span>
            </div>

            <div className="space-y-1">
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#ffd778]">
                Wedding Ceremony
              </h3>
              <p className="font-cinzel text-xs text-[#fce8b3] font-semibold tracking-wider uppercase">
                Auspicious Muhurtham &bull; Thaali Kettu
              </p>
            </div>

            <p className="font-cormorant italic text-sm text-[#fdebd0] leading-relaxed">
              The auspicious wedding rituals including Thaali Kettu, exchange of floral garlands, and traditional sacred vows in the presence of family and elders.
            </p>
          </div>

          <div className="pt-5 mt-4 border-t border-[#d4af37]/35 space-y-3">
            <div className="flex items-start gap-3 text-xs sm:text-sm text-[#fdf5e6]">
              <Calendar className="w-4 h-4 text-[#ffd778] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Saturday, 19th December 2026</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs sm:text-sm text-[#fdf5e6]">
              <MapPin className="w-4 h-4 text-[#ffd778] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Kannur Gardens</p>
                <p className="text-[11px] text-[#fce8b3]">Thazhe Chovva, Kannur</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs sm:text-sm text-[#fdf5e6]">
              <Utensils className="w-4 h-4 text-[#ffd778] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Traditional Kerala Sadhya</p>
                <p className="text-[11px] text-[#fce8b3]">Following the wedding ceremony</p>
              </div>
            </div>
          </div>
        </OrnateFrame>

        {/* Card 2: Grand Wedding Reception */}
        <OrnateFrame className="h-full flex flex-col justify-between group hover:border-[#ffd778] transition-colors">
          <div className="flex-1 flex flex-col space-y-4">
            {/* Header Badge */}
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1 rounded-full bg-[#700f15] border border-[#ffd778]/60 text-[#ffd778] text-[10px] font-cinzel font-bold tracking-widest uppercase shadow-sm">
                Evening Gala
              </span>
              <Sparkles className="w-5 h-5 text-[#ffd778]" />
            </div>

            <div className="space-y-1">
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#ffd778]">
                Wedding Reception
              </h3>
              <p className="font-cinzel text-xs text-[#fce8b3] font-semibold tracking-wider uppercase">
                Evening Celebration &bull; Dinner
              </p>
            </div>

            <p className="font-cormorant italic text-sm text-[#fdebd0] leading-relaxed">
              An enchanting evening of joyous celebration, music, and dining with the newlyweds Shamith &amp; Harishma and their families.
            </p>
          </div>

          <div className="pt-5 mt-4 border-t border-[#d4af37]/35 space-y-3">
            <div className="flex items-start gap-3 text-xs sm:text-sm text-[#fdf5e6]">
              <Calendar className="w-4 h-4 text-[#ffd778] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Saturday, 19th December 2026</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs sm:text-sm text-[#fdf5e6]">
              <Clock className="w-4 h-4 text-[#ffd778] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">6:00 PM Onwards</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs sm:text-sm text-[#fdf5e6]">
              <MapPin className="w-4 h-4 text-[#ffd778] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Kannur Gardens</p>
                <p className="text-[11px] text-[#fce8b3]">Thazhe Chovva, Kannur</p>
              </div>
            </div>
          </div>
        </OrnateFrame>
      </div>
    </section>
  );
}
