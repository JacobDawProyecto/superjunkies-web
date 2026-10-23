import { PROFILE } from "@/lib/tracks";

function SoundCloudGlyph({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
      <g>
        <rect x="1.6" y="12.4" width="1.4" height="4.2" rx="0.7" />
        <rect x="3.7" y="11" width="1.4" height="5.6" rx="0.7" />
        <rect x="5.8" y="12.6" width="1.4" height="4" rx="0.7" />
      </g>
    </svg>
  );
}

function FacebookGlyph({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <text
        x="12"
        y="18"
        textAnchor="middle"
        fontSize="17"
        fontWeight="900"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        f
      </text>
    </svg>
  );
}

function InstagramGlyph({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.4" cy="6.6" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SpotifyGlyph({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className={className} aria-hidden>
      <path d="M6.5 10.2c3.8-1.2 8.3-.7 11 1.6" />
      <path d="M7 13.5c3.1-1 6.8-.6 9 1.3" />
      <path d="M7.5 16.5c2.4-.8 5.2-.5 7 1" />
    </svg>
  );
}

export default function Socials({ compact = false }: { compact?: boolean }) {
  const btn = compact ? "h-8 w-8" : "h-11 w-11";
  return (
    <div className="flex items-center gap-2">
      <a
        href={PROFILE.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Superjunkies en SoundCloud"
        title="SoundCloud"
        className={`${btn} grid place-items-center rounded-full bg-[#ff5500] text-white transition hover:brightness-110 hover:scale-105`}
      >
        <SoundCloudGlyph className={compact ? "h-4 w-4" : "h-5 w-5"} />
      </a>
      <a
        href={PROFILE.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Superjunkies en Facebook"
        title="Facebook"
        className={`${btn} grid place-items-center rounded-full bg-[#1877f2] text-white transition hover:brightness-110 hover:scale-105`}
      >
        <FacebookGlyph className={compact ? "h-4 w-4" : "h-5 w-5"} />
      </a>
      <a
        href={PROFILE.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Superjunkies en Instagram"
        title="Instagram"
        className={`${btn} grid place-items-center rounded-full text-white transition hover:brightness-110 hover:scale-105`}
        style={{ background: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)" }}
      >
        <InstagramGlyph className={compact ? "h-4 w-4" : "h-5 w-5"} />
      </a>
      {PROFILE.spotify.map((url) => (
        <a
          key={url}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Superjunkies en Spotify"
          title="Spotify"
          className={`${btn} grid place-items-center rounded-full bg-[#1DB954] text-white transition hover:brightness-110 hover:scale-105`}
        >
          <SpotifyGlyph className={compact ? "h-4 w-4" : "h-5 w-5"} />
        </a>
      ))}
    </div>
  );
}
