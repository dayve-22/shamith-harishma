"use client";

import React, { useState, useEffect, useRef } from "react";
import VideoDoorIntro from "@/components/VideoDoorIntro";
import HeroSection from "@/components/HeroSection";
import CoupleStoryCard from "@/components/CoupleStoryCard";
import EventsSection from "@/components/EventsSection";
import CalendarCard from "@/components/CalendarCard";
import CountdownTimer from "@/components/CountdownTimer";
import VenueSection from "@/components/VenueSection";
import FamilySection from "@/components/FamilySection";
import FooterSection from "@/components/FooterSection";
import MusicPlayer from "@/components/MusicPlayer";
import DeveloperCreditWidget from "@/components/DeveloperCreditWidget";
import FloralPetals from "@/components/FloralPetals";

export default function WeddingPage() {
  const [invitationOpened, setInvitationOpened] = useState(false);
  const [videoCompleted, setVideoCompleted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Play Pesamale soundtrack continuously throughout the whole experience
  const startAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.55;
    if (audio.paused) {
      audio.play().catch(() => {
        // Handled upon first user interaction
      });
    }
  };

  const handleOpenInvitation = () => {
    setInvitationOpened(true);
  };

  // Ultra-smooth cinematic cubic-bezier camera glide down
  const cinematicScrollTo = (targetY: number, durationMs = 1500) => {
    const startY = window.scrollY;
    const diff = targetY - startY;
    if (Math.abs(diff) < 2) return;

    const startTime = performance.now();
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startY + diff * ease);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  // ONLY AFTER clicking "You're Welcome" AND after video finishes, unlock and scroll down
  const handleVideoComplete = () => {
    setVideoCompleted(true);

    // Buttery smooth glide down from the doorway into the wedding card
    setTimeout(() => {
      const detailsEl = document.getElementById("wedding-details");
      if (detailsEl) {
        const targetY = detailsEl.getBoundingClientRect().top + window.scrollY;
        cinematicScrollTo(targetY, 1500);
      }
    }, 350);
  };

  // Auto-scroll through invitation: Activated ONLY after video is completely finished
  useEffect(() => {
    if (!videoCompleted || !invitationOpened) return;

    let animationFrameId: number;
    let isInteracting = false;
    let resumeTimeout: NodeJS.Timeout | null = null;
    let currentY = 0;
    let lastAutoScrollY = -1;
    let lastTime = performance.now();
    const pixelsPerSecond = 34; // Buttery, gentle reading pace

    const pauseScrolling = () => {
      isInteracting = true;
      if (resumeTimeout) clearTimeout(resumeTimeout);
    };

    const resumeScrollingWithDelay = (delayMs = 1500) => {
      if (resumeTimeout) clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => {
        isInteracting = false;
        currentY = window.scrollY;
      }, delayMs);
    };

    const handlePointerDown = () => pauseScrolling();
    const handlePointerUp = () => resumeScrollingWithDelay(1500);
    const handleWheel = () => {
      pauseScrolling();
      resumeScrollingWithDelay(1500);
    };

    const handleScroll = () => {
      if (Math.abs(window.scrollY - lastAutoScrollY) < 3) {
        return;
      }
      pauseScrolling();
      currentY = window.scrollY;
      resumeScrollingWithDelay(1500);
    };

    const cleanupListeners = () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
      window.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("touchend", handlePointerUp);
      window.removeEventListener("touchcancel", handlePointerUp);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
    };

    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    window.addEventListener("pointercancel", handlePointerUp, { passive: true });
    window.addEventListener("touchstart", handlePointerDown, { passive: true });
    window.addEventListener("touchend", handlePointerUp, { passive: true });
    window.addEventListener("touchcancel", handlePointerUp, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Wait until smooth scroll lands on details section before beginning gentle reading glide
    const startTimer = setTimeout(() => {
      currentY = window.scrollY;

      const step = (now: number) => {
        const deltaSeconds = (now - lastTime) / 1000;
        lastTime = now;

        const maxScroll = Math.max(
          document.documentElement.scrollHeight - window.innerHeight,
          0
        );

        if (!isInteracting && maxScroll > 0) {
          currentY += pixelsPerSecond * Math.min(deltaSeconds, 0.1);

          if (currentY >= maxScroll) {
            window.scrollTo({ top: maxScroll, behavior: "auto" });
            cleanupListeners();
            return;
          }

          lastAutoScrollY = currentY;
          window.scrollTo({ top: currentY, behavior: "auto" });
        }

        animationFrameId = requestAnimationFrame(step);
      };

      lastTime = performance.now();
      animationFrameId = requestAnimationFrame(step);
    }, 2400);

    return () => {
      clearTimeout(startTimer);
      if (resumeTimeout) clearTimeout(resumeTimeout);
      cancelAnimationFrame(animationFrameId);
      cleanupListeners();
    };
  }, [videoCompleted, invitationOpened]);

  return (
    <main
      className={`relative min-h-screen bg-[#3b0508] text-[#fdf5e6] selection:bg-[#ffd778] selection:text-[#3b0508] ${
        !videoCompleted ? "overflow-hidden h-screen" : "overflow-x-hidden"
      }`}
    >
      {/* Pesamale Soundtrack Playing Seamlessly Throughout */}
      <audio ref={audioRef} src="/pesamale.mp3" loop preload="auto" />

      {/* Falling Jasmine, Marigold & Rose Petals */}
      <FloralPetals />

      {/* Floating Developer Credit Widget */}
      <DeveloperCreditWidget />

      {/* Floating Music Player (Pesamale) with Clean Single-Icon Toggle */}
      <MusicPlayer audioRef={audioRef} />

      {/* SECTION 1: HERO VIDEO WITH AMBIENT BACKGROUND ON LARGER SCREENS */}
      <section className="relative w-full h-screen min-h-screen">
        <VideoDoorIntro
          onInvitationOpen={handleOpenInvitation}
          onVideoComplete={handleVideoComplete}
          onStartAudio={startAudio}
          videoCompleted={videoCompleted}
        />
      </section>

      {/* SECTION 2: WEDDING DETAILS BELOW VIDEO (Unlocked ONLY after clicking "You're Welcome" and video completes) */}
      <div
        id="wedding-details"
        className={`relative z-10 transition-all duration-1000 ${
          videoCompleted
            ? "opacity-100 translate-y-0"
            : "opacity-0 pointer-events-none translate-y-12"
        }`}
      >
        {/* Luminous Golden Sanctuary Connection Line from Doorway */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#ffd778]/25 via-transparent to-transparent pointer-events-none" />

        {/* Main Royal Card & Highlight Pills (Styled exactly like Reference Image 2) */}
        <HeroSection />

        {/* Couple Photograph & Monogram */}
        <CoupleStoryCard />

        {/* Ceremonies & Reception Details */}
        <EventsSection />

        {/* Live Countdown Timer */}
        <CountdownTimer />

        {/* Save the Date & Calendar Card */}
        <CalendarCard />

        {/* Venue Location & Navigation */}
        <VenueSection />

        {/* Family Lineage & Hosts */}
        <FamilySection />

        {/* Footer & WhatsApp Share */}
        <FooterSection />
      </div>
    </main>
  );
}
