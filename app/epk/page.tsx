import Link from "next/link";
import { PROFILE, TRACKS } from "@/lib/tracks";

export const metadata = {
  title: "Press kit — Superjunkies",
  description:
    "EPK de Superjunkies: bio, fotos, discografía de 10 temas, rider y contacto de booking.",
};

export default function EpkPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 pt-20 pb-16">
      <Link href="/" className="text-sm text-zinc-400 hover:text-[#d4ff3f]">
        ← Volver a la web
      </Link>
      <p className="mt-6 text-xs tracking-[0.3em] text-[#d4ff3f]">PRESS KIT · EPK</p>
      <h1 className="font-display text-4xl sm:text-6xl mt-2">
        SUPERJUNKIES<span className="text-[#d4ff3f]">.</span>
      </h1>
      <p className="mt-3 text-zinc-300">{PROFILE.bio}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-[#121214] p-6">
          <h2 className="font-bold">Datos rápidos</h2>
          <ul className="mt-3 text-sm text-zinc-300 space-y-1.5">
            <li>· Nombre: Superjunkies (SuperjunkieJack)</li>
            <li>· Miembros: Jacob y Adrián</li>
            <li>· Sello: {PROFILE.label}</li>
            <li>· Base: España · desde {PROFILE.since}</li>
            <li>· Estilo: electrónica / indie / remix / edit</li>
            <li>· Email: {PROFILE.email}</li>
            <li>· SoundCloud: soundcloud.com/superjunkies</li>
            <li>
              · Facebook:{" "}
              <a href={PROFILE.facebook} target="_blank" rel="noopener noreferrer" className="text-[#d4ff3f] underline underline-offset-4">
                SUPERJUNKIESDJS ↗
              </a>
            </li>
            <li>
              · Instagram:{" "}
              <a href={PROFILE.instagram} target="_blank" rel="noopener noreferrer" className="text-[#d4ff3f] underline underline-offset-4">
                superjunkiejack ↗
              </a>
            </li>
          </ul>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={PROFILE.avatar} alt="Superjunkies press" className="aspect-square w-full object-cover" />
        </div>
      </div>

      <h2 className="font-display text-2xl mt-10">FOTOS DE PRENSA</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <figure className="overflow-hidden rounded-2xl border border-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/duo.jpg" alt="Jacob y Adrián, Superjunkies" className="w-full object-cover" />
          <figcaption className="bg-[#121214] px-4 py-2 text-xs text-zinc-500">
            Jacob y Adrián · Foto: Ruth Zapater (citar crédito en publicaciones)
          </figcaption>
        </figure>
        <figure className="overflow-hidden rounded-2xl border border-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/superjunkies-logo.jpg" alt="Logo Superjunkies" className="w-full bg-white object-cover" />
          <figcaption className="bg-[#121214] px-4 py-2 text-xs text-zinc-500">
            Logo oficial Superjunkies
          </figcaption>
        </figure>
      </div>

      <h2 className="font-display text-2xl mt-10">DISCOGRAFÍA ({TRACKS.length})</h2>
      <ol className="mt-4 space-y-2">
        {TRACKS.map((t) => (
          <li
            key={t.id}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#121214] p-3"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={t.artwork} alt="" className="h-12 w-12 rounded-lg object-cover" loading="lazy" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold">{t.artist} — {t.title}</p>
              <p className="text-xs text-zinc-500">{t.year} · {t.type} · {t.date}</p>
            </div>
            <a
              href={t.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-3 py-1.5 text-xs hover:border-[#d4ff3f] hover:text-[#d4ff3f]"
            >
              Escuchar ↗
            </a>
          </li>
        ))}
      </ol>

      <div className="mt-10 rounded-2xl border border-[#d4ff3f]/30 bg-[#d4ff3f]/5 p-6">
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
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm"
          >
            Volver a la web (Ctrl+P para PDF)
          </a>
        </div>
      </div>
    </main>
  );
}
