import type { Metadata } from "next";

import { IntentLinks } from "@/components/intent-links";
import { PageIntro } from "@/components/page-intro";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  pageTopic: "Premium Analytics",
  description: "Preview future premium analytics features and subscription roadmap.",
  path: "/premium",
  keywords: ["prediction market premium analytics", "SaaS prediction market tools"],
});

// This page is the monetization bridge for future Stripe-powered subscriptions.
// It outlines gated features to support future SaaS conversion paths.
export default function PremiumPage() {
  return (
    <div className="space-y-6">
      <PageIntro
        title="PredictMarkets Premium (Coming Soon)"
        subtitle="Unlock pro-grade analytics, alerts, and model-backed edge scoring."
      />
      <IntentLinks />
      <div className="grid gap-4 md:grid-cols-3">
        {["Live signal alerts", "Advanced market clustering", "Private performance dashboard"].map((feature) => (
          <Card key={feature} className="glass-panel border-white/15">
            <CardHeader><CardTitle className="text-white">{feature}</CardTitle></CardHeader>
            <CardContent className="text-slate-300">Gated premium feature placeholder for Stripe subscription rollout.</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
