import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { LearnArticle } from "@/components/learn-article";
import { buildFaqSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  pageTopic: "What Are Prediction Markets?",
  description: "Learn how prediction markets work, how probabilities are priced, and why they matter.",
  path: "/learn/what-are-prediction-markets",
  keywords: ["what are prediction markets", "how does polymarket work"],
});

// This educational page captures beginner informational search intent.
// It introduces prediction markets and funnels users into calculators and analytics pages.
export default function LearnWhatArePredictionMarketsPage() {
  const faq = [
    { question: "Are prediction markets legal everywhere?", answer: "Regulation depends on jurisdiction, so always verify local rules before participating." },
  ];

  return (
    <div className="space-y-6">
      <JsonLd data={buildFaqSchema(faq)} />
      <LearnArticle
        title="What Are Prediction Markets?"
        intro="Prediction markets are exchanges where traders buy and sell contracts tied to future outcomes, converting collective belief into market prices."
        sections={[
          {
            heading: "How prices represent probability",
            content: "A contract trading at 0.62 implies roughly a 62% market-implied probability, adjusted by liquidity and sentiment.",
          },
          {
            heading: "Why prediction markets are useful",
            content: "They aggregate distributed information quickly, often producing sharper forecasts than isolated opinions.",
          },
        ]}
        faq={faq}
      />
    </div>
  );
}
