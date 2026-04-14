import Link from "next/link";

const requiredLinks = [
  { href: "/roi-calculator", label: "ROI Calculator" },
  { href: "/expected-value", label: "Expected Value Tool" },
  { href: "/analytics", label: "Analytics" },
  { href: "/markets/trending", label: "Trending Markets" },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-white/10 px-4 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 text-sm text-slate-300">
        <div className="flex flex-wrap items-center gap-4">
          {requiredLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-300 transition hover:text-cyan-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="max-w-3xl text-xs text-slate-400">
          Risk disclaimer: Prediction market analytics and calculators are educational and informational tools.
          They do not constitute financial advice. Markets can be volatile and outcomes are uncertain.
        </p>
      </div>
    </footer>
  );
}
