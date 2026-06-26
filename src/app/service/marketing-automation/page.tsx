import type { Metadata } from "next";
import MarketingAutomationPage from "@/components/marketingauto/MarketingAutomationPage";

export const metadata: Metadata = {
  title: "Marketing Automation Agency for B2B Pipeline Growth | SiteOnLab",
  description:
    "SiteOnLab helps B2B SaaS and technology companies use marketing automation to drive qualified pipeline, improve velocity, and connect marketing performance to revenue.",
};

export default function MarketingAutomation() {
  return <MarketingAutomationPage />;
}
