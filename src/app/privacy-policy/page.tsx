import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | HybridMonks",
  description:
    "How HybridMonks collects, uses, shares, and protects your personal information, and the choices and rights you have over your data.",
};

const sections: LegalSection[] = [
  {
    heading: "Information We Collect",
    paragraphs: [
      "We collect information you provide directly to us, information collected automatically when you use our website, and information from third-party sources such as analytics and advertising partners.",
    ],
    bullets: [
      "Information you provide: name, work email, company, website, phone number, and any details you include in forms, assessments, or strategy-call requests.",
      "Automatically collected: IP address, browser and device type, pages viewed, referring URLs, and interactions with our site, collected via cookies and similar technologies.",
      "From third parties: enrichment, analytics, and advertising data used to better understand and reach business audiences.",
    ],
  },
  {
    heading: "How We Use Your Information",
    bullets: [
      "Provide, operate, and improve our website and services.",
      "Respond to inquiries, schedule strategy calls, and deliver requested resources or assessments.",
      "Send marketing communications about our services (you can opt out at any time).",
      "Measure and optimize our marketing, including search and AI-visibility performance.",
      "Detect, prevent, and address security, fraud, or technical issues.",
      "Comply with legal obligations and enforce our agreements.",
    ],
  },
  {
    heading: "Cookies and Tracking Technologies",
    paragraphs: [
      "We use cookies, pixels, and similar technologies to operate the site, remember your preferences, analyze traffic, and support advertising. You can control cookies through your browser settings; disabling some cookies may affect site functionality.",
    ],
  },
  {
    heading: "How We Share Information",
    paragraphs: ["We do not sell your personal information. We may share it in the following circumstances:"],
    bullets: [
      "With service providers who perform functions on our behalf (e.g., hosting, analytics, email, and CRM platforms) under appropriate confidentiality obligations.",
      "With advertising and analytics partners to measure and improve campaigns.",
      "When required by law, regulation, legal process, or to protect the rights, property, or safety of HybridMonks, our clients, or others.",
      "In connection with a merger, acquisition, financing, or sale of assets.",
    ],
  },
  {
    heading: "Data Retention",
    paragraphs: [
      "We retain personal information for as long as necessary to fulfil the purposes described in this policy, to comply with our legal obligations, resolve disputes, and enforce our agreements. When information is no longer needed, we delete or anonymize it.",
    ],
  },
  {
    heading: "Data Security",
    paragraphs: [
      "We maintain reasonable administrative, technical, and physical safeguards designed to protect your information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "Your Rights and Choices",
    paragraphs: [
      "Depending on your location, you may have rights regarding your personal information. To exercise any of these rights, contact us using the details below.",
    ],
    bullets: [
      "Access, correct, update, or request deletion of your personal information.",
      "Object to or restrict certain processing, including direct marketing.",
      "Withdraw consent where processing is based on consent.",
      "Opt out of marketing emails using the unsubscribe link in any message.",
    ],
  },
  {
    heading: "Third-Party Links",
    paragraphs: [
      "Our website may contain links to third-party sites and services that we do not control. This policy does not apply to those sites, and we encourage you to review their privacy practices.",
    ],
  },
  {
    heading: "Children's Privacy",
    paragraphs: [
      "Our website and services are intended for businesses and professionals and are not directed to children under 16. We do not knowingly collect personal information from children.",
    ],
  },
  {
    heading: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. When we do, we will revise the 'Last updated' date above, and material changes may be communicated through the website or other appropriate means.",
    ],
  },
  {
    heading: "Contact Us",
    paragraphs: [
      "If you have questions about this Privacy Policy or our data practices, contact us at growth@hybridmonks.com or through our contact page.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="June 30, 2026"
      intro="This Privacy Policy explains how HybridMonks ('HybridMonks', 'we', 'us', or 'our') collects, uses, shares, and protects information when you visit our website or engage our services. By using our website, you agree to the practices described in this policy."
      sections={sections}
    />
  );
}
