import { PLAYLISTS } from "@/lib/tracks";

export default function Playlists() {
  return (
    <section id="playlists" className="mx-auto max-w-6xl px-4 pb-14 scroll-mt-16">
      <p className="text-xs tracking-[0.3em] text-[#ff3fd4]">PLAYLISTS</p>
      <h2 className="font-display text-3xl sm:text-4xl mt-2">
        PARA ESCUCHAR DEL TIRÓN<span className="text-[#ff3fd4]">.</span>
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {PLAYLISTS.map((p, i) => (
          <a
            key={p.url}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-enter group rounded-2xl border border-white/10 bg-[#121214] p-6 transition hover:-translate-y-1 hover:border-[#ff3fd4]/60"
            style={{ animationDelay: `${i * 90}ms` }}
          >
            <p className="font-display text-5xl text-white/10 transition group-hover:text-[#ff3fd4]/40">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 text-lg font-bold group-hover:text-[#ff3fd4] transition">
              {p.title}
            </h3>
            <p className="mt-1 text-sm text-zinc-400">
              {p.count} temas · playlist de SoundCloud ↗
            </p>
            <span className="mt-4 inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold transition group-hover:bg-[#ff3fd4] group-hover:text-black">
              ▶ Escuchar playlist
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
