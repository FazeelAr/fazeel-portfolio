import type { Metadata } from "next";
import { siteData } from "@/lib/data";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot/chatbot";

export const metadata: Metadata = {
  title: `${siteData.name} | ${siteData.title}`,
  description: siteData.subtitle,
  creator: siteData.name,
  openGraph: {
    title: `${siteData.name} | ${siteData.title}`,
    description: siteData.subtitle,
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://muhammadFazeel.dev",
    siteName: "Muhammad Fazeel",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@FazeelAr",
  },
  keywords: [
    "Muhammad Fazeel",
    "Software Engineer",
    "AI Developer",
    "RAG Systems",
    "Full Stack",
    "Next.js",
    "React",
    "Lahore",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
