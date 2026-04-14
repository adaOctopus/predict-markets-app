import Link from "next/link";
import type { Metadata } from "next";

import { AdSlot } from "@/components/ad-slot";
import { AffiliateCard } from "@/components/affiliate-card";
import { FaqBlock } from "@/components/faq-block";
import { IntentLinks } from "@/components/intent-links";
import { JsonLd } from "@/components/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { buildFaqSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  pageTopic: "Prediction Market ROI & Analytics Platform",
  description:
    "PredictMarkets helps users calculate ROI, evaluate expected value, and analyze prediction market trends.",
  path: "/",
  keywords: [
    "polymarket ROI calculator",
    "prediction market expected value calculator",
    "polymarket analytics",
    "prediction market trends",
  ],
});

const faqItems = [
  {
    question: "What is a prediction market?",
    answer:
      "A prediction market is an exchange where participants trade on event outcomes and probabilities.",
  },
  {
    question: "How do you calculate ROI in prediction markets?",
    answer:
      "ROI compares your net profit versus your original capital committed to the trade, including platform fees.",
  },
  {
    question: "Is Polymarket profitable?",
    answer:
      "Profitability depends on probability edge, execution quality, fees, and risk management discipline.",
  },
  {
    question: "What is expected value in trading?",
    answer:
      "Expected value estimates average profit or loss over many trades based on probability and payout.",
  },
];

// This page is the SEO hub and conversion entry point for PredictMarkets.
// It aligns calculator, informational, and data intent under one high-trust landing flow.
export default function Home() {
  return (
    <div className="space-y-10">
      <JsonLd data={buildFaqSchema(faqItems)} />
      <section className="glass-panel p-8 md:p-10">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-cyan-300">PredictMarkets</p>
        <h1 className="text-4xl font-bold leading-tight tracking-[-0.02em] text-foreground md:text-6xl">
          Prediction Market Analytics
        </h1>
        <p className="mt-4 max-w-3xl text-muted-foreground md:text-lg">
          Calculate ROI, Expected Value & Analyze Market Opportunities in Real Time.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/roi-calculator" className={cn(buttonVariants(), "bg-blue-500 hover:bg-blue-400")}>
            ROI Calculator
          </Link>
          <Link
            href="/expected-value"
            className={cn(buttonVariants({ variant: "secondary" }), "bg-cyan-500 text-slate-950 hover:bg-cyan-400")}
          >
            Expected Value Tool
          </Link>
          <Link
            href="/analytics"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border-black bg-black text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:text-black",
            )}
          >
            Market Analytics
          </Link>
        </div>
      </section>

      <IntentLinks />
      <AdSlot slotName="home-hero" />

      <section className="grid gap-4 md:grid-cols-3">
        <Card className="glass-panel border-border">
          <CardHeader><CardTitle className="text-foreground">What are prediction markets?</CardTitle></CardHeader>
          <CardContent className="text-muted-foreground">Markets where prices represent crowd-estimated probability of future events.</CardContent>
        </Card>
        <Card className="glass-panel border-border">
          <CardHeader><CardTitle className="text-foreground">Why ROI matters</CardTitle></CardHeader>
          <CardContent className="text-muted-foreground">ROI reveals capital efficiency and helps compare strategies across markets.</CardContent>
        </Card>
        <Card className="glass-panel border-border">
          <CardHeader><CardTitle className="text-foreground">Expected value concept</CardTitle></CardHeader>
          <CardContent className="text-muted-foreground">EV measures edge by combining your estimated probability and market payout.</CardContent>
        </Card>
      </section>

      <AffiliateCard />
      <FaqBlock items={faqItems} />
    </div>
  );
}
