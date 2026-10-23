"use client";

import { usePlayer } from "./PlayerProvider";
import { TRACKS, FEATURED_TRACK_INDEX } from "@/lib/tracks";

function fmt(ms: number): string {
  const s = Math.floor(ms / 1000);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

function EqBars({ playing }: { playing: boolean }) {
  return (
    <div className="flex h-6 items-end gap-[3px]" aria-hidden>
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className={`w-[3px] rounded-full bg-[#d4ff3f] eq-bar ${playing ? "" : "eq-paused"}`}
          style={{ height: `${10 + ((i * 5) % 14)}px`, animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}

export default function GlobalPlayer() {
  const {
    currentIndex,
    isPlaying,
    hasStarted,
    isPreview,
    needsGesture,
    position,
    duration,
    toggle,
    next,
    prev,
    seekBy,
    playTrack,
  } = usePlayer();
  const track = TRACKS[currentIndex];
  const featured = TRACKS[FEATURED_TRACK_INDEX];
  const ratio = Math.min(1, position / Math.max(1, duration));

  return (
    <>
      {needsGesture && !isPlaying && (
        <div className="fixed bottom-24 inset-x-0 z-50 flex justify-center px-4">
          <button
            onClick={() => playTrack(FEATURED_TRACK_INDEX)}
            className="card-enter flex items-center gap-3 rounded-2xl border-2 border-[#14130e] bg-[#d4ff3f] px-5 py-3.5 text-left shadow-2xl transition hover:scale-105"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-black text-xl text-[#d4ff3f] animate-bounce-soft">
              ▶
            </span>
            <span>
              <span className="block text-sm font-black text-black">
                Dale al play 🎧
              </span>
              <span className="block text-xs font-semibold text-black/70">
                {featured.artist} — {featured.title} suena al abrir (tu navegador pide un toque)
              </span>
            </span>
          </button>
        </div>
      )}
    <div className="fixed bottom-0 inset-x-0 z-50 border-t border-[#232326] bg-[#0a0a0b]/95 backdrop-blur-md">
      <div
        className="h-[3px] w-full bg-white/10 cursor-pointer group"
        onClick={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          seekBy((e.clientX - r.left) / r.width);
        }}
        role="progressbar"
        aria-valuenow={Math.round(ratio * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progreso"
      >
        <div
          className="h-full bg-[#d4ff3f] transition-[width]"
          style={{ width: `${ratio * 100}%` }}
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-2.5 flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={track.artwork}
          alt={track.title}
          className="h-11 w-11 rounded-md object-cover border border-white/10 shrink-0"
        />
        <EqBars playing={isPlaying} />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-white">
            {track.title}
            {!hasStarted && (
              <span className="ml-2 text-[11px] font-normal text-zinc-500">
                · pulsa play
              </span>
            )}
            {isPreview && (
              <span className="ml-2 rounded-full bg-[#ff3fd4] px-2 py-0.5 text-[10px] font-black text-black align-middle">
                VISTA PREVIA 0:30
              </span>
            )}
          </p>
          <p className="truncate text-xs text-zinc-400">
            {track.artist} · {fmt(position)} / {fmt(duration)}
            {isPreview && " · SoundCloud limita este remix con audio comercial"}
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={prev}
            aria-label="Anterior"
            className="rounded-full p-2 text-zinc-300 hover:bg-white/10 hover:text-white transition"
          >
            ⏮
          </button>
          <button
            onClick={toggle}
            aria-label={isPlaying ? "Pausar" : "Reproducir"}
            className="rounded-full bg-[#d4ff3f] text-black font-bold h-10 w-10 grid place-items-center hover:brightness-110 transition glow-lime"
          >
            {isPlaying ? "⏸" : "▶"}
          </button>
          <button
            onClick={next}
            aria-label="Siguiente"
            className="rounded-full p-2 text-zinc-300 hover:bg-white/10 hover:text-white transition"
          >
            ⏭
          </button>
          <a
            href={track.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block ml-2 rounded-full border border-white/15 px-3 py-1.5 text-xs text-zinc-300 hover:border-[#d4ff3f] hover:text-[#d4ff3f] transition"
          >
            Abrir en SoundCloud ↗
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
