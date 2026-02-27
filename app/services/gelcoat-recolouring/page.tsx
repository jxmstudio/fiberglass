import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Palette, Sun, Sparkles, Shield } from "lucide-react";

import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fibreglasstech.co.nz';

export const metadata: Metadata = {
  title: "Pool Gelcoat Recolouring NZ | UV Stable Pool Colours",
  description: "Professional gelcoat recolouring for fibreglass pools across New Zealand. UV stable, fade-resistant pool colours. Ice Blue, Pacific Blue, Charcoal and more. Nationwide service.",
  keywords: ["gelcoat recolouring NZ", "pool colour change New Zealand", "fibreglass pool painting", "UV stable pool coating", "pool refinishing Auckland", "pool colour options NZ"],
  openGraph: {
    title: "Pool Gelcoat Recolouring NZ | Fibreglass Technologies",
    description: "Transform your pool with vibrant, UV stable gelcoat colours. Professional recolouring service across New Zealand.",
    url: `${siteUrl}/services/gelcoat-recolouring`,
    images: [{ url: "/clean.png", width: 1200, height: 630, alt: "Pool gelcoat recolouring NZ" }],
  },
  twitter: {
    title: "Pool Gelcoat Recolouring NZ | Fibreglass Technologies",
    description: "Transform your pool with vibrant, UV stable gelcoat colours. Nationwide NZ service.",
  },
  alternates: {
    canonical: `${siteUrl}/services/gelcoat-recolouring`,
  },
};

export default function GelcoatRecolouringPage() {
  const colours = [
    { name: "Ice Blue", description: "Classic light blue for a fresh, clean look" },
    { name: "Pacific Blue", description: "Deep ocean blue for a tropical feel" },
    { name: "Charcoal", description: "Modern dark grey for a sophisticated aesthetic" },
    { name: "White", description: "Crisp, bright white for maximum light reflection" },
    { name: "Lagoon Teal", description: "Vibrant teal for a unique, resort-style appearance" },
    { name: "Slate Grey", description: "Contemporary grey for a modern look" }
  ];

  const benefits = [
    {
      icon: Sun,
      title: "UV Stable",
      description: "Engineered to resist NZ's harsh UV rays and maintain colour vibrancy for years."
    },
    {
      icon: Shield,
      title: "Fade Resistant",
      description: "Premium pigments that won't fade, chalk or discolour over time."
    },
    {
      icon: Sparkles,
      title: "Easy Maintenance",
      description: "Smooth, non-porous finish makes cleaning quick and simple."
    },
    {
      icon: Palette,
      title: "Modern Colours",
      description: "Contemporary colour options to match your outdoor aesthetic."
    }
  ];

  const process = [
    "Surface preparation and cleaning",
    "Sanding and scuffing for adhesion",
    "Application of primer coat",
    "Multiple gelcoat colour coats",
    "UV protective topcoat application",
    "Quality inspection and finish"
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
              <Palette className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">Colour Transformation</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6">
              Gelcoat
              <span className="block italic text-gradient">Recolouring</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto mb-8">
              Refresh the look of your pool with modern, vibrant colour options that are 
              easy to maintain and built for New Zealand's harsh sun.
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

      {/* Colour Options */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Colour Selection</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                Popular <span className="italic text-gradient">Colours</span>
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Choose from our range of premium gelcoat colours, all engineered for UV stability 
                and long-lasting vibrancy in New Zealand conditions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {colours.map((colour, index) => (
                <Card key={index} className="glass border-border/30 card-hover">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/30 border-2 border-primary/50" />
                      <CardTitle className="text-xl">{colour.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/60">{colour.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <p className="text-center text-foreground/50 mt-8">
              Custom colours available on request. Contact us to discuss your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Why Gelcoat</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              Built for <span className="italic text-gradient">NZ Conditions</span>
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

      {/* Process */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-border/30 shadow-2xl">
                  <Image
                    src="/services/gelcoat-recolouring/gelcoat-recolouring-hero.png"
                    alt="Pool gelcoat colour samples and options in New Zealand"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Our Approach</p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                  The Recolouring <span className="italic text-gradient">Process</span>
                </h2>
                <p className="text-lg text-foreground/60 mb-8">
                  Our professional recolouring process ensures a flawless, long-lasting finish 
                  that will look stunning for years to come.
                </p>
                <ul className="space-y-4">
                  {process.map((item, index) => (
                    <li key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-sm font-bold text-primary-foreground">
                        {index + 1}
                      </div>
                      <span className="text-foreground/80 pt-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Application */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Expert Application</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                Professional <span className="italic text-gradient">Craftsmanship</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/30 shadow-lg">
                <Image
                  src="/services/gelcoat-recolouring/gelcoat-spraying-process.png"
                  alt="Professional gelcoat spray application on fibreglass pool in New Zealand"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/30 shadow-lg">
                <Image
                  src="/services/gelcoat-recolouring/gelcoat-recolouring-hero.png"
                  alt="Pool gelcoat colour samples and options in New Zealand"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Recolour */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Is It Time?</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                Signs Your Pool Needs <span className="italic text-gradient">Recolouring</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Faded or washed-out colour",
                "Chalky surface texture",
                "Staining that won't clean",
                "Outdated colour you want to change",
                "Surface discolouration",
                "UV damage visible"
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
              Ready for a <span className="italic text-gradient">New Look?</span>
            </h2>
            <p className="text-lg text-foreground/60 mb-10">
              Get a free consultation and discover the perfect colour for your pool.
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
