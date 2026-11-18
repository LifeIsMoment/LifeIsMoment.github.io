# Research Portfolio v2 (2026-11-18)

## Benchmark approaches
- Inha Kang: compelling research hero and a visual project narrative.
- Minsuk Kahng: selected publications with precise bibliographic metadata and links.
- Andrej Karpathy: concise, direct explanation of engineering projects.
- Sebastian Raschka: resources, publications and long-running notes hub.
- Lilian Weng: deep, structured AI technical notes with references.

## Site features
- Existing public URL and legacy Chirpy/Jekyll content preserved.
- New /notes.html (five technical notes), /resources.html, and /cv.html.
- Source Markdown at /content/notes/ for future MDX migration; live pages are static HTML.
- Homepage featured paper image, project workflow diagrams, publication BibTeX for the published conference paper and book.
- Filters, site search, dark mode and mobile nav preserved.
- No public copies of pre-publication manuscripts or sensitive company materials.

## Platform decision
Astro/MDX migration was **not applied** to production. The already-working GitHub Pages site serves static HTML from master and prior workflow/legacy pages remain intact. Migrate only after a separate staged build and Pages source change have been tested; the Markdown source files are a preparation for such migration.

## Tests
`node --check assets/js/jy-site.js`
`node scripts/site-smoke.mjs`

## URLs
Live: https://lifeismoment.github.io/

## Publication status
Conference published, journal acceptance/"게재 가능" based on user-provided status, ongoing manuscripts not published. The patent is an application; copyrights are registered under XAIKOREA Inc.
