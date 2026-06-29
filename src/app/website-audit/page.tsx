import type { Metadata } from "next";
import WebsiteAuditPage from "@/components/audit/WebsiteAuditPage";

export const metadata: Metadata = {
  title: "Free Website Audit | HybridMonks — Performance, SEO & Growth Report",
  description:
    "Run a free instant audit of your website's performance, accessibility, SEO health, and best practices — and get a prioritized report from HybridMonks.",
};

export default function WebsiteAudit() {
  return <WebsiteAuditPage />;
}
