@AGENTS.md

# Sage by GPD — Marketing Landing Page

## Purpose

Marketing landing page for **Sage by GPD**, a growth marketing service offering SEO, content strategy, social media management, and Meta Ads. Backed by Greenpage Digital. The site's goal is to convert visitors into booked strategy calls via an embedded Calendly widget.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Inter (body), Playfair Display (display/serif accents)
- **Booking**: Calendly inline embed (`https://calendly.com/chloe-sagebygpd/30min`)
- **Deploy target**: Vercel

## Project Structure

```
src/
  app/
    layout.tsx      — root layout, fonts, metadata
    page.tsx        — composes all section components
    globals.css     — Tailwind config, brand color tokens
  components/
    Navbar.tsx      — responsive nav with mobile hamburger
    Hero.tsx        — hero section with headline + CTA
    MarqueeBanner.tsx — scrolling "NO CONTRACTS" strip
    PainPoints.tsx  — 3 pain-point cards
    StrategyCircle.tsx — strategy wheel + service cards
    ProcessSteps.tsx — 3-step process (01/02/03)
    Pricing.tsx     — Launch / Grow / Scale tiers + Meta Ads add-on
    WhyWorkWithSage.tsx — 4 value props
    Results.tsx     — testimonials + stats bar
    FinalCTA.tsx    — Calendly inline embed
    Footer.tsx      — footer with Greenpage Digital credit
    SageLogo.tsx    — inline SVG logo
```

## Design Decisions

- **Single-page architecture**: all sections in one scrolling page; nav links use anchor hrefs.
- **Brand colors defined as Tailwind v4 `@theme` tokens**: `forest`, `sage-core`, `warm-gold`, etc. — used everywhere via utility classes.
- **Calendly embed**: loaded via the official `widget.js` script in a `useEffect` inside FinalCTA. Styled with brand colors via URL params (`primary_color`, `text_color`, `background_color`).
- **Marquee banner**: CSS keyframe animation, no JS dependencies.
- **No external image assets**: the design uses SVG icons and emoji placeholders; swap with real assets when available.

## Vercel Deployment

This is a static Next.js site (no server-side data fetching). Vercel auto-detects the framework.

1. Push this repo to GitHub.
2. Import the repo in the Vercel dashboard.
3. Vercel detects Next.js automatically — no build config needed.
4. The site will be available at a `.vercel.app` subdomain immediately.

### Domain / DNS Plan

Once a custom domain is chosen (e.g., `sagebygpd.com`):

1. Add the domain in Vercel project settings → Domains.
2. At the registrar, add the DNS records Vercel provides:
   - **A record**: `76.76.21.21`
   - **CNAME** (for `www`): `cname.vercel-dns.com`
3. Vercel handles SSL automatically.

## Commands

- `npm run dev` — start dev server on port 3000
- `npm run build` — production build
- `npm run start` — serve production build locally
