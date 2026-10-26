# NeoProcesses Website — Project Structure & Architectural Guide

## 1. Directory Blueprint

```
NeoProcesses-Website/
├── docs/
│   ├── reference/
│   │   └── NeoProcesses_Company_Profile_FINAL.pdf # Official 8-page reference PDF
│   ├── PROJECT_STRUCTURE.md                       # This file
│   └── DEPLOYMENT.md                              # Vercel & GitHub deployment guide
├── public/
│   ├── images/                                    # Official brand identity assets
│   │   ├── neoprocesses_logo.png
│   │   ├── neoprocesses_logo.svg
│   │   ├── neoprocesses_symbol.svg
│   │   ├── neoprocesses_symbol.png
│   │   ├── neoprocesses_qr.svg
│   │   └── neoprocesses_brand_preview.png
│   ├── projects/                                  # Verified screenshots
│   │   ├── sayyarah_mobile.jpg                    # Flagship Sayyarah app screen
│   │   ├── sayyarah_browse.jpg                    # Sayyarah discovery stream
│   │   ├── sayyarah_details.jpg                   # Sayyarah condition inspection
│   │   ├── rowan_website_desktop.jpg              # Rowan B2B portal desktop
│   │   ├── rowan_website_mobile.jpg               # Rowan B2B portal mobile
│   │   ├── rowan_disposables.jpg                  # Rowan commercial category
│   │   ├── rowan_cleaners.jpg                     # Rowan industrial chemicals
│   │   ├── rowan_fresh_produce.jpg                # Rowan fresh produce
│   │   ├── jawad_website_desktop.png              # Jawad Aluminium portal
│   │   └── jawad_logo.jpg                         # Jawad Aluminium client logo
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── NeoProcesses_Company_Profile_FINAL.pdf
└── src/
    ├── app/
    │   ├── globals.css                            # Cloud Primero inspired styling system
    │   ├── layout.js                              # Global RootLayout & SEO metadata
    │   ├── page.js                                # Homepage with all 8 core sections
    │   ├── about/page.js                          # Corporate narrative & 7 value propositions
    │   ├── services/page.js                       # 6 Core services + Graphic Design guide
    │   ├── portfolio/page.js                      # 3 Verified projects + architectural deep-dives
    │   ├── contact/page.js                        # Validated inquiry form & direct channels
    │   └── not-found.js                           # Custom branded 404 page
    └── components/
        ├── ContactForm.js                         # Inquiry form with validation & WhatsApp dispatch
        ├── Footer.js                              # Authoritative site footer
        ├── Header.js                              # Sticky navbar with mobile drawer & quote CTA
        ├── ProjectCard.js                         # Showcase card with status badge & modal trigger
        ├── ProjectModal.js                        # High-resolution screenshot inspection modal
        ├── ServiceCard.js                         # Interactive service cards with deliverables
        └── WhatsAppFloatingButton.js              # Floating WhatsApp contact button
```

## 2. Six Core Services Model
1. **Website Design & Development:** Corporate portals, catalogues, Next.js architecture.
2. **Mobile Application Development:** Flutter cross-platform apps, offline-first Firestore sync.
3. **Custom Software Development:** Bespoke internal tools, granular RBAC, clean REST APIs.
4. **POS & Billing Systems:** Rapid counter checkout, printable thermal receipts, daily audit registers.
5. **Business Management Systems:** Order lifecycle pipelines, live inventory balances.
6. **E-commerce Solutions:** B2B dynamic catalogues, WhatsApp Request-for-Quote (RFQ) triggers.
+ **Graphic Design & Branding:** Brand identity, corporate emblems, social media creatives, print catalogues.

## 3. Verified Featured Projects
- **SAYYARAH — Car Rental Marketplace:** Android closed testing on Google Play Console.
- **Rowan Mohammed Al-Hajri Est.:** Saudi commercial supply website, client review pending.
- **Jawad Aluminium & Glass Works:** Custom estimation software & website, development in progress.
