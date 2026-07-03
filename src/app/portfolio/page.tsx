import type { Metadata } from "next";
import PortfolioPage from "@/components/portfolio/PortfolioPage";

export const metadata: Metadata = {
  title: "Portfolio — Websites We've Designed & Built | HybridMonks",
  description:
    "A selection of websites HybridMonks has designed and built — hospitality, e-commerce, non-profits, and personal brands engineered to convert.",
};

export default function Portfolio() {
  return <PortfolioPage />;
}
