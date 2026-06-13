# Elaheh Sheikhalizadeh — Portfolio (Mazela Studio)

A professional artist-portfolio website for **Elaheh Sheikhalizadeh** — Voice &
Visual Artist, Creative Director and Media Presenter, Istanbul.

Built with **React + Vite**, a custom "Atelier" design system (warm bone canvas,
deep ink, clay/gold accents, editorial serif type), a filterable gallery with a
keyboard-navigable lightbox, scroll-reveal animations, and a fully responsive
layout.

## Quick start

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Sections

| Section        | What it shows |
| -------------- | ------------- |
| **Hero**       | Name, titles, tagline, calls to action |
| **About**      | Professional summary + headline stats |
| **Disciplines**| The six areas of practice |
| **Gallery**    | Filterable, masonry-style works with a lightbox |
| **In Motion**  | Video reels & film — scroll-snap strip with a modal player |
| **Voice & Media** | Dubbing, narration, singing, presenting |
| **Journey**    | Experience timeline, education, training, languages |
| **Contact**    | Email, phone, studio, Instagram links |

## The artwork (from Instagram)

The gallery is populated with **real artwork pulled from Instagram**:

- **@mazelastudio** — the studio page (entirely professional): the
  *Subconscious* series, *Beneath the Skin of Light*, murals and studio process.
- **@elaheh.sheikhalizadeh** — only the **professional** pieces (e.g.
  *Wormhole*); personal-life posts are intentionally excluded.

Images live in [`public/gallery/insta/`](public/gallery/insta/), named by their
Instagram shortcode, and each lightbox links back to the original post. To add
or refresh works, see [`public/gallery/README.md`](public/gallery/README.md).

**Video reels** (the "In Motion" section) live in
[`public/gallery/video/`](public/gallery/video/) as `<shortcode>.mp4` + a
`<shortcode>.jpg` poster, configured in
[`src/data/videos.js`](src/data/videos.js). The grid only loads the lightweight
posters; each `.mp4` is fetched **only when the viewer opens it**, so the page
stays fast despite the videos totalling ~35 MB.

### Mobile

Mobile is treated as the primary experience: fluid type and spacing, a slide-in
nav, full-bleed hero with a legibility scrim, single-column masonry gallery,
**swipe-to-navigate / swipe-down-to-close** lightbox, horizontally scrollable
filter chips, reduced blur for smooth scrolling, and `prefers-reduced-motion`
support throughout.

## Editing content

All text lives in two files — no need to touch components:

- [`src/data/profile.js`](src/data/profile.js) — name, titles, about, disciplines, contact.
- [`src/data/experience.js`](src/data/experience.js) — experience, education, training, languages.

## Project structure

```
src/
  components/   # Navbar, Hero, About, Disciplines, Gallery, Voice, Journey, Contact, Footer (+ CSS)
  data/         # profile.js, experience.js, gallery.js  ← edit content here
  hooks/        # useReveal (scroll animations)
  utils/        # placeholder.js (generates abstract artwork placeholders)
  styles/       # global.css (design system / theme)
public/
  gallery/      # ← put real artwork images here
  favicon.svg
```

## Deploying

The site is fully static. After `npm run build`, deploy the `dist/` folder to
any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages). On Vercel/
Netlify, point the project at this repo with build command `npm run build` and
output directory `dist`.
