import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import AppWrapper from "@/components/AppWrapper";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dmsans",
});

export const metadata: Metadata = {
  // metadataBase: new URL("https://www.qrest.ng/"),
  authors: [{ name: "Ejim Favour," }],
  title: "Self Care",
  description: "Caring for every aspect of your life",
  openGraph: {
    description: "Caring for every aspect of your life",
    type: "website",
    // url: "https://www.qrest.ng/",
    images: [
      { url: "https://i.ibb.co/FBC2nRL/Screenshot-2025-01-11-at-22-03-45.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} antialiased`}>
        <AppWrapper>{children}</AppWrapper>
        <ToastContainer />
      </body>
    </html>
  );
}
