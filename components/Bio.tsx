import { PROFILE, TRACKS } from "@/lib/tracks";
import CountUp from "./CountUp";

export default function Bio() {
  return (
    <section id="bio" className="border-y border-[#e5e1d5] bg-white scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-14 grid gap-8 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] text-[#a21caf]">BIO</p>
          <h2 className="font-display text-3xl sm:text-4xl mt-2 text-[#14130e]">
            JACOB Y ADRIÁN, DOS TIPOS CON UNA CABINA.
          </h2>
          <p className="mt-4 text-[#3f3e37]">{PROFILE.bio}</p>
          <p className="mt-3 text-[#6b695e] text-sm">
            Desde finales de 2004 curioseando con la electrónica y la música
            independiente. Edits para la pista, remixes para amigos
            (Apparat, Coldplay, The Dirties, WAS…) y mixtapes como el Poppies
            2016. Todo sigue sonando en{" "}
            <a
              href={PROFILE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4d7c0f] font-semibold underline underline-offset-4"
            >
              su SoundCloud
            </a>
            .
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 content-start">
          <figure className="col-span-3 overflow-hidden rounded-2xl border border-[#e5e1d5] shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/duo.jpg" alt="Jacob y Adrián, Superjunkies" className="w-full object-cover" />
            <figcaption className="bg-white px-4 py-2 text-xs text-[#8a877a]">
              Jacob y Adrián · Foto: Ruth Zapater
            </figcaption>
          </figure>
          {[
            { k: "2004", v: "empiezan a pinchar", count: false },
            { k: `${TRACKS.length}`, v: "temas publicados", count: true },
            { k: "∞", v: "morro indie", count: false },
            { k: "DIY", v: "Nosotrosmismos REC", count: false },
            { k: "CLUB", v: "formato natural", count: false },
            { k: "ES", v: "base España", count: false },
          ].map((s) => (
            <div
              key={s.k + s.v}
              className="rounded-2xl border border-[#e5e1d5] bg-[#f6f4ec] p-4 text-center transition hover:border-[#4d7c0f]/50 hover:scale-105"
            >
              <p className="font-display text-2xl text-[#4d7c0f]">
                {s.count ? <CountUp to={TRACKS.length} /> : s.k}
              </p>
              <p className="mt-1 text-xs text-[#6b695e]">{s.v}</p>
            </div>
          ))}
          <div className="col-span-3 rounded-2xl border border-[#4d7c0f]/30 bg-[#4d7c0f]/5 p-4 text-sm text-[#3f3e37]">
            “No los verás actuar en festivales como FIB, SOS 4.8 o Sónar…” — y
            precisamente por eso suenan mejor en salas pequeñas.
          </div>
        </div>
      </div>
    </section>
  );
}
