import type { Metadata } from "next";
import LocalSeoPage from "@/components/localseo/LocalSeoPage";

export const metadata: Metadata = {
  title: "Local SEO Agency for B2B Pipeline Growth | SiteOnLab",
  description:
    "SiteOnLab helps B2B SaaS, technology, IT/MSP, and multi-location companies use Local SEO to drive qualified pipeline, improve maps visibility, and connect local search activity to revenue.",
};

export default function LocalSeo() {
  return <LocalSeoPage />;
}
