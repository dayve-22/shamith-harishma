"use client";

import React from "react";
import Image from "next/image";
import { Heart, Sparkles } from "lucide-react";
import OrnateFrame, { OrnateDivider } from "./OrnateKeralaFrame";

export default function CoupleStoryCard() {
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <OrnateDivider title="The Couple" />

      <OrnateFrame className="max-w-2xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Couple Photograph in Royal Gold & Kumkum Frame */}
          <div className="relative group w-64 sm:w-80 max-w-full">
            {/* Outer Golden Glow */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#ffd778]/40 via-[#fce8b3]/30 to-[#b38618]/40 blur-md group-hover:blur-lg transition-all" />

            {/* Picture Frame */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#ffd778] shadow-2xl bg-[#2b0407] aspect-[9/15] w-full">
              <Image
                src="/couple.jpg"
                alt="Shamith and Harishma"
                fill
                sizes="(max-width: 640px) 256px, 320px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                priority
              />

              {/* Frame Corner Accents */}
              <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#ffd778]" />
              <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#ffd778]" />
              <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#ffd778]" />
              <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#ffd778]" />
            </div>
          </div>

          {/* Clean Couple Title */}
          <div className="space-y-2">
            <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-[#751117] border border-[#ffd778]/50 text-[#ffd778] text-xs font-cinzel tracking-widest uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#ffd778]" />
              <span>Together Forever</span>
            </div>

            <h3 className="font-cinzel text-3xl sm:text-4xl font-extrabold gold-gradient-text tracking-wide pt-2">
              Shamith &amp; Harishma
            </h3>

            <p className="font-cormorant italic text-base sm:text-lg text-[#fdebd0]">
              United in love, laughter, and lifelong friendship
            </p>
          </div>
        </div>
      </OrnateFrame>
    </section>
  );
}
