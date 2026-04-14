import type { Metadata } from "next";

import { IntentLinks } from "@/components/intent-links";
import { PageIntro } from "@/components/page-intro";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { calculateEdgeScore, calculateMomentum, calculateVolatility } from "@/lib/analytics/marketAnalytics";
import { fetchTrendingMarkets } from "@/lib/polymarket/client";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  pageTopic: "Polymarket Analytics Dashboard",
  description: "Track prediction market trends, momentum, and inefficiency scores.",
  path: "/analytics",
  keywords: ["polymarket analytics", "prediction market trends", "prediction market data"],
});

// This page surfaces high-level market trend analytics for data-intent traffic.
// It consumes only the polymarket client abstraction for API-ready extensibility.
export default async function AnalyticsPage() {
  const markets = await fetchTrendingMarkets();

  return (
    <div className="space-y-6">
      <PageIntro
        title="Prediction Market Analytics Dashboard"
        subtitle="Explore momentum, volatility, and probability inefficiency scores across active markets."
      />
      <IntentLinks />
      <div className="grid gap-4 md:grid-cols-2">
        {markets.slice(0, 6).map((market) => (
          <Card key={market.id} className="glass-panel border-white/15">
            <CardHeader>
              <CardTitle className="text-lg text-white">{market.question}</CardTitle>
              <Badge className="w-fit bg-cyan-500/25 text-cyan-100">{market.category}</Badge>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-slate-300">
              <p>Probability: {market.probability}%</p>
              <p>Momentum Score: {calculateMomentum(market)}</p>
              <p>Edge Score: {calculateEdgeScore(market)}</p>
              <p>Volatility Score: {calculateVolatility(market)}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
