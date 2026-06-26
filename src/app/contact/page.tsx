import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact SiteOnLab | AI-Powered B2B Revenue Growth & AI Visibility",
  description:
    "Premium B2B Contact Us page for SiteOnLab, an AI-powered revenue growth and AI visibility agency.",
};

export default function Contact() {
  return <ContactPage />;
}
