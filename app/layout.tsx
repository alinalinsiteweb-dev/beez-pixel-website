import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beez Pixel - Agenție de Web Design",
  description: "Design web profesional, SEO, hosting și domenii pentru afacerea ta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body className={`${inter.className} bg-white text-gray-800`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
