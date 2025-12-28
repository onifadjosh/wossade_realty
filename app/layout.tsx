import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wossade-realty.com'), // Replace with actual domain when deployed
  title: {
    default: "Wossade Realty | Building Excellence",
    template: "%s | Wossade Realty"
  },
  description: "WOSSADE REALTY is an emerging but fast-growing real estate development company delivering residential and multi-unit properties that meet international quality standards.",
  keywords: [
    'realty', "real estate", "property development", "residential properties", "commercial properties",
    "real estate investment", "property management", "housing solutions", "urban development",
    "sustainable housing", "modern architecture", "Wossade Realty", "Wossade", "Nigeria real estate",
    "Ibadan properties", "Nigerian property market",
  ],
  authors: [{ name: "Wossade Realty" }],
  creator: "Wossade Realty",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://wossaderealty.com",
    title: "Wossade Realty | Building Excellence",
    description: "Delivering world-class residential and commercial properties with integrity and innovation.",
    siteName: "Wossade Realty",
    images: [
      {
        url: "/opengraph-image.png", // Fallback to logo or use a specific OG image
        width: 1200,
        height: 630,
        alt: "Wossade Realty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wossade Realty | Building Excellence",
    description: "Premium real estate development and construction services in Nigeria.",
    images: ["/opengraph-image.png"],
    creator: "@wossaderealty", // Update if handle exists
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
