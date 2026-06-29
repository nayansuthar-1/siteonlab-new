import type { Metadata } from "next";
import SaasLandingPage from "@/components/saas/SaasLandingPage";

export const metadata: Metadata = {
  title: "B2B SaaS Growth & AI Visibility | HybridMonks",
  description:
    "High-conversion premium B2B SaaS landing page for HybridMonks, an AI-powered revenue growth and AI search visibility agency.",
};

export default function B2bSaasIndustry() {
  return <SaasLandingPage />;
}
