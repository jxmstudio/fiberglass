import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Droplets, Palette, Wrench, Zap, Truck, ArrowRight } from "lucide-react";

import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fibreglasstech.co.nz';

export const metadata: Metadata = {
  title: "Pool Resurfacing Services NZ | Fibreglass Repairs & Renovation",
  description: "Professional fibreglass pool resurfacing, gelcoat recolouring, structural repairs & pool modernisation services across New Zealand. Nationwide mobile service. Get your free assessment today.",
  openGraph: {
    title: "Pool Resurfacing Services NZ | Fibreglass Technologies",
    description: "Professional fibreglass pool resurfacing, gelcoat recolouring, structural repairs & pool modernisation services across New Zealand.",
    url: `${siteUrl}/services`,
    images: [{ url: "/clean.png", width: 1200, height: 630, alt: "Fibreglass pool services NZ" }],
  },
  twitter: {
    title: "Pool Resurfacing Services NZ | Fibreglass Technologies",
    description: "Professional fibreglass pool resurfacing, gelcoat recolouring, structural repairs & pool modernisation services across New Zealand.",
  },
  alternates: {
    canonical: `${siteUrl}/services`,
  },
};

export default function ServicesPage() {
  const services = [
    {
      icon: Droplets,
      title: "Full Fibreglass Resurfacing",
      href: "/services/fibreglass-resurfacing",
      description: "Rebuild your pool's interior with a new, high strength fibreglass shell that seals, protects, and refreshes your entire pool surface.",
      inclusions: [
        "Complete pool preparation",
        "Grinding & sanding of old coatings",
        "Structural repairs",
        "Application of new fibreglass layer",
        "UV stable gelcoat or topcoat finish",
        "Final detail and inspection"
      ]
    },
    {
      icon: Palette,
      title: "Gelcoat Recolouring",
      href: "/services/gelcoat-recolouring",
      description: "Refresh the look of your pool with modern, vibrant colour options that are easy to maintain and built for New Zealand's harsh sun.",
      colorOptions: [
        "Ice Blue",
        "Pacific Blue",
        "Charcoal",
        "White",
        "Lagoon Teal",
        "Slate Grey"
      ]
    },
    {
      icon: Wrench,
      title: "Structural & Leak Repairs",
      href: "/services/structural-repairs",
      description: "We identify and repair issues that compromise your pool's strength or water retention.",
      solutions: [
        "Cracks",
        "Leaks",
        "Osmosis blistering",
        "Soft or weak areas",
        "Poor previous coatings"
      ]
    },
    {
      icon: Zap,
      title: "Pool Modernisation",
      href: "/services/pool-modernisation",
      description: "Bring new life to an older pool with comprehensive upgrades.",
      inclusions: [
        "New fibreglass interior",
        "New fittings and plumbing as required",
        "LED lighting upgrades",
        "Repaired steps, seating, or swim outs"
      ]
    },
    {
      icon: Truck,
      title: "Nationwide Mobile Service",
      href: "/services/nationwide-mobile-service",
      description: "Our fully equipped mobile fibreglass spraying system allows us to complete your renovation onsite — anywhere in New Zealand."
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
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Our Services</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6">
              Fibreglass Pool
              <span className="block italic text-gradient">Renovation Services</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto">
              At Fibreglass Technologies, we specialise in high quality fibreglass resurfacing and repairs, 
              using the best equipment and materials available in the New Zealand market.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isReversed = index % 2 === 1;
              
              return (
                <Card key={index} className="glass border-border/30 overflow-hidden card-hover group">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="p-8 lg:p-12 bg-primary/5 flex flex-col justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h2 className="font-display text-2xl lg:text-3xl mb-4">{service.title}</h2>
                      <p className="text-foreground/60 text-lg leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <Link 
                        href={service.href} 
                        className="inline-flex items-center text-primary font-medium hover:underline"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                    <div className="p-8 lg:p-12">
                      {service.inclusions && (
                        <div>
                          <h3 className="font-semibold mb-4 text-primary uppercase tracking-wider text-sm">Includes</h3>
                          <ul className="space-y-3">
                            {service.inclusions.map((inclusion, i) => (
                              <li key={i} className="flex items-start space-x-3">
                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-foreground/70">{inclusion}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {service.colorOptions && (
                        <div>
                          <h3 className="font-semibold mb-4 text-primary uppercase tracking-wider text-sm">Popular Colours</h3>
                          <div className="grid grid-cols-2 gap-3">
                            {service.colorOptions.map((color, i) => (
                              <div key={i} className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/30">
                                <div className="w-4 h-4 rounded-full bg-primary/50" />
                                <span className="text-foreground/70">{color}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {service.solutions && (
                        <div>
                          <h3 className="font-semibold mb-4 text-primary uppercase tracking-wider text-sm">Solutions For</h3>
                          <ul className="space-y-3">
                            {service.solutions.map((solution, i) => (
                              <li key={i} className="flex items-start space-x-3">
                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-foreground/70">{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {!service.inclusions && !service.colorOptions && !service.solutions && (
                        <div className="flex items-center justify-center h-full">
                          <p className="text-foreground/40 italic">Nationwide coverage across New Zealand</p>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Our Promise</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              What You Can <span className="italic text-gradient">Expect</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Stronger, smoother finishes",
              "Industry leading materials",
              "Consistent, calibrated spraying technology",
              "Professional, efficient onsite work",
              "Clear communication from start to finish"
            ].map((expectation, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 rounded-2xl glass border-border/30">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-foreground/80">{expectation}</span>
              </div>
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
              Ready to <span className="italic text-gradient">Get Started?</span>
            </h2>
            <p className="text-lg text-foreground/60 mb-10">
              Contact us for a free site assessment and detailed quote for your pool renovation project.
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
