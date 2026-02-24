import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ClipboardCheck, Sparkles, Paintbrush, Search, Settings, ArrowRight } from "lucide-react";

import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fibreglasstech.co.nz';

export const metadata: Metadata = {
  title: "Pool Resurfacing Process NZ | 5-Step Professional Renovation",
  description: "Discover our professional 5-step fibreglass pool resurfacing process in New Zealand. From assessment to handover, quality workmanship at every stage. No shortcuts, no compromises.",
  openGraph: {
    title: "Pool Resurfacing Process NZ | Fibreglass Technologies",
    description: "Discover our professional 5-step fibreglass pool resurfacing process in New Zealand. Quality workmanship at every stage.",
    url: `${siteUrl}/process`,
    images: [{ url: "/clean.png", width: 1200, height: 630, alt: "Fibreglass pool resurfacing process NZ" }],
  },
  twitter: {
    title: "Pool Resurfacing Process NZ | Fibreglass Technologies",
    description: "Discover our professional 5-step fibreglass pool resurfacing process in New Zealand.",
  },
  alternates: {
    canonical: `${siteUrl}/process`,
  },
};

export default function OurProcessPage() {
  const steps = [
    {
      number: 1,
      icon: ClipboardCheck,
      title: "Assessment & Preparation",
      description: "We inspect your pool's current condition, answer your questions, and prepare the surface with grinding, sanding, and structural repairs.",
      details: [
        "Thorough pool inspection",
        "Clear, detailed quote provided",
        "Grinding and sanding of old coatings",
        "Structural repairs completed",
        "Full preparation for perfect adhesion"
      ]
    },
    {
      number: 2,
      icon: Settings,
      title: "Fibreglass Application",
      description: "Sprayed using calibrated, commercial grade equipment for unmatched strength and smoothness.",
      details: [
        "State of the art equipment",
        "Perfect resin to glass ratios",
        "Uniform, reinforced layer",
        "Superior strength and durability",
        "No patchiness or weak points"
      ]
    },
    {
      number: 3,
      icon: Paintbrush,
      title: "Detailing & Refinishing",
      description: "All corners, edges, and fittings are professionally finished with meticulous attention to detail.",
      details: [
        "Professional corner finishing",
        "Edge detailing and refinement",
        "Fitting installation",
        "Seamless appearance",
        "Quality inspection"
      ]
    },
    {
      number: 4,
      icon: Sparkles,
      title: "Top Coat Protection",
      description: "A UV stable gelcoat or paint system provides long term durability and a beautiful, easy care surface.",
      details: [
        "UV stable gelcoat application",
        "Marine grade coating",
        "Your chosen colour applied",
        "Smooth, modern finish",
        "Long term protection"
      ]
    },
    {
      number: 5,
      icon: Search,
      title: "Quality Check & Handover",
      description: "We complete a full quality check and ensure your renovated pool meets our premium standard.",
      details: [
        "Comprehensive inspection",
        "Every detail verified",
        "Site cleaned and prepared",
        "Care guidance provided",
        "Project documentation"
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-glow delay-500" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">5 Step Process</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6">
              Our Renovation
              <span className="block italic text-gradient">Process</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto">
              A structured, professional approach that ensures quality at every stage. 
              No shortcuts, no compromises — just precision workmanship.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Process Steps */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                
                return (
                  <div key={step.number} className="relative">
                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-[39px] top-[100px] bottom-[-32px] w-px bg-gradient-to-b from-primary/50 to-primary/10 hidden md:block" />
                    )}
                    
                    <Card className="glass border-border/30 overflow-hidden card-hover">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        <div className="p-8 lg:p-12 bg-primary/5 flex flex-col justify-center">
                          <div className="flex items-center space-x-4 mb-6">
                            <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center text-3xl font-display font-bold text-primary-foreground">
                              {step.number}
                            </div>
                            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                              <Icon className="h-7 w-7 text-primary" />
                            </div>
                          </div>
                          <h2 className="font-display text-2xl lg:text-3xl mb-4">{step.title}</h2>
                          <p className="text-foreground/60 text-lg leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                        <div className="p-8 lg:p-12">
                          <h3 className="font-semibold mb-6 text-primary uppercase tracking-wider text-sm">What We Do</h3>
                          <ul className="space-y-4">
                            {step.details.map((detail, i) => (
                              <li key={i} className="flex items-start space-x-3">
                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-foreground/70">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Our Promise</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              Commitment to <span className="italic text-gradient">Quality</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "No Shortcuts",
                description: "We follow every step meticulously, ensuring nothing is skipped or rushed."
              },
              {
                title: "Attention to Detail",
                description: "From assessment to handover, we pay attention to every detail that makes the difference."
              },
              {
                title: "Quality Control",
                description: "Multiple quality checks ensure every project meets our exacting standards."
              }
            ].map((item, index) => (
              <Card key={index} className="glass border-border/30 card-hover">
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/60 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              Ready to <span className="italic text-gradient">Start?</span>
            </h2>
            <p className="text-lg text-foreground/60 mb-10">
              Experience our professional process firsthand. Book your free site assessment today.
            </p>
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 px-10 py-7 text-lg">
              <Link href="/contact" className="flex items-center">
                Get Your Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
