import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fibreglasstech.co.nz';

export const metadata: Metadata = {
  title: "Free Pool Assessment NZ | Contact Fibreglass Technologies",
  description: "Get your free pool resurfacing assessment in New Zealand. Contact Fibreglass Technologies for expert pool renovation quotes. Call 0800 POOL FIX or fill out our form.",
  openGraph: {
    title: "Free Pool Assessment NZ | Contact Fibreglass Technologies",
    description: "Get your free pool resurfacing assessment in New Zealand. Contact Fibreglass Technologies for expert pool renovation quotes.",
    url: `${siteUrl}/contact`,
    images: [{ url: "/clean.png", width: 1200, height: 630, alt: "Contact Fibreglass Technologies NZ" }],
  },
  twitter: {
    title: "Free Pool Assessment NZ | Contact Fibreglass Technologies",
    description: "Get your free pool resurfacing assessment in New Zealand. Contact us for expert pool renovation quotes.",
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
