"use client";

import React, { useState, useRef, useEffect } from "react";
import confetti from "canvas-confetti";
import { Sparkles, Play, ChevronDown } from "lucide-react";

interface VideoDoorIntroProps {
  onInvitationOpen: () => void;
  onVideoComplete: () => void;
  onStartAudio: () => void;
  videoCompleted: boolean;
}

export default function VideoDoorIntro({
  onInvitationOpen,
  onVideoComplete,
  onStartAudio,
  videoCompleted,
}: VideoDoorIntroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const bgVideoRef = useRef<HTMLVideoElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [doorReached, setDoorReached] = useState(false);
  const [doorOpened, setDoorOpened] = useState(false);
  const [showPlayFallback, setShowPlayFallback] = useState(false);
  const [isBlooming, setIsBlooming] = useState(false);

  // Exact time when guests reach the doorway steps
  const DOOR_STOP_TIME = 2.35;
  // Video source provided by user
  const VIDEO_SRC = "/hf_20261124_120735_055d76de-bc10-4c18-b528-daebdc91017c.mp4";

  useEffect(() => {
    const video = videoRef.current;
    const bgVideo = bgVideoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.muted = true;

    if (bgVideo) {
      bgVideo.currentTime = 0;
      bgVideo.muted = true;
    }

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setHasStarted(true);
          if (bgVideoRef.current) {
            bgVideoRef.current.play().catch(() => {});
          }
          onStartAudio();
        })
        .catch(() => {
          setShowPlayFallback(true);
        });
    }
  }, [onStartAudio]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    const bgVideo = bgVideoRef.current;
    if (!video) return;

    // Keep ambient background video in lockstep with foreground
    if (bgVideo && Math.abs(bgVideo.currentTime - video.currentTime) > 0.25) {
      bgVideo.currentTime = video.currentTime;
    }

    // Pause cleanly when guests reach the doorway
    if (!doorOpened && video.currentTime >= DOOR_STOP_TIME) {
      video.pause();
      video.currentTime = DOOR_STOP_TIME;
      if (bgVideo) {
        bgVideo.pause();
        bgVideo.currentTime = DOOR_STOP_TIME;
      }
      setDoorReached(true);
    }

    // Trigger golden light sanctuary bloom as camera steps into the inner hall (~8.6s onwards)
    if (doorOpened && video.currentTime >= 8.6 && !isBlooming) {
      setIsBlooming(true);
    }
  };

  const handleOpenDoor = (e?: React.MouseEvent) => {
    if (doorOpened) return;
    const video = videoRef.current;
    const bgVideo = bgVideoRef.current;
    if (!video) return;

    // Trigger soundtrack immediately upon click
    onStartAudio();

    // Celebration confetti burst
    try {
      const rect = e?.currentTarget?.getBoundingClientRect();
      const x = rect ? (rect.left + rect.width / 2) / window.innerWidth : 0.5;
      const y = rect ? (rect.top + rect.height / 2) / window.innerHeight : 0.5;

      confetti({
        particleCount: 65,
        spread: 90,
        origin: { x, y },
        colors: ["#ffd778", "#fce8b3", "#d4af37", "#ea580c", "#ffffff"],
        gravity: 0.7,
        scalar: 1.15,
      });
    } catch {
      // ignore
    }

    setDoorOpened(true);
    setDoorReached(false);
    onInvitationOpen();

    // Resume both videos in lockstep
    video.muted = true;
    video.play().catch(() => {});

    if (bgVideo) {
      bgVideo.muted = true;
      bgVideo.play().catch(() => {});
    }
  };

  const handleVideoEnded = () => {
    // Golden sparkle finale as camera reaches inside
    try {
      confetti({
        particleCount: 50,
        spread: 100,
        origin: { x: 0.5, y: 0.6 },
        colors: ["#ffd778", "#fce8b3", "#d4af37", "#ffffff"],
        gravity: 0.6,
      });
    } catch {
      // ignore
    }

    onVideoComplete();
  };

  const scrollToDetails = () => {
    const detailsEl = document.getElementById("wedding-details");
    if (detailsEl) {
      detailsEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full h-screen min-h-screen flex items-center justify-center bg-[#150103] overflow-hidden select-none">
      {/* AMBIENT SAME-VIDEO BACKGROUND FOR LARGER SCREENS */}
      <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none">
        <video
          ref={bgVideoRef}
          src={VIDEO_SRC}
          playsInline
          muted={true}
          loop={videoCompleted}
          className="w-full h-full object-cover filter blur-2xl opacity-60 scale-110 transition-transform duration-1000"
        />

        {/* Soft Kumkum & Gold lighting blend around the video */}
        <div className="absolute inset-0 bg-[#2b0407]/35 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#150103] via-transparent to-[#150103] opacity-85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#120102_95%)]" />

        {/* Traditional Temple Pillar Accents flanking the video on large displays */}
        <div className="hidden lg:flex absolute left-8 xl:left-14 top-1/2 -translate-y-1/2 flex-col items-center gap-4 text-[#ffd778]/70">
          <span className="text-2xl drop-shadow-[0_0_10px_rgba(255,215,120,0.6)]">🪔</span>
          <div className="w-[1.5px] h-48 bg-gradient-to-b from-transparent via-[#ffd778]/50 to-transparent" />
          <span className="text-xs tracking-[0.25em] text-[#ffd778] font-cinzel font-bold">✦</span>
          <div className="w-[1.5px] h-48 bg-gradient-to-b from-transparent via-[#ffd778]/50 to-transparent" />
          <span className="text-2xl drop-shadow-[0_0_10px_rgba(255,215,120,0.6)]">🪔</span>
        </div>

        <div className="hidden lg:flex absolute right-8 xl:right-14 top-1/2 -translate-y-1/2 flex-col items-center gap-4 text-[#ffd778]/70">
          <span className="text-2xl drop-shadow-[0_0_10px_rgba(255,215,120,0.6)]">🪔</span>
          <div className="w-[1.5px] h-48 bg-gradient-to-b from-transparent via-[#ffd778]/50 to-transparent" />
          <span className="text-xs tracking-[0.25em] text-[#ffd778] font-cinzel font-bold">✦</span>
          <div className="w-[1.5px] h-48 bg-gradient-to-b from-transparent via-[#ffd778]/50 to-transparent" />
          <span className="text-2xl drop-shadow-[0_0_10px_rgba(255,215,120,0.6)]">🪔</span>
        </div>
      </div>

      {/* CENTERED RESPONSIVE VIDEO CONTAINER */}
      {/* Mobile (<md): 100% full screen */}
      {/* Desktop (md+): Max width matched to 9:16 aspect ratio with gold border accents and shadow */}
      <div
        className={`relative h-full w-full md:max-w-[calc(100vh*9/16)] md:max-h-screen flex items-center justify-center cursor-pointer shadow-[0_0_100px_rgba(0,0,0,0.98)] md:border-x-2 md:border-[#ffd778]/50 bg-black z-10 transition-all duration-1000 ${
          isBlooming ? "scale-[1.02]" : ""
        }`}
        onClick={() => {
          if (doorReached && !doorOpened) {
            handleOpenDoor();
          }
        }}
      >
        {/* Main 9:16 Video - Permanently Muted */}
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          playsInline
          preload="auto"
          muted={true}
          loop={videoCompleted}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleVideoEnded}
          className={`h-full w-full object-cover transition-all duration-1000 ${
            isBlooming ? "filter brightness-110 contrast-105" : ""
          }`}
        />

        {/* Fallback Play Button if browser blocked autoplay */}
        {showPlayFallback && !hasStarted && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/60">
            <button
              onClick={() => {
                if (videoRef.current) {
                  videoRef.current.play().then(() => {
                    setHasStarted(true);
                    setShowPlayFallback(false);
                    onStartAudio();
                  });
                }
              }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#ffd778] via-[#fce8b3] to-[#aa8420] text-[#140a05] font-cinzel font-bold text-xs tracking-wider shadow-xl flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Tap to Enter</span>
            </button>
          </div>
        )}

        {/* "YOU'RE WELCOME" BUTTON IN THE MIDDLE AT THE DOOR */}
        {doorReached && !doorOpened && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center px-4 bg-black/30 pointer-events-auto animate-fade-in">
            <div className="relative flex flex-col items-center">
              {/* Outer Golden Glow Aura */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-[#ffd778]/40 via-[#fce8b3]/50 to-[#ffd778]/40 blur-xl animate-pulse pointer-events-none" />

              {/* The "You're Welcome" Button */}
              <button
                onClick={handleOpenDoor}
                className="group relative px-8 py-4 sm:px-10 sm:py-5 rounded-2xl bg-gradient-to-b from-[#6b0d13]/98 via-[#4f080c]/98 to-[#360306]/98 border-2 border-[#ffd778] shadow-[0_12px_45px_rgba(212,175,55,0.6)] hover:shadow-[0_16px_55px_rgba(212,175,55,0.85)] hover:border-[#fff2cc] transform hover:scale-[1.04] active:scale-[0.98] transition-all duration-300 cursor-pointer flex flex-col items-center gap-1.5"
                aria-label="You're Welcome - Open Doors"
              >
                {/* Traditional Auspicious Diya / Welcome Tag */}
                <div className="flex items-center gap-2 text-[#ffd778] group-hover:text-[#fff2cc] transition-colors">
                  <span className="text-sm">🪔</span>
                  <span className="font-cinzel text-xs tracking-[0.2em] font-semibold text-[#fce8b3] uppercase">
                    Welcome
                  </span>
                  <span className="text-sm">🪔</span>
                </div>

                {/* Main Action Title: You're Welcome */}
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-[#ffd778] animate-spin-slow" />
                  <span className="font-cinzel text-lg sm:text-xl md:text-2xl font-bold tracking-[0.16em] uppercase text-white drop-shadow-[0_2px_10px_rgba(212,175,55,0.8)]">
                    You&apos;re Welcome
                  </span>
                  <Sparkles className="w-5 h-5 text-[#ffd778] animate-spin-slow" />
                </div>

                {/* Subtitle */}
                <span className="font-cormorant italic text-xs sm:text-sm text-[#fce8b3] tracking-wide mt-0.5">
                  Touch to step inside
                </span>

                {/* Corner Filigree */}
                <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 border-[#ffd778]" />
                <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 border-[#ffd778]" />
                <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 border-[#ffd778]" />
                <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-[#ffd778]" />
              </button>

              {/* Pulsing Hint Beneath */}
              <p className="mt-4 font-cinzel text-[11px] sm:text-xs text-[#ffd778] tracking-widest uppercase font-semibold drop-shadow-md animate-bounce">
                ▼ Click to Open The Doors ▼
              </p>
            </div>
          </div>
        )}

        {/* SICK CINEMATIC SANCTUARY GOLDEN BLOOM OVERLAY */}
        {isBlooming && (
          <div className="absolute inset-0 z-20 pointer-events-none animate-bloom-in bg-[radial-gradient(ellipse_at_center,rgba(255,215,120,0.55)_0%,rgba(138,20,27,0.35)_45%,transparent_85%)] mix-blend-screen" />
        )}

        {/* Bottom Gradient Blend connecting video to details below */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#3b0508] via-[#3b0508]/80 to-transparent pointer-events-none" />

        {/* Smooth Scroll Down Indicator (appears once video completes) */}
        {videoCompleted && (
          <div
            onClick={scrollToDetails}
            className="absolute bottom-6 inset-x-0 z-30 flex flex-col items-center cursor-pointer pointer-events-auto animate-fade-in group"
          >
            <div className="px-5 py-2.5 rounded-full bg-[#6b0d13]/92 hover:bg-[#82141a] border-2 border-[#ffd778] text-[#ffd778] text-xs font-cinzel font-bold tracking-widest uppercase shadow-[0_6px_25px_rgba(0,0,0,0.8)] flex items-center gap-2 group-hover:scale-105 transition-all">
              <span>View Wedding Details</span>
              <ChevronDown className="w-4 h-4 animate-bounce text-[#ffd778]" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
