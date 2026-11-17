# Passport Pack marketing site

Thin static marketing site for **Passport Pack** (Astro). Charcoal / brass brand system.

App Store name: Passport Pack · ASC `6835719477` · Bundle `com.andrewbarrett.foliovault`.

## Hosting

GitHub Pages project site on **`barrettbox/barrett-site`** (this repo), no custom domain required:

**https://barrettbox.github.io/barrett-site/site/**

Astro: `site: https://barrettbox.github.io`, `base: /barrett-site/site`.  
Deployed with the apps hub via `.github/workflows/pages.yml` (hub at `/`, this site at `/site/`).

## Pages

- `/` — brand home, Photos foil, honest free vs paid, App Store CTA
- `/security` — architecture / threat model (no CloudKit claim)
- `/guides` — index of problem guides
- `/guides/passport-in-photos` — passport copy should not live in Photos
- `/guides/family-travel-documents` — family packing / profiles / expiry
- `/privacy` — privacy policy
- `/support` — support contact

Nav stub: Compare (later).

## Swap before go-live

Edit `src/lib/site.ts`:

| Constant | Launch placeholder | When live |
| --- | --- | --- |
| `APP_STORE_URL` | `#` | `https://apps.apple.com/app/id6835719477` after the listing is live |
| `SUPPORT_EMAIL` | `support@passportpack.app` | After mailbox exists, or change to a real inbox |

ASC Support/Privacy for Review should use hub URLs under `/apps/passport-pack/`.

## Develop

```bash
cd site
npm install
npm run dev
# open http://localhost:4321/barrett-site/site/
```

## Build

```bash
cd site
npm run build
```

Output lands in `dist/`.
