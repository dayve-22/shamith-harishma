"use client";

import React, { useState } from "react";
import { Calendar as CalendarIcon, Heart, Download, ExternalLink, Check } from "lucide-react";
import OrnateFrame, { OrnateDivider } from "./OrnateKeralaFrame";

export default function CalendarCard() {
  const [downloaded, setDownloaded] = useState(false);

  const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  // December 2026: Dec 1 is Tuesday -> 1 empty cell before Day 1
  const emptyDays = [null];
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  // Google Calendar URL
  const googleCalendarUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Ceremony+%26+Reception+|+Shamith+N+%26+Harishma+P&dates=20261219T033000Z/20261219T163000Z&details=Auspicious+Wedding+Ceremony+and+Reception+of+Shamith+N+and+Harishma+P+at+Kannur+Gardens,+Thazhe+Chovva,+Kannur.&location=Kannur+Gardens,+Thazhe+Chovva,+Kannur";

  // Download iCal (.ics)
  const downloadIcs = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Shamith & Harishma Wedding//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      "SUMMARY:Wedding Ceremony & Reception | Shamith & Harishma",
      "DESCRIPTION:Cordially invite your esteemed presence with family for the auspicious wedding and reception of Shamith N & Harishma P.",
      "LOCATION:Kannur Gardens, Thazhe Chovva, Kannur",
      "DTSTART:20261219T033000Z",
      "DTEND:20261219T163000Z",
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "shamith-harishma-wedding.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <OrnateDivider title="Save The Date" />

      <OrnateFrame className="max-w-lg mx-auto">
        {/* Month Header */}
        <div className="text-center pb-4 border-b border-[#d4af37]/35">
          <span className="font-cinzel text-xs tracking-[0.25em] text-[#ffd778] uppercase font-bold">
            The Wedding Month
          </span>
          <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold gold-gradient-text mt-1">
            December 2026
          </h3>
        </div>

        {/* Days of Week */}
        <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center my-4">
          {weekDays.map((d, i) => (
            <span
              key={i}
              className={`font-cinzel text-[10px] sm:text-xs font-bold tracking-wider py-1 ${
                d === "SAT" || d === "SUN" ? "text-[#ffd778]" : "text-[#fce8b3]/75"
              }`}
            >
              {d}
            </span>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center">
          {emptyDays.map((_, i) => (
            <div key={`empty-${i}`} className="aspect-square" />
          ))}

          {daysInMonth.map((day) => {
            const isWeddingDay = day === 19;
            return (
              <div
                key={day}
                className={`relative aspect-square flex flex-col items-center justify-center rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isWeddingDay
                    ? "bg-gradient-to-b from-[#8a141b] to-[#5a0c10] text-white border-2 border-[#ffd778] shadow-[0_0_18px_rgba(255,215,120,0.7)] scale-105 font-bold z-10"
                    : "text-[#fdf5e6] hover:bg-[#6b0d13]/60"
                }`}
              >
                <span>{day}</span>
                {isWeddingDay && (
                  <Heart className="w-2.5 h-2.5 fill-current text-[#ffd778] -mt-0.5 animate-pulse" />
                )}
              </div>
            );
          })}
        </div>

        {/* Save to Calendar Actions */}
        <div className="mt-8 pt-6 border-t border-[#d4af37]/35 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#680f14] hover:bg-[#82141a] border border-[#ffd778]/60 text-[#ffd778] text-xs font-cinzel font-semibold tracking-wider transition-all duration-300 hover:scale-105 shadow-md"
          >
            <CalendarIcon className="w-4 h-4 text-[#ffd778]" />
            <span>Google Calendar</span>
            <ExternalLink className="w-3 h-3 text-[#ffd778]" />
          </a>

          <button
            onClick={downloadIcs}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#ffd778] via-[#fce8b3] to-[#aa8420] text-[#140a05] text-xs font-cinzel font-bold tracking-wider transition-all duration-300 hover:scale-105 shadow-md cursor-pointer"
          >
            {downloaded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Downloaded!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Download iCal (.ics)</span>
              </>
            )}
          </button>
        </div>
      </OrnateFrame>
    </section>
  );
}
