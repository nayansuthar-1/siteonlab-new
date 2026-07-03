import type { Metadata } from "next";
import BlogPage from "@/components/blog/BlogPage";
import { getBlogData } from "@/lib/wp";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "HybridMonks Insights — B2B Revenue Growth & AI Visibility Blog",
  description:
    "AI-Powered B2B Revenue Growth & AI Visibility Insights for B2B Enterprise teams.",
};

export default async function Blog() {
  const { featured, articles } = await getBlogData();
  return <BlogPage featuredArticle={featured} articles={articles} />;
}
