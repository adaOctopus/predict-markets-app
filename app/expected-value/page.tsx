import type { Metadata } from "next";

import { IntentLinks } from "@/components/intent-links";
import { JsonLd } from "@/components/json-ld";
import { EvCalculatorForm } from "@/components/ev-calculator-form";
import { PageIntro } from "@/components/page-intro";
import { buildFaqSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  pageTopic: "Prediction Market Expected Value Calculator",
  description: "Compute edge and expected value to evaluate prediction market bet quality.",
  path: "/expected-value",
  keywords: ["prediction market expected value calculator", "betting expected value calculator", "prediction market strategy calculator"],
});

// This page quantifies edge and expected value for trade selection.
// It is designed for high-intent users comparing market price versus private probability.
export default function ExpectedValuePage() {
  return (
    <div className="space-y-6">
      <JsonLd
        data={buildFaqSchema([
          {
            question: "What does positive expected value mean?",
            answer: "Positive expected value means your estimated average outcome is profitable over repeated trades.",
          },
        ])}
      />
      <PageIntro
        title="Prediction Market Expected Value Calculator"
        subtitle="Measure edge, estimate EV, and identify whether a market is worth taking."
      />
      <IntentLinks />
      <EvCalculatorForm />
    </div>
  );
}
