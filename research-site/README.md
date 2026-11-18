# Jaeseong Yun academic research website

This repository contains the existing GitHub Pages site and a new **Astro + MDX** project in `research-site/`.

## Design intent
Personal academic profile, not a commercial AI platform. Light paper background, readable typography, bibliographic publications, long-form research notes and evidence-based descriptions.

## Development
```bash
cd research-site
npm install
npm run dev
npm run build
npm run verify
```

Existing research notes live in `content/notes/*.md` and are copied to Astro MDX collection during the build. The first build produces 16 HTML pages with stable `.html` URLs.

## Deployment
GitHub workflow `.github/workflows/deploy-astro.yml` builds and uploads the Astro output to GitHub Pages on `master`. Per the official Astro/GitHub Pages procedure, repository Settings → Pages → Build and deployment → Source should be **GitHub Actions** for this workflow to own deployments. The previous branch-based static site remains as a fallback until the Actions deployment is confirmed. Public URL: https://lifeismoment.github.io/.

## Accuracy and privacy
Prepublication work is marked ongoing, journal '게재 가능 결정' is distinguished from published, and patent applications are not described as granted patents. The copyright registrant is the company, not the individual. Only public data and derived notes are included.
