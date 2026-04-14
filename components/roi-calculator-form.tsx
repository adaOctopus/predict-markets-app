"use client";

import { useMemo, useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function RoiCalculatorForm() {
  const [betSize, setBetSize] = useState(1000);
  const [entryProbability, setEntryProbability] = useState(45);
  const [exitProbability, setExitProbability] = useState(58);
  const [platformFees, setPlatformFees] = useState(12);

  const results = useMemo(() => {
    const profit = betSize * ((exitProbability - entryProbability) / 100) - platformFees;
    const roi = betSize === 0 ? 0 : (profit / betSize) * 100;
    return { profit, roi };
  }, [betSize, entryProbability, exitProbability, platformFees]);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="glass-panel border-white/15">
        <CardHeader>
          <CardTitle className="text-white">ROI Calculator Inputs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Field label="Bet Size ($)" value={betSize} onChange={setBetSize} />
          <Field label="Entry Probability (%)" value={entryProbability} onChange={setEntryProbability} />
          <Field label="Exit Probability (%)" value={exitProbability} onChange={setExitProbability} />
          <Field label="Platform Fees ($ or % equivalent)" value={platformFees} onChange={setPlatformFees} />
        </CardContent>
      </Card>
      <Card className="glass-panel border-cyan-300/30">
        <CardHeader>
          <CardTitle className="text-white">Outputs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5 text-slate-200">
          <div>
            <p className="text-sm text-slate-400">Profit / Loss</p>
            <p className={`text-3xl font-semibold ${results.profit >= 0 ? "text-cyan-300" : "text-rose-300"}`}>
              ${results.profit.toFixed(2)}
            </p>
          </div>
          <div>
            <p className="text-sm text-slate-400">ROI %</p>
            <p className={`text-3xl font-semibold ${results.roi >= 0 ? "text-blue-300" : "text-rose-300"}`}>
              {results.roi.toFixed(2)}%
            </p>
          </div>
          <div>
            <p className="mb-2 text-sm text-slate-400">ROI Visual</p>
            <div className="h-3 rounded-full bg-slate-800">
              <div
                className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                style={{ width: `${Math.min(Math.abs(results.roi) * 2, 100)}%` }}
              />
            </div>
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
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="border-white/20 bg-slate-950/60 text-slate-100"
      />
    </div>
  );
}
