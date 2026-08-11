import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SmoothScrollProvider } from "@/components/lara/smooth-scroll-provider";
import { CustomCursor } from "@/components/lara/custom-cursor";
import { Atmosphere } from "@/components/lara/atmosphere";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LARA — Where Exceptional People Meet",
  description:
    "A private, invitation-only community for exceptional people seeking meaningful relationships, authentic conversations, and high-quality connections.",
  keywords: [
    "LARA",
    "private community",
    "invitation only",
    "meaningful relationships",
    "exceptional people",
    "networking",
  ],
  authors: [{ name: "LARA" }],
  icons: {
    icon: "/brand/lara-image.png",
    shortcut: "/brand/lara-image.png",
    apple: "/brand/lara-image.png",
  },
  openGraph: {
    title: "LARA — Where Exceptional People Meet",
    description:
      "A private community built for meaningful relationships, authentic conversations, and exceptional people.",
    siteName: "LARA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased bg-ink text-ivory font-sans selection:bg-gold/30 selection:text-ivory`}
      >
        <Atmosphere />
        <CustomCursor />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Toaster />
      </body>
    </html>
  );
}
