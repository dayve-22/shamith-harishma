"use client";

import React from "react";
import { MapPin, Flower2 } from "lucide-react";
import OrnateFrame, { OrnateDivider } from "./OrnateKeralaFrame";

export default function FamilySection() {
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <OrnateDivider title="Family &amp; Lineage" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Groom's Family */}
        <OrnateFrame className="h-full flex flex-col justify-between space-y-4">
          <div className="space-y-4 flex-1 flex flex-col">
            <div className="flex items-center justify-between border-b border-[#d4af37]/35 pb-3">
              <div>
                <span className="font-cinzel text-xs tracking-[0.25em] text-[#ffd778] uppercase font-bold">
                  Groom&apos;s Family
                </span>
              </div>
              <span className="text-xl">🪔</span>
            </div>

            <div>
              <p className="font-cinzel text-xs text-[#ffd778] uppercase tracking-wider font-semibold">
                Groom
              </p>
              <h4 className="font-script text-3xl gold-gradient-text">
                Shamith N
              </h4>
            </div>

            <div className="space-y-1 min-h-[64px] flex flex-col justify-center">
              <p className="font-cinzel text-xs text-[#ffd778] uppercase tracking-wider font-semibold">
                Parents
              </p>
              <p className="font-cinzel text-sm sm:text-base font-bold text-white">
                Sri. Mohanan P &amp; Smt. Sreeja N
              </p>
            </div>
          </div>

          <div className="pt-3 mt-4 border-t border-[#d4af37]/30 min-h-[96px] flex flex-col justify-start">
            <p className="font-cinzel text-xs text-[#ffd778] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-[#ffd778] shrink-0" />
              <span>Family Residence</span>
            </p>
            <p className="font-cormorant text-sm sm:text-base text-[#fdebd0] leading-relaxed">
              Edathil House,<br />
              PO Vadakkumbad, Madathumbhagam,<br />
              Thalassery, Kannur &ndash; 670105
            </p>
          </div>
        </OrnateFrame>

        {/* Bride's Family */}
        <OrnateFrame className="h-full flex flex-col justify-between space-y-4">
          <div className="space-y-4 flex-1 flex flex-col">
            <div className="flex items-center justify-between border-b border-[#d4af37]/35 pb-3">
              <div>
                <span className="font-cinzel text-xs tracking-[0.25em] text-[#ffd778] uppercase font-bold">
                  Bride&apos;s Family
                </span>
              </div>
              <span className="text-xl">🪔</span>
            </div>

            <div>
              <p className="font-cinzel text-xs text-[#ffd778] uppercase tracking-wider font-semibold">
                Bride
              </p>
              <h4 className="font-script text-3xl gold-gradient-text">
                Harishma P
              </h4>
            </div>

            <div className="space-y-1 min-h-[64px] flex flex-col justify-center">
              <p className="font-cinzel text-xs text-[#ffd778] uppercase tracking-wider font-semibold">
                Parents
              </p>
              <p className="font-cinzel text-sm sm:text-base font-bold text-white">
                Sri. Harindran P
              </p>
              <div className="flex items-center gap-1.5 text-xs text-[#fce8b3]">
                <Flower2 className="w-3.5 h-3.5 text-[#ffd778] shrink-0" />
                <span className="font-cormorant italic text-sm">
                  &amp; Smt. Nisha K <span className="text-xs text-[#ffd778]">(In Loving Memory)</span>
                </span>
              </div>
            </div>
          </div>

          <div className="pt-3 mt-4 border-t border-[#d4af37]/30 min-h-[96px] flex flex-col justify-start">
            <p className="font-cinzel text-xs text-[#ffd778] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-[#ffd778] shrink-0" />
              <span>Family Residence</span>
            </p>
            <p className="font-cormorant text-sm sm:text-base text-[#fdebd0] leading-relaxed">
              Porukkandy House,<br />
              Elayavoor PO, Mundayad,<br />
              Kannur &ndash; 670594
            </p>
          </div>
        </OrnateFrame>
      </div>
    </section>
  );
}
