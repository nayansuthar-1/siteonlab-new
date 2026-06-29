import type { Metadata } from "next";
import BlogPage from "@/components/blog/BlogPage";

export const metadata: Metadata = {
  title: "HybridMonks Insights — B2B Revenue Growth & AI Visibility Blog",
  description:
    "AI-Powered B2B Revenue Growth & AI Visibility Insights for B2B Enterprise teams.",
};

export default function Blog() {
  return <BlogPage />;
}
