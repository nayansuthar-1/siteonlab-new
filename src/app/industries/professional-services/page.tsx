import type { Metadata } from "next";
import ProfessionalServicesLandingPage from "@/components/profsvc/ProfessionalServicesLandingPage";

export const metadata: Metadata = {
  title: "B2B Professional Services Marketing Agency | SiteOnLab",
  description:
    "Accelerate qualified pipeline & revenue growth for your professional services firm. Specialized B2B marketing, SEO, and AI Search Visibility.",
};

export default function ProfessionalServicesIndustry() {
  return <ProfessionalServicesLandingPage />;
}
