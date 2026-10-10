# NeoProcesses — Corporate Website

Official corporate website for **NeoProcesses** — Software Development & Digital Solutions Studio.

**Tagline:** *Your Business. Our Solution.*

---

## Technology Stack

- **Framework:** Next.js 15 (App Router)
- **Library:** React 19
- **Styling:** Custom CSS Design System (CSS Variables, Responsive Grid, Zero CSS bloat)
- **Deployment:** Vercel-ready

---

## Project Structure

```
NeoProcesses-Website/
├── public/
│   ├── favicon.svg              # Brand Continuous-Loop 'N' Favicon
│   ├── robots.txt
│   ├── images/
│   │   ├── logo-light.svg       # Light background logo variant
│   │   ├── logo-dark.svg        # Dark background logo variant
│   │   └── neoprocesses_symbol.svg
│   └── projects/
│       ├── sayyarah-browse.jpg  # Genuine Sayyarah Marketplace previews
│       ├── laundry-dashboard.jpg# Genuine Laundry Management previews
│       └── rowan-preview.jpg    # Genuine Rowan Al-Hajri B2B previews
├── src/
│   ├── app/
│   │   ├── layout.js            # Global Layout with Header, Footer & Metadata
│   │   ├── globals.css          # Design System Tokens & Base Components
│   │   ├── page.js              # Home Page
│   │   ├── about/page.js        # About Page
│   │   ├── services/page.js     # Services Page
│   │   ├── portfolio/page.js    # Portfolio Page
│   │   ├── contact/page.js      # Contact Page
│   │   └── not-found.js         # Custom 404 Page
│   └── components/
│       ├── Header.js            # Sticky responsive Navigation with Mobile Drawer
│       ├── Footer.js            # Corporate Footer with verified links
│       ├── ContactForm.js       # Validated form with direct WhatsApp/Email dispatch
│       ├── ProjectCard.js       # Genuine project display card
│       └── ServiceCard.js       # Service capabilities display card
├── jsconfig.json
├── next.config.mjs
└── package.json
```

---

## Running Locally

1. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Production Build & GitHub Pages Deployment

1. Test the static production build locally:
   ```bash
   npm run build
   ```

   The exported site is written to `out/`.

2. Push the `main` branch to the public `NeoProcesses-Website` GitHub repository.

3. In the repository settings, select **Pages → Build and deployment → GitHub Actions**.
   The workflow in `.github/workflows/deploy-pages.yml` builds and deploys the site
   whenever a commit is pushed to `main`.

The site is published at
`https://<your-github-username>.github.io/NeoProcesses-Website/`.
