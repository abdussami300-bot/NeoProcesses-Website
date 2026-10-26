# NeoProcesses Website — Deployment & Production Guide

This guide documents the deployment workflow and safety guidelines for updating the live website at **[https://neoprocesses-website.vercel.app/](https://neoprocesses-website.vercel.app/)**.

---

## 1. Existing Production Configuration

- **Hosting Platform:** Vercel
- **Project Name:** `neoprocesses-website`
- **Owner Account:** `sami-f236`
- **Connected Git Repository:** `https://github.com/abdussami300-bot/NeoProcesses-Website.git`
- **Production Branch:** `main`
- **Framework Preset:** Next.js
- **Build Output:** Static HTML Export (`out/`)

---

## 2. Pre-Deployment Validation Checklist

Before pushing changes to GitHub or deploying to Vercel:

1. **Run Local Build Test:**
   ```powershell
   npm.cmd run build
   ```
   Confirm that all static routes (`/`, `/about/`, `/services/`, `/portfolio/`, `/contact/`, `/not-found/`) generate with `✓ Exporting (3/3)` and exit code 0.

2. **Verify Git Status:**
   ```powershell
   git status
   ```
   Ensure no temporary build cache or unintended files are staged.

---

## 3. Deploying Updates via GitHub & Vercel

Because Vercel is connected to the GitHub repository on the `main` branch:

1. **Stage and commit verified files:**
   ```powershell
   git add .
   git commit -m "feat: complete website discovery, organization and premium redesign"
   ```

2. **Push to GitHub (Requires User Approval):**
   ```powershell
   git push origin main
   ```
   *Note: Per master prompt Phase 15, automatic push to production is never executed without explicit user confirmation.*

3. **Vercel Automatic Deployment:**
   Once pushed to `origin/main`, Vercel automatically detects the commit, executes `next build`, and deploys the static assets to the production edge network at `https://neoprocesses-website.vercel.app/` within ~60 seconds.

---

## 4. Environment Variables
- `NEXT_PUBLIC_BASE_PATH`: Set to empty string `""` for root deployments (or configured if deploying to a sub-path).
- All API and contact links use static parameters or direct client-side WhatsApp/Email protocols. No external server secrets are exposed.
