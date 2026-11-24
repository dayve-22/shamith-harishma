"use client";

import React from "react";

export function NilavilakkuDiya({ className = "w-6 h-14" }: { className?: string }) {
  return (
    <div className={`relative inline-flex flex-col items-center justify-center ${className}`}>
      {/* Animated triple tier flame matching temple lamp */}
      <div className="w-2.5 h-4 bg-gradient-to-t from-[#ea580c] via-[#f59e0b] to-[#fef08a] rounded-full diya-flame shadow-[0_0_14px_#f59e0b]" />
      {/* Diya Wick Bowl Tier 1 */}
      <div className="w-4 h-1.5 bg-gradient-to-r from-[#997a15] via-[#ffd778] to-[#997a15] rounded-b-md shadow-xs -mt-0.5" />
      {/* Lamp Stem */}
      <div className="w-1.5 h-3 bg-gradient-to-b from-[#d4af37] to-[#806412]" />
      {/* Secondary Wick Tier */}
      <div className="w-5 h-1.5 bg-gradient-to-r from-[#806412] via-[#ffe082] to-[#806412] rounded-md shadow-xs" />
      {/* Main Pillar Stem */}
      <div className="w-2 h-4 bg-gradient-to-b from-[#b38618] to-[#634e0e]" />
      {/* Fluted Base Tier */}
      <div className="w-6 h-2 bg-gradient-to-r from-[#806412] via-[#ffd778] to-[#806412] rounded-t-sm" />
      <div className="w-7 h-1 bg-gradient-to-r from-[#634e0e] via-[#d4af37] to-[#634e0e] rounded-b-xs" />
    </div>
  );
}

export function OrnateCornerMandala({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const rotationClass = {
    tl: "",
    tr: "rotate-90",
    br: "rotate-180",
    bl: "-rotate-90",
  }[position];

  return (
    <svg
      viewBox="0 0 60 60"
      className={`absolute w-8 h-8 sm:w-10 sm:h-10 text-[#d4af37] pointer-events-none ${rotationClass} ${
        position.includes("t") ? "top-1.5" : "bottom-1.5"
      } ${position.includes("l") ? "left-1.5" : "right-1.5"}`}
      fill="currentColor"
      opacity="0.85"
    >
      <path d="M0,0 L24,0 C22,8 16,14 8,16 L8,24 C18,22 28,12 30,0 L34,0 C32,18 18,32 0,34 L0,30 C12,28 22,18 24,8 L16,8 C14,16 8,22 0,24 Z" />
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="16" cy="16" r="1.5" />
    </svg>
  );
}

export function OrnateDivider({
  title,
}: {
  title?: string;
  malayalam?: string;
}) {
  return (
    <div className="flex items-center justify-center max-w-lg mx-auto my-8 px-4">
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#ffd778]/70 to-[#d4af37]" />
      <div className="mx-4 text-[#ffd778] flex items-center gap-2">
        <span className="text-sm">🪔</span>
        {title ? (
          <span className="font-cinzel text-xs tracking-[0.25em] uppercase text-[#ffd778] font-bold">
            {title}
          </span>
        ) : (
          <span className="text-xs text-[#ffd778]">✦</span>
        )}
        <span className="text-sm">🪔</span>
      </div>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#ffd778]/70 to-[#d4af37]" />
    </div>
  );
}

export default function OrnateFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-3xl p-6 md:p-8 bg-gradient-to-b from-[#5c0b10]/95 via-[#4a080d]/95 to-[#330407]/98 border-2 border-[#d4af37]/65 shadow-[0_18px_50px_rgba(0,0,0,0.7)] backdrop-blur-md overflow-hidden ${className}`}
    >
      {/* 4 Traditional Temple Mandalas from Image 2 */}
      <OrnateCornerMandala position="tl" />
      <OrnateCornerMandala position="tr" />
      <OrnateCornerMandala position="bl" />
      <OrnateCornerMandala position="br" />

      {/* Subtle Inner Gold Bevel Border */}
      <div className="absolute inset-2 sm:inset-2.5 rounded-2xl border border-[#d4af37]/25 pointer-events-none" />

      {children}
    </div>
  );
}
