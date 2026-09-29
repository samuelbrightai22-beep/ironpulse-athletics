import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "IRONPULSE ATHLETICS — Train Hard. Live Strong.",
  description:
    "IRONPULSE ATHLETICS is a strength-training brand built for people who show up. Shop performance apparel, training equipment and gym accessories engineered to outlast your hardest sessions.",
  keywords: [
    "gym apparel",
    "training equipment",
    "strength training",
    "performance wear",
    "dumbbells",
    "kettlebells",
    "athletic gear",
    "IRONPULSE ATHLETICS",
  ],
  authors: [{ name: "IRONPULSE ATHLETICS" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "IRONPULSE ATHLETICS — Train Hard. Live Strong.",
    description:
      "Performance apparel, equipment and accessories built for people who show up. Designed in Brooklyn, tested on gym floors since 2018.",
    siteName: "IRONPULSE ATHLETICS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IRONPULSE ATHLETICS",
    description: "Train Hard. Live Strong.",
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
        className={`${inter.variable} ${oswald.variable} antialiased bg-background text-foreground`}
      >
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
