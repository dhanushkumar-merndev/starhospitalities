"use client";

import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import Image from "next/image";
import { HERO_CONFIG } from "@/config/heroVideo";

export interface HeroVideoBackgroundHandle {
  seekTo: (time: number) => void;
  play: () => void;
  pause: () => void;
  getCurrentTime: () => number;
  getVideoElement: () => HTMLVideoElement | null;
}

export interface HeroVideoBackgroundProps {
  videoUrl?: string;
  liveStreamUrl?: string;
  posterUrl?: string;
  className?: string;
  onVideoReady?: () => void;
  onTimeUpdate?: (currentTime: number) => void;
}

const HeroVideoBackground = forwardRef<HeroVideoBackgroundHandle, HeroVideoBackgroundProps>(
  function HeroVideoBackground(
    {
      videoUrl = HERO_CONFIG.videoUrl,
      liveStreamUrl = HERO_CONFIG.liveStreamUrl,
      posterUrl = HERO_CONFIG.posterUrl,
      className = "",
      onVideoReady,
      onTimeUpdate
    },
    ref
  ) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [isLiveStream, setIsLiveStream] = useState(false);

    useImperativeHandle(ref, () => ({
      seekTo: (time: number) => {
        if (videoRef.current) {
          try {
            videoRef.current.currentTime = time;
            if (videoRef.current.paused) {
              videoRef.current.play().catch(() => {});
            }
          } catch (err) {
            console.warn("Error seeking video:", err);
          }
        }
      },
      play: () => {
        videoRef.current?.play().catch(() => {});
      },
      pause: () => {
        videoRef.current?.pause();
      },
      getCurrentTime: () => videoRef.current?.currentTime || 0,
      getVideoElement: () => videoRef.current
    }));

    const handleVideoPlaying = () => {
      setIsPlaying(true);
      if (onVideoReady) {
        onVideoReady();
      }
    };

    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      let hlsInstance: any = null;

      // Force native DOM properties for reliable autoplay
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;

      const streamTarget = liveStreamUrl && liveStreamUrl.trim().length > 0 ? liveStreamUrl.trim() : null;
      const isHls = streamTarget && (streamTarget.includes(".m3u8") || streamTarget.includes("live") || streamTarget.includes("stream"));

      if (streamTarget && isHls) {
        setIsLiveStream(true);

        if (video.canPlayType("application/vnd.apple.mpegurl")) {
          video.src = streamTarget;
          video
            .play()
            .then(handleVideoPlaying)
            .catch(() => {
              video.muted = true;
              video.play().then(handleVideoPlaying).catch(() => {});
            });
        } else {
          import("hls.js")
            .then(({ default: Hls }) => {
              if (Hls.isSupported()) {
                const hls = new Hls({
                  enableWorker: true,
                  lowLatencyMode: true,
                  backBufferLength: 60
                });
                hlsInstance = hls;
                hls.loadSource(streamTarget);
                hls.attachMedia(video);
                hls.on(Hls.Events.MANIFEST_PARSED, () => {
                  video
                    .play()
                    .then(handleVideoPlaying)
                    .catch(() => {
                      video.muted = true;
                      video.play().then(handleVideoPlaying).catch(() => {});
                    });
                });
                hls.on(Hls.Events.ERROR, (_event, data) => {
                  if (data.fatal) {
                    console.warn("HLS live stream error, falling back to static video:", data);
                    hls.destroy();
                    setIsLiveStream(false);
                    if (videoUrl) {
                      video.src = videoUrl;
                      video.play().then(handleVideoPlaying).catch(() => {});
                    }
                  }
                });
              } else if (videoUrl) {
                video.src = videoUrl;
                video.play().then(handleVideoPlaying).catch(() => {});
              }
            })
            .catch(() => {
              if (videoUrl) {
                video.src = videoUrl;
                video.play().then(handleVideoPlaying).catch(() => {});
              }
            });
        }
      } else {
        setIsLiveStream(false);
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(handleVideoPlaying)
            .catch(() => {
              video.muted = true;
              video.play().then(handleVideoPlaying).catch(() => {});
            });
        }
      }

      // User gesture fallback for strict browser policies
      const unlockPlay = () => {
        if (video && video.paused) {
          video.muted = true;
          video.play().then(handleVideoPlaying).catch(() => {});
        }
      };
      window.addEventListener("touchstart", unlockPlay, { once: true });
      window.addEventListener("click", unlockPlay, { once: true });
      window.addEventListener("scroll", unlockPlay, { once: true });

      return () => {
        if (hlsInstance) {
          hlsInstance.destroy();
        }
        window.removeEventListener("touchstart", unlockPlay);
        window.removeEventListener("click", unlockPlay);
        window.removeEventListener("scroll", unlockPlay);
      };
    }, [videoUrl, liveStreamUrl]);

    const toggleSound = () => {
      if (videoRef.current) {
        const nextMuted = !videoRef.current.muted;
        videoRef.current.muted = nextMuted;
        videoRef.current.volume = nextMuted ? 0 : 0.8;
        setIsMuted(nextMuted);
      }
    };

    return (
      <div className={`absolute inset-0 w-full h-full overflow-hidden select-none z-0 ${className}`}>
        {/* 1. Underlying Poster Image (Visible while video buffers) */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out pointer-events-none ${
            isPlaying ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src={posterUrl}
            alt="Hero Background Poster"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-100"
          />
        </div>

        {/* 2. Video Player Element (Always mounted with autoPlay, muted, playsInline) */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={posterUrl}
          onTimeUpdate={(e) => {
            if (onTimeUpdate) {
              onTimeUpdate(e.currentTarget.currentTime);
            }
          }}
          onLoadedData={() => {
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current.play().then(handleVideoPlaying).catch(() => {});
            }
          }}
          onCanPlay={handleVideoPlaying}
          onPlay={handleVideoPlaying}
          onPlaying={handleVideoPlaying}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>

        {/* 3. Subtle vignette overlays (clean & natural, no dark top shadow) */}
        <div className="absolute inset-0 bg-black/25 sm:bg-black/10 pointer-events-none transition-colors duration-500" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

        {/* 4. Floating Glassmorphic Audio Controls (Unmute / Mute) & Live Badge (Icon-Free) */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex items-center gap-3">
          {isLiveStream && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-white/40 text-zinc-950 text-[10px] font-bold tracking-widest uppercase shadow-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live</span>
            </div>
          )}

          <button
            onClick={toggleSound}
            type="button"
            aria-label={isMuted ? "Unmute Ambient Sound" : "Mute Sound"}
            className="px-4 py-2 rounded-full glass-blur-100 text-white hover:bg-white/10 active:scale-95 flex items-center justify-center transition-all duration-200 shadow-xl group cursor-pointer text-[10px] font-bold uppercase tracking-widest drop-shadow-md"
            title={isMuted ? "Unmute sound" : "Mute sound"}
          >
            {isMuted ? (
              <span className="text-white/90 group-hover:text-white">Sound Off</span>
            ) : (
              <span className="text-amber-300 flex items-center gap-1.5 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />
                Sound On
              </span>
            )}
          </button>
        </div>
      </div>
    );
  }
);

HeroVideoBackground.displayName = "HeroVideoBackground";

export default HeroVideoBackground;
