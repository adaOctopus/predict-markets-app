# PredictMarkets

PredictMarkets is an SEO-driven prediction market analytics and calculator SaaS engine.

Canonical tagline: **Prediction Market Analytics, ROI Tools & Trend Intelligence**  
Metadata title convention: **PredictMarkets | {Page Topic}**

## Product Goals

- Rank on Google using intent-based SEO architecture.
- Convert high-intent calculator traffic into users.
- Prepare monetization with ads, affiliate links, and premium subscriptions.

## Tech Stack

- Next.js 15 App Router + TypeScript
- Tailwind CSS + shadcn/ui
- Framer Motion + Lucide icons
- Supabase (tracking-ready scaffolding)
- Stripe (premium-ready scaffolding)
- Vercel deployment-ready

## App Structure

- `app/` route pages, metadata routes, and layout shell
- `components/` reusable UI primitives and feature modules
- `lib/polymarket/` API-ready market data abstraction
- `lib/analytics/` derived analytics and tracking helpers
- `lib/seo.ts` metadata + JSON-LD helpers

## Route Map

- `/` SEO hub + explainer + conversion CTAs
- `/roi-calculator` prediction market ROI calculator
- `/expected-value` expected value calculator
- `/analytics` market trend analytics dashboard
- `/markets/trending` trending markets dashboard
- `/tools/strategy-simulator` strategy simulation calculator
- `/premium` premium SaaS placeholder
- `/learn/what-are-prediction-markets`
- `/learn/how-roi-works-in-prediction-markets`
- `/learn/expected-value-explained`
- `/learn/prediction-market-strategy-guide`

## Polymarket Data Layer

All UI data access is routed through:

- `lib/polymarket/client.ts`
  - `fetchMarkets()`
  - `fetchMarketById(id: string)`
  - `fetchTrendingMarkets()`

Domain and mock support:

- `lib/polymarket/types.ts`
- `lib/polymarket/mockData.ts`
- `lib/analytics/marketAnalytics.ts` (`calculateMomentum`, `calculateEdgeScore`, `calculateVolatility`)

To integrate a live API later, replace internals of `client.ts` while keeping function signatures stable.

## SEO Architecture

- Per-page metadata via `buildMetadata()` helper
- FAQ JSON-LD support via `buildFaqSchema()`
- `app/robots.ts` and `app/sitemap.ts`
- Mandatory internal linking between ROI, EV, Analytics, and Trending pages

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Required/optional keys:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_ADSENSE_CLIENT_ID`
- `NEXT_PUBLIC_AFFILIATE_URL`
- `STRIPE_SECRET_KEY`

## Development

```bash
npm install
npm run dev
```

## Deploy (Vercel)

- Import repo into Vercel
- Set environment variables from `.env.example`
- Build command: `npm run build`
- Output: Next.js default

## Future Upgrades

- Replace mock market client with Polymarket GraphQL/external data source
- Wire premium route to Stripe checkout + gated dashboards
- Add Supabase-backed user-level analytics and event funnels
