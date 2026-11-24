"use client";

import React, { useState, useEffect } from "react";
import { MessageSquareHeart, Send, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import OrnateFrame, { OrnateDivider } from "./OrnateKeralaFrame";

interface Wish {
  id: string;
  name: string;
  message: string;
  date: string;
}

export default function WishesWall() {
  const [wishes, setWishes] = useState<Wish[]>([
    {
      id: "1",
      name: "Edathil Family Elders",
      message:
        "മംഗളങ്ങൾ നേരുന്നു! May Lord Ganapathi and our ancestors shower eternal happiness, good health, and prosperous harmony on dear Shamith & Harishma.",
      date: "Nov 2026",
    },
    {
      id: "2",
      name: "Porukkandy & Elayavoor Family",
      message:
        "Heartiest congratulations to our precious Harishma and dearest Shamith! Wishing you both a lifetime of smiles, shared dreams, and divine blessings.",
      date: "Nov 2026",
    },
    {
      id: "3",
      name: "Thalassery & Kannur Friends",
      message:
        "Hearty congratulations Shamith & Harishma! Eagerly waiting to celebrate your grand day at Kannur Gardens on December 19th!",
      date: "Nov 2026",
    },
  ]);

  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("wedding_wishes_shamith_harishma");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setWishes(parsed);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !text.trim()) return;

    setIsSubmitting(true);

    const newWish: Wish = {
      id: Date.now().toString(),
      name: author.trim(),
      message: text.trim(),
      date: "Just now",
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    try {
      localStorage.setItem("wedding_wishes_shamith_harishma", JSON.stringify(updated));
    } catch {
      // ignore
    }

    try {
      confetti({
        particleCount: 40,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#ffd778", "#fce8b3", "#c83f3f", "#ffffff"],
      });
    } catch {
      // ignore
    }

    setAuthor("");
    setText("");
    setIsSubmitting(false);
  };

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <OrnateDivider title="Auspicious Wishes Wall" malayalam="മംഗളാശംസകൾ" />

      <OrnateFrame className="max-w-3xl mx-auto">
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#751117] border border-[#ffd778]/50 text-[#ffd778] text-xs font-cinzel tracking-widest uppercase shadow-sm">
            <MessageSquareHeart className="w-3.5 h-3.5 text-[#ffd778]" />
            <span>Digital Athithi Book</span>
          </div>
          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold gold-gradient-text">
            Bless Shamith &amp; Harishma
          </h3>
          <p className="font-cormorant italic text-sm sm:text-base text-[#fdebd0] max-w-lg mx-auto">
            Leave your warm prayers, congratulatory blessings, and cherished wishes for the newlyweds.
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="mb-10 space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name / Family Name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#3b0609]/95 border-2 border-[#d4af37]/50 text-white placeholder-[#d4a896] text-sm focus:outline-none focus:border-[#ffd778] transition-colors"
              required
            />
          </div>

          <div>
            <textarea
              rows={3}
              placeholder="Write your prayers, blessings and warm wishes here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#3b0609]/95 border-2 border-[#d4af37]/50 text-white placeholder-[#d4a896] text-sm focus:outline-none focus:border-[#ffd778] transition-colors resize-none"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#ffd778] via-[#fce8b3] to-[#aa8420] text-[#140a05] text-xs font-cinzel font-bold tracking-wider hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Blessings</span>
            </button>
          </div>
        </form>

        {/* Wishes Feed */}
        <div className="space-y-4 max-h-96 overflow-y-auto pr-1">
          {wishes.map((w) => (
            <div
              key={w.id}
              className="p-4 rounded-xl bg-[#4a080d]/90 border border-[#d4af37]/35 space-y-2 hover:border-[#ffd778]/70 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-cinzel text-xs font-bold text-[#ffd778] tracking-wide">
                  {w.name}
                </span>
                <span className="text-[10px] text-[#fce8b3]/70 font-cinzel">
                  {w.date}
                </span>
              </div>
              <p className="font-cormorant italic text-sm text-[#fdebd0] leading-relaxed">
                &ldquo;{w.message}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </OrnateFrame>
    </section>
  );
}
