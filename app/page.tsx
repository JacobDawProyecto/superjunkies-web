import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrackGrid from "@/components/TrackGrid";
import Bio from "@/components/Bio";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import GlobalPlayer from "@/components/GlobalPlayer";
import Reveal from "@/components/Reveal";
import { PlayerProvider } from "@/components/PlayerProvider";

export default function Home() {
  return (
    <PlayerProvider>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Reveal>
          <TrackGrid />
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
