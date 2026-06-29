import type { Metadata } from "next";
import AiSoftwarePage from "@/components/aisoftware/AiSoftwarePage";

export const metadata: Metadata = {
  title: "AI Software Development Agency for B2B Pipeline Growth | HybridMonks",
  description:
    "Premium B2B service landing page for HybridMonks's AI Software Development services, built with trust metrics, interactive roadmap, case studies, and an AI readiness assessment.",
};

export default function AiSoftwareDevelopment() {
  return <AiSoftwarePage />;
}
