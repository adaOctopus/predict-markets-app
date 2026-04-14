import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/roi-calculator", label: "ROI Calculator" },
  { href: "/expected-value", label: "Expected Value Tool" },
  { href: "/analytics", label: "Analytics" },
  { href: "/markets/trending", label: "Trending Markets" },
];

export function IntentLinks() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "border-black bg-black text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:text-black",
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
