// ─────────────────────────────────────────────────────────────────────────────
//  GALLERY  —  real works pulled from Instagram
//
//  Source accounts:
//    • @mazelastudio            — studio page, entirely professional artwork
//    • @elaheh.sheikhalizadeh    — personal page; ONLY professional work included
//                                  here (personal-life posts are intentionally
//                                  left out)
//
//  Images live in /public/gallery/insta/ and are named by their Instagram
//  shortcode. Each item links back to the original post via `shortcode`.
//
//  TO ADD MORE WORKS: drop a JPG in /public/gallery/insta/, then copy any item
//  below and update `src`, `title`, `category`, `shortcode` and `account`.
// ─────────────────────────────────────────────────────────────────────────────

const ig = (shortcode) => `https://www.instagram.com/p/${shortcode}/`

export const galleryItems = [
  {
    id: 'DQM9ZP0DFla',
    title: 'Beneath the Skin of Light',
    category: 'Paintings',
    year: '2025',
    medium: 'Acrylic on canvas · 120 × 180 cm',
    account: '@mazelastudio',
    shortcode: 'DQM9ZP0DFla',
    src: '/gallery/insta/DQM9ZP0DFla.jpg',
  },
  {
    id: 'DQL4YlwDIfC',
    title: 'Subconscious — The Raven',
    category: 'Subconscious',
    year: '2025',
    medium: 'Charcoal & acrylic on canvas',
    account: '@mazelastudio',
    shortcode: 'DQL4YlwDIfC',
    src: '/gallery/insta/DQL4YlwDIfC.jpg',
  },
  {
    id: 'CqqpbkSIZD1',
    title: 'Wormhole',
    category: 'Paintings',
    year: '2023',
    medium: 'Mixed media on circular canvas · Ø 90 cm',
    account: '@elaheh.sheikhalizadeh',
    shortcode: 'CqqpbkSIZD1',
    src: '/gallery/insta/CqqpbkSIZD1.jpg',
  },
  {
    id: 'DQOsUhkDFS7',
    title: 'Beneath the Skin of Light — Reverie',
    category: 'Paintings',
    year: '2025',
    medium: 'Acrylic on canvas',
    account: '@mazelastudio',
    shortcode: 'DQOsUhkDFS7',
    src: '/gallery/insta/DQOsUhkDFS7.jpg',
  },
  {
    id: 'DQEr7PaDKaF',
    title: 'Subconscious — Panorama',
    category: 'Subconscious',
    year: '2025',
    medium: 'Charcoal & acrylic · 200 × 120 cm',
    account: '@mazelastudio',
    shortcode: 'DQEr7PaDKaF',
    src: '/gallery/insta/DQEr7PaDKaF.jpg',
  },
  {
    id: 'DQG1fzsDOeW_2',
    title: 'Subconscious — Spiral City',
    category: 'Subconscious',
    year: '2025',
    medium: 'Charcoal & acrylic on canvas',
    account: '@mazelastudio',
    shortcode: 'DQG1fzsDOeW',
    src: '/gallery/insta/DQG1fzsDOeW_2.jpg',
  },
  {
    id: 'DQM_EtDkV2I',
    title: 'Beneath the Skin of Light — Detail',
    category: 'Paintings',
    year: '2025',
    medium: 'Acrylic on canvas · detail',
    account: '@mazelastudio',
    shortcode: 'DQM_EtDkV2I',
    src: '/gallery/insta/DQM_EtDkV2I.jpg',
  },
  {
    id: 'DQG1fzsDOeW_1',
    title: 'Subconscious — Origin',
    category: 'Subconscious',
    year: '2025',
    medium: 'Charcoal & acrylic on canvas',
    account: '@mazelastudio',
    shortcode: 'DQG1fzsDOeW',
    src: '/gallery/insta/DQG1fzsDOeW_1.jpg',
  },
  {
    id: 'DQL4rzXjHTh',
    title: 'Subconscious — Mural',
    category: 'Murals',
    year: '2025',
    medium: 'Large-scale mural · ~2.4 m',
    account: '@mazelastudio',
    shortcode: 'DQL4rzXjHTh',
    src: '/gallery/insta/DQL4rzXjHTh.jpg',
  },
  {
    id: 'DQJOfF8DMCb',
    title: 'In the Studio — Spiral',
    category: 'Process',
    year: '2025',
    medium: 'Mural in progress',
    account: '@mazelastudio',
    shortcode: 'DQJOfF8DMCb',
    src: '/gallery/insta/DQJOfF8DMCb.jpg',
  },
  {
    id: 'DQETBVDjNeB',
    title: 'In the Studio — The Spiral of Hope',
    category: 'Process',
    year: '2025',
    medium: 'Mural in progress',
    account: '@mazelastudio',
    shortcode: 'DQETBVDjNeB',
    src: '/gallery/insta/DQETBVDjNeB.jpg',
  },
]

export const categories = [
  'All',
  'Paintings',
  'Subconscious',
  'Murals',
  'Process',
]

export { ig }
