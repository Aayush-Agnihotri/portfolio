import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Providers } from "./providers";
import ScrollProgress from "@/components/ScrollProgress";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aayush-agnihotri.me/"),
  title: "Aayush Agnihotri",
  description:
    "Aayush Agnihotri, software developer, student, open source contributor, entrepreneur",
  openGraph: {
    title: "Aayush Agnihotri",
    description:
      "Aayush Agnihotri, software developer, student, open source contributor, entrepreneur",
    url: "https://aayush-agnihotri.me/",
    siteName: "Aayush Agnihotri",
    images: [
      {
        url: "/images/website-screenshot.webp",
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
        url: "/images/logo-light.webp",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/logo-light.webp",
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
    <html lang="en">
      <body className={`${outfit.variable} font-sans`}>
        <ScrollProgress />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
