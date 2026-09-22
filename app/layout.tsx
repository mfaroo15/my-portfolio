import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import "./globals.css";
import { siteUrl } from "@/app/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dawood Technologies | Technology Built Around Business",
    template: "%s | Dawood Technologies",
  },
  description: "Dawood Technologies designs, builds, operates and improves the digital systems modern businesses depend on.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Dawood Technologies",
    title: "Technology Built Around Business",
    description: "Digital systems engineered around real operations and managed for the long term.",
    url: siteUrl,
  },
  twitter: { card: "summary_large_image", title: "Dawood Technologies", description: "Technology Built Around Business." },
  icons: {
    icon: [{ url: "/icon.svg?v=2", type: "image/svg+xml" }],
    apple: "/apple-icon.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
