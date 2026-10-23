import Link from "next/link";
import Socials from "./Socials";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-white/10 bg-[#0a0a0b]/85 backdrop-blur-md">
      <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-[#d4ff3f] font-display text-black text-lg">
            S
          </span>
          <span className="font-display tracking-wide text-sm sm:text-base">
            SUPER<span className="text-[#d4ff3f]">JUNKIES</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          <a href="#musica" className="hover:text-[#d4ff3f] transition">Música</a>
          <a href="#bio" className="hover:text-[#d4ff3f] transition">Bio</a>
          <a href="#epk" className="hover:text-[#d4ff3f] transition">EPK · Bolos</a>
          <a href="#contacto" className="hover:text-[#d4ff3f] transition">Contacto</a>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/epk"
            className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-zinc-200 hover:border-[#d4ff3f] hover:text-[#d4ff3f] transition"
          >
            Press kit
          </Link>
          <a
            href="https://soundcloud.com/superjunkies"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-[#ff5500] px-3 py-1.5 text-xs font-semibold text-white hover:brightness-110 transition sm:inline-block"
          >
            SoundCloud ↗
          </a>
          <Socials compact />
        </div>
      </nav>
    </header>
  );
}
