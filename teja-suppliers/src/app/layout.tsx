import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Teja Suppliers | Premium Chemical Supply Company – Adilabad, Telangana",
  description:
    "Teja Suppliers is a leading ISO 9001:2015 certified chemical supply company in Adilabad, Telangana. We supply industrial chemicals, laboratory reagents, and specialty chemicals across India.",
  keywords:
    "Teja Suppliers, chemical supplier Adilabad, industrial chemicals Telangana, laboratory reagents, specialty chemicals, HPLC solvents, ISO certified chemical company",
  authors: [{ name: "Teja Suppliers" }],
  openGraph: {
    title: "Teja Suppliers | Chemical Supply Company – Adilabad",
    description:
      "Premium industrial chemicals and lab reagents from Adilabad's most trusted ISO-certified chemical supplier.",
    type: "website",
    locale: "en_IN",
    siteName: "Teja Suppliers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teja Suppliers | Chemical Supply Company",
    description: "ISO certified chemical supplier in Adilabad, Telangana.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${jakarta.variable} font-body antialiased no-hydration`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
