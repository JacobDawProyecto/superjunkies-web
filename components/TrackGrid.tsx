"use client";

import { useMemo, useState } from "react";
import { TRACKS, type TrackType } from "@/lib/tracks";
import { usePlayer } from "./PlayerProvider";

const FILTERS: Array<"Todos" | TrackType> = ["Todos", "Remix", "Edit", "Original", "Mixtape", "Mashup"];

export default function TrackGrid() {
  const { playTrack, currentIndex, isPlaying } = usePlayer();
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Todos");
  const [query, setQuery] = useState("");

  const list = useMemo(() => {
    return TRACKS.map((t, i) => ({ ...t, index: i })).filter((t) => {
      const okFilter = filter === "Todos" || t.type === filter;
      const q = query.trim().toLowerCase();
      const okQuery =
        !q ||
        t.title.toLowerCase().includes(q) ||
        t.artist.toLowerCase().includes(q);
      return okFilter && okQuery;
    });
  }, [filter, query]);

  return (
    <section id="musica" className="mx-auto max-w-6xl px-4 py-14 scroll-mt-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] text-[#4d7c0f]">DISCOGRAFÍA COMPLETA</p>
          <h2 className="font-display text-3xl sm:text-5xl mt-2 text-[#14130e]">
            TODA LA MÚSICA<span className="text-[#4d7c0f]">.</span>
          </h2>
          <p className="mt-2 text-sm text-[#55534a]">
            Los {TRACKS.length} temas de tu SoundCloud. Pulsa play para escucharlos aquí
            (reproductor custom) o ábrelos en SoundCloud.
          </p>
          <p className="mt-2 text-xs text-[#8a877a]">
            Nota: SoundCloud limita a vista previa de 0:30 los remixes con audio
            comercial (Coldplay, Apparat…). Si un tema marca “VISTA PREVIA” en el
            reproductor, es restricción de SoundCloud, no de esta web.
          </p>
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar: apparat, yellow, dirties…"
          className="w-full sm:w-72 rounded-full border border-[#d8d3c2] bg-white px-4 py-2.5 text-sm text-[#16150f] outline-none placeholder:text-[#a09d8f] focus:border-[#4d7c0f] shadow-sm"
          aria-label="Buscar temas"
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-1.5 text-sm border transition ${
              filter === f
                ? "bg-[#14130e] text-[#d4ff3f] font-bold border-[#14130e]"
                : "border-[#d8d3c2] bg-white text-[#4a483f] hover:border-[#4d7c0f] hover:text-[#4d7c0f]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((t, i) => {
          const active = currentIndex === t.index && isPlaying;
          return (
            <article
              key={t.id}
              className={`card-enter group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
                currentIndex === t.index
                  ? "border-[#4d7c0f]/60"
                  : "border-[#e5e1d5] hover:border-[#c9c3b0]"
              }`}
              style={{ animationDelay: `${(i % 12) * 60}ms` }}
            >
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.artwork} alt={t.title} className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105 group-hover:rotate-1" loading="lazy" />
                <button
                  onClick={() => playTrack(t.index)}
                  aria-label={`Reproducir ${t.title}`}
                  className={`absolute inset-0 grid place-items-center bg-black/40 text-4xl transition ${
                    active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-[#d4ff3f] text-black glow-lime">
                    {active ? "⏸" : "▶"}
                  </span>
                </button>
                <span className="absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-bold text-[#d4ff3f] border border-[#d4ff3f]/30">
                  {t.type} · {t.year}
                </span>
                {currentIndex === t.index && (
                  <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-[#d4ff3f] px-2.5 py-1 text-[11px] font-black text-black animate-bounce-soft">
                    <span className="flex h-3 items-end gap-[2px]" aria-hidden>
                      {[0, 1, 2].map((b) => (
                        <span
                          key={b}
                          className="w-[2.5px] rounded-full bg-black eq-bar"
                          style={{ height: `${7 + ((b * 4) % 7)}px`, animationDelay: `${b * 0.18}s` }}
                        />
                      ))}
                    </span>
                    SONANDO
                  </span>
                )}
              </div>
              <div className="p-4">
                <p className="text-xs text-[#6b695e] truncate">{t.artist}</p>
                <h3 className="mt-1 font-bold leading-snug text-[#14130e]">{t.title}</h3>
                <p className="mt-1 text-xs text-[#8a877a]">{t.tag}</p>
                <div className="mt-3 flex gap-2">
                  <button
                    onClick={() => playTrack(t.index)}
                    className="flex-1 rounded-full bg-[#14130e]/5 px-3 py-2 text-sm font-semibold text-[#14130e] hover:bg-[#d4ff3f] hover:text-black transition"
                  >
                    {currentIndex === t.index && isPlaying ? "Pausar" : "Escuchar aquí"}
                  </button>
                  <a
                    href={t.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[#d8d3c2] px-3 py-2 text-sm text-[#4a483f] hover:border-[#ff5500] hover:text-[#ff5500] transition"
                    aria-label={`Abrir ${t.title} en SoundCloud`}
                  >
                    ↗
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      {list.length === 0 && (
        <p className="mt-8 rounded-2xl border border-[#e5e1d5] bg-white p-6 text-center text-[#6b695e]">
          Sin resultados. Prueba con “remix”, “edit” o “mixtape”.
        </p>
      )}
    </section>
  );
}
