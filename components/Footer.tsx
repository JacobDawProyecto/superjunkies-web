import { PROFILE, TRACKS } from "@/lib/tracks";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pb-28">
      <div className="mx-auto max-w-6xl px-4 pt-10 grid gap-8 md:grid-cols-3">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/superjunkies-logo.jpg"
            alt="Superjunkies"
            className="h-10 w-auto rounded invert"
          />
          <p className="font-display mt-3">
            SUPER<span className="text-[#d4ff3f]">JUNKIES</span>
          </p>
          <p className="mt-2 text-sm text-zinc-400">
            {PROFILE.label} · electrónica independiente desde {PROFILE.since}.
          </p>
        </div>
        <div className="text-sm">
          <p className="text-zinc-500 text-xs tracking-widest">TEMAS</p>
          <ul className="mt-2 space-y-1 text-zinc-300">
            {TRACKS.slice(0, 5).map((t) => (
              <li key={t.id}>
                <a href={t.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#d4ff3f]">
                  {t.artist} — {t.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm">
          <p className="text-zinc-500 text-xs tracking-widest">CONTACTO</p>
          <ul className="mt-2 space-y-1 text-zinc-300">
            <li>
              <a href={`mailto:${PROFILE.email}`} className="hover:text-[#d4ff3f]">
                {PROFILE.email}
              </a>
            </li>
            <li>
              <a href="/epk" className="hover:text-[#d4ff3f]">
                Press kit / EPK →
              </a>
            </li>
            <li className="pt-2">
              <Socials compact />
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto max-w-6xl px-4 mt-8 text-xs text-zinc-600">
        © {new Date().getFullYear()} Superjunkies · Hecho con ruido en España · El audio se reproduce vía SoundCloud (sus autores conservan todos los derechos).
      </p>
    </footer>
  );
}
