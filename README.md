# Aiplaz — website

The studio's public pages, served by GitHub Pages at https://aiplaz.github.io from the repository `Aiplaz/aiplaz.github.io`. Publisher: Aiplaz, contact support.aiplaz@gmail.com. Plain HTML and one stylesheet (`style.css`), no build step. Two small scripts: `i18n.js` (the language picker and the translations, 13 languages, for the home page, the Tumble Jar game and test pages and the shared header and footer words of the Tiny Voyager game page) and `analytics.js` (cookieless PostHog page views, on the Aiplaz, Tumble Jar and Flip Troupe pages only).

- `index.html` — studio home page with a link to each game.
- `tumble-jar/` — Tumble Jar: game page, `test` (how to join the Google Play test), `support`, `privacy` (English), `privacy-ro` (Romanian) and `delete-data`. The app opens https://aiplaz.github.io/tumble-jar/privacy and `.../privacy-ro` from Settings → Privacy policy, so those two files must keep their names.
- `flip-troupe/` — Flip Troupe (English only): game page, `test`, `support`, `privacy` and `delete-data`.
- `tiny-voyager/` — Tiny Voyager (moved here from tiny-voyager.github.io on 2026-10-31, which now only redirects): game page, `support`, `privacy` (English), `privacy-ro` (Romanian) and `delete-data`, in the site's design (`../style.css`); the game page has the language picker (`../i18n.js`) for the shared header and footer words, the page text is English. These pages load no `analytics.js`, because Tiny Voyager's privacy policy does not describe the website statistics. Tiny Voyager is still published by Nicolae Sirghi (contact tinyvoyager.games@gmail.com), so its pages name him, not Aiplaz. From 1.1.3 the app opens https://aiplaz.github.io/tiny-voyager/privacy from Settings, so that file must keep its name.
- `app-ads.txt` — AdMob's list of authorised sellers for Tiny Voyager (the only game with ads). It must stay at the root of the site, the developer website given in the stores.
- `404.html` — shown for any missing page; it uses root paths (`/style.css`), because GitHub Pages serves it at every depth.

Links between pages have no `.html` ending (`privacy`, `support`); GitHub Pages serves `privacy.html` for `/privacy`.

## The look

"Three little worlds": the page itself stays quiet (lilac-grey paper `#EEF0F7`, indigo ink `#1C1A33`, Baloo 2 for headings because it is the games' own font, Figtree for reading), and each game brings its world as a full-width band in its colour with one shape from the game: Tumble Jar's water line (`.w-tj`, jar-glass blue), Flip Troupe's bunting (`.w-ft`, dusk violet) and Tiny Voyager's stars (`.w-tv`, deep space). The sun yellow `#FFC531` of the merge balls and the bunting is the only action colour (`.btn.sun`), so each band has one obvious action. The `<body>` of every game page carries its world class too, which tints the "In short" box on the legal pages. The only animation: on the home page the three icons drop into their bands once (not with reduced motion). Dark mode follows the system. Every page has the Aiplaz mark in the header, linking home; the legal pages have a back link to their game above the title.

## Deploying

`.github/workflows/pages.yml` publishes the repository root on every push to `main` (or by hand from the Actions tab). In the repository settings, Pages → Build and deployment → Source must be **GitHub Actions**. `.nojekyll` keeps GitHub from running Jekyll.

## Keeping the privacy policy true

The policy describes what the app actually does: no accounts, no ads, no purchases, settings and statistics only on the phone, anonymous statistics and crash reports (PostHog, EU), both turned off by Settings → Anonymous statistics (Tumble Jar sent crash reports to Sentry before it moved to PostHog; Tiny Voyager adds rewarded ads from Google AdMob). When the app starts collecting anything new, update both `privacy.html` and `privacy-ro.html` and the date at the top before the release.
