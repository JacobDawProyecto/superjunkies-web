"use client";

import { useState } from "react";
import { PROFILE, TRACKS, FEATURED_TRACK_INDEX } from "@/lib/tracks";
import { usePlayer } from "./PlayerProvider";
import Socials from "./Socials";

export default function Hero() {
  const { playTrack, currentIndex, isPlaying } = usePlayer();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const featured = TRACKS[FEATURED_TRACK_INDEX];

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
          <p className="inline-flex items-center gap-2 rounded-full border border-[#4d7c0f]/40 bg-[#4d7c0f]/10 px-3 py-1 text-xs font-semibold text-[#3f6212]">
            <span className="h-2 w-2 rounded-full bg-[#4d7c0f] animate-pulse-glow" />
            {PROFILE.label} · desde {PROFILE.since} · {TRACKS.length} temas en SoundCloud
          </p>
          <h1 className="font-display leading-[0.95] mt-4 text-[#14130e] text-[clamp(2.1rem,9vw,4.5rem)] whitespace-nowrap">
            SUPER<span className="bg-[#d4ff3f] px-2 text-black">JUNKIES</span>
            <br />
            <span className="text-stroke text-4xl sm:text-6xl">NOISE · REMIX</span>
          </h1>
          <p className="mt-5 max-w-xl text-[#55534a]">
            Jacob y Adrián. Electrónica independiente, remixes caseros y edits
            de club. Sin camisetas fuera ni cuernos en alto: cabina pequeña,
            sonido grande.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => playTrack(FEATURED_TRACK_INDEX)}
              className="rounded-full bg-[#d4ff3f] px-6 py-3 font-bold text-black hover:brightness-110 transition glow-lime"
            >
              {currentIndex === FEATURED_TRACK_INDEX && isPlaying ? "⏸ Pausando destacado" : "▶ Escuchar The Tunnel"}
            </button>
            <a
              href="#musica"
              className="rounded-full border border-[#14130e]/25 px-6 py-3 font-semibold text-[#14130e] hover:border-[#4d7c0f] hover:text-[#4d7c0f] transition"
            >
              Ver los {TRACKS.length} temas
            </a>
          </div>
          <p className="mt-4 text-xs text-[#8a877a]">
            Destacado: {featured.artist} — {featured.title} ({featured.year})
          </p>
        </div>
        <div
          className="relative"
          style={{ perspective: "1000px" }}
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            setTilt({
              x: (e.clientX - r.left) / r.width - 0.5,
              y: (e.clientY - r.top) / r.height - 0.5,
            });
          }}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#d4ff3f]/25 via-transparent to-[#ff3fd4]/25 blur-xl animate-gradient" aria-hidden />
          <div
            className="relative transition-transform duration-200 ease-out will-change-transform"
            style={{
              transform: `rotateY(${tilt.x * 10}deg) rotateX(${-tilt.y * 10}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
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
            {/* Insignia giratoria: play del destacado */}
            <button
              onClick={() => playTrack(FEATURED_TRACK_INDEX)}
              aria-label="Escuchar tema destacado"
              className="absolute -bottom-10 -right-2 h-28 w-28 transition hover:scale-110 sm:-right-5"
            >
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden>
                <defs>
                  <path
                    id="hero-circle"
                    d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
                    fill="none"
                  />
                </defs>
                <text className="fill-[#14130e]" fontSize="10" fontWeight="bold" letterSpacing="2.5">
                  <textPath href="#hero-circle">
                    SUPERJUNKIES • DESDE 2004 •
                  </textPath>
                </text>
              </svg>
              <span className="absolute inset-0 m-auto grid h-12 w-12 place-items-center rounded-full bg-[#d4ff3f] text-xl text-black glow-lime">
                {currentIndex === FEATURED_TRACK_INDEX && isPlaying ? "⏸" : "▶"}
              </span>
            </button>
          </div>
          <div className="relative mt-16 flex items-center justify-between rounded-2xl border border-[#e3ded0] bg-white px-4 py-3 shadow-sm">
            <div>
              <p className="text-sm font-bold">SuperjunkieJack</p>
              <p className="text-xs text-[#8a877a]">superjunkies · {TRACKS.length} tracks</p>
            </div>
            <Socials compact />
          </div>
        </div>
      </div>
      </div>
      <div className="relative border-y border-[#e3ded0] bg-white/70 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap py-2 text-xs tracking-[0.25em] text-[#8a877a]">
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
