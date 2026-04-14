import { calculateMomentum } from "@/lib/analytics/marketAnalytics";
import { mockMarkets } from "@/lib/polymarket/mockData";
import type { Market } from "@/lib/polymarket/types";

const GAMMA_API_BASE =
  process.env.POLYMARKET_GAMMA_API_URL ??
  process.env.NEXT_PUBLIC_POLYMARKET_GAMMA_API_URL ??
  "https://gamma-api.polymarket.com";

type GammaMarket = {
  id?: string | number;
  question?: string;
  endDate?: string;
  end_date?: string;
  volume?: number | string;
  volumeNum?: number | string;
  liquidity?: number | string;
  liquidityNum?: number | string;
  probability?: number | string;
  lastTradePrice?: number | string;
  outcomes?: string;
  outcomePrices?: string;
  category?: string;
  tags?: Array<{ label?: string }>;
};

function normalizeProbability(value: unknown): number {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) {
    return 50;
  }
  const pct = numeric <= 1 ? numeric * 100 : numeric;
  return Math.max(0, Math.min(100, Number(pct.toFixed(2))));
}

function parseFirstPrice(outcomePrices: unknown): number | null {
  if (typeof outcomePrices !== "string") {
    return null;
  }
  try {
    const parsed = JSON.parse(outcomePrices);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return null;
    }
    const first = Number(parsed[0]);
    if (!Number.isFinite(first)) {
      return null;
    }
    return normalizeProbability(first);
  } catch {
    return null;
  }
}

function mapCategory(market: GammaMarket): Market["category"] {
  const raw = `${market.category ?? market.tags?.[0]?.label ?? ""}`.toLowerCase();
  if (raw.includes("sport")) return "Sports";
  if (raw.includes("crypto") || raw.includes("bitcoin") || raw.includes("ethereum")) return "Crypto";
  if (raw.includes("elect") || raw.includes("politic")) return "Elections";
  return "Macroeconomics";
}

function mapGammaMarket(market: GammaMarket): Market | null {
  const id = market.id?.toString();
  const question = market.question?.trim();
  if (!id || !question) {
    return null;
  }

  const parsedFromOutcomes = parseFirstPrice(market.outcomePrices);
  const probability = normalizeProbability(
    parsedFromOutcomes ?? market.probability ?? market.lastTradePrice ?? 0.5,
  );

  const volume = Number(market.volumeNum ?? market.volume ?? 0) || 0;
  const liquidity = Number(market.liquidityNum ?? market.liquidity ?? 0) || 0;
  const endDate = market.endDate ?? market.end_date ?? new Date().toISOString();

  return {
    id,
    question,
    probability,
    volume,
    liquidity,
    endDate,
    category: mapCategory(market),
  };
}

async function fetchGammaMarkets(query: string): Promise<Market[]> {
  const response = await fetch(`${GAMMA_API_BASE}/markets?${query}`, {
    headers: { Accept: "application/json" },
    next: { revalidate: 120 },
  });

  if (!response.ok) {
    throw new Error(`Gamma API request failed: ${response.status}`);
  }

  const payload = (await response.json()) as unknown;
  if (!Array.isArray(payload)) {
    throw new Error("Gamma API payload is not an array");
  }

  return payload
    .map((item) => mapGammaMarket(item as GammaMarket))
    .filter((item): item is Market => Boolean(item));
}

export async function fetchMarkets(): Promise<Market[]> {
  try {
    const markets = await fetchGammaMarkets("limit=100&active=true&closed=false");
    return markets.length > 0 ? markets : mockMarkets;
  } catch {
    return mockMarkets;
  }
}

export async function fetchMarketById(id: string): Promise<Market | null> {
  try {
    const response = await fetch(`${GAMMA_API_BASE}/markets/${id}`, {
      headers: { Accept: "application/json" },
      next: { revalidate: 120 },
    });

    if (!response.ok) {
      throw new Error(`Gamma API by id failed: ${response.status}`);
    }

    const payload = (await response.json()) as GammaMarket;
    return mapGammaMarket(payload);
  } catch {
    return mockMarkets.find((market) => market.id === id) ?? null;
  }
}

export async function fetchTrendingMarkets(): Promise<Market[]> {
  try {
    const markets = await fetchGammaMarkets(
      "limit=120&active=true&closed=false&order=volume&ascending=false",
    );
    if (markets.length === 0) {
      return [...mockMarkets].sort((a, b) => calculateMomentum(b) - calculateMomentum(a));
    }
    return [...markets].sort((a, b) => calculateMomentum(b) - calculateMomentum(a));
  } catch {
    return [...mockMarkets].sort((a, b) => calculateMomentum(b) - calculateMomentum(a));
  }
}
