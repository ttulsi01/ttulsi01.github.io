import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from '../components/Footer';
import Navbar from "@/components/Navbar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tulsi Tailor - Portfolio",
  description: "A portfolio showcasing the work and projects of Tulsi Tailor.",
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
