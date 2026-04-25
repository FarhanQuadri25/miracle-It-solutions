import type { Metadata } from "next";
import { Geist_Mono, Inter, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import ReactQueryProvider from "./query-provider";
import Navbar from "@/components/navbar";

const SITE_URL = "https://www.miracle-it-solutions.com";

const geistmono = Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Miracle IT Solutions",
  description: "A Complete Solution to customize softwares",
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/MIS-logo.png",
  },
  openGraph: {
    title: "Miracle IT Solutions",
    description: "A Complete Solution to customize softwares",
    images: [
      {
        url: `${SITE_URL}/MIS-Banner.png`,
      },
    ],
  },
  twitter: {
    title: "Miracle IT Solutions",
    description: "A Complete Solution to customize softwares",
    images: [
      {
        url: `${SITE_URL}/MIS-Banner.png`,
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-[#f0f0e8] text-zinc-800 antialiased",
          poppins.variable,
          inter.variable,
          montserrat.variable,
          geistmono.className,
        )}
      >
        <ReactQueryProvider>
          <Navbar />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
