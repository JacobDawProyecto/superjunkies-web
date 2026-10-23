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
  isPreview: boolean;
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
  const currentIndexRef = useRef(0);

  // Vista previa: SoundCloud limita a ~30s los temas con audio comercial
  const isPreview = hasStarted && duration > 1 && duration <= 31000;

  // Carga un tema en el widget y lo reproduce (o recarga el iframe como fallback)
  const loadAndPlay = useCallback((index: number) => {
    currentIndexRef.current = index;
    setCurrentIndex(index);
    setHasStarted(true);
    setPosition(0);
    setDuration(1);
    const widget = widgetRef.current;
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
      iframeRef.current.src = TRACKS[index].embedUrl.replace(
        "auto_play=false",
        "auto_play=true"
      );
    }
    setIsPlaying(true);
  }, []);

  const loadAndPlayRef = useRef(loadAndPlay);
  useEffect(() => {
    loadAndPlayRef.current = loadAndPlay;
  }, [loadAndPlay]);

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
          // Al terminar, cargar Y reproducir el siguiente (antes solo cambiaba el índice)
          const n = (currentIndexRef.current + 1) % TRACKS.length;
          loadAndPlayRef.current(n);
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
      const widget = widgetRef.current;
      if (widget && readyRef.current && index === currentIndexRef.current) {
        // Misma canción: reanudar sin recargar (antes la reiniciaba)
        try {
          widget.play();
          return;
        } catch {
          /* sigue abajo y la recarga */
        }
      }
      loadAndPlay(index);
    },
    [loadAndPlay]
  );

  const toggle = useCallback(() => {
    const widget = widgetRef.current;
    if (!hasStarted) {
      loadAndPlay(currentIndexRef.current);
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
  }, [hasStarted, isPlaying, loadAndPlay]);

  const next = useCallback(() => {
    loadAndPlay((currentIndexRef.current + 1) % TRACKS.length);
  }, [loadAndPlay]);

  const prev = useCallback(() => {
    loadAndPlay(
      (currentIndexRef.current - 1 + TRACKS.length) % TRACKS.length
    );
  }, [loadAndPlay]);

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
        isPreview,
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
