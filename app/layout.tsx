import type { Metadata, Viewport } from "next";
import { Fredoka, Inter } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-fredoka" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6c4dff",
};

export const metadata: Metadata = {
  title: "Arkline Games | Mobile Game Studio",
  description:
    "Arkline Games is a small, independent mobile game studio making puzzle games.",
  openGraph: {
    title: "Arkline Games",
    description: "A small, independent mobile game studio.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${fredoka.variable} ${inter.variable}`}>
      <body className="bg-white text-ink antialiased">{children}</body>
    </html>
  );
}
