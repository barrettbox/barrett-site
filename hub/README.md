# Barrettbox apps hub (GitHub Pages)

Static multi-app landing + App Store privacy/support URLs.

**Canonical host:** [`barrettbox/barrett-site`](https://github.com/barrettbox/barrett-site) (this repo).  
Supersedes the interim project Pages deploy on `barrettbox/passports`.

## Local preview

```bash
cd hub
python3 -m http.server 8080
# open http://127.0.0.1:8080/
```

## Deploy

Unified GitHub Actions workflow `.github/workflows/pages.yml` publishes:

| Surface | Path on Pages |
| --- | --- |
| This hub | `/` (repo root of the Pages artifact) |
| Passport Pack marketing (`site/`) | `/site/` |

Triggers on pushes to `main` that touch `hub/**`, `site/**`, or the workflow file.

After the first successful run (and Pages source = GitHub Actions):

| Page | URL |
| --- | --- |
| Hub home | https://barrettbox.github.io/barrett-site/ |
| Passport Pack marketing | https://barrettbox.github.io/barrett-site/site/ |
| Passport Pack (hub card) | https://barrettbox.github.io/barrett-site/apps/passport-pack/ |
| Privacy (ASC) | https://barrettbox.github.io/barrett-site/apps/passport-pack/privacy/ |
| Support (ASC) | https://barrettbox.github.io/barrett-site/apps/passport-pack/support/ |

### One-time repo setting

GitHub → **barrett-site** → Settings → Pages → Source: **GitHub Actions**  
(already enabled for this repo; workflow also sets `enablement: true`).

### Later: custom domain / user site

Add a CNAME (or rename to `barrettbox.github.io`) and drop the `/barrett-site`
path prefix from ASC URLs. Marketing Astro `base` would also need to change
(or move to apex).
