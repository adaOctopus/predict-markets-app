import type { Metadata } from "next";

import { AdSlot } from "@/components/ad-slot";
import { IntentLinks } from "@/components/intent-links";
import { JsonLd } from "@/components/json-ld";
import { PageIntro } from "@/components/page-intro";
import { RoiCalculatorForm } from "@/components/roi-calculator-form";
import { buildFaqSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  pageTopic: "Prediction Market ROI Calculator",
  description: "Calculate profit, loss, and ROI for prediction market positions in real time.",
  path: "/roi-calculator",
  keywords: ["prediction market ROI calculator", "crypto prediction market ROI", "market probability calculator"],
});

const faq = [
  { question: "How does this ROI calculator work?", answer: "It estimates net profit from probability change minus fees, then computes ROI percent." },
];

// This page is the primary conversion tool for ROI-intent users.
// It provides an instant, mobile-first calculator for prediction market returns.
export default function RoiCalculatorPage() {
  return (
    <div className="space-y-6">
      <JsonLd data={buildFaqSchema(faq)} />
      <PageIntro
        title="Prediction Market ROI Calculator"
        subtitle="Estimate profit/loss and ROI instantly using bet size, probability shift, and platform fees."
      />
      <IntentLinks />
      <RoiCalculatorForm />
      <AdSlot slotName="roi-inline" />
    </div>
  );
}
