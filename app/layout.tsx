import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Aritra Mondal | Full Stack Developer",
  description:
    "Aritra Mondal's futuristic 3D portfolio for full stack development, software engineering, and AI-focused projects.",
  authors: [{ name: "Aritra Mondal" }],
  openGraph: {
    title: "Aritra Mondal | Full Stack Developer",
    description:
      "Full Stack Developer & Software Engineer building modern web, backend, and AI-assisted products.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
