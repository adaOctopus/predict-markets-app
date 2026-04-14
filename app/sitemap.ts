import type { MetadataRoute } from "next";

const routes = [
  "",
  "/roi-calculator",
  "/expected-value",
  "/analytics",
  "/markets/trending",
  "/tools/strategy-simulator",
  "/premium",
  "/learn/what-are-prediction-markets",
  "/learn/how-roi-works-in-prediction-markets",
  "/learn/expected-value-explained",
  "/learn/prediction-market-strategy-guide",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://predictmarkets.ai";

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
