import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import ScrollProgress from "@/components/ScrollProgress";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Aayush Agnihotri",
  description:
    "Aayush Agnihotri, software developer, student, open source contributor, entrepreneur",
  openGraph: {
    title: "Aayush Agnihotri",
    description:
      "Aayush Agnihotri, software developer, student, open source contributor, entrepreneur",
    url: "https://aayushagnihotri.com",
    siteName: "Aayush Agnihotri",
    images: [
      {
        url: "/images/website-screenshot.jpeg",
        width: 1200,
        height: 630,
        alt: "Aayush Agnihotri",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/logo-light.png",
        href: "/images/logo-light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/logo-light.png",
        href: "/images/logo-light.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={`${outfit.variable} font-sans`}>
        <ScrollProgress />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
