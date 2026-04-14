import type { Market } from "@/lib/polymarket/types";

export function calculateMomentum(market: Market): number {
  const volumeFactor = Math.min(market.volume / 7_000_000, 1);
  const liquidityFactor = Math.min(market.liquidity / 2_000_000, 1);
  const confidenceDrift = Math.abs(market.probability - 50) / 50;
  return Number((volumeFactor * 45 + liquidityFactor * 35 + confidenceDrift * 20).toFixed(2));
}

export function calculateEdgeScore(market: Market): number {
  const inefficiency = Math.abs(50 - market.probability);
  const liquidityPenalty = Math.min(market.liquidity / 2_000_000, 1) * 10;
  return Number(Math.max(inefficiency - liquidityPenalty, 0).toFixed(2));
}

export function calculateVolatility(market: Market): number {
  const categoryMultiplier =
    market.category === "Crypto" ? 1.15 : market.category === "Elections" ? 1.05 : 0.9;
  const uncertainty = 100 - Math.abs(market.probability - 50) * 2;
  return Number(Math.min(uncertainty * categoryMultiplier, 100).toFixed(2));
}
