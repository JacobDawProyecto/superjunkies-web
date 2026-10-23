export type TrackType = "Remix" | "Edit" | "Original" | "Mixtape" | "Mashup";

export interface Track {
  id: string;
  title: string;
  artist: string;
  slug: string;
  url: string;
  embedUrl: string;
  artwork: string;
  year: number;
  date: string;
  type: TrackType;
  tag: string;
}

const FALLBACK_ART =
  "https://i1.sndcdn.com/avatars-BzsNAYSDyQacfxyN-3qm4Xw-t1080x1080.jpg";

function embed(slug: string): string {
  return `https://w.soundcloud.com/player/?url=${encodeURIComponent(
    `https://soundcloud.com/superjunkies/${slug}`
  )}&color=%23d4ff3f&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`;
}

export const PROFILE = {
  name: "Superjunkies",
  alias: "SuperjunkieJack",
  url: "https://soundcloud.com/superjunkies",
  facebook: "https://www.facebook.com/SUPERJUNKIESDJS",
  instagram: "https://www.instagram.com/superjunkiejack/",
  spotify: [] as string[],
  avatar: FALLBACK_ART,
  email: "superjunkiesdjs@gmail.com",
  label: "NosotrosmismosRECordings",
  bio: "Jacob y Adrián. Amantes de la música independiente y la electrónica desde que a finales de 2004 empezaron a poner música en directo. No los verás en FIB, SOS 4.8 o Sónar quitándose la camiseta: prefieren la cabina pequeña, el club sudado y el remix hecho en casa.",
  location: "España",
  since: 2004,
};

export const TRACKS: Track[] = [
  {
    id: "back-to-80s",
    title: "Back To 80'S (Superjunkies Remix)",
    artist: "Toni Ocanya & Joe Mina feat. Joan Salord & Niko Espinosa",
    slug: "toni-ocanya-joe-mina-feat-joan",
    url: "https://soundcloud.com/superjunkies/toni-ocanya-joe-mina-feat-joan",
    embedUrl: embed("toni-ocanya-joe-mina-feat-joan"),
    artwork:
      "https://i1.sndcdn.com/artworks-6Qgzl9UXHn3Cy6G4-LpJnlg-t500x500.jpg",
    year: 2021,
    date: "2021-05-11",
    type: "Remix",
    tag: "Remix 2021 · Destacado",
  },
  {
    id: "das-wiedersehen",
    title: "Das Wiedersehen",
    artist: "Superjunkies",
    slug: "superjunkies-reunion-mp3",
    url: "https://soundcloud.com/superjunkies/superjunkies-reunion-mp3",
    embedUrl: embed("superjunkies-reunion-mp3"),
    artwork: "/covers/das-wiedersehen.svg",
    year: 2020,
    date: "2020-06-06",
    type: "Original",
    tag: "Original · Techno · 6:18",
  },
  {
    id: "yellow-edit",
    title: "Yellow (Superjunkies Edit)",
    artist: "Coldplay",
    slug: "coldplay-yellow-superjunkies",
    url: "https://soundcloud.com/superjunkies/coldplay-yellow-superjunkies",
    embedUrl: embed("coldplay-yellow-superjunkies"),
    artwork:
      "https://i1.sndcdn.com/artworks-TzVnjyhq6y4t3fhn-qIbn9w-t500x500.jpg",
    year: 2020,
    date: "2020-04-26",
    type: "Edit",
    tag: "Edit",
  },
  {
    id: "desert-sounds",
    title: "Desert Sounds",
    artist: "Superjunkies",
    slug: "superjunkies-desert-sounds",
    url: "https://soundcloud.com/superjunkies/superjunkies-desert-sounds",
    embedUrl: embed("superjunkies-desert-sounds"),
    artwork:
      "https://i1.sndcdn.com/artworks-Wlyp7hPwD8z4W06e-oFjBaw-t500x500.jpg",
    year: 2020,
    date: "2020-04-26",
    type: "Original",
    tag: "Original",
  },
  {
    id: "fractales",
    title: "Fractales I & II (Superjunkies Remix)",
    artist: "Apparat",
    slug: "apparat-fractales-i-ii-superjunkies-remix",
    url: "https://soundcloud.com/superjunkies/apparat-fractales-i-ii-superjunkies-remix",
    embedUrl: embed("apparat-fractales-i-ii-superjunkies-remix"),
    artwork:
      "https://i1.sndcdn.com/artworks-yijRoynTWW7UnAQQ-uUMv5Q-t500x500.jpg",
    year: 2020,
    date: "2020-04-25",
    type: "Remix",
    tag: "Remix",
  },
  {
    id: "pro-leto",
    title: "Pro Leto (Superjunkies Edit)",
    artist: "Hi Fi",
    slug: "hi-fi-pro-leto-superjunkies-edit",
    url: "https://soundcloud.com/superjunkies/hi-fi-pro-leto-superjunkies-edit",
    embedUrl: embed("hi-fi-pro-leto-superjunkies-edit"),
    artwork:
      "https://i1.sndcdn.com/artworks-oJZXKJlXuz9qImZF-CAQJ7g-t500x500.jpg",
    year: 2020,
    date: "2020-04-23",
    type: "Edit",
    tag: "Edit",
  },
  {
    id: "gehirn",
    title: "Gehirn Durcheinander",
    artist: "Superjunkies",
    slug: "superjunkies-gehirn",
    url: "https://soundcloud.com/superjunkies/superjunkies-gehirn",
    embedUrl: embed("superjunkies-gehirn"),
    artwork:
      "https://i1.sndcdn.com/artworks-ye56F4DXmDeyzkBz-D2kdIw-t500x500.jpg",
    year: 2020,
    date: "2020-04-23",
    type: "Original",
    tag: "Original",
  },
  {
    id: "preparado",
    title: "Preparado Para La Acción (Superjunkies Remix)",
    artist: "The Dirties",
    slug: "the-dirties-preparado-para-la-accion-superjunkies-remix",
    url: "https://soundcloud.com/superjunkies/the-dirties-preparado-para-la-accion-superjunkies-remix",
    embedUrl: embed("the-dirties-preparado-para-la-accion-superjunkies-remix"),
    artwork:
      "https://i1.sndcdn.com/artworks-000245855656-6we3sn-t500x500.jpg",
    year: 2017,
    date: "2017-10-06",
    type: "Remix",
    tag: "Remix",
  },
  {
    id: "was-remix",
    title: "I Like You As You Are (Superjunkies Remix)",
    artist: "WAS",
    slug: "was-i-like-as-you-are-superjunkies-remix",
    url: "https://soundcloud.com/superjunkies/was-i-like-as-you-are-superjunkies-remix",
    embedUrl: embed("was-i-like-as-you-are-superjunkies-remix"),
    artwork:
      "https://i1.sndcdn.com/artworks-000162168614-w8z45c-t500x500.jpg",
    year: 2016,
    date: "2016-05-10",
    type: "Remix",
    tag: "#WASRemixContest",
  },
  {
    id: "poppies-2016",
    title: "Poppies Mixtape 2016",
    artist: "Superjunkies",
    slug: "superjunkies-poppies-mixtape-2016",
    url: "https://soundcloud.com/superjunkies/superjunkies-poppies-mixtape-2016",
    embedUrl: embed("superjunkies-poppies-mixtape-2016"),
    artwork:
      "https://i1.sndcdn.com/artworks-000162316561-qpvesa-t500x500.jpg",
    year: 2016,
    date: "2016-03-15",
    type: "Mixtape",
    tag: "Mixtape · Sesión",
  },
  {
    id: "clocks-happy",
    title: "Clocks (Superjunkies Happy Remix)",
    artist: "Coldplay",
    slug: "coldplay-clocks-superjunkies-happy-remix",
    url: "https://soundcloud.com/superjunkies/coldplay-clocks-superjunkies-happy-remix",
    embedUrl: embed("coldplay-clocks-superjunkies-happy-remix"),
    artwork:
      "https://i1.sndcdn.com/artworks-000149503066-zxw0d7-t500x500.jpg",
    year: 2016,
    date: "2016-03-03",
    type: "Remix",
    tag: "Remix · Happy Remix",
  },
  {
    id: "house-music-save-me",
    title: "House Music Save Me (Superjunkies Remix)",
    artist: "Dave M.Sanchez",
    slug: "dave-msanchez-house-music-save-me-superjunkies-remix",
    url: "https://soundcloud.com/superjunkies/dave-msanchez-house-music-save-me-superjunkies-remix",
    embedUrl: embed("dave-msanchez-house-music-save-me-superjunkies-remix"),
    artwork: FALLBACK_ART,
    year: 2015,
    date: "2015-11-16",
    type: "Remix",
    tag: "Remix",
  },
  {
    id: "chinches",
    title: "Chinches (Superjunkies Remix)",
    artist: "Amatria",
    slug: "amatria-chinches-superjunkies-remix",
    url: "https://soundcloud.com/superjunkies/amatria-chinches-superjunkies-remix",
    embedUrl: embed("amatria-chinches-superjunkies-remix"),
    artwork:
      "https://i1.sndcdn.com/artworks-000124748495-xptip0-t500x500.jpg",
    year: 2015,
    date: "2015-07-29",
    type: "Remix",
    tag: "Remix",
  },
  {
    id: "the-tunnel",
    title: "The Tunnel (Original Mix)",
    artist: "Superjunkies",
    slug: "superjunkies-the-tunnel-original-mix",
    url: "https://soundcloud.com/superjunkies/superjunkies-the-tunnel-original-mix",
    embedUrl: embed("superjunkies-the-tunnel-original-mix"),
    artwork:
      "https://i1.sndcdn.com/artworks-000107045881-ufga1z-t500x500.jpg",
    year: 2015,
    date: "2015-02-17",
    type: "Original",
    tag: "Original",
  },
  {
    id: "wake-up",
    title: "Wake Up (Superjunkies Remix)",
    artist: "Toni Ocanya & Dj Desk One",
    slug: "toni-ocanya-dj-desk-one-wake-up-superjunkies-remix",
    url: "https://soundcloud.com/superjunkies/toni-ocanya-dj-desk-one-wake-up-superjunkies-remix",
    embedUrl: embed("toni-ocanya-dj-desk-one-wake-up-superjunkies-remix"),
    artwork:
      "https://i1.sndcdn.com/artworks-000096083119-icyors-t500x500.jpg",
    year: 2014,
    date: "2014-11-03",
    type: "Remix",
    tag: "Remix",
  },
  {
    id: "dyox",
    title: "Dyox (Original Mix)",
    artist: "Superjunkies",
    slug: "dyox-original-mix",
    url: "https://soundcloud.com/superjunkies/dyox-original-mix",
    embedUrl: embed("dyox-original-mix"),
    artwork:
      "https://i1.sndcdn.com/artworks-000080846877-tug3je-t500x500.jpg",
    year: 2014,
    date: "2014-05-29",
    type: "Original",
    tag: "Original",
  },
  {
    id: "can-i-count",
    title: "Can I Count On You (Superjunkies Happy Remix)",
    artist: "We Are Standard",
    slug: "we-are-standard-can-i-count-on",
    url: "https://soundcloud.com/superjunkies/we-are-standard-can-i-count-on",
    embedUrl: embed("we-are-standard-can-i-count-on"),
    artwork:
      "https://i1.sndcdn.com/artworks-000073996666-vep6s0-t500x500.jpg",
    year: 2014,
    date: "2014-03-19",
    type: "Remix",
    tag: "Remix · Happy Remix",
  },
  {
    id: "fragmentos",
    title: "Fragmentos Para OIvidar (Superjunkies Remix)",
    artist: "The Dirties",
    slug: "the-dirties-fragmentos-para",
    url: "https://soundcloud.com/superjunkies/the-dirties-fragmentos-para",
    embedUrl: embed("the-dirties-fragmentos-para"),
    artwork:
      "https://i1.sndcdn.com/artworks-000049364666-sb0us8-t500x500.jpg",
    year: 2013,
    date: "2013-05-30",
    type: "Remix",
    tag: "Remix · Indielectro",
  },
  {
    id: "fire-snow",
    title: "Fire & Snow (Superjunkies Remix)",
    artist: "We Kiss You",
    slug: "we-kiss-you-fire-snow",
    url: "https://soundcloud.com/superjunkies/we-kiss-you-fire-snow",
    embedUrl: embed("we-kiss-you-fire-snow"),
    artwork:
      "https://i1.sndcdn.com/artworks-000033253078-5uyyf1-t500x500.jpg",
    year: 2012,
    date: "2012-10-31",
    type: "Remix",
    tag: "Remix",
  },
  {
    id: "dancing",
    title: "Dancing (Superjunkies Remix)",
    artist: "We Kiss You",
    slug: "we-kiss-you-dancing",
    url: "https://soundcloud.com/superjunkies/we-kiss-you-dancing",
    embedUrl: embed("we-kiss-you-dancing"),
    artwork:
      "https://i1.sndcdn.com/artworks-000033234115-e53ynu-t500x500.jpg",
    year: 2012,
    date: "2012-10-31",
    type: "Remix",
    tag: "Remix",
  },
  {
    id: "hap-your-clands",
    title: "Hap Your Clands (Superjunkies Remix)",
    artist: "Mendetz",
    slug: "mendetz-hap-your-clands-1",
    url: "https://soundcloud.com/superjunkies/mendetz-hap-your-clands-1",
    embedUrl: embed("mendetz-hap-your-clands-1"),
    artwork:
      "https://i1.sndcdn.com/artworks-000031287693-1l69ly-t500x500.jpg",
    year: 2012,
    date: "2012-09-30",
    type: "Remix",
    tag: "Remix · Indie Dance",
  },
  {
    id: "bye-bye",
    title: "Bye Bye Uoh Oh (Superjunkies Remix)",
    artist: "Mar Abella",
    slug: "mar-abella-bye-bye-uoh-oh",
    url: "https://soundcloud.com/superjunkies/mar-abella-bye-bye-uoh-oh",
    embedUrl: embed("mar-abella-bye-bye-uoh-oh"),
    artwork:
      "https://i1.sndcdn.com/artworks-000031056638-jkjo2t-t500x500.jpg",
    year: 2012,
    date: "2012-09-11",
    type: "Remix",
    tag: "Remix · Techno",
  },
  {
    id: "roots-mashup",
    title: "Roots + Yesterday (Superjunkies Mashup)",
    artist: "KOOQLA vs The Dirties",
    slug: "kooqla-roots-the-dirties",
    url: "https://soundcloud.com/superjunkies/kooqla-roots-the-dirties",
    embedUrl: embed("kooqla-roots-the-dirties"),
    artwork:
      "https://i1.sndcdn.com/artworks-000012034012-6p11t2-t500x500.jpg",
    year: 2011,
    date: "2011-09-26",
    type: "Mashup",
    tag: "Mashup · Bastard Pop",
  },
];

// Tema que suena al abrir la web
export const FEATURED_TRACK_ID = "the-tunnel";
export const FEATURED_TRACK_INDEX = Math.max(
  0,
  TRACKS.findIndex((t) => t.id === FEATURED_TRACK_ID)
);

export interface Playlist {
  title: string;
  url: string;
  embedUrl: string;
  count: number;
}

export const PLAYLISTS: Playlist[] = [
  {
    title: "New EP Superjunkies 2020",
    url: "https://soundcloud.com/superjunkies/sets/new-ep-superjunkies-2020",
    embedUrl: `https://w.soundcloud.com/player/?url=${encodeURIComponent(
      "https://soundcloud.com/superjunkies/sets/new-ep-superjunkies-2020"
    )}&color=%23d4ff3f&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`,
    count: 2,
  },
  {
    title: "Remixes 2014",
    url: "https://soundcloud.com/superjunkies/sets/remixes-2014",
    embedUrl: `https://w.soundcloud.com/player/?url=${encodeURIComponent(
      "https://soundcloud.com/superjunkies/sets/remixes-2014"
    )}&color=%23d4ff3f&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`,
    count: 6,
  },
  {
    title: "Remixes",
    url: "https://soundcloud.com/superjunkies/sets/remixes",
    embedUrl: `https://w.soundcloud.com/player/?url=${encodeURIComponent(
      "https://soundcloud.com/superjunkies/sets/remixes"
    )}&color=%23d4ff3f&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`,
    count: 8,
  },
];
