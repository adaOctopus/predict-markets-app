import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/85 backdrop-blur-xl">
      <nav className="mx-auto w-full max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="font-heading text-base font-semibold tracking-tight text-foreground">
            PredictMarkets
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
