import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Zap, Lightbulb, Settings, Droplets } from "lucide-react";

import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fibreglasstech.co.nz';

export const metadata: Metadata = {
  title: "Pool Modernisation NZ | Complete Pool Upgrade Service",
  description: "Transform your ageing pool with modern upgrades across New Zealand. LED lighting, new fittings, fibreglass interior, plumbing upgrades. Comprehensive pool renovation service.",
  keywords: ["pool modernisation NZ", "pool upgrade New Zealand", "pool LED lighting", "pool renovation Auckland", "pool fittings upgrade", "swimming pool makeover NZ"],
  openGraph: {
    title: "Pool Modernisation NZ | Fibreglass Technologies",
    description: "Transform your ageing pool with modern upgrades. LED lighting, new fittings, fibreglass interior and more. Nationwide NZ service.",
    url: `${siteUrl}/services/pool-modernisation`,
    images: [{ url: "/clean.png", width: 1200, height: 630, alt: "Pool modernisation NZ" }],
  },
  twitter: {
    title: "Pool Modernisation NZ | Fibreglass Technologies",
    description: "Transform your ageing pool with modern upgrades. Nationwide NZ service.",
  },
  alternates: {
    canonical: `${siteUrl}/services/pool-modernisation`,
  },
};

export default function PoolModernisationPage() {
  const upgrades = [
    {
      icon: Droplets,
      title: "New Fibreglass Interior",
      description: "Complete interior renovation with a fresh, high-strength fibreglass surface.",
      features: ["Marine-grade materials", "UV stable finish", "15-25 year lifespan", "Smooth, easy-clean surface"]
    },
    {
      icon: Settings,
      title: "Fittings & Plumbing",
      description: "Replace dated fittings with modern, efficient equipment.",
      features: ["New jets and returns", "Updated skimmer systems", "Plumbing repairs", "Modern fixtures"]
    },
    {
      icon: Lightbulb,
      title: "LED Lighting Upgrades",
      description: "Transform your pool with energy-efficient LED lighting.",
      features: ["Colour-changing options", "Energy efficient", "Long-lasting bulbs", "Atmospheric ambiance"]
    },
    {
      icon: Zap,
      title: "Steps & Seating",
      description: "Repair or upgrade steps, seating areas, and swim-outs.",
      features: ["Structural repairs", "Comfort improvements", "Safety upgrades", "Modern designs"]
    }
  ];

  const benefits = [
    "Increased property value",
    "Improved energy efficiency",
    "Enhanced safety features",
    "Better aesthetics",
    "Reduced maintenance costs",
    "Extended pool lifespan",
    "Modern functionality",
    "Updated compliance"
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
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">Complete Transformation</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6">
              Pool
              <span className="block italic text-gradient">Modernisation</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto mb-8">
              Bring new life to an older pool with comprehensive upgrades. 
              From LED lighting to new fittings, we transform ageing pools into modern showpieces.
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

      {/* Upgrade Options */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Upgrade Options</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                Modernisation <span className="italic text-gradient">Services</span>
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Choose individual upgrades or combine multiple services for a complete pool transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upgrades.map((upgrade, index) => (
                <Card key={index} className="glass border-border/30 overflow-hidden card-hover">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <upgrade.icon className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{upgrade.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/60 mb-6">{upgrade.description}</p>
                    <ul className="space-y-2">
                      {upgrade.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-3">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-foreground/70 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Why Modernise</p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                  Benefits of <span className="italic text-gradient">Upgrading</span>
                </h2>
                <p className="text-lg text-foreground/60 mb-8">
                  Pool modernisation isn't just about aesthetics — it's an investment that 
                  pays dividends in property value, efficiency, and enjoyment.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-border/30 shadow-2xl">
                  <Image
                    src="/services/pool-modernisation/pool-modernisation-hero.png"
                    alt="Modern luxury pool with LED lighting and contemporary upgrades"
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

      {/* Signs for Modernisation */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Is It Time?</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                Signs Your Pool Needs <span className="italic text-gradient">Modernisation</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Pool is 15+ years old",
                "Outdated equipment and fittings",
                "Inefficient lighting or heating",
                "Worn steps or seating areas",
                "Dated appearance",
                "High maintenance costs",
                "Safety concerns",
                "Want to increase property value"
              ].map((sign, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-xl glass border-border/30">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">{sign}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Modernisation Process */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Our Approach</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                How It <span className="italic text-gradient">Works</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              {[
                { step: 1, title: "Consultation", description: "We assess your pool and discuss your vision for the upgrade." },
                { step: 2, title: "Custom Plan", description: "We create a tailored modernisation plan to match your needs and budget." },
                { step: 3, title: "Professional Work", description: "Our expert team completes all upgrades to the highest standard." },
                { step: 4, title: "Quality Check", description: "Comprehensive inspection and handover of your transformed pool." }
              ].map((item, index) => (
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
              { title: "Fibreglass Resurfacing", href: "/services/fibreglass-resurfacing", description: "Complete pool surface renovation" },
              { title: "Gelcoat Recolouring", href: "/services/gelcoat-recolouring", description: "Fresh, vibrant colours for your pool" },
              { title: "Structural Repairs", href: "/services/structural-repairs", description: "Fix cracks, leaks and damage" }
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
              Ready to <span className="italic text-gradient">Modernise?</span>
            </h2>
            <p className="text-lg text-foreground/60 mb-10">
              Get a free consultation and discover the possibilities for your pool upgrade.
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
