import type { Metadata } from "next";
import GTMPage from "@/components/gtm/GTMPage";

export const metadata: Metadata = {
  title: "GTM & Revenue Strategy Agency for B2B Pipeline Growth | SiteOnLab",
  description:
    "SiteOnLab helps B2B SaaS, technology, IT/MSP, and professional-services companies turn GTM & Revenue Strategy into qualified pipeline.",
};

export default function GtmRevenueStrategy() {
  return <GTMPage />;
}
