# barrett-site

Public GitHub Pages host for Barrettbox apps:

- **Apps hub** (`hub/`) — multi-app landing + ASC privacy/support URLs
- **Passport Pack marketing** (`site/`) — Astro static site

## Live URLs (after Pages deploy)

| Surface | URL |
| --- | --- |
| Hub home | https://barrettbox.github.io/barrett-site/ |
| Passport Pack marketing | https://barrettbox.github.io/barrett-site/site/ |
| ASC Privacy | https://barrettbox.github.io/barrett-site/apps/passport-pack/privacy/ |
| ASC Support | https://barrettbox.github.io/barrett-site/apps/passport-pack/support/ |

Deploy: `.github/workflows/pages.yml` (push to `main` touching `hub/**` / `site/**`, or `workflow_dispatch`).

Source was migrated from `barrettbox/passports` (`site/` + `hub/`); this repo is canonical.
