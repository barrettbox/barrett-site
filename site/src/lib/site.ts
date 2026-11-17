/**
 * Launch marketing constants — swap these before go-live.
 *
 * APP_STORE_URL: PLACEHOLDER (`#`) until the App Store listing is live.
 * ASC Apple ID: 6835719477 (Passport Pack). Bundle: com.andrewbarrett.foliovault.
 * When published, set to e.g. https://apps.apple.com/app/id6835719477
 * Swap site: this file only — `AppStoreCta.astro` reads the constant.
 *
 * Hosting: GitHub Pages project site on barrettbox/barrett-site at SITE_ORIGIN.
 * Apps hub (ASC Support/Privacy under /apps/passport-pack/) shares the
 * same Pages deploy; this marketing surface is /site/.
 */
export const APP_STORE_URL = "#";
export const SUPPORT_EMAIL = "support@passportpack.app";
/** Canonical origin for the marketing site (includes /site path). */
export const SITE_ORIGIN = "https://barrettbox.github.io/barrett-site/site";
export const APP_NAME = "Passport Pack";
/** ASC Apple ID — used in docs / future APP_STORE_URL swap */
export const APP_STORE_ID = "6835719477";

/**
 * Prefix a root-absolute path with Astro `base` (e.g. `/barrett-site/site/`).
 * Pass `"/"` for the marketing home. Always joins with a trailing slash on base.
 */
export function withBase(path = "/"): string {
  const raw = import.meta.env.BASE_URL || "/";
  const base = raw.endsWith("/") ? raw : `${raw}/`;
  if (path === "/" || path === "") return base;
  const normalized = path.replace(/^\//, "");
  return `${base}${normalized}`;
}

export const pricing = {
  free: {
    label: "Free",
    bullets: ["Up to 3 documents", "Me profile only", "On-device AES-GCM vault"],
  },
  paid: {
    label: "Passport Pack Pro",
    bullets: [
      "Unlimited documents",
      "Family profiles",
      "Expiry reminders",
    ],
    note: "No iCloud sync or CloudKit backup in the launch build — paid unlocks vault capacity and family features only.",
  },
} as const;
