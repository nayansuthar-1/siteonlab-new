import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SiteOnLab | AI-Powered B2B Revenue Growth & AI Visibility Agency",
  description:
    "AI-Powered B2B Revenue Growth & AI Visibility Agency. Get found in Google and recommended by ChatGPT, Perplexity, and AI Overviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
