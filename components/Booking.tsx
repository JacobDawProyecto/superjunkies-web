import { PROFILE } from "@/lib/tracks";
import Socials from "./Socials";

export default function Booking() {
  return (
    <section id="epk" className="mx-auto max-w-6xl px-4 py-14 scroll-mt-16">
      <p className="text-xs font-semibold tracking-[0.3em] text-[#4d7c0f]">EPK · BOLOS · CONTACTO</p>
      <h2 className="font-display text-3xl sm:text-5xl mt-2 text-[#14130e]">¿NOS LLEVAS A TU CLUB?</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-[#e5e1d5] bg-white p-6 shadow-sm">
          <h3 className="font-bold text-lg">Formato</h3>
          <ul className="mt-3 space-y-2 text-sm text-[#3f3e37]">
            <li>· DJ set 2h (2×CDJ + mesa o controladora)</li>
            <li>· Sesión remixes propios + edits + electrónica/indie</li>
            <li>· Opción back-to-back Jacob × Adrián</li>
            <li>· Necesidades: monitor, 2 canales libres, wifi para SoundCloud</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-[#e5e1d5] bg-white p-6 shadow-sm">
          <h3 className="font-bold text-lg">Próximos bolos</h3>
          <ul className="mt-3 space-y-2 text-sm text-[#3f3e37]">
            <li className="rounded-xl border border-dashed border-[#d8d3c2] p-3 text-[#6b695e]">
              Agenda abierta — escríbenos y montamos fecha. Salas pequeñas,
              fiestas DIY y clubs sudados bienvenidos.
            </li>
          </ul>
          <a
            href="/epk"
            className="mt-4 inline-block rounded-full border border-[#d8d3c2] px-4 py-2 text-sm text-[#33312a] hover:border-[#4d7c0f] hover:text-[#4d7c0f] transition"
          >
            Ver press kit completo →
          </a>
        </div>
        <div id="contacto" className="rounded-2xl border border-[#14130e] bg-[#14130e] p-6 scroll-mt-24 text-white">
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
          <p className="mt-4 text-xs tracking-widest text-zinc-400">SÍGUENOS</p>
          <div className="mt-2">
            <Socials />
          </div>
        </div>
      </div>
    </section>
  );
}
