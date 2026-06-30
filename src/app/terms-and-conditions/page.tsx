import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | HybridMonks",
  description:
    "The terms and conditions that govern your use of the HybridMonks website and services.",
};

const sections: LegalSection[] = [
  {
    heading: "Acceptance of Terms",
    paragraphs: [
      "These Terms & Conditions ('Terms') govern your access to and use of the HybridMonks website and services. By accessing or using the website, you agree to be bound by these Terms. If you do not agree, please do not use the website.",
    ],
  },
  {
    heading: "Services",
    paragraphs: [
      "HybridMonks provides B2B revenue growth, search, and AI-visibility marketing services. The website provides general information about these services. Specific engagements are governed by a separate written agreement between you and HybridMonks, which prevails over these Terms in the event of any conflict.",
    ],
  },
  {
    heading: "Use of the Website",
    paragraphs: ["You agree to use the website lawfully and not to:"],
    bullets: [
      "Use the website in any way that violates applicable laws or regulations.",
      "Attempt to gain unauthorized access to any part of the website, systems, or networks.",
      "Interfere with or disrupt the integrity or performance of the website.",
      "Introduce malware, scrape, or use automated means to access the website without our permission.",
      "Misrepresent your identity or affiliation with any person or organization.",
    ],
  },
  {
    heading: "Intellectual Property",
    paragraphs: [
      "The website and its content — including text, graphics, logos, designs, and software — are owned by HybridMonks or its licensors and are protected by intellectual property laws. You may not copy, reproduce, distribute, or create derivative works without our prior written consent. 'HybridMonks' and associated marks are the property of HybridMonks.",
    ],
  },
  {
    heading: "Client Engagements and Payment",
    paragraphs: [
      "Where you engage HybridMonks for services, the scope, fees, payment terms, and deliverables are set out in a separate proposal or agreement. Advertising spend, where applicable, is billed directly by the relevant platforms and is separate from our service fees unless stated otherwise.",
    ],
  },
  {
    heading: "Third-Party Services and Links",
    paragraphs: [
      "The website may reference or link to third-party tools, platforms, and websites. We do not control and are not responsible for the content, policies, or practices of any third party. Your use of third-party services is governed by their terms.",
    ],
  },
  {
    heading: "Disclaimers",
    paragraphs: [
      "The website and its content are provided 'as is' and 'as available' without warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the website will be uninterrupted, error-free, or secure, or that any particular marketing outcome will be achieved.",
    ],
  },
  {
    heading: "Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, HybridMonks and its affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or goodwill, arising from your use of the website. Our total liability for any claim relating to the website is limited to the amount you paid, if any, to access it.",
    ],
  },
  {
    heading: "Indemnification",
    paragraphs: [
      "You agree to indemnify and hold harmless HybridMonks and its affiliates, officers, employees, and agents from any claims, liabilities, damages, and expenses arising from your use of the website or your violation of these Terms.",
    ],
  },
  {
    heading: "Governing Law",
    paragraphs: [
      "These Terms are governed by and construed in accordance with applicable laws, without regard to conflict-of-law principles. Any disputes will be subject to the exclusive jurisdiction of the competent courts in our principal place of business.",
    ],
  },
  {
    heading: "Changes to These Terms",
    paragraphs: [
      "We may revise these Terms from time to time. Changes are effective when posted, and we will update the 'Last updated' date above. Your continued use of the website after changes constitutes acceptance of the revised Terms.",
    ],
  },
  {
    heading: "Contact Us",
    paragraphs: [
      "If you have questions about these Terms, contact us at growth@hybridmonks.com or through our contact page.",
    ],
  },
];

export default function TermsAndConditions() {
  return (
    <LegalPage
      title="Terms & Conditions"
      lastUpdated="June 30, 2026"
      intro="Please read these Terms & Conditions carefully before using the HybridMonks website. They set out the rules for using our website and the basis on which we make it available to you."
      sections={sections}
    />
  );
}
