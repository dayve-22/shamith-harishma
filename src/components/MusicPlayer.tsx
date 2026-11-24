"use client";

import React, { useState, useEffect } from "react";
import { Pause, Play } from "lucide-react";

interface MusicPlayerProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

export default function MusicPlayer({ audioRef }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Directly bind state to the native HTML5 audio events & periodic sync for 100% reliability
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);

    // Initial sync
    setIsPlaying(!audio.paused);

    // Periodic safety check every 500ms to ensure UI never desyncs from browser audio engine
    const syncInterval = setInterval(() => {
      if (audioRef.current) {
        setIsPlaying(!audioRef.current.paused);
      }
    }, 500);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
      clearInterval(syncInterval);
    };
  }, [audioRef]);

  // Robust direct toggle: works 100% reliably on every click and touch on the pill
  const handleTogglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = 0.55;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn("Audio play prevented:", err);
        });
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[100] select-none pointer-events-auto">
      {/* Floating Music Pill with unified, clean single-icon toggle */}
      <button
        type="button"
        onClick={handleTogglePlay}
        className="flex items-center gap-2.5 px-3 py-2 rounded-full bg-[#2b0407]/92 hover:bg-[#4a080d] active:scale-95 border-2 border-[#ffd778]/80 shadow-[0_8px_32px_rgba(0,0,0,0.85)] text-[#fdf5e6] cursor-pointer transition-all duration-300 group"
        title={isPlaying ? "Pause Music (Pesamale)" : "Play Music (Pesamale)"}
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
        {/* Single Clean Gold Play/Pause Button - Zero Overlap */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#ffd778] via-[#fce8b3] to-[#d4af37] text-[#2b0407] flex items-center justify-center shadow-md shrink-0 group-hover:scale-105 transition-transform">
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-[#2b0407] text-[#2b0407]" />
          ) : (
            <Play className="w-4 h-4 fill-[#2b0407] text-[#2b0407] ml-0.5" />
          )}
        </div>

        {/* Track Label & Animated Equalizer Waves */}
        <div className="flex flex-col text-left pr-1">
          <div className="flex items-center gap-1.5">
            {isPlaying && (
              <div className="flex items-end gap-[2px] h-3">
                <span className="w-[2px] h-2 bg-[#ffd778] animate-pulse rounded-full" />
                <span className="w-[2px] h-3 bg-[#ffd778] animate-bounce rounded-full" />
                <span className="w-[2px] h-1.5 bg-[#ffd778] animate-pulse rounded-full" />
              </div>
            )}
            <span className="font-cinzel text-[11px] font-bold text-[#ffd778] tracking-wider whitespace-nowrap">
              {isPlaying ? "Pause Music" : "Play Music"}
            </span>
          </div>
          <span className="font-cormorant italic text-[10px] text-[#fce8b3] tracking-wide whitespace-nowrap">
            Pesamale &bull; Siri Xander
          </span>
        </div>
      </button>
    </div>
  );
}
