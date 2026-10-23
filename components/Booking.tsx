import { PROFILE } from "@/lib/tracks";
import Socials from "./Socials";

export default function Booking() {
  return (
    <section id="epk" className="mx-auto max-w-6xl px-4 py-14 scroll-mt-16">
      <p className="text-xs tracking-[0.3em] text-[#d4ff3f]">EPK · BOLOS · CONTACTO</p>
      <h2 className="font-display text-3xl sm:text-5xl mt-2">¿NOS LLEVAS A TU CLUB?</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-[#121214] p-6">
          <h3 className="font-bold text-lg">Formato</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            <li>· DJ set 2h (2×CDJ + mesa o controladora)</li>
            <li>· Sesión remixes propios + edits + electrónica/indie</li>
            <li>· Opción back-to-back Jacob × Adrián</li>
            <li>· Necesidades: monitor, 2 canales libres, wifi para SoundCloud</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#121214] p-6">
          <h3 className="font-bold text-lg">Próximos bolos</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            <li className="rounded-xl border border-dashed border-white/15 p-3 text-zinc-400">
              Agenda abierta — escríbenos y montamos fecha. Salas pequeñas,
              fiestas DIY y clubs sudados bienvenidos.
            </li>
          </ul>
          <a
            href="/epk"
            className="mt-4 inline-block rounded-full border border-white/15 px-4 py-2 text-sm hover:border-[#d4ff3f] hover:text-[#d4ff3f] transition"
          >
            Ver press kit completo →
          </a>
        </div>
        <div id="contacto" className="rounded-2xl border border-[#d4ff3f]/30 bg-[#d4ff3f]/5 p-6 scroll-mt-24">
          <h3 className="font-bold text-lg">Booking directo</h3>
          <p className="mt-2 text-sm text-zinc-300">
            Sin intermediarios. Responden Jacob o Adrián.
          </p>
          <a
            href={`mailto:${PROFILE.email}?subject=Booking%20Superjunkies`}
            className="mt-4 block rounded-full bg-[#d4ff3f] px-4 py-3 text-center font-bold text-black hover:brightness-110 transition"
          >
            {PROFILE.email}
          </a>
          <p className="mt-4 text-xs tracking-widest text-zinc-500">SÍGUENOS</p>
          <div className="mt-2">
            <Socials />
          </div>
        </div>
      </div>
    </section>
  );
}
