import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { GTMScript, GTMNoScript } from "@/components/GTMScript";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { TrackingInit } from "@/components/TrackingInit";
import { CookieConsent } from "@/components/CookieConsent";
import { organizationSchema, localBusinessSchema, websiteSchema } from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fibreglasstech.co.nz';

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fibreglass Pool Resurfacing NZ | Pool Renovation Specialists New Zealand",
    template: "%s | Fibreglass Technologies NZ",
  },
  description: "New Zealand's leading fibreglass pool resurfacing specialists. Expert pool renovation, repairs & modernisation services nationwide. Free assessments available. Call 0800 POOL FIX.",
  keywords: [
    "pool resurfacing nz",
    "fibreglass pool repair",
    "pool renovation new zealand",
    "pool resurfacing auckland",
    "pool resurfacing wellington",
    "pool resurfacing christchurch",
    "fibreglass pool coating",
    "pool gelcoat recolouring",
    "swimming pool renovation nz",
  ],
  authors: [{ name: "Fibreglass Technologies" }],
  creator: "Fibreglass Technologies",
  publisher: "Fibreglass Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: siteUrl,
    siteName: "Fibreglass Technologies",
    title: "Fibreglass Pool Resurfacing NZ | Pool Renovation Specialists",
    description: "New Zealand's leading fibreglass pool resurfacing specialists. Expert pool renovation, repairs & modernisation services nationwide. Free assessments available.",
    images: [
      {
        url: "/clean.png",
        width: 1200,
        height: 630,
        alt: "Fibreglass pool resurfacing by Fibreglass Technologies NZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fibreglass Pool Resurfacing NZ | Pool Renovation Specialists",
    description: "New Zealand's leading fibreglass pool resurfacing specialists. Expert pool renovation, repairs & modernisation services nationwide.",
    images: ["/clean.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/fevicon version-01.png",
    shortcut: "/fevicon version-01.png",
    apple: "/fevicon version-01.png",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ">
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <GoogleAnalytics />
        <GTMScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <GTMNoScript />
        <TrackingInit />
        <SchemaMarkup schema={[organizationSchema, localBusinessSchema, websiteSchema]} />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
