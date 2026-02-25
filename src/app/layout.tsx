import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "byrddynasty - Learn to Build Real-World Agentic AI",
  description: "Learn to build and deploy production-ready agentic AI applications. Master the Nine Essential Skills for building AI that actually works.",
  keywords: ["agentic AI", "AI development", "production AI", "Nine Skills", "AI architecture"],
  openGraph: {
    title: "byrddynasty - Learn to Build Real-World Agentic AI",
    description: "Learn to build and deploy production-ready agentic AI applications",
    url: "https://byrddynasty.com",
    siteName: "byrddynasty",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "byrddynasty - Learn to Build Real-World Agentic AI",
    description: "Learn to build and deploy production-ready agentic AI applications",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="pt-32 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
