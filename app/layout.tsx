import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Arkline Games | Mobile Game Studio",
  description: "Arkline Games is a mobile game studio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
