import type { Metadata } from "next";

import { LearnArticle } from "@/components/learn-article";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  pageTopic: "Expected Value Explained for Prediction Markets",
  description: "Learn expected value, edge, and how to evaluate prediction market trade quality.",
  path: "/learn/expected-value-explained",
  keywords: ["expected value explained", "prediction market expected value calculator"],
});

// This page builds topical authority around expected value and edge.
// It supports both educational SEO and tool-driven conversion.
export default function LearnExpectedValuePage() {
  return (
    <LearnArticle
      title="Expected Value Explained"
      intro="Expected value estimates your average outcome per trade when probability and payout assumptions are repeated many times."
      sections={[
        {
          heading: "Edge and EV are related but distinct",
          content: "Edge compares your probability to market probability; EV converts that edge into expected monetary outcome.",
        },
        {
          heading: "Why EV matters for disciplined trading",
          content: "Positive EV does not guarantee short-term wins, but it improves long-run expectancy when paired with risk controls.",
        },
      ]}
      faq={[
        {
          question: "Can a trade have positive edge but poor EV?",
          answer: "Yes, if payout terms, fees, or downside asymmetry overwhelm the probability advantage.",
        },
      ]}
    />
  );
}
