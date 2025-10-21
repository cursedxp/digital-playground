"use client";

import { useRef, useState, useEffect } from "react";
import { Volume2, VolumeOff } from "lucide-react";

export default function SoundWave() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Start animation when page loads
    setIsAnimating(true);
  }, []);

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;

    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    const timeRemaining = duration - currentTime;

    // Start fading out 1 second before the end
    if (timeRemaining <= 4 && timeRemaining > 0) {
      const fadeVolume = Math.min(timeRemaining / 4, 1.0); // Gradually decrease from 1 to 0
      audioRef.current.volume = fadeVolume;
    } else if (timeRemaining > 4) {
      audioRef.current.volume = 1.0; // Keep at full volume before fade
    }
  };

  const togglePlay = async () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/the_speach.mp3");
      audioRef.current.volume = 1.0;
      audioRef.current.addEventListener("ended", () => setIsPlaying(false));
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Playback error:", error);
      }
    }
  };

  return (
    <div className="flex items-center gap-2 bg-black/60 py-1 px-4 rounded-full">
      <div
        className="flex items-center gap-1 h-10 cursor-pointer"
        onClick={togglePlay}
      >
        {/* 3 static bars on left */}
        <div className="w-1 h-1 bg-white rounded-full" />
        <div className="w-1 h-1 bg-white rounded-full" />
        <div className="w-1 h-1 bg-white rounded-full" />

        {/* 1 animated bar on left side */}
        <div
          className="w-1 h-1 bg-white rounded-full"
          style={{
            animation: isAnimating
              ? "soundbar-1 0.4s ease-in-out infinite"
              : "none",
          }}
        />

        {/* 5 animated bars in center */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 bg-white rounded-full"
            style={{
              animation: isAnimating
                ? `soundbar-${(i % 5) + 1} ${0.4 + i * 0.1}s ease-in-out ${
                    i * 0.1
                  }s infinite`
                : "none",
            }}
          />
        ))}

        {/* 1 animated bar on right side */}
        <div
          className="w-1 h-1 bg-white rounded-full"
          style={{
            animation: isAnimating
              ? "soundbar-1 0.4s ease-in-out infinite"
              : "none",
          }}
        />

        {/* 3 static bars on right */}
        <div className="w-1 h-1 bg-white rounded-full" />
        <div className="w-1 h-1 bg-white rounded-full" />
        <div className="w-1 h-1 bg-white rounded-full" />
      </div>
      <button
        onClick={togglePlay}
        className="p-2 text-white hover:opacity-80 transition-all hover:scale-110 flex items-center justify-center cursor-pointer"
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6" />
        ) : (
          <VolumeOff className="w-6 h-6" />
        )}
      </button>
      <style jsx>{`
        @keyframes soundbar-1 {
          0%,
          100% {
            height: 0.25rem;
          }
          20% {
            height: 0.75rem;
          }
          40% {
            height: 0.5rem;
          }
          60% {
            height: 1rem;
          }
          80% {
            height: 0.6rem;
          }
        }
        @keyframes soundbar-2 {
          0%,
          100% {
            height: 0.25rem;
          }
          25% {
            height: 1rem;
          }
          50% {
            height: 0.4rem;
          }
          75% {
            height: 0.8rem;
          }
        }
        @keyframes soundbar-3 {
          0%,
          100% {
            height: 0.25rem;
          }
          15% {
            height: 0.6rem;
          }
          35% {
            height: 1rem;
          }
          55% {
            height: 0.5rem;
          }
          75% {
            height: 0.85rem;
          }
          90% {
            height: 0.4rem;
          }
        }
        @keyframes soundbar-4 {
          0%,
          100% {
            height: 0.25rem;
          }
          30% {
            height: 0.9rem;
          }
          60% {
            height: 0.5rem;
          }
          85% {
            height: 0.7rem;
          }
        }
        @keyframes soundbar-5 {
          0%,
          100% {
            height: 0.25rem;
          }
          10% {
            height: 0.5rem;
          }
          35% {
            height: 0.8rem;
          }
          65% {
            height: 1rem;
          }
          85% {
            height: 0.6rem;
          }
        }
      `}</style>
    </div>
  );
}
