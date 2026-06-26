import type { Metadata } from "next";
import PaidMediaPage from "@/components/paidmedia/PaidMediaPage";

export const metadata: Metadata = {
  title: "B2B Paid Media Agency for B2B Pipeline Growth | SiteOnLab",
  description:
    "A high-converting B2B Paid Media service page for SiteOnLab, driving demos, sales inquiries, and qualified pipeline.",
};

export default function B2bPaidMedia() {
  return <PaidMediaPage />;
}
