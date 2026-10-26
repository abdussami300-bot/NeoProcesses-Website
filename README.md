# NeoProcesses — Corporate Website

Official corporate website and capabilities showcase for **NeoProcesses**, a software development and digital solutions studio based in Islamabad, Pakistan, engineering custom web platforms, mobile applications, and business management systems for clients in Pakistan, Saudi Arabia, and international markets.

- **Production URL:** [https://neoprocesses-website.vercel.app/](https://neoprocesses-website.vercel.app/)
- **Repository:** `https://github.com/abdussami300-bot/NeoProcesses-Website.git`
- **Lead Contact:** abdusami300@gmail.com | +92 326 5635826
- **Headquarters:** Islamabad, Pakistan

---

## 🚀 Technology Stack

- **Framework:** Next.js 15.2.9 (App Router)
- **Core Library:** React 19.0.0
- **Styling Architecture:** Pure Modular Semantic CSS (Tokens, Glassmorphism, Zero Framework Bloat)
- **Typography:** Space Grotesk, Plus Jakarta Sans, JetBrains Mono
- **Deployment:** Vercel Static HTML Export (`output: 'export'`)
- **SEO & Social:** OpenGraph, Twitter Cards, Semantic Robots.txt, and XML Sitemap

---

## 📁 Repository Structure

```
NeoProcesses-Website/
├── docs/
│   ├── reference/
│   │   └── NeoProcesses_Company_Profile_FINAL.pdf
│   ├── PROJECT_STRUCTURE.md
│   └── DEPLOYMENT.md
├── public/
│   ├── images/              # Official NeoProcesses logo suite, symbols & QR code
│   ├── projects/            # Verified screenshots for SAYYARAH, Rowan, Jawad Aluminium
│   ├── favicon.svg          # High-resolution vector favicon
│   ├── robots.txt           # Search crawler directive
│   ├── sitemap.xml          # Search engine sitemap index
│   └── NeoProcesses_Company_Profile_FINAL.pdf
├── src/
│   ├── app/
│   │   ├── about/page.js    # Corporate narrative, Islamabad HQ, 7 Value Propositions
│   │   ├── contact/page.js  # Project inquiry form, WhatsApp link, FAQ matrix
│   │   ├── portfolio/page.js# Deep-dive into 3 flagship projects + interactive modal
│   │   ├── services/page.js # 6 Core Services + Graphic Design & Branding breakdown
│   │   ├── globals.css      # Design system tokens, micro-animations & responsive queries
│   │   ├── layout.js        # RootLayout, SEO metadata, Header, Footer & WhatsApp button
│   │   ├── not-found.js     # 404 Error page
│   │   └── page.js          # Homepage with Cloud Primero inspired aesthetic & full sections
│   ├── components/
│   │   ├── ContactForm.js   # Form with WhatsApp/phone field, validation & direct dispatch
│   │   ├── Footer.js        # Official details, quick navigation, social links, copyright
│   │   ├── Header.js        # Sticky navbar, brand lockup, mobile drawer, Get a Quote CTA
│   │   ├── ProjectCard.js   # Project showcase card with status badge & hover preview
│   │   ├── ProjectModal.js  # Deep-dive inspection modal with high-res screenshots
│   │   ├── ServiceCard.js   # Interactive service cards with deliverables & quote link
│   │   └── WhatsAppFloatingButton.js # Non-intrusive floating contact button
│   └── utils/
│       └── asset-path.js    # Base path helper for static exports
├── next.config.mjs          # Next.js export & basePath configuration
└── package.json             # Scripts & dependencies
```

---

## 🛠️ Local Development & Running

### Prerequisites
- Node.js 18+ or 20+ installed
- PowerShell / Command Line

### 1. Install Dependencies
```powershell
npm install
```

### 2. Run Local Development Server
```powershell
npm run dev
# or in PowerShell with execution restrictions:
npm.cmd run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build & Validate Production Bundle
```powershell
npm.cmd run build
```
This produces an optimized static export in the `out/` directory with 0 errors.

---

## 🌐 Official Business Information

- **Company:** NeoProcesses
- **Email:** [abdusami300@gmail.com](mailto:abdusami300@gmail.com)
- **WhatsApp:** [+92 326 5635826](https://wa.me/923265635826)
- **Location:** Islamabad, Pakistan
- **Facebook:** [https://www.facebook.com/profile.php?id=61595881740682](https://www.facebook.com/profile.php?id=61595881740682)
- **Instagram:** [https://www.instagram.com/neoprocesses/](https://www.instagram.com/neoprocesses/)
- **GitHub:** [https://github.com/abdussami300-bot](https://github.com/abdussami300-bot)
