import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fibreglasstech.co.nz';

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Fibreglass Technologies privacy policy. Learn how we collect, use, and protect your personal information in accordance with the NZ Privacy Act 2020.",
  openGraph: {
    title: "Privacy Policy | Fibreglass Technologies NZ",
    description: "Learn how we collect, use, and protect your personal information in accordance with the NZ Privacy Act 2020.",
    url: `${siteUrl}/privacy`,
  },
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
              Privacy <span className="italic text-gradient">Policy</span>
            </h1>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <Card className="glass border-border/30">
              <CardHeader>
                <CardTitle className="text-xl">Introduction</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <p className="text-foreground/70 leading-relaxed">
                  Fibreglass Technologies ("we", "us", or "our") is committed to protecting your personal information 
                  and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard 
                  your information when you visit our website or use our services.
                </p>
                <p className="text-foreground/70 leading-relaxed mt-4">
                  We operate in compliance with the New Zealand Privacy Act 2020 and the Information Privacy Principles 
                  contained within it.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-border/30">
              <CardHeader>
                <CardTitle className="text-xl">Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground/90 mb-2">Personal Information You Provide</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    When you contact us or request a quote, we may collect:
                  </p>
                  <ul className="list-disc list-inside text-foreground/70 mt-2 space-y-1">
                    <li>Your name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Location/address</li>
                    <li>Details about your pool renovation project</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground/90 mb-2">Information Automatically Collected</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    When you visit our website, we may automatically collect certain information, including:
                  </p>
                  <ul className="list-disc list-inside text-foreground/70 mt-2 space-y-1">
                    <li>IP address (anonymised)</li>
                    <li>Browser type and version</li>
                    <li>Pages visited and time spent</li>
                    <li>Referring website</li>
                    <li>Device information</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-border/30">
              <CardHeader>
                <CardTitle className="text-xl">How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70 leading-relaxed">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc list-inside text-foreground/70 space-y-2">
                  <li>To respond to your enquiries and provide quotes</li>
                  <li>To schedule and conduct site assessments</li>
                  <li>To provide our pool renovation services</li>
                  <li>To communicate with you about your project</li>
                  <li>To improve our website and services</li>
                  <li>To analyse website usage and performance</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass border-border/30">
              <CardHeader>
                <CardTitle className="text-xl">Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70 leading-relaxed">
                  Our website uses cookies and similar tracking technologies to enhance your experience. These include:
                </p>
                <div className="space-y-4 mt-4">
                  <div>
                    <h3 className="font-semibold text-foreground/90 mb-1">Essential Cookies</h3>
                    <p className="text-foreground/70 text-sm">Required for basic website functionality.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground/90 mb-1">Analytics Cookies</h3>
                    <p className="text-foreground/70 text-sm">
                      We use Google Analytics (GA4) to understand how visitors interact with our website. 
                      This helps us improve our content and user experience. IP addresses are anonymised.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground/90 mb-1">Marketing Cookies</h3>
                    <p className="text-foreground/70 text-sm">
                      If enabled, these cookies help us measure the effectiveness of our advertising campaigns.
                    </p>
                  </div>
                </div>
                <p className="text-foreground/70 leading-relaxed mt-4">
                  You can control cookie preferences through your browser settings or our cookie consent banner.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-border/30">
              <CardHeader>
                <CardTitle className="text-xl">Data Storage and Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70 leading-relaxed">
                  We take appropriate security measures to protect your personal information from unauthorised 
                  access, alteration, disclosure, or destruction. Your data may be stored:
                </p>
                <ul className="list-disc list-inside text-foreground/70 space-y-2">
                  <li>In secure cloud-based systems</li>
                  <li>On servers located in New Zealand or internationally with appropriate safeguards</li>
                  <li>In our customer management systems</li>
                </ul>
                <p className="text-foreground/70 leading-relaxed mt-4">
                  We retain your personal information only for as long as necessary to fulfil the purposes 
                  for which it was collected, or as required by law.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-border/30">
              <CardHeader>
                <CardTitle className="text-xl">Your Rights Under the NZ Privacy Act 2020</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70 leading-relaxed">
                  Under the New Zealand Privacy Act 2020, you have the right to:
                </p>
                <ul className="list-disc list-inside text-foreground/70 space-y-2">
                  <li>Access your personal information that we hold</li>
                  <li>Request correction of any inaccurate information</li>
                  <li>Request deletion of your personal information (where appropriate)</li>
                  <li>Know how your information is being used</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
                <p className="text-foreground/70 leading-relaxed mt-4">
                  To exercise any of these rights, please contact us using the details below.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-border/30">
              <CardHeader>
                <CardTitle className="text-xl">Third-Party Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70 leading-relaxed">
                  We may share your information with trusted third-party service providers who assist us in 
                  operating our business, including:
                </p>
                <ul className="list-disc list-inside text-foreground/70 space-y-2">
                  <li>Google Analytics (website analytics)</li>
                  <li>Google Tag Manager (tag management)</li>
                  <li>Email service providers</li>
                  <li>Cloud storage providers</li>
                </ul>
                <p className="text-foreground/70 leading-relaxed mt-4">
                  These providers are contractually obligated to protect your information and only use it 
                  for the purposes we specify.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-border/30">
              <CardHeader>
                <CardTitle className="text-xl">Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70 leading-relaxed">
                  If you have any questions about this Privacy Policy, wish to exercise your privacy rights, 
                  or have a complaint, please contact us:
                </p>
                <div className="bg-primary/5 rounded-lg p-4 mt-4">
                  <p className="text-foreground/80 font-medium">Fibreglass Technologies</p>
                  <p className="text-foreground/70">Email: info@fibreglasstech.co.nz</p>
                  <p className="text-foreground/70">Phone: 0800 POOL FIX (0800 766 5349)</p>
                </div>
                <p className="text-foreground/70 leading-relaxed mt-4">
                  If you are not satisfied with our response, you may also contact the Office of the 
                  Privacy Commissioner at{" "}
                  <a 
                    href="https://www.privacy.org.nz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    www.privacy.org.nz
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-border/30">
              <CardHeader>
                <CardTitle className="text-xl">Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices 
                  or for other operational, legal, or regulatory reasons. We encourage you to review this 
                  page periodically for the latest information.
                </p>
                <p className="text-foreground/50 text-sm mt-4">
                  Last updated: {new Date().toLocaleDateString('en-NZ', { month: 'long', year: 'numeric' })}
                </p>
              </CardContent>
            </Card>

            <div className="text-center pt-8">
              <Link 
                href="/contact" 
                className="text-primary hover:underline"
              >
                ← Back to Contact
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
