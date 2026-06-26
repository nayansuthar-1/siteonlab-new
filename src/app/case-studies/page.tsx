import type { Metadata } from "next";
import CaseStudiesPage from "@/components/case-studies/CaseStudiesPage";

export const metadata: Metadata = {
  title: "Case Studies | SiteOnLab — B2B Revenue Growth & AI Visibility",
  description:
    "Case Studies listing page for SiteOnLab, an AI-powered B2B revenue growth and AI visibility agency.",
};

export default function CaseStudies() {
  return <CaseStudiesPage />;
}
