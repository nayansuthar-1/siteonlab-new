import type { Metadata } from "next";
import TechSeoPage from "@/components/techseo/TechSeoPage";

export const metadata: Metadata = {
  title: "Technical SEO Agency for B2B Pipeline Growth | HybridMonks",
  description:
    "High-performance Technical SEO landing page and custom AI growth blueprint generator for B2B companies.",
};

export default function TechnicalSeo() {
  return <TechSeoPage />;
}
