import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Manrope, Outfit, Plus_Jakarta_Sans, Playfair_Display, Lora, Fira_Code } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/shared/SiteNav";
import SiteFooter from "@/components/shared/SiteFooter";
import ChromeGate from "@/components/shared/ChromeGate";

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

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-fira-code",
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${manrope.variable} ${outfit.variable} ${plusJakarta.variable} ${playfairDisplay.variable} ${lora.variable} ${firaCode.variable}`}
    >
      <body>
        <SiteNav />
        {children}
        <ChromeGate>
          <SiteFooter />
        </ChromeGate>
      </body>
    </html>
  );
}
