import type { Metadata } from "next";

import { IntentLinks } from "@/components/intent-links";
import { PageIntro } from "@/components/page-intro";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchTrendingMarkets } from "@/lib/polymarket/client";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  pageTopic: "Trending Prediction Markets",
  description: "Monitor trending prediction markets by volume, activity, and momentum.",
  path: "/markets/trending",
  keywords: ["prediction market trends", "polymarket data", "hot prediction markets"],
});

// This page is a dedicated trends dashboard targeting market data search intent.
// It highlights the hottest markets and supports deeper funnel navigation into tools.
export default async function TrendingMarketsPage() {
  const markets = await fetchTrendingMarkets();

  return (
    <div className="space-y-6">
      <PageIntro
        title="Trending Prediction Markets"
        subtitle="Track volume leaders, momentum spikes, and high-activity markets in one view."
      />
      <IntentLinks />
      <div className="space-y-4">
        {markets.map((market, index) => (
          <Card key={market.id} className="glass-panel border-white/15">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg text-white">{market.question}</CardTitle>
              <Badge className="bg-blue-500/25 text-blue-100">Rank #{index + 1}</Badge>
            </CardHeader>
            <CardContent className="grid gap-2 text-sm text-slate-300 sm:grid-cols-4">
              <p>Prob: {market.probability}%</p>
              <p>Vol: ${market.volume.toLocaleString()}</p>
              <p>Liq: ${market.liquidity.toLocaleString()}</p>
              <p>Ends: {market.endDate}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
