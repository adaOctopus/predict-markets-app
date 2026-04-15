import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { StickyCta } from "@/components/sticky-cta";
import { ThemeProvider } from "@/components/theme-provider";
import { brandTagline, buildMetadata } from "@/lib/seo";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = buildMetadata({
  pageTopic: "Prediction Market ROI & Analytics Platform",
  description: brandTagline,
  path: "/",
  keywords: [
    "polymarket ROI calculator",
    "prediction market expected value calculator",
    "prediction market trends",
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} h-full antialiased`}>
      <meta name="google-adsense-account" content="ca-pub-6224630563911589"></meta>
      <meta name="google-site-verification" content="2yJR_cmiq_s-ba05EUvHMxvGV-WwW7_Im8IcS4Z6pGw" />
      <body className="min-h-full bg-background text-foreground">
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6224630563911589"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex min-h-screen flex-col">
            <SiteNav />
            <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 pb-28 md:pb-8">{children}</main>
            <SiteFooter />
            <StickyCta />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
