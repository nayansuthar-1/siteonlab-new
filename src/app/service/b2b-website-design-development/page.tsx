import type { Metadata } from "next";
import WebDesignPage from "@/components/webdesign/WebDesignPage";

export const metadata: Metadata = {
  title: "Website Design & Development Agency for B2B Pipeline Growth | SiteOnLab",
  description:
    "SiteOnLab helps B2B SaaS, enterprise technology, IT/MSP, and professional-services companies use Website Design & Development to drive qualified pipeline, improve visibility, and connect marketing performance to revenue.",
};

export default function B2bWebsiteDesignDevelopment() {
  return <WebDesignPage />;
}
