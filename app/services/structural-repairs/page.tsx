import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Wrench, Shield, AlertTriangle, Search } from "lucide-react";

import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fibreglasstech.co.nz';

export const metadata: Metadata = {
  title: "Pool Structural Repairs NZ | Leak & Crack Repair Service",
  description: "Professional pool structural repairs across New Zealand. Fix cracks, leaks, osmosis blistering and weak areas. Expert fibreglass repair service with nationwide coverage.",
  keywords: ["pool leak repair NZ", "pool crack repair New Zealand", "fibreglass pool repairs", "osmosis repair pool", "pool structural damage", "swimming pool repairs Auckland"],
  openGraph: {
    title: "Pool Structural Repairs NZ | Fibreglass Technologies",
    description: "Professional pool structural repairs across New Zealand. Fix cracks, leaks, osmosis blistering and structural damage.",
    url: `${siteUrl}/services/structural-repairs`,
    images: [{ url: "/clean.png", width: 1200, height: 630, alt: "Pool structural repairs NZ" }],
  },
  twitter: {
    title: "Pool Structural Repairs NZ | Fibreglass Technologies",
    description: "Professional pool structural repairs across New Zealand. Fix cracks, leaks and damage.",
  },
  alternates: {
    canonical: `${siteUrl}/services/structural-repairs`,
  },
};

export default function StructuralRepairsPage() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Cracks & Fractures",
      description: "Hairline cracks, spider cracks, and structural fractures that compromise pool integrity.",
      solution: "We grind out damaged areas, apply fibreglass reinforcement, and restore a seamless surface."
    },
    {
      icon: AlertTriangle,
      title: "Water Leaks",
      description: "Visible water loss, damp areas around the pool, or unexplained water level drops.",
      solution: "We locate and seal leak points with professional fibreglass repair techniques."
    },
    {
      icon: AlertTriangle,
      title: "Osmosis Blistering",
      description: "Bubbles or blisters forming under the gelcoat surface due to water absorption.",
      solution: "Complete osmosis treatment including grinding, drying, and barrier coat application."
    },
    {
      icon: AlertTriangle,
      title: "Soft or Weak Areas",
      description: "Spongy spots, delamination, or areas that flex under pressure.",
      solution: "Removal of damaged material and structural reinforcement with new fibreglass layers."
    },
    {
      icon: AlertTriangle,
      title: "Poor Previous Repairs",
      description: "Failed patches, mismatched materials, or substandard previous repair work.",
      solution: "Complete removal of poor repairs and professional restoration to original strength."
    }
  ];

  const process = [
    {
      step: 1,
      title: "Inspection & Diagnosis",
      description: "Thorough assessment to identify all structural issues and their root causes."
    },
    {
      step: 2,
      title: "Preparation",
      description: "Grinding, cleaning, and preparing damaged areas for repair."
    },
    {
      step: 3,
      title: "Structural Repair",
      description: "Application of fibreglass reinforcement and marine-grade resins."
    },
    {
      step: 4,
      title: "Surface Restoration",
      description: "Finishing coats and gelcoat application for a seamless appearance."
    },
    {
      step: 5,
      title: "Quality Check",
      description: "Comprehensive inspection to ensure structural integrity is restored."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-glow delay-500" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Wrench className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">Expert Repairs</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6">
              Structural & Leak
              <span className="block italic text-gradient">Repairs</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto mb-8">
              We identify and repair issues that compromise your pool's strength or water retention. 
              Professional fibreglass repairs across New Zealand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 px-8 py-6 text-lg">
                <Link href="/contact" className="flex items-center">
                  Get Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-foreground/20 px-8 py-6 text-lg">
                <Link href="/process">View Our Process</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Problems We Solve */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Solutions</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                Problems We <span className="italic text-gradient">Fix</span>
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                From minor cracks to major structural issues, we have the expertise and 
                equipment to restore your pool's integrity.
              </p>
            </div>
            
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <Card key={index} className="glass border-border/30 overflow-hidden card-hover">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="p-8 lg:p-10 bg-destructive/5 flex flex-col justify-center">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                          <problem.icon className="h-6 w-6 text-destructive" />
                        </div>
                        <h3 className="font-display text-xl lg:text-2xl">{problem.title}</h3>
                      </div>
                      <p className="text-foreground/60">{problem.description}</p>
                    </div>
                    <div className="p-8 lg:p-10 bg-primary/5">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <CheckCircle2 className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-semibold text-primary uppercase tracking-wider text-sm">Our Solution</h4>
                      </div>
                      <p className="text-foreground/70">{problem.solution}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Our Approach</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                Repair <span className="italic text-gradient">Process</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              {process.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0 text-xl font-display font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-foreground/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Act Now */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-border/30 shadow-2xl">
                  <Image
                    src="/clean.png"
                    alt="Professional pool structural repairs in New Zealand"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Don't Wait</p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                  Why Act <span className="italic text-gradient">Now?</span>
                </h2>
                <p className="text-lg text-foreground/60 mb-8">
                  Structural issues left unaddressed will only get worse over time. Early intervention 
                  saves money and prevents more extensive damage.
                </p>
                <ul className="space-y-4">
                  {[
                    "Small cracks can spread and become major fractures",
                    "Water leaks cause ongoing damage to surrounding areas",
                    "Osmosis blisters grow larger and more numerous",
                    "Weak areas can lead to complete structural failure",
                    "Early repairs are less expensive than major restoration"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-4">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Explore More</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">
              Related <span className="italic text-gradient">Services</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Fibreglass Resurfacing", href: "/services/fibreglass-resurfacing", description: "Complete pool surface renovation" },
              { title: "Gelcoat Recolouring", href: "/services/gelcoat-recolouring", description: "Fresh, vibrant colours for your pool" },
              { title: "Pool Modernisation", href: "/services/pool-modernisation", description: "Complete pool upgrades" }
            ].map((service, index) => (
              <Link key={index} href={service.href} className="group">
                <Card className="glass border-border/30 card-hover h-full">
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/60">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
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
              Got Pool <span className="italic text-gradient">Problems?</span>
            </h2>
            <p className="text-lg text-foreground/60 mb-10">
              Get a free inspection and detailed repair quote from our expert team.
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
