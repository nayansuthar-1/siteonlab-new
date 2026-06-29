import type { Metadata } from "next";
import RevenueMeasurementPage from "@/components/rma/RevenueMeasurementPage";

export const metadata: Metadata = {
  title: "Revenue Measurement & Analytics Agency for B2B Pipeline Growth | HybridMonks",
  description:
    "HybridMonks helps B2B SaaS, tech, and service companies use Revenue Measurement and Analytics to drive qualified pipeline, improve tracking accuracy, and connect marketing performance directly to CRM revenue.",
};

export default function RevenueMeasurementAndAnalytics() {
  return <RevenueMeasurementPage />;
}
