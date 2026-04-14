import type { Metadata } from "next";

import { IntentLinks } from "@/components/intent-links";
import { PageIntro } from "@/components/page-intro";
import { StrategySimulatorForm } from "@/components/strategy-simulator-form";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  pageTopic: "Prediction Market Strategy Simulator",
  description: "Simulate expected outcomes using win rate, payout assumptions, and trade count.",
  path: "/tools/strategy-simulator",
  keywords: ["prediction market strategy calculator", "market probability calculator"],
});

// This page lets users model long-run strategy performance before risking capital.
// It extends calculator intent with a broader simulation framework.
export default function StrategySimulatorPage() {
  return (
    <div className="space-y-6">
      <PageIntro
        title="Prediction Market Strategy Simulator"
        subtitle="Run scenario-based simulations to estimate long-run outcomes before live execution."
      />
      <IntentLinks />
      <StrategySimulatorForm />
    </div>
  );
}
