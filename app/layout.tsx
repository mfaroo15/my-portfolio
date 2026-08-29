import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MFI Technologies | Business Technology Solutions",
    template: "%s",
  },
  description: "Business technology solutions for websites, software, systems, cybersecurity, data and AI automation.",
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
      </body>
    </html>
  );
}
