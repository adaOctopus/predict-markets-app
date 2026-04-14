"use client";

import { useMemo, useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function StrategySimulatorForm() {
  const [winRate, setWinRate] = useState(0.57);
  const [avgPayout, setAvgPayout] = useState(1.7);
  const [trades, setTrades] = useState(50);
  const [unitSize, setUnitSize] = useState(100);

  const projections = useMemo(() => {
    const expectedPerTrade = winRate * avgPayout * unitSize - (1 - winRate) * unitSize;
    const totalExpected = expectedPerTrade * trades;
    return { expectedPerTrade, totalExpected };
  }, [avgPayout, trades, unitSize, winRate]);

  return (
    <Card className="glass-panel border-white/15">
      <CardHeader>
        <CardTitle className="text-white">Prediction Market Strategy Simulator</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-2">
        <Field label="Estimated Win Rate (0-1)" value={winRate} onChange={setWinRate} />
        <Field label="Average Payout Ratio" value={avgPayout} onChange={setAvgPayout} />
        <Field label="Number of Trades" value={trades} onChange={setTrades} />
        <Field label="Unit Bet Size ($)" value={unitSize} onChange={setUnitSize} />
        <div className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 p-4 md:col-span-2">
          <p className="text-sm text-slate-300">Expected Value Per Trade</p>
          <p className="text-2xl font-semibold text-cyan-200">${projections.expectedPerTrade.toFixed(2)}</p>
          <p className="mt-3 text-sm text-slate-300">Projected Total (before fees/slippage)</p>
          <p className="text-3xl font-semibold text-blue-200">${projections.totalExpected.toFixed(2)}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-slate-200">{label}</Label>
      <Input
        type="number"
        value={value}
        step="0.01"
        onChange={(event) => onChange(Number(event.target.value))}
        className="border-white/20 bg-slate-950/60 text-slate-100"
      />
    </div>
  );
}
