import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gaugon | AI Automation & IT Solutions for Business",
  description: "Professional AI automation and IT solutions. Automate marketing, customer support, CRM, reporting, and workflows. Trusted by growing businesses.",
  keywords: ["AI automation", "business automation", "IT solutions", "marketing automation", "CRM automation", "workflow automation"],
  authors: [{ name: "Gaugon" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Gaugon | AI Automation & IT Solutions for Business",
    description: "Professional AI automation and IT solutions. Automate marketing, customer support, CRM, reporting, and workflows.",
    url: "https://app.gaugon.com",
    siteName: "Gaugon",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaugon | AI Automation & IT Solutions for Business",
    description: "Professional AI automation and IT solutions. Automate marketing, customer support, CRM, reporting, and workflows.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Gaugon",
    "description": "AI automation and IT solutions for businesses",
    "url": "https://app.gaugon.com",
    "serviceType": ["AI Automation", "IT Solutions", "Business Automation"],
    "areaServed": "Worldwide",
  };

  return (
    <html lang="en">
      <head>
        {/* Security meta tags (temporary mitigation until Cloudflare Pages migration) */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob:; connect-src 'self'; frame-ancestors 'none'"
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <link rel="canonical" href="https://app.gaugon.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}

