import type { Metadata } from "next";
import { Space_Mono, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ground Barber — Debrecen",
  description:
    "Ahol mindenki otthon van. Prémium fodrász és borbély Debrecenben. Időpontfoglalás online.",
  openGraph: {
    title: "Ground Barber — Debrecen",
    description: "Ahol mindenki otthon van.",
    locale: "hu_HU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hu"
      className={`${spaceMono.variable} ${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-cream">
        {children}
      </body>
    </html>
  );
}
