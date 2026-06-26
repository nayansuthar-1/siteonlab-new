import type { Metadata } from "next";
import DemandGenPage from "@/components/demandgen/DemandGenPage";

export const metadata: Metadata = {
  title: "B2B Demand Generation Agency | SiteOnLab",
  description:
    "High-converting, interactive dark-themed Demand Generation service page for SiteOnLab B2B agency.",
};

export default function DemandGeneration() {
  return <DemandGenPage />;
}
