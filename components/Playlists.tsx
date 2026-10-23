import { PLAYLISTS } from "@/lib/tracks";

export default function Playlists() {
  return (
    <section id="playlists" className="mx-auto max-w-6xl px-4 pb-14 scroll-mt-16">
      <p className="text-xs font-semibold tracking-[0.3em] text-[#a21caf]">PLAYLISTS</p>
      <h2 className="font-display text-3xl sm:text-4xl mt-2 text-[#14130e]">
        PARA ESCUCHAR DEL TIRÓN<span className="text-[#a21caf]">.</span>
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {PLAYLISTS.map((p, i) => (
          <a
            key={p.url}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-enter group rounded-2xl border border-[#e5e1d5] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:border-[#a21caf]/60"
            style={{ animationDelay: `${i * 90}ms` }}
          >
            <p className="font-display text-5xl text-[#14130e]/10 transition group-hover:text-[#a21caf]/40">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 text-lg font-bold text-[#14130e] group-hover:text-[#a21caf] transition">
              {p.title}
            </h3>
            <p className="mt-1 text-sm text-[#6b695e]">
              {p.count} temas · playlist de SoundCloud ↗
            </p>
            <span className="mt-4 inline-block rounded-full bg-[#14130e]/5 px-4 py-2 text-sm font-semibold text-[#14130e] transition group-hover:bg-[#a21caf] group-hover:text-white">
              ▶ Escuchar playlist
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
