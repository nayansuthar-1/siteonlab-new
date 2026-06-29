import type { Metadata } from "next";
import LawFirmLandingPage from "@/components/lawfirm/LawFirmLandingPage";

export const metadata: Metadata = {
  title: "Law Firm B2B Marketing Agency & SEO Experts | SiteOnLab",
  description:
    "Accelerate your law firm's pipeline and signed cases. SiteOnLab delivers elite SEO, AI search visibility (GEO), and revenue-focused B2B marketing for firms.",
};

export default function LawFirmIndustry() {
  return <LawFirmLandingPage />;
}
