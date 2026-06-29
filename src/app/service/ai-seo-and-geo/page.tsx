import type { Metadata } from "next";
import AiSeoGeoPage from "@/components/aiseo/AiSeoGeoPage";

export const metadata: Metadata = {
  title: "AI SEO & GEO Services Agency for B2B Pipeline Growth | HybridMonks",
  description:
    "HybridMonks helps B2B companies win Google rankings and AI search citations (ChatGPT, Perplexity, AI Overviews) through AI SEO & Generative Engine Optimization (GEO).",
};

export default function AiSeoAndGeo() {
  return <AiSeoGeoPage />;
}
