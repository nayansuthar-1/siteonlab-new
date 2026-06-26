import type { Metadata } from "next";
import ContentMarketingPage from "@/components/content/ContentMarketingPage";

export const metadata: Metadata = {
  title: "Content Marketing Agency for B2B Pipeline Growth | SiteOnLab",
  description:
    "SiteOnLab helps B2B SaaS, tech, and services companies use Content Marketing to drive qualified pipeline, improve visibility, and connect marketing performance to revenue.",
};

export default function ContentMarketing() {
  return <ContentMarketingPage />;
}
