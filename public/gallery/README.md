# Gallery images

The gallery is now populated with **real artwork pulled from Instagram**:

- `insta/` — images saved from **@mazelastudio** (all professional) and the
  professional pieces from **@elaheh.sheikhalizadeh**. Files are named by their
  Instagram shortcode (e.g. `DQM9ZP0DFla.jpg`).

## Adding or changing a piece

1. Save a new image into `insta/` (keep it ~1080px on the long edge).
2. In [`src/data/gallery.js`](../../src/data/gallery.js), copy an existing item
   and update `src`, `title`, `category`, `year`, `medium`, `shortcode` and
   `account`.

The `shortcode` powers the **"View on Instagram"** link in the lightbox
(`https://www.instagram.com/p/<shortcode>/`).

## Refreshing from Instagram later

These were captured from the public profile feed. To refresh, re-save the
latest post images into `insta/` and update `src` paths. Personal-life posts
from the personal account are intentionally excluded — only professional work
(paintings, murals, studio process) is shown.
