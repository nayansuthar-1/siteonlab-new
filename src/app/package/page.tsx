import type { Metadata } from "next";
import LandingPage from "@/components/package/LandingPage";

export const metadata: Metadata = {
  title: "The B2B Revenue Growth Engine™ | SiteOnLab",
  description:
    "One complete system that gets you found on Google, recommended by AI, and converts demand into measurable pipeline. See movement in 90 days — or month four is on us.",
};

export default function PackageLandingPage() {
  return <LandingPage />;
}
