import type { Metadata } from "next";
import ManufacturingLandingPage from "@/components/mfg/ManufacturingLandingPage";

export const metadata: Metadata = {
  title: "Manufacturing B2B Marketing Agency & Growth Partner | HybridMonks",
  description:
    "Scale your manufacturing company with HybridMonks. We drive qualified B2B pipeline, SEO authority, and AI search visibility for industrial brands.",
};

export default function ManufacturingIndustrial() {
  return <ManufacturingLandingPage />;
}
