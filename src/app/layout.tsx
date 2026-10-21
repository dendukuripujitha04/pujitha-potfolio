import type { Metadata } from "next";
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pujitha Dendukuri | AI & Data Science Portfolio",
  description:
    "Portfolio of Pujitha Dendukuri — B.Tech AI & Data Science student at BVCITS. Exploring intelligent systems, web development, and practical AI solutions.",
  keywords: [
    "Pujitha Dendukuri",
    "AI portfolio",
    "Data Science",
    "B.Tech",
    "BVCITS",
    "Machine Learning",
    "Portfolio",
    "Web Development",
  ],
  authors: [{ name: "Pujitha Dendukuri" }],
  openGraph: {
    title: "Pujitha Dendukuri | AI & Data Science Portfolio",
    description:
      "Exploring Intelligence. Engineering Possibilities. B.Tech AI & Data Science student building thoughtful digital experiences.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pujitha Dendukuri | AI & Data Science Portfolio",
    description:
      "Exploring Intelligence. Engineering Possibilities. B.Tech AI & Data Science student at BVCITS.",
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
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable} scroll-smooth`}
    >
      <body className="bg-zinc-950 text-zinc-100 antialiased selection:bg-lime-400/20 selection:text-lime-300">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
