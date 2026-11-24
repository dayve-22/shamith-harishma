"use client";

import React, { useEffect, useState } from "react";

interface Petal {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  type: "jasmine" | "marigold" | "rose";
  rotation: number;
}

export default function FloralPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Generate gentle ambient falling petals
    const items: Petal[] = Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage across width
      size: Math.random() * 8 + 8, // size in px
      duration: Math.random() * 8 + 7, // 7s to 15s fall duration
      delay: Math.random() * 5,
      type: (["jasmine", "marigold", "rose"] as const)[Math.floor(Math.random() * 3)],
      rotation: Math.random() * 360,
    }));
    setPetals(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute top-0 opacity-70 animate-petal-fall"
          style={{
            left: `${petal.x}%`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
          }}
        >
          {petal.type === "jasmine" && (
            <div
              className="rounded-full bg-gradient-to-br from-white via-[#fffdf0] to-[#f5ecd7] shadow-[0_0_6px_rgba(255,255,255,0.4)]"
              style={{
                width: `${petal.size}px`,
                height: `${petal.size * 1.5}px`,
                transform: `rotate(${petal.rotation}deg)`,
                borderRadius: "50% 50% 50% 0",
              }}
            />
          )}

          {petal.type === "marigold" && (
            <div
              className="rounded-full bg-gradient-to-tr from-[#ea580c] via-[#f59e0b] to-[#fef08a] shadow-[0_0_8px_rgba(245,158,11,0.5)]"
              style={{
                width: `${petal.size * 0.9}px`,
                height: `${petal.size * 1.2}px`,
                transform: `rotate(${petal.rotation}deg)`,
                borderRadius: "60% 40% 60% 40%",
              }}
            />
          )}

          {petal.type === "rose" && (
            <div
              className="rounded-full bg-gradient-to-br from-[#dc2626] via-[#991b1b] to-[#7f1d1d] shadow-[0_0_6px_rgba(220,38,38,0.4)]"
              style={{
                width: `${petal.size}px`,
                height: `${petal.size * 1.3}px`,
                transform: `rotate(${petal.rotation}deg)`,
                borderRadius: "50% 50% 40% 60%",
              }}
            />
          )}
        </div>
      ))}

      <style jsx>{`
        @keyframes petalFall {
          0% {
            transform: translateY(-20px) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(105vh) translateX(40px) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-petal-fall {
          animation-name: petalFall;
        }
      `}</style>
    </div>
  );
}
