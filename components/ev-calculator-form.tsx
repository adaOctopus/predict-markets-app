"use client";

import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function EvCalculatorForm() {
  const [userProbability, setUserProbability] = useState(0.62);
  const [marketProbability, setMarketProbability] = useState(0.54);
  const [payoutRatio, setPayoutRatio] = useState(1.8);
  const bet = 1;

  const result = useMemo(() => {
    const edge = (userProbability - marketProbability) * 100;
    const ev = userProbability * payoutRatio - (1 - userProbability) * bet;
    const badge = ev > 0.2 ? "Strong Edge" : ev > 0 ? "Positive Edge" : "No Edge";
    return { edge, ev, badge };
  }, [marketProbability, payoutRatio, userProbability]);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="glass-panel border-white/15">
        <CardHeader>
          <CardTitle className="text-white">Expected Value Inputs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Field label="Your Estimated Probability (0-1)" value={userProbability} onChange={setUserProbability} />
          <Field label="Market Implied Probability (0-1)" value={marketProbability} onChange={setMarketProbability} />
          <Field label="Payout Ratio" value={payoutRatio} onChange={setPayoutRatio} />
        </CardContent>
      </Card>
      <Card className="glass-panel border-cyan-300/30">
        <CardHeader>
          <CardTitle className="text-white">Outputs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-slate-200">
          <Metric label="Edge %" value={`${result.edge.toFixed(2)}%`} />
          <Metric label="Expected Value" value={result.ev.toFixed(4)} />
          <div className="space-y-1">
            <p className="text-sm text-slate-400">Recommendation</p>
            <Badge className="bg-cyan-500/25 text-cyan-100">{result.badge}</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

type FieldProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
};

function Field({ label, value, onChange }: FieldProps) {
  return (
    <div className="space-y-2">
      <Label className="text-slate-200">{label}</Label>
      <Input
        type="number"
        step="0.01"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="border-white/20 bg-slate-950/60 text-slate-100"
      />
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-slate-400">{label}</p>
      <p className="text-2xl font-semibold text-cyan-200">{value}</p>
    </div>
  );
}
