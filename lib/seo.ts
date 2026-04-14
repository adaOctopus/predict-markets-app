import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://predictmarkets.ai";

export const brandName = "PredictMarkets";
export const brandTagline =
  "Prediction Market Analytics, ROI Tools & Trend Intelligence";

type BuildMetadataInput = {
  pageTopic: string;
  description: string;
  path: string;
  keywords: string[];
};

export function buildMetadata({
  pageTopic,
  description,
  path,
  keywords,
}: BuildMetadataInput): Metadata {
  const title = `${brandName} | ${pageTopic}`;
  const canonical = `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(siteUrl),
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: brandName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function buildFaqSchema(
  questions: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
