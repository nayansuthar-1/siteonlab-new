import type { Metadata } from "next";
import CyberLandingPage from "@/components/cyber/CyberLandingPage";

export const metadata: Metadata = {
  title: "B2B Cybersecurity Marketing & SEO Agency | SiteOnLab",
  description:
    "We build revenue-first growth engines for cybersecurity firms. Scale pipeline, dominate high-intent organic search, and establish AI visibility. Get a Growth Blueprint.",
};

export default function CybersecurityIndustry() {
  return <CyberLandingPage />;
}
