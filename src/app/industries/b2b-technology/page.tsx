import type { Metadata } from "next";
import B2BTechLandingPage from "@/components/b2btech/B2BTechLandingPage";

export const metadata: Metadata = {
  title: "B2B Technology Marketing Agency | HybridMonks",
  description:
    "Drive qualified pipeline and revenue for your B2B Technology company. Expert B2B SEO, AI search visibility optimization (GEO), high-converting websites, and full-funnel digital marketing.",
};

export default function B2BTechnologyIndustry() {
  return <B2BTechLandingPage />;
}
