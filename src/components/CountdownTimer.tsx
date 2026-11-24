"use client";

import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import OrnateFrame, { OrnateDivider } from "./OrnateKeralaFrame";

export default function CountdownTimer() {
  // Target: 19th December 2026, 09:00 AM IST
  const targetDate = "2026-12-19T09:00:00+05:30";

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const calculateTime = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto text-center">
      <OrnateDivider title="Countdown to the Wedding" />

      <OrnateFrame className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Clock className="w-5 h-5 text-[#ffd778]" />
          <span className="font-cinzel text-xs uppercase tracking-widest text-[#ffd778] font-bold">
            Counting Down The Moments
          </span>
        </div>

        {/* 4 Counter Units */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg mx-auto">
          {units.map((unit, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/3] sm:aspect-square p-3 sm:p-4 rounded-2xl bg-[#52090e]/95 border-2 border-[#d4af37]/60 shadow-inner flex flex-col items-center justify-center group hover:border-[#ffd778] transition-all"
            >
              <span className="font-cinzel text-3xl sm:text-4xl font-extrabold gold-gradient-text">
                {isMounted ? String(unit.value).padStart(2, "0") : "00"}
              </span>
              <span className="font-cinzel text-[11px] tracking-widest uppercase text-white font-bold mt-1">
                {unit.label}
              </span>
            </div>
          ))}
        </div>

        <p className="font-cormorant italic text-xs sm:text-sm text-[#fdebd0] mt-6">
          Saturday, 19th December 2026 &bull; Kannur Gardens, Thazhe Chovva
        </p>
      </OrnateFrame>
    </section>
  );
}
