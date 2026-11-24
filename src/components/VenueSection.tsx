"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Copy, Check, Car, Train, Plane } from "lucide-react";
import OrnateFrame, { OrnateDivider } from "./OrnateKeralaFrame";

export default function VenueSection() {
  const [copied, setCopied] = useState(false);

  const venueName = "Kannur Gardens";
  const venueAddress = "Kannur Gardens, Thazhe Chovva, Kannur, Kerala - 670018";
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Kannur+Gardens+Thazhe+Chovva+Kannur";

  const handleCopy = () => {
    navigator.clipboard.writeText(venueAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <OrnateDivider title="Wedding Venue" />

      <OrnateFrame className="max-w-3xl mx-auto">
        {/* Venue Title & Locality */}
        <div className="text-center space-y-2 mb-8">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#751117] border border-[#ffd778]/50 text-[#ffd778] text-xs font-cinzel tracking-widest uppercase shadow-sm">
            Wedding &amp; Reception Destination
          </span>
          <h3 className="font-cinzel text-3xl sm:text-4xl font-extrabold gold-gradient-text">
            {venueName}
          </h3>
          <p className="font-cormorant italic text-base sm:text-lg text-[#fdebd0]">
            Thazhe Chovva, Kannur, Kerala
          </p>
        </div>

        {/* Embedded Interactive Map Card - Perfectly Centered in Container & View */}
        <div className="w-full max-w-2xl mx-auto mb-8">
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#d4af37]/70 shadow-2xl bg-[#2b0407] aspect-[16/9] max-h-80 w-full flex items-center justify-center">
            <iframe
              title="Kannur Gardens Location Map"
              src="https://maps.google.com/maps?q=Kannur+Gardens,+Thazhe+Chovva,+Kannur&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter contrast-105"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Action Buttons: Navigate & Copy */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 max-w-2xl mx-auto">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#ffd778] via-[#fce8b3] to-[#aa8420] text-[#140a05] text-xs font-cinzel font-bold tracking-wider transition-all duration-300 hover:scale-105 shadow-xl"
          >
            <Navigation className="w-4 h-4 fill-current" />
            <span>Get Directions in Google Maps</span>
          </a>

          <button
            onClick={handleCopy}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#5c0b10] hover:bg-[#781017] border-2 border-[#d4af37]/60 text-white text-xs font-cinzel font-semibold tracking-wider transition-all duration-300 hover:scale-105 shadow-md cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Address Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#ffd778]" />
                <span>Copy Full Address</span>
              </>
            )}
          </button>
        </div>

        {/* Travel & Connectivity Guidance */}
        <div className="pt-6 border-t border-[#d4af37]/35 grid grid-cols-1 md:grid-cols-3 gap-4 text-center items-stretch max-w-2xl mx-auto">
          <div className="p-4 rounded-2xl bg-[#52090e]/95 border border-[#d4af37]/40 flex flex-col items-center justify-center h-full min-h-[92px] space-y-1">
            <Train className="w-4 h-4 text-[#ffd778] shrink-0" />
            <p className="font-cinzel text-[11px] font-bold text-white">Kannur Railway Station</p>
            <p className="text-[11px] text-[#ffd778]">~ 4.5 km (10-15 mins)</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#52090e]/95 border border-[#d4af37]/40 flex flex-col items-center justify-center h-full min-h-[92px] space-y-1">
            <Car className="w-4 h-4 text-[#ffd778] shrink-0" />
            <p className="font-cinzel text-[11px] font-bold text-white">Highway Access</p>
            <p className="text-[11px] text-[#ffd778]">Thalassery-Kannur NH 66</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#52090e]/95 border border-[#d4af37]/40 flex flex-col items-center justify-center h-full min-h-[92px] space-y-1">
            <Plane className="w-4 h-4 text-[#ffd778] shrink-0" />
            <p className="font-cinzel text-[11px] font-bold text-white">Kannur Int&apos;l Airport (CNN)</p>
            <p className="text-[11px] text-[#ffd778]">~ 24 km (35 mins)</p>
          </div>
        </div>
      </OrnateFrame>
    </section>
  );
}
