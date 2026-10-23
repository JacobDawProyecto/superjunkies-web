"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { TRACKS } from "@/lib/tracks";

interface PlayerState {
  currentIndex: number;
  isPlaying: boolean;
  hasStarted: boolean;
  position: number;
  duration: number;
  playTrack: (index: number) => void;
  toggle: () => void;
  next: () => void;
  prev: () => void;
  seekBy: (ratio: number) => void;
}

const PlayerContext = createContext<PlayerState | null>(null);

export function usePlayer(): PlayerState {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer debe usarse dentro de PlayerProvider");
  return ctx;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Widget = any;

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(1);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const widgetRef = useRef<Widget>(null);
  const readyRef = useRef(false);
  const pendingAutoplay = useRef(false);

  // Carga la Widget API de SoundCloud una sola vez
  useEffect(() => {
    const src = "https://w.soundcloud.com/player/api.js";
    const ensureWidget = () => {
      const w = window as unknown as {
        SC?: { Widget?: (el: HTMLIFrameElement) => Widget };
      };
      if (!w.SC?.Widget || !iframeRef.current) return;
      if (!widgetRef.current) {
        const widget = w.SC.Widget(iframeRef.current);
        widgetRef.current = widget;
        widget.bind("ready", () => {
          readyRef.current = true;
          if (pendingAutoplay.current) {
            pendingAutoplay.current = false;
            widget.play();
          }
        });
        widget.bind("play", () => setIsPlaying(true));
        widget.bind("pause", () => setIsPlaying(false));
        widget.bind("finish", () => {
          setCurrentIndex((i) => (i + 1) % TRACKS.length);
        });
      }
    };

    if (!document.querySelector(`script[src="${src}"]`)) {
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      s.onload = ensureWidget;
      document.body.appendChild(s);
    } else {
      ensureWidget();
    }
    const t = setInterval(ensureWidget, 1500);
    return () => clearInterval(t);
  }, []);

  // Poll de progreso
  useEffect(() => {
    const id = setInterval(() => {
      const widget = widgetRef.current;
      if (!widget || !readyRef.current) return;
      try {
        widget.getPosition((p: number) => setPosition(p || 0));
        widget.getDuration((d: number) => setDuration(d || 1));
      } catch {
        /* widget aún no listo */
      }
    }, 800);
    return () => clearInterval(id);
  }, []);

  const playTrack = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      setHasStarted(true);
      setPosition(0);
      const widget = widgetRef.current;
      if (widget && readyRef.current && index === currentIndex) {
        try {
          widget.play();
          return;
        } catch {
          /* fallback abajo */
        }
      }
      if (widget && readyRef.current) {
        try {
          widget.load(TRACKS[index].url, { auto_play: true });
          setIsPlaying(true);
          return;
        } catch {
          /* fallback: recargar iframe */
        }
      }
      // Fallback sin Widget API: recarga el iframe con autoplay
      pendingAutoplay.current = true;
      if (iframeRef.current) {
        const base = TRACKS[index].embedUrl.replace(
          "auto_play=false",
          "auto_play=true"
        );
        iframeRef.current.src = base;
      }
      setIsPlaying(true);
    },
    [currentIndex]
  );

  const toggle = useCallback(() => {
    const widget = widgetRef.current;
    if (!hasStarted) {
      playTrack(currentIndex);
      return;
    }
    if (widget && readyRef.current) {
      try {
        if (isPlaying) widget.pause();
        else widget.play();
        return;
      } catch {
        /* noop */
      }
    }
    setIsPlaying((v) => !v);
  }, [currentIndex, hasStarted, isPlaying, playTrack]);

  const next = useCallback(() => {
    playTrack((currentIndex + 1) % TRACKS.length);
  }, [currentIndex, playTrack]);

  const prev = useCallback(() => {
    playTrack((currentIndex - 1 + TRACKS.length) % TRACKS.length);
  }, [currentIndex, playTrack]);

  const seekBy = useCallback((ratio: number) => {
    const widget = widgetRef.current;
    if (!widget || !readyRef.current) return;
    try {
      widget.getDuration((d: number) => {
        widget.seekTo(Math.floor(d * ratio));
      });
    } catch {
      /* noop */
    }
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        currentIndex,
        isPlaying,
        hasStarted,
        position,
        duration,
        playTrack,
        toggle,
        next,
        prev,
        seekBy,
      }}
    >
      {children}
      {/* iframe oculto que reproduce el audio real vía SoundCloud */}
      <iframe
        ref={iframeRef}
        title="SoundCloud player"
        className="sc-hidden-frame"
        allow="autoplay"
        src={TRACKS[0].embedUrl}
      />
    </PlayerContext.Provider>
  );
}
