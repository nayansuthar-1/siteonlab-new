import type { Metadata } from "next";
import AbmPage from "@/components/abm/AbmPage";

export const metadata: Metadata = {
  title: "Account-Based Marketing (ABM) Agency for B2B Pipeline Growth | SiteOnLab",
  description:
    "Premium, dark-themed Account-Based Marketing (ABM) service from SiteOnLab with interactive dashboard visuals, target account calculators, and readiness assessments.",
};

export default function Abm() {
  return <AbmPage />;
}
