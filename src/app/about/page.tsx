import type { Metadata } from "next";
import AboutPage from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "HybridMonks — B2B Revenue Growth & AI Visibility Agency",
  description:
    "About Us page for HybridMonks, an AI-Powered B2B Revenue Growth & AI Visibility Agency.",
};

export default function About() {
  return <AboutPage />;
}
