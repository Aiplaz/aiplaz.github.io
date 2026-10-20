# Aiplaz — website

The studio's public pages, served by GitHub Pages at https://aiplaz.github.io from the repository `Aiplaz/aiplaz.github.io`. Publisher: Aiplaz, contact support.aiplaz@gmail.com. Plain HTML and one stylesheet (`style.css`): no build step and no JavaScript.

- `index.html` — studio home page with a link to each game.
- `tumble-jar/` — Tumble Jar: game page, `support`, `privacy` (English), `privacy-ro` (Romanian) and `delete-data`. The app opens https://aiplaz.github.io/tumble-jar/privacy and `.../privacy-ro` from Settings → Privacy policy, so those two files must keep their names.
- `404.html` — shown for any missing page; it uses root paths (`/style.css`), because GitHub Pages serves it at every depth.

Links between pages have no `.html` ending (`privacy`, `support`); GitHub Pages serves `privacy.html` for `/privacy`.

## Deploying

`.github/workflows/pages.yml` publishes the repository root on every push to `main` (or by hand from the Actions tab). In the repository settings, Pages → Build and deployment → Source must be **GitHub Actions**. `.nojekyll` keeps GitHub from running Jekyll.

## Keeping the privacy policy true

The policy describes what the app actually does: no accounts, no ads, no purchases, settings and statistics only on the phone, anonymous statistics (PostHog, EU) and crash reports (Sentry, EU), both turned off by Settings → Anonymous statistics. When the app starts collecting anything new, update both `privacy.html` and `privacy-ro.html` and the date at the top before the release.
