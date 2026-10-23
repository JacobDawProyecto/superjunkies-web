import Link from "next/link";
import { PROFILE, TRACKS } from "@/lib/tracks";

export const metadata = {
  title: "Press kit — Superjunkies",
  description:
    "EPK de Superjunkies: bio, fotos, discografía completa, rider y contacto de booking.",
};

export default function EpkPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 pt-20 pb-16">
      <Link href="/" className="text-sm text-[#6b695e] hover:text-[#4d7c0f]">
        ← Volver a la web
      </Link>
      <p className="mt-6 text-xs font-semibold tracking-[0.3em] text-[#4d7c0f]">PRESS KIT · EPK</p>
      <h1 className="font-display text-4xl sm:text-6xl mt-2 text-[#14130e]">
        SUPERJUNKIES<span className="text-[#4d7c0f]">.</span>
      </h1>
      <p className="mt-3 text-[#3f3e37]">{PROFILE.bio}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-[#e5e1d5] bg-white p-6 shadow-sm">
          <h2 className="font-bold">Datos rápidos</h2>
          <ul className="mt-3 text-sm text-[#3f3e37] space-y-1.5">
            <li>· Nombre: Superjunkies (SuperjunkieJack)</li>
            <li>· Miembros: Jacob y Adrián</li>
            <li>· Sello: {PROFILE.label}</li>
            <li>· Base: España · desde {PROFILE.since}</li>
            <li>· Estilo: electrónica / indie / remix / edit</li>
            <li>· Email: {PROFILE.email}</li>
            <li>· SoundCloud: soundcloud.com/superjunkies</li>
            <li>
              · Facebook:{" "}
              <a href={PROFILE.facebook} target="_blank" rel="noopener noreferrer" className="text-[#4d7c0f] font-semibold underline underline-offset-4">
                SUPERJUNKIESDJS ↗
              </a>
            </li>
            <li>
              · Instagram:{" "}
              <a href={PROFILE.instagram} target="_blank" rel="noopener noreferrer" className="text-[#4d7c0f] font-semibold underline underline-offset-4">
                superjunkiejack ↗
              </a>
            </li>
          </ul>
        </div>
        <div className="overflow-hidden rounded-2xl border border-[#e5e1d5] shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={PROFILE.avatar} alt="Superjunkies press" className="aspect-square w-full object-cover" />
        </div>
      </div>

      <h2 className="font-display text-2xl mt-10">FOTOS DE PRENSA</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <figure className="overflow-hidden rounded-2xl border border-[#e5e1d5] bg-white shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/duo.jpg" alt="Jacob y Adrián, Superjunkies" className="w-full object-cover" />
          <figcaption className="bg-white px-4 py-2 text-xs text-[#8a877a]">
            Jacob y Adrián · Foto: Ruth Zapater (citar crédito en publicaciones)
          </figcaption>
        </figure>
        <figure className="overflow-hidden rounded-2xl border border-[#e5e1d5] bg-white shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/superjunkies-logo.jpg" alt="Logo Superjunkies" className="w-full bg-white object-cover" />
          <figcaption className="bg-white px-4 py-2 text-xs text-[#8a877a]">
            Logo oficial Superjunkies
          </figcaption>
        </figure>
      </div>

      <h2 className="font-display text-2xl mt-10">DISCOGRAFÍA ({TRACKS.length})</h2>
      <ol className="mt-4 space-y-2">
        {TRACKS.map((t) => (
          <li
            key={t.id}
            className="flex items-center gap-3 rounded-xl border border-[#e5e1d5] bg-white p-3 shadow-sm"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={t.artwork} alt="" className="h-12 w-12 rounded-lg object-cover" loading="lazy" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold">{t.artist} — {t.title}</p>
              <p className="text-xs text-[#8a877a]">{t.year} · {t.type} · {t.date}</p>
            </div>
            <a
              href={t.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#d8d3c2] px-3 py-1.5 text-xs text-[#4a483f] hover:border-[#4d7c0f] hover:text-[#4d7c0f]"
            >
              Escuchar ↗
            </a>
          </li>
        ))}
      </ol>

      <div className="mt-10 rounded-2xl border border-[#14130e] bg-[#14130e] p-6 text-white">
        <h2 className="font-bold text-lg">Booking</h2>
        <p className="mt-1 text-sm text-zinc-300">
          Para bolos, remixes o sesiones: escribe a {PROFILE.email} con fecha,
          sala y equipo disponible.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href={`mailto:${PROFILE.email}?subject=Booking%20Superjunkies&body=Hola%20Superjunkies%2C%20os%20escribo%20desde...`}
            className="rounded-full bg-[#d4ff3f] px-5 py-2.5 font-bold text-black"
          >
            Pedir fecha
          </a>
          <a
            href="/"
            className="rounded-full border border-white/25 px-5 py-2.5 text-sm text-zinc-200"
          >
            Volver a la web (Ctrl+P para PDF)
          </a>
        </div>
      </div>
    </main>
  );
}
