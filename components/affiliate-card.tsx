import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AffiliateCard() {
  const href = process.env.NEXT_PUBLIC_AFFILIATE_URL ?? "https://example.com/affiliate";

  return (
    <Card className="border-slate-300 bg-white dark:border-black dark:bg-black">
      <CardHeader>
        <CardTitle className="text-base text-slate-950 dark:text-white">Partner Trading Tools</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-slate-800 dark:text-white/80">
        <p>
          Compare advanced execution and analytics platforms curated for prediction market traders.
        </p>
        <Link href={href} className="mt-3 inline-block text-cyan-300 hover:text-cyan-200">
          Explore partner offer
        </Link>
      </CardContent>
    </Card>
  );
}
