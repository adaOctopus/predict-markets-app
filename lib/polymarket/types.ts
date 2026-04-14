export type MarketCategory =
  | "Elections"
  | "Crypto"
  | "Macroeconomics"
  | "Sports";

export type Market = {
  id: string;
  question: string;
  probability: number;
  volume: number;
  liquidity: number;
  endDate: string;
  category: MarketCategory;
};
