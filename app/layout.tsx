import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import AppWrapper from "@/components/AppWrapper";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppContextProvider from "@/store/AppContextProvider";

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
  title: "AI Power Bundle",
  description: "Master AI for Business, Content Creation and Automation",
  openGraph: {
    description: "Master AI for Business, Content Creation and Automation",
    type: "website",
    images: [
      {
        url: "https://i.ibb.co/V0NNZRjN/Screenshot-2025-02-26-at-13-50-44.png",
      },
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
        <AppContextProvider>
          <AppWrapper>{children}</AppWrapper>
        </AppContextProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
