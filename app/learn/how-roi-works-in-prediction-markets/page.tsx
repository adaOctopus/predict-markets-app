import type { Metadata } from "next";

import { LearnArticle } from "@/components/learn-article";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  pageTopic: "How ROI Works in Prediction Markets",
  description: "Understand prediction market ROI, fee impact, and probability mismatch opportunities.",
  path: "/learn/how-roi-works-in-prediction-markets",
  keywords: ["how ROI works in prediction markets", "crypto prediction market ROI"],
});

// This page explains ROI mechanics for educational intent users.
// It connects learning directly to the ROI calculator conversion flow.
export default function LearnRoiPage() {
  return (
    <LearnArticle
      title="How ROI Works in Prediction Markets"
      intro="ROI measures return efficiency by comparing net profit to the amount risked in a prediction market position."
      sections={[
        {
          heading: "Core ROI formula",
          content: "ROI% = (profit / bet size) x 100. Profit is driven by probability movement, payout realization, and fee drag.",
        },
        {
          heading: "Probability mismatch opportunity",
          content: "When your model probability is materially better than market probability, ROI potential can improve over repeated trades.",
        },
      ]}
      faq={[
        {
          question: "Why can high win-rate still produce low ROI?",
          answer: "If average payout is small or fees are high, win-rate alone does not guarantee strong ROI.",
        },
      ]}
    />
  );
}
