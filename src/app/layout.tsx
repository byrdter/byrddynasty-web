import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jb",
  display: "swap",
});

const TITLE = "Byrddynasty — Understanding AI";
const DESCRIPTION =
  "Technology is neutral. Choices aren't. A channel exploring the human choices that shape AI's impact on work, society, and meaning — weighing both sides, showing the sources, and asking better questions.";

export const metadata: Metadata = {
  metadataBase: new URL("https://byrddynasty.com"),
  title: {
    default: TITLE,
    template: "%s — Byrddynasty",
  },
  description: DESCRIPTION,
  keywords: [
    "Understanding AI",
    "AI and society",
    "future of work",
    "AI strategy",
    "Terry Byrd",
    "Byrddynasty",
    "technology is neutral",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://byrddynasty.com",
    siteName: "Byrddynasty",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased grain">
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
