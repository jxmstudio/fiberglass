import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Droplets, Shield, Clock, Award } from "lucide-react";

import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fibreglasstech.co.nz';

export const metadata: Metadata = {
  title: "Fibreglass Pool Resurfacing NZ | Full Pool Renovation Service",
  description: "Professional fibreglass pool resurfacing across New Zealand. Transform your worn pool with a new high-strength fibreglass shell. UV stable gelcoat finish, 15-25 year lifespan. Free assessment.",
  keywords: ["fibreglass pool resurfacing NZ", "pool resurfacing New Zealand", "pool renovation Auckland", "fibreglass pool coating", "pool refinishing NZ", "swimming pool resurfacing"],
  openGraph: {
    title: "Fibreglass Pool Resurfacing NZ | Fibreglass Technologies",
    description: "Transform your worn pool with professional fibreglass resurfacing. New high-strength shell, UV stable finish, 15-25 year lifespan. Nationwide NZ service.",
    url: `${siteUrl}/services/fibreglass-resurfacing`,
    images: [{ url: "/clean.png", width: 1200, height: 630, alt: "Fibreglass pool resurfacing NZ" }],
  },
  twitter: {
    title: "Fibreglass Pool Resurfacing NZ | Fibreglass Technologies",
    description: "Transform your worn pool with professional fibreglass resurfacing. Nationwide NZ service.",
  },
  alternates: {
    canonical: `${siteUrl}/services/fibreglass-resurfacing`,
  },
};

export default function FibreglassResurfacingPage() {
  const inclusions = [
    "Complete pool preparation and cleaning",
    "Grinding and sanding of existing coatings",
    "Structural repairs and crack filling",
    "Application of new fibreglass layer",
    "UV stable gelcoat or topcoat finish",
    "Professional fittings installation",
    "Final inspection and quality check"
  ];

  const benefits = [
    {
      icon: Shield,
      title: "15-25 Year Lifespan",
      description: "Marine-grade materials engineered for NZ conditions provide exceptional durability."
    },
    {
      icon: Droplets,
      title: "Waterproof Seal",
      description: "Complete sealing eliminates leaks and prevents water loss from your pool."
    },
    {
      icon: Clock,
      title: "Minimal Downtime",
      description: "Efficient mobile service means your pool is back in action faster."
    },
    {
      icon: Award,
      title: "Premium Finish",
      description: "Smooth, easy-to-clean surface that looks stunning for years."
    }
  ];

  const signs = [
    "Rough or abrasive surface texture",
    "Visible cracks or crazing",
    "Fading or discoloured finish",
    "Osmosis blistering",
    "Water loss or leaking",
    "Chalky or deteriorating coating",
    "Previous poor quality repairs"
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
              <Droplets className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">Our Most Popular Service</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6">
              Fibreglass Pool
              <span className="block italic text-gradient">Resurfacing</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto mb-8">
              Rebuild your pool's interior with a new, high-strength fibreglass shell that seals, 
              protects, and refreshes your entire pool surface. Nationwide service across New Zealand.
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

      {/* What's Included */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Complete Solution</p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                  What's <span className="italic text-gradient">Included</span>
                </h2>
                <p className="text-lg text-foreground/60 mb-8">
                  Our full fibreglass resurfacing service covers everything needed to transform 
                  your pool from tired and worn to pristine and protected.
                </p>
                <ul className="space-y-4">
                  {inclusions.map((item, index) => (
                    <li key={index} className="flex items-start space-x-4">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-border/30 shadow-2xl">
                  <Image
                    src="/services/fibreglass-resurfacing/resurfacing-in-progress.png"
                    alt="Professional fibreglass pool resurfacing in progress in New Zealand"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Why Choose Resurfacing</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              Benefits of <span className="italic text-gradient">Fibreglass</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="glass border-border/30 card-hover">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/60">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Gallery */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Our Expertise</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                Professional <span className="italic text-gradient">Craftsmanship</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/30 shadow-lg">
                <Image
                  src="/services/fibreglass-resurfacing/surface-preparation.png"
                  alt="Technician preparing fibreglass pool surface with orbital sander"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/30 shadow-lg">
                <Image
                  src="/services/fibreglass-resurfacing/gelcoat-application.png"
                  alt="Professional gelcoat application on fibreglass pool surface"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/30 shadow-lg md:col-span-2 lg:col-span-1">
                <Image
                  src="/services/fibreglass-resurfacing/finished-pool-surface.png"
                  alt="Completed fibreglass pool resurfacing with smooth glossy finish"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signs You Need Resurfacing */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Is It Time?</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                Signs Your Pool Needs <span className="italic text-gradient">Resurfacing</span>
              </h2>
              <p className="text-lg text-foreground/60">
                If you're experiencing any of these issues, fibreglass resurfacing could be the solution.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {signs.map((sign, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-xl glass border-border/30">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">{sign}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Nationwide Coverage</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              Servicing All of <span className="italic text-gradient">New Zealand</span>
            </h2>
            <p className="text-lg text-foreground/60 mb-8">
              Our mobile fibreglass resurfacing service covers the entire country. From Auckland to Queenstown, 
              we bring professional pool renovation directly to your property.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Auckland", "Hamilton", "Tauranga", "Wellington", "Christchurch", "Dunedin", "Queenstown"].map((city) => (
                <span key={city} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Explore More</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">
              Related <span className="italic text-gradient">Services</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Gelcoat Recolouring", href: "/services/gelcoat-recolouring", description: "Fresh, vibrant colours for your pool" },
              { title: "Structural Repairs", href: "/services/structural-repairs", description: "Fix cracks, leaks and damage" },
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
              Ready to <span className="italic text-gradient">Transform</span> Your Pool?
            </h2>
            <p className="text-lg text-foreground/60 mb-10">
              Get a free, no-obligation site assessment and detailed quote for your fibreglass resurfacing project.
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
