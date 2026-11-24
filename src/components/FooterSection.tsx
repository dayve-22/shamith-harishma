"use client";

import React, { useState } from "react";
import { Share2, Heart, Check } from "lucide-react";
import { OrnateDivider } from "./OrnateKeralaFrame";

export default function FooterSection() {
  const [copied, setCopied] = useState(false);

  const shareText =
    "🌸 Wedding Invitation | Shamith & Harishma 🌸\n\nCordially invite your esteemed presence with family for the auspicious wedding ceremony and reception of Shamith N & Harishma P on Saturday, 19th December 2026 at Kannur Gardens, Thazhe Chovva, Kannur.\n\nOpen the royal invitation link below:\n";

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Shamith & Harishma Wedding Invitation",
          text: shareText,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(shareText + window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleWhatsAppShare = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(
      shareText + (typeof window !== "undefined" ? window.location.href : "")
    )}`;
    window.open(url, "_blank");
  };

  return (
    <footer className="relative mt-20 pt-16 pb-24 px-4 bg-gradient-to-b from-[#3b0508] via-[#2c0305] to-[#1a0203] border-t-2 border-[#d4af37]/40 text-center">
      {/* Ornate Divider */}
      <OrnateDivider />

      <div className="max-w-xl mx-auto space-y-6">
        {/* Sacred Couple Monogram in Gold & Kumkum Heart ("Love" Shape) */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto flex items-center justify-center filter drop-shadow-[0_8px_25px_rgba(212,175,55,0.45)] group hover:scale-105 transition-transform duration-300">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full overflow-visible"
          >
            <defs>
              <linearGradient id="monogramHeartBg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6b0d13" />
                <stop offset="60%" stopColor="#4a080d" />
                <stop offset="100%" stopColor="#280306" />
              </linearGradient>
              <linearGradient id="monogramHeartGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffd778" />
                <stop offset="40%" stopColor="#fff2cc" />
                <stop offset="70%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#997315" />
              </linearGradient>
            </defs>

            {/* Outer Gold Heart Frame */}
            <path
              d="M50 88 C20 65, 8 45, 8 28 C8 14, 18 6, 32 6 C41 6, 47 11, 50 16 C53 11, 59 6, 68 6 C82 6, 92 14, 92 28 C92 45, 80 65, 50 88 Z"
              fill="url(#monogramHeartBg)"
              stroke="url(#monogramHeartGold)"
              strokeWidth="3"
              strokeLinejoin="round"
            />

            {/* Inner Delicate Gold Rim */}
            <path
              d="M50 82 C24 62, 14 43, 14 29 C14 17, 22 11, 33 11 C40 11, 46 15, 50 19 C54 15, 60 11, 67 11 C78 11, 86 17, 86 29 C86 43, 76 62, 50 82 Z"
              fill="none"
              stroke="url(#monogramHeartGold)"
              strokeWidth="1"
              strokeDasharray="2 2"
              opacity="0.65"
            />
          </svg>

          {/* Monogram S & H inside Heart */}
          <div className="absolute inset-0 flex items-center justify-center pt-1.5 pointer-events-none">
            <span className="font-script text-3xl sm:text-4xl gold-gradient-text drop-shadow-[0_2px_8px_rgba(212,175,55,0.6)]">
              S &amp; H
            </span>
          </div>
        </div>

        <div className="space-y-1">
          <h4 className="font-cinzel text-lg sm:text-xl font-bold text-[#ffd778] tracking-widest uppercase">
            Shamith &amp; Harishma
          </h4>
          <p className="font-cormorant italic text-sm text-[#fce8b3]">
            Looking forward to celebrating with you
          </p>
          <p className="font-cinzel text-xs text-[#fdebd0]/80 tracking-widest pt-1">
            19.12.2026 &bull; Kannur Gardens, Thazhe Chovva
          </p>
        </div>

        {/* Share Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleWhatsAppShare}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-cinzel font-bold tracking-wider transition-all duration-300 hover:scale-105 shadow-md cursor-pointer"
          >
            <Share2 className="w-4 h-4 fill-white" />
            <span>Share on WhatsApp</span>
          </button>

          <button
            onClick={handleShare}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#52090e] hover:bg-[#6e0f15] border-2 border-[#d4af37]/60 text-[#ffd778] text-xs font-cinzel font-semibold tracking-wider transition-all duration-300 hover:scale-105 shadow-md cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-[#ffd778]" />
                <span>Copy Invite Link</span>
              </>
            )}
          </button>
        </div>

        {/* Blessing Note */}
        <p className="font-cormorant italic text-xs sm:text-sm text-[#fce8b3]/80 pt-6 border-t border-[#d4af37]/25">
          Your presence and blessings are our most treasured wedding gifts.
        </p>

        <div className="flex items-center justify-center gap-1.5 text-[11px] font-cinzel text-[#ffd778] tracking-wider uppercase">
          <span>Auspicious Vivaha Mangalyam</span>
          <Heart className="w-3 h-3 text-[#ff4d55] fill-current" />
          <span>2026</span>
        </div>
      </div>
    </footer>
  );
}
