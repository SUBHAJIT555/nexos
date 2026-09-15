import type { Metadata, Viewport } from "next";
import { fontHeading, fontSans } from "@/lib/fonts";
import { getMetadataBase, hasProductionUrl, siteConfig } from "@/config/site";
import { CookieConsentProvider } from "@/components/cookies/CookieConsentProvider";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { SkipLink } from "@/components/layout/SkipLink";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  robots: {
    index: hasProductionUrl(),
    follow: hasProductionUrl(),
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  ...(siteConfig.url
    ? {
        alternates: {
          canonical: siteConfig.url,
        },
      }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#071013",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontHeading.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background font-sans text-foreground" suppressHydrationWarning>
        <MotionProvider>
          <CookieConsentProvider>
            <SkipLink />
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </CookieConsentProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
