import { Inter, Space_Grotesk } from "next/font/google";

/**
 * Live reference uses Inter (body/UI) and Space Grotesk (headings).
 * Both are OFL. We load them through `next/font/google` instead of
 * copying the hashed woff2 files from nexos.ai.
 */
export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans-family",
  display: "swap",
});

export const fontHeading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading-family",
  display: "swap",
});
