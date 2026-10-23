export type TrackType = "Remix" | "Edit" | "Original" | "Mixtape";

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
];
