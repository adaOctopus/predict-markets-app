import { calculateMomentum } from "@/lib/analytics/marketAnalytics";
import { mockMarkets } from "@/lib/polymarket/mockData";
import type { Market } from "@/lib/polymarket/types";

const latency = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchMarkets(): Promise<Market[]> {
  await latency(80);
  return mockMarkets;
}

export async function fetchMarketById(id: string): Promise<Market | null> {
  await latency(40);
  return mockMarkets.find((market) => market.id === id) ?? null;
}

export async function fetchTrendingMarkets(): Promise<Market[]> {
  await latency(100);
  return [...mockMarkets].sort(
    (a, b) => calculateMomentum(b) - calculateMomentum(a),
  );
}
