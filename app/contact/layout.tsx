import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Fibreglass Technologies",
  description: "Get your free site assessment. Contact Fibreglass Technologies for expert pool renovation services across New Zealand.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
