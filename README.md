# New Path Construction — Redesign

A Next.js 14 redesign of newpathconstruction.com, inspired by the Oryzo.ai editorial aesthetic. Production-ready, mobile responsive, with full dark/light mode.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** with custom theme tokens
- **Framer Motion** for animations
- **next-themes** for dark/light mode persistence
- **Lucide React** for icons

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Project structure

```
app/
├── layout.tsx                    # Root layout, theme provider, fonts
├── page.tsx                      # Homepage
├── globals.css                   # Theme tokens, base styles
├── about/                        # About New Path
├── about-our-team/               # Team page
├── construction-services/        # Services overview
├── pre-construction/             # Service detail
├── general-contracting/          # Service detail
├── construction-management/      # Service detail
├── real-estate-advisory/         # Service detail
├── portfolio/                    # Filterable project grid
├── blog/                         # News / articles
├── podcast/                      # Building Legacies podcast
└── contact/                      # Contact form

components/
├── navbar.tsx                    # Sticky nav with mobile menu
├── footer.tsx                    # Footer with offices, marquee
├── theme-provider.tsx            # next-themes wrapper
├── theme-toggle.tsx              # Light/dark button
├── page-header.tsx               # Reusable inner-page hero
├── service-detail.tsx            # Template for all 4 service pages
├── cta-section.tsx               # Reusable CTA
└── counter.tsx                   # Animated number counter
```

## Pages (matching original site map)

| Page | Route |
|---|---|
| Home | `/` |
| About | `/about` |
| About Our Team | `/about-our-team` |
| Construction Services | `/construction-services` |
| Pre Construction | `/pre-construction` |
| General Contracting | `/general-contracting` |
| Construction Management | `/construction-management` |
| Real Estate Advisory | `/real-estate-advisory` |
| Portfolio (with 8 category filters) | `/portfolio` |
| News / Blog | `/blog` |
| Podcast | `/podcast` |
| Contact | `/contact` |

## Design system

Color tokens live in `app/globals.css`. Swap any of these RGB triplets to rebrand:

```css
:root {
  --background: 250 248 244;   /* warm paper */
  --foreground: 18 18 16;
  --accent: 196 122 50;         /* burnt orange */
}
.dark {
  --background: 10 10 10;
  --foreground: 240 238 232;
  --accent: 224 156 80;
}
```

Typography uses **Fraunces** (display), **Inter** (body), **JetBrains Mono** (eyebrows). All loaded via `next/font` — no FOUC.

## What still needs replacing

Before launch, swap these placeholders for real client assets:

1. **Hero image** — `app/page.tsx`, line ~95 (Unsplash URL)
2. **Portfolio images** — `app/portfolio/page.tsx` (Unsplash URLs)
3. **Team photos** — `app/about-our-team/page.tsx` (currently letter placeholders)
4. **Real project titles, locations, dates** — `app/portfolio/page.tsx`
5. **Real blog posts** — `app/blog/page.tsx`
6. **Real podcast episodes + audio links** — `app/podcast/page.tsx`
7. **Contact form backend** — `app/contact/page.tsx` (currently console-only; wire to Resend, Formspree, or your endpoint)

## Deploy

Recommended: **Vercel**. Push to GitHub, import to Vercel, done. Zero config needed.

```bash
git init
git add .
git commit -m "Initial redesign"
git remote add origin <your-repo>
git push -u origin main
```

## Notes on the Oryzo reference

The original Oryzo.ai is a bespoke WebGL/Three.js site built by Lusion (an award-winning creative studio). The 3D coaster model, hand tracking, scroll-driven shaders, and custom physics are out of scope at any reasonable budget. This build captures the **editorial aesthetic** (oversized serif display type, warm/dark palette, generous spacing, scroll-revealed sections, interactive hover states) and applies it to construction-firm content. The result feels premium and modern without the bespoke 3D infrastructure.
