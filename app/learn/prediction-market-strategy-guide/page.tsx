import type { Metadata } from "next";

import { LearnArticle } from "@/components/learn-article";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  pageTopic: "Prediction Market Strategy Guide",
  description: "Build a repeatable strategy using edge selection, sizing, and risk management.",
  path: "/learn/prediction-market-strategy-guide",
  keywords: ["prediction market strategy guide", "prediction market strategy calculator"],
});

// This page targets strategy-oriented traffic near conversion.
// It bridges informational queries into simulator and calculator workflows.
export default function LearnStrategyGuidePage() {
  return (
    <LearnArticle
      title="Prediction Market Strategy Guide"
      intro="A sustainable strategy combines market selection, edge validation, position sizing, and emotional discipline."
      sections={[
        {
          heading: "Build a market selection framework",
          content: "Prioritize liquid markets with clear catalysts and measurable information advantages.",
        },
        {
          heading: "Control downside before optimizing upside",
          content: "Set per-trade risk limits, scenario checks, and invalidation levels before entering positions.",
        },
      ]}
      faq={[
        {
          question: "What is the most common strategy mistake?",
          answer: "Over-sizing positions based on conviction without respecting variance and liquidity conditions.",
        },
      ]}
    />
  );
}
