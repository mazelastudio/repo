# Deploying to Cloudflare Pages (free, with your custom domain)

Account email: **mazelastudio@gmail.com**

Build settings (already correct for this project):

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | `20` (pinned in `.node-version`) |

There are two ways to deploy. **Option A (Git)** is recommended — every push
auto-rebuilds the live site.

---

## Option A — Connect a GitHub repo (recommended)

1. Create an empty repo on GitHub (e.g. `mazela-studio`) and push this folder:
   ```bash
   git remote add origin https://github.com/<you>/mazela-studio.git
   git push -u origin main
   ```
2. Go to <https://dash.cloudflare.com> → **Workers & Pages** → **Create** →
   **Pages** → **Connect to Git** → pick the repo.
3. Enter build command `npm run build`, output directory `dist` →
   **Save and Deploy**. First build takes ~1–2 min; you get a
   `*.pages.dev` URL.

## Option B — Direct upload from this machine (no GitHub)

```bash
npm run build
npx wrangler pages deploy dist --project-name mazela-studio
```
The first run opens a browser to log into Cloudflare (use
mazelastudio@gmail.com). Re-run the same command to publish updates.

---

## Custom domain

1. In your Pages project → **Custom domains** → **Set up a domain** → type the
   domain (e.g. `mazelastudio.com` and/or `www.mazelastudio.com`).
2. Then it depends where the domain is registered:
   - **Already on Cloudflare** → one click, done (SSL auto-issued).
   - **Elsewhere (GoDaddy, Namecheap, etc.)** → Cloudflare shows the exact DNS
     record to add. Either:
     - add that `CNAME`/`A` record at your registrar, **or**
     - move the domain's nameservers to Cloudflare (free) for the simplest,
       fastest setup — Cloudflare walks you through it.
3. SSL is automatic and free. Propagation is usually minutes.

---

## Notes
- `dist/` is git-ignored on purpose — Cloudflare rebuilds it from source.
- Artwork (`public/gallery/insta/`) and reels (`public/gallery/video/`) ARE
  committed, so they ship with the build.
- Caching/security headers live in `public/_headers`.
