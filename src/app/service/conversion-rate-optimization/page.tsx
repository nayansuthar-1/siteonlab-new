import type { Metadata } from "next";
import CroPage from "@/components/cro/CroPage";

export const metadata: Metadata = {
  title: "Conversion Rate Optimization (CRO) Agency for B2B Pipeline Growth | SiteOnLab",
  description:
    "Premium Conversion Rate Optimization (CRO) service landing page built with SiteOnLab's dark theme, interactive A/B testing graphics, trust metrics, and detailed sections for B2B pipeline growth.",
};

export default function ConversionRateOptimization() {
  return <CroPage />;
}
