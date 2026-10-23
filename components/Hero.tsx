"use client";

import { PROFILE, TRACKS } from "@/lib/tracks";
import { usePlayer } from "./PlayerProvider";
import Socials from "./Socials";

export default function Hero() {
  const { playTrack, currentIndex, isPlaying } = usePlayer();
  const featured = TRACKS[0];

  return (
    <section id="top" className="relative overflow-hidden pt-14">
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full blur-[120px] opacity-30"
        style={{ background: "linear-gradient(90deg,#d4ff3f,#ff3fd4)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-10 sm:pt-20 grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#d4ff3f]/30 bg-[#d4ff3f]/10 px-3 py-1 text-xs text-[#d4ff3f]">
            <span className="h-2 w-2 rounded-full bg-[#d4ff3f] animate-pulse-glow" />
            {PROFILE.label} · desde {PROFILE.since} · {TRACKS.length} temas en SoundCloud
          </p>
          <h1 className="font-display leading-[0.95] mt-4 text-[clamp(2.1rem,9vw,4.5rem)] whitespace-nowrap">
            SUPER<span className="text-[#d4ff3f]">JUNKIES</span>
            <br />
            <span className="text-stroke text-4xl sm:text-6xl">NOISE · REMIX</span>
          </h1>
          <p className="mt-5 max-w-xl text-zinc-300">
            Jacob y Adrián. Electrónica independiente, remixes caseros y edits
            de club. Sin camisetas fuera ni cuernos en alto: cabina pequeña,
            sonido grande.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => playTrack(0)}
              className="rounded-full bg-[#d4ff3f] px-6 py-3 font-bold text-black hover:brightness-110 transition glow-lime"
            >
              {currentIndex === 0 && isPlaying ? "⏸ Pausando destacado" : "▶ Escuchar lo último"}
            </button>
            <a
              href="#musica"
              className="rounded-full border border-white/20 px-6 py-3 text-zinc-100 hover:border-[#d4ff3f] hover:text-[#d4ff3f] transition"
            >
              Ver los {TRACKS.length} temas
            </a>
          </div>
          <p className="mt-4 text-xs text-zinc-500">
            Destacado: {featured.artist} — {featured.title} ({featured.year})
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#d4ff3f]/25 via-transparent to-[#ff3fd4]/25 blur-xl animate-gradient" aria-hidden />
          <div className="relative animate-float">
            {/* Portada: logo oficial en plan póster */}
            <div className="rotate-2 rounded-2xl bg-white p-4 pb-3 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/superjunkies-logo.jpg"
                alt="Superjunkies — logo oficial"
                className="w-full rounded-lg"
              />
              <p className="pt-2 text-center text-xs font-bold tracking-[0.3em] text-black">
                ★ LOGO OFICIAL ★
              </p>
            </div>
            {/* Foto del dúo solapada */}
            <div className="absolute -bottom-8 -left-4 w-36 -rotate-6 overflow-hidden rounded-2xl border-4 border-[#0a0a0b] shadow-xl sm:w-44">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/duo.jpg" alt="Jacob y Adrián" className="w-full object-cover" />
            </div>
            {/* Pegatinas */}
            <span className="absolute -top-4 -right-2 rotate-12 rounded-full bg-[#ff3fd4] px-3 py-1.5 text-xs font-black text-black shadow-lg animate-wiggle">
              100% DIY
            </span>
            <span className="absolute bottom-16 -right-3 -rotate-6 rounded-full bg-[#d4ff3f] px-3 py-1.5 text-xs font-black text-black shadow-lg animate-wiggle">
              {TRACKS.length} TEMAS
            </span>
          </div>
          <div className="relative mt-12 flex items-center justify-between rounded-2xl border border-white/10 bg-[#121214] px-4 py-3">
            <div>
              <p className="text-sm font-bold">SuperjunkieJack</p>
              <p className="text-xs text-zinc-400">superjunkies · {TRACKS.length} tracks</p>
            </div>
            <Socials compact />
          </div>
        </div>
      </div>
      <div className="relative border-y border-white/10 bg-[#121214]/80 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap py-2 text-xs tracking-[0.25em] text-zinc-400">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k}>
              {"REMIX · EDIT · MIXTAPE · INDIE · ELECTRÓNICA · DESDE 2004 · NOSOTROSMISMOSRECORDINGS · ".repeat(3)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
