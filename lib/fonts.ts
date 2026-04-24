import { Geist_Mono, Playfair_Display, Inter } from "next/font/google";

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["italic"],
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
