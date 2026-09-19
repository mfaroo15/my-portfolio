import type { Metadata } from "next";
import type { ReactNode } from "react";
import { FloatingWhatsApp } from "@/app/components/FloatingWhatsApp";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dawood Technologies | Business Technology Solutions",
    template: "%s",
  },
  description: "Business technology solutions for websites, software, point-of-sale systems, finance management systems, cybersecurity, IT controls, infrastructure and AI automation.",
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
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
