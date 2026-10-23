import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrackGrid from "@/components/TrackGrid";
import Playlists from "@/components/Playlists";
import Bio from "@/components/Bio";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import GlobalPlayer from "@/components/GlobalPlayer";
import CursorGlow from "@/components/CursorGlow";
import Backdrop from "@/components/Backdrop";
import Reveal from "@/components/Reveal";
import { PlayerProvider } from "@/components/PlayerProvider";

export default function Home() {
  return (
    <PlayerProvider>
      <Backdrop />
      <CursorGlow />
      <Navbar />
      <main className="flex-1">
        <Hero />
        {/* Sin Reveal aquí: la discografía debe verse siempre, incluso en
            navegadores móviles donde el observer pueda fallar */}
        <TrackGrid />
        <Reveal>
          <Playlists />
        </Reveal>
        <Reveal>
          <Bio />
        </Reveal>
        <Reveal>
          <Booking />
        </Reveal>
      </main>
      <Footer />
      <GlobalPlayer />
    </PlayerProvider>
  );
}
