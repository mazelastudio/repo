// ─────────────────────────────────────────────────────────────────────────────
//  VIDEO GALLERY  —  professional reels pulled from Instagram
//
//  Files live in /public/gallery/video/  (mp4 + matching .jpg poster, named by
//  Instagram shortcode). Videos are NOT loaded until the viewer opens one — the
//  grid only loads the lightweight poster images, so the page stays fast.
//
//  TO ADD: drop  <shortcode>.mp4  and  <shortcode>.jpg  into the folder, then
//  copy an item below.
// ─────────────────────────────────────────────────────────────────────────────

const base = '/gallery/video'

export const videoItems = [
  {
    id: 'yt-9OPXZ5zzIsI',
    title: 'Hezartoo — “Labyrinth”',
    tag: 'Lyric Video · Vocal',
    account: '@elaheh.sheikhalizadeh',
    youtubeId: '9OPXZ5zzIsI',
    orientation: 'landscape',
    poster: 'https://i.ytimg.com/vi/9OPXZ5zzIsI/maxresdefault.jpg',
  },
  {
    id: 'DQETBVDjNeB',
    title: 'The Spiral of Hope',
    tag: 'Process · Mural',
    account: '@mazelastudio',
    shortcode: 'DQETBVDjNeB',
    orientation: 'portrait',
    src: `${base}/DQETBVDjNeB.mp4`,
    poster: `${base}/DQETBVDjNeB.jpg`,
  },
  {
    id: 'DQL4rzXjHTh',
    title: 'Subconscious — Reveal',
    tag: 'Mural',
    account: '@mazelastudio',
    shortcode: 'DQL4rzXjHTh',
    orientation: 'portrait',
    src: `${base}/DQL4rzXjHTh.mp4`,
    poster: `${base}/DQL4rzXjHTh.jpg`,
  },
  {
    id: 'DZSxUwKsFY4',
    title: 'Music Video',
    tag: 'Vocal · Performance',
    account: '@elaheh.sheikhalizadeh',
    shortcode: 'DZSxUwKsFY4',
    orientation: 'landscape',
    src: `${base}/DZSxUwKsFY4.mp4`,
    poster: `${base}/DZSxUwKsFY4.jpg`,
  },
  {
    id: 'DQJOfF8DMCb',
    title: 'Subconscious — In Detail',
    tag: 'Process',
    account: '@mazelastudio',
    shortcode: 'DQJOfF8DMCb',
    orientation: 'portrait',
    src: `${base}/DQJOfF8DMCb.mp4`,
    poster: `${base}/DQJOfF8DMCb.jpg`,
  },
  {
    id: 'DQM_EtDkV2I',
    title: 'Beneath the Skin of Light',
    tag: 'Painting',
    account: '@mazelastudio',
    shortcode: 'DQM_EtDkV2I',
    orientation: 'portrait',
    src: `${base}/DQM_EtDkV2I.mp4`,
    poster: `${base}/DQM_EtDkV2I.jpg`,
  },
  {
    id: 'DQOsUhkDFS7',
    title: 'Reverie — In Motion',
    tag: 'Painting',
    account: '@mazelastudio',
    shortcode: 'DQOsUhkDFS7',
    orientation: 'portrait',
    src: `${base}/DQOsUhkDFS7.mp4`,
    poster: `${base}/DQOsUhkDFS7.jpg`,
  },
  {
    id: 'C0eXwBEogX4',
    title: 'Original Painting & Interior',
    tag: 'Interior · Painting',
    account: '@elaheh.sheikhalizadeh',
    shortcode: 'C0eXwBEogX4',
    orientation: 'portrait',
    src: `${base}/C0eXwBEogX4.mp4`,
    poster: `${base}/C0eXwBEogX4.jpg`,
  },
]
