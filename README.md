# Third Element website

A one-page Astro site for Third Element B.V. It deploys to GitHub Pages automatically every time you push to `main`.

## Edit the words

All copy lives in `src/data/site.ts`. Change text there; layout files don't need touching.
Replace the placeholder `email` before going live.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
```

## Deploys

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. You can also run it by hand from the **Actions** tab ("Run workflow").

The site is served at **https://thirdelement.nl**. `public/CNAME` tells GitHub Pages the domain, and `astro.config.mjs` sets it as the site URL.

### One-time GitHub setup

1. Repo **Settings → Pages → Build and deployment → Source**: choose **GitHub Actions**.
2. Same page, **Custom domain**: enter `thirdelement.nl` and save. Tick **Enforce HTTPS** once the certificate is ready.

### Cloudflare DNS for thirdelement.nl

Add these records in Cloudflare (**DNS → Records**). Set every one to **DNS only** (grey cloud) so GitHub can issue the HTTPS certificate.

| Type  | Name | Content                     |
|-------|------|-----------------------------|
| A     | @    | 185.199.108.153             |
| A     | @    | 185.199.109.153             |
| A     | @    | 185.199.110.153             |
| A     | @    | 185.199.111.153             |
| AAAA  | @    | 2606:50c0:8000::153         |
| AAAA  | @    | 2606:50c0:8001::153         |
| AAAA  | @    | 2606:50c0:8002::153         |
| AAAA  | @    | 2606:50c0:8003::153         |
| CNAME | www  | piperhelmrath-debug.github.io |

If you later switch records to **Proxied** (orange cloud), set Cloudflare **SSL/TLS** mode to **Full**.

## Structure

```
src/
  data/site.ts                 all site copy
  pages/index.astro            the landing page
  components/ServiceSection.astro
  layouts/Base.astro           <head>, meta tags
  styles/global.css            colours, type, layout
public/favicon.svg
.github/workflows/deploy.yml   GitHub Pages pipeline
```
