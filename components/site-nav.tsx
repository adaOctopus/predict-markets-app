import Link from "next/link";
import { BarChart3, Calculator, CandlestickChart, GraduationCap, Menu } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "/roi-calculator", label: "ROI Calculator", icon: Calculator },
  { href: "/expected-value", label: "Expected Value", icon: Calculator },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/markets/trending", label: "Trending", icon: CandlestickChart },
  { href: "/tools/strategy-simulator", label: "Strategy Simulator", icon: Calculator },
  { href: "/premium", label: "Premium", icon: BarChart3 },
  { href: "/learn/what-are-prediction-markets", label: "Learn", icon: GraduationCap },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/85 backdrop-blur-xl">
      <nav className="mx-auto w-full max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="font-heading text-base font-semibold tracking-tight text-foreground">
            PredictMarkets
          </Link>
          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-foreground/75 transition hover:text-cyan-500"
              >
                <Icon className="size-3.5" />
                {label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <details className="group relative md:hidden">
              <summary className="list-none rounded-md border border-border p-2 text-foreground marker:content-none">
                <Menu className="size-4" />
              </summary>
              <div className="absolute right-0 mt-2 w-64 rounded-xl border border-border bg-popover/95 p-2 shadow-2xl backdrop-blur-xl">
                <div className="flex flex-col gap-1">
                  {navLinks.map(({ href, label, icon: Icon }) => (
                    <Link
                      key={href}
                      href={href}
                      className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted"
                    >
                      <Icon className="size-4" />
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </details>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
