import { calculateMomentum } from "@/lib/analytics/marketAnalytics";
import { fetchMarkets } from "@/lib/polymarket/client";

export async function getHotMarkets(limit = 3) {
  const markets = await fetchMarkets();
  return markets
    .map((market) => ({ market, momentum: calculateMomentum(market) }))
    .sort((a, b) => b.momentum - a.momentum)
    .slice(0, limit);
}
