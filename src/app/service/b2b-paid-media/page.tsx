import type { Metadata } from "next";
import PaidMediaPage from "@/components/paidmedia/PaidMediaPage";

export const metadata: Metadata = {
  title: "Paid Media Agency | SiteOnLab",
  description:
    "High-intent search ads, account-based paid social, and pipeline-first measurement to turn paid spend into compounding B2B revenue.",
};

export default function B2bPaidMedia() {
  return <PaidMediaPage />;
}
