import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

// Self-hosted via next/font — the same Google fonts each AI Studio zip loaded,
// with the same static weights so rendering (incl. font-black fallbacks) matches.
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

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
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${manrope.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
