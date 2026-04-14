import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-30 px-4 md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-center gap-2 rounded-2xl border border-cyan-300/30 bg-[#0B0F1A]/90 p-2 backdrop-blur">
        <Link href="/roi-calculator" className={cn(buttonVariants({ size: "sm" }), "bg-blue-500 hover:bg-blue-400")}>
          ROI
        </Link>
        <Link
          href="/expected-value"
          className={cn(buttonVariants({ size: "sm", variant: "secondary" }), "bg-cyan-500/80 text-black hover:bg-cyan-400")}
        >
          EV
        </Link>
        <Link
          href="/markets/trending"
          className={cn(buttonVariants({ size: "sm", variant: "outline" }), "border-white/25 bg-transparent text-white")}
        >
          Trends
        </Link>
      </div>
    </div>
  );
}
