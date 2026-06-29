import type { Metadata } from "next";
import AbmPage from "@/components/abm/AbmPage";

export const metadata: Metadata = {
  title: "Account-Based Marketing (ABM) Agency for B2B Pipeline Growth | HybridMonks",
  description:
    "Premium, dark-themed Account-Based Marketing (ABM) service from HybridMonks with interactive dashboard visuals, target account calculators, and readiness assessments.",
};

export default function Abm() {
  return <AbmPage />;
}
