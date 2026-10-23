import { PROFILE, TRACKS } from "@/lib/tracks";

export default function Bio() {
  return (
    <section id="bio" className="border-y border-white/10 bg-[#121214] scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-14 grid gap-8 md:grid-cols-2">
        <div>
          <p className="text-xs tracking-[0.3em] text-[#ff3fd4]">BIO</p>
          <h2 className="font-display text-3xl sm:text-4xl mt-2">
            JACOB Y ADRIÁN, DOS TIPOS CON UNA CABINA.
          </h2>
          <p className="mt-4 text-zinc-300">{PROFILE.bio}</p>
          <p className="mt-3 text-zinc-400 text-sm">
            Desde finales de 2004 curioseando con la electrónica y la música
            independiente. Edits para la pista, remixes para amigos
            (Apparat, Coldplay, The Dirties, WAS…) y mixtapes como el Poppies
            2016. Todo sigue sonando en{" "}
            <a
              href={PROFILE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4ff3f] underline underline-offset-4"
            >
              su SoundCloud
            </a>
            .
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 content-start">
          <figure className="col-span-3 overflow-hidden rounded-2xl border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/duo.jpg" alt="Jacob y Adrián, Superjunkies" className="w-full object-cover" />
            <figcaption className="bg-[#0a0a0b] px-4 py-2 text-xs text-zinc-500">
              Jacob y Adrián · Foto: Ruth Zapater
            </figcaption>
          </figure>
          {[
            { k: "2004", v: "empiezan a pinchar" },
            { k: `${TRACKS.length}`, v: "temas publicados" },
            { k: "∞", v: "morro indie" },
            { k: "DIY", v: "Nosotrosmismos REC" },
            { k: "CLUB", v: "formato natural" },
            { k: "ES", v: "base España" },
          ].map((s) => (
            <div
              key={s.k + s.v}
              className="rounded-2xl border border-white/10 bg-[#0a0a0b] p-4 text-center"
            >
              <p className="font-display text-2xl text-[#d4ff3f]">{s.k}</p>
              <p className="mt-1 text-xs text-zinc-400">{s.v}</p>
            </div>
          ))}
          <div className="col-span-3 rounded-2xl border border-[#d4ff3f]/25 bg-[#d4ff3f]/5 p-4 text-sm text-zinc-300">
            “No los verás actuar en festivales como FIB, SOS 4.8 o Sónar…” — y
            precisamente por eso suenan mejor en salas pequeñas.
          </div>
        </div>
      </div>
    </section>
  );
}
