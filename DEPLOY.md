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

## Custom domain — mazelastudio.com (registered at GoDaddy)

Chosen approach: **move nameservers to Cloudflare** (cleanest; gives free CDN +
unlimited bandwidth and one-click custom domains). The domain currently uses
GoDaddy nameservers (`ns15/ns16.domaincontrol.com`) and only has a parking page,
so there's nothing to preserve.

1. **Deploy first** (see Option A/B above) so the Pages project exists.
2. **Add the zone to Cloudflare:** dash.cloudflare.com → **Add a domain** →
   `mazelastudio.com` → **Free** plan. Cloudflare scans DNS and shows **two
   nameservers** (e.g. `aria.ns.cloudflare.com`, `rob.ns.cloudflare.com`).
3. **Switch nameservers at GoDaddy:** GoDaddy → *My Products* →
   `mazelastudio.com` → **DNS** → **Nameservers** → **Change** → *"I'll use my
   own nameservers"* → paste Cloudflare's two NS → **Save**. Remove GoDaddy's
   default NS. Propagation: ~15 min–2 h (fast for a new domain).
   - Cloudflare emails you when the domain is "active".
4. **Attach to the site:** Pages project → **Custom domains** → add both
   `mazelastudio.com` and `www.mazelastudio.com`. Each is one click; Cloudflare
   creates the DNS records and issues SSL automatically.
5. Optional redirect: in **Custom domains**, set `www` to redirect to the apex
   (or vice-versa) so there's one canonical address.

SSL is automatic and free.

---

## Notes
- `dist/` is git-ignored on purpose — Cloudflare rebuilds it from source.
- Artwork (`public/gallery/insta/`) and reels (`public/gallery/video/`) ARE
  committed, so they ship with the build.
- Caching/security headers live in `public/_headers`.
