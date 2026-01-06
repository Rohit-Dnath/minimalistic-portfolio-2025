"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

// Global audio instance to persist across route changes
let globalAudioInstance: HTMLAudioElement | null = null;
let globalIsPlaying = false;
const listeners: Set<(playing: boolean) => void> = new Set();

function notifyListeners() {
  listeners.forEach(listener => listener(globalIsPlaying));
}

interface DiscPlayerProps {
  audioFile?: string;
  backgroundColor?: string;
  discColor?: string;
  discImage?: string;
  needleDotColor?: string;
  onTap?: () => void;
}

export default function DiscPlayer({
  audioFile,
  backgroundColor = "transparent",
  discColor = "#333333",
  discImage,
  needleDotColor = "#FF5588",
  onTap,
}: DiscPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(globalIsPlaying);
  const [hasStarted, setHasStarted] = useState(false);
  const needleControls = useAnimation();

  useEffect(() => {
    // Subscribe to global state changes
    const listener = (playing: boolean) => setIsPlaying(playing);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  useEffect(() => {
    if (!globalAudioInstance && audioFile) {
      globalAudioInstance = new Audio(audioFile);
      globalAudioInstance.loop = true;
      globalAudioInstance.addEventListener("ended", () => {
        globalIsPlaying = false;
        notifyListeners();
      });
      globalAudioInstance.addEventListener("error", (e) => {
        console.error("Audio failed to load:", e);
        globalIsPlaying = false;
        notifyListeners();
      });
    }
    // Don't cleanup on unmount to persist across routes
  }, [audioFile]);

  const togglePlayback = () => {
    if (!hasStarted) {
      setHasStarted(true);
    }
    if (onTap) {
      onTap();
    }
    if (!globalAudioInstance && !audioFile) {
      // Just animate without audio
      globalIsPlaying = !globalIsPlaying;
      notifyListeners();
      return;
    }
    if (globalAudioInstance && audioFile) {
      globalIsPlaying = !globalIsPlaying;
      notifyListeners();
    }
  };

  useEffect(() => {
    if (isPlaying) {
      if (globalAudioInstance && audioFile) {
        globalAudioInstance.play().catch(() => {
          console.error("Failed to play audio");
        });
      }
      needleControls.start({
        rotate: 0,
        transition: { duration: 1.2, ease: [0.32, 0.72, 0, 1] },
      });
    } else {
      if (globalAudioInstance) {
        globalAudioInstance.pause();
      }
      needleControls.start({
        rotate: 15,
        transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] },
      });
    }
  }, [isPlaying, needleControls, audioFile]);

  return (
    <div
      style={{
        position: "relative",
        backgroundColor,
        overflow: "visible",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Disc */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            backgroundColor: discColor,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            backgroundImage: discImage ? `url(${discImage})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: "spin 10s linear infinite",
            animationPlayState: isPlaying ? "running" : "paused",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 2px rgba(255, 255, 255, 0.1)",
          }}
          onClick={togglePlayback}
        >
          {/* Center hole - larger and darker like reference */}
          <div
            style={{
              width: "28%",
              height: "28%",
              borderRadius: "50%",
              background: "radial-gradient(circle, #2a2a2a 0%, #1a1a1a 60%, #0a0a0a 100%)",
              boxShadow: "inset 0 2px 8px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(255, 255, 255, 0.1)",
              border: "2px solid rgba(80, 80, 80, 0.5)",
            }}
          />

          {/* Shine effect */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 40%, transparent 100%)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Needle - coming from top right corner */}
        <motion.div
          animate={needleControls}
          initial={{ rotate: 15 }}
          style={{
            position: "absolute",
            top: "-5%",
            right: "-20%",
            width: "50%",
            transformOrigin: "95% 50%",
            zIndex: 10,
          }}
        >
          {/* Needle arm - thin metallic line */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "3px",
              background: "linear-gradient(180deg, #c0c0c0 0%, #888888 50%, #a0a0a0 100%)",
              borderRadius: "2px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
            }}
          >
            {/* Needle pivot ball - at the end (right side) */}
            <div
              style={{
                position: "absolute",
                right: "0",
                top: "50%",
                transform: "translateY(-50%)",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #b0b0b0 0%, #707070 50%, #909090 100%)",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.3)",
              }}
            />

            {/* Needle tip - small colored dot at the disc end */}
            <div
              style={{
                position: "absolute",
                left: "-4px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: needleDotColor,
                boxShadow: `0 0 6px ${needleDotColor}`,
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
