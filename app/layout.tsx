import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gaugon | AI-driven IT & automation for small businesses",
  description: "Gaugon provides AI-driven IT solutions and automation services to help small businesses streamline operations, optimize workflows, and enhance their digital presence.",
  keywords: ["IT support", "AI automation", "website optimization", "small business IT", "business automation"],
  authors: [{ name: "Gaugon" }],
  openGraph: {
    title: "Gaugon | AI-driven IT & automation for small businesses",
    description: "AI-driven IT & automation for small businesses. Streamline operations, optimize workflows, and enhance your digital presence.",
    url: "https://gaugon.com",
    siteName: "Gaugon",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaugon | AI-driven IT & automation for small businesses",
    description: "AI-driven IT & automation for small businesses. Streamline operations, optimize workflows, and enhance your digital presence.",
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
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

