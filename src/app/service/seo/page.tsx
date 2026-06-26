import type { Metadata } from "next";
import SEOStudioPage from "@/components/seo/SEOStudioPage";

export const metadata: Metadata = {
  title: "SiteOnLab B2B Service Page Builder",
  description:
    "An interactive, dark-themed service page generator for SiteOnLab to create, preview, and refine high-converting B2B agency copy with AI.",
};

export default function SeoServicePage() {
  return <SEOStudioPage />;
}
