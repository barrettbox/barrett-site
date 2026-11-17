// @ts-check
import { defineConfig } from "astro/config";

// Hosted on GitHub Pages project site for barrettbox/barrett-site.
// Marketing lives under /barrett-site/site/ so the apps hub can own /.
export default defineConfig({
  site: "https://barrettbox.github.io",
  base: "/barrett-site/site/",
  output: "static",
});
