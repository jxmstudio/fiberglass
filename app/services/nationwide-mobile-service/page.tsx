import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Truck, MapPin, Clock, Award } from "lucide-react";

import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fibreglasstech.co.nz';

export const metadata: Metadata = {
  title: "Nationwide Mobile Pool Service NZ | We Come to You",
  description: "Mobile fibreglass pool resurfacing service across all of New Zealand. From Auckland to Queenstown, we bring professional pool renovation directly to your property. Free site assessment.",
  keywords: ["mobile pool service NZ", "nationwide pool resurfacing", "pool service Auckland", "pool service Wellington", "pool service Christchurch", "fibreglass pool service New Zealand"],
  openGraph: {
    title: "Nationwide Mobile Pool Service | Fibreglass Technologies",
    description: "Mobile fibreglass pool service across all of New Zealand. We bring professional pool renovation directly to your property.",
    url: `${siteUrl}/services/nationwide-mobile-service`,
    images: [{ url: "/clean.png", width: 1200, height: 630, alt: "Nationwide mobile pool service NZ" }],
  },
  twitter: {
    title: "Nationwide Mobile Pool Service | Fibreglass Technologies",
    description: "Mobile fibreglass pool service across all of New Zealand. We come to you.",
  },
  alternates: {
    canonical: `${siteUrl}/services/nationwide-mobile-service`,
  },
};

export default function NationwideMobileServicePage() {
  const regions = [
    { region: "Northland", cities: ["Whangarei", "Kerikeri", "Paihia"] },
    { region: "Auckland", cities: ["Central Auckland", "North Shore", "South Auckland", "West Auckland"] },
    { region: "Waikato", cities: ["Hamilton", "Cambridge", "Tauranga", "Rotorua"] },
    { region: "Central North Island", cities: ["Taupo", "Napier", "Hastings", "Palmerston North"] },
    { region: "Wellington Region", cities: ["Wellington", "Lower Hutt", "Upper Hutt", "Kapiti Coast"] },
    { region: "South Island", cities: ["Nelson", "Christchurch", "Queenstown", "Dunedin"] }
  ];

  const benefits = [
    {
      icon: Truck,
      title: "Fully Equipped",
      description: "Our mobile units carry all equipment needed for professional fibreglass resurfacing."
    },
    {
      icon: MapPin,
      title: "We Come to You",
      description: "No need to transport your pool — we bring everything to your property."
    },
    {
      icon: Clock,
      title: "Efficient Service",
      description: "Complete projects on-site with minimal disruption to your property."
    },
    {
      icon: Award,
      title: "Same Quality",
      description: "The same premium quality and materials regardless of location."
    }
  ];

  const process = [
    {
      step: 1,
      title: "Contact Us",
      description: "Reach out via phone or our contact form. Share details about your pool and location."
    },
    {
      step: 2,
      title: "Site Assessment",
      description: "We'll schedule a free visit to inspect your pool and provide a detailed quote."
    },
    {
      step: 3,
      title: "Schedule Work",
      description: "Once approved, we'll book a convenient time to complete your project."
    },
    {
      step: 4,
      title: "Mobile Service",
      description: "Our fully equipped team arrives and completes your pool renovation on-site."
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
              <Truck className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">We Come to You</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6">
              Nationwide Mobile
              <span className="block italic text-gradient">Service</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto mb-8">
              Our fully equipped mobile fibreglass spraying system allows us to complete your 
              renovation on-site — anywhere in New Zealand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 px-8 py-6 text-lg">
                <Link href="/contact" className="flex items-center">
                  Get Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-foreground/20 px-8 py-6 text-lg">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Mobile Advantage</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                Why <span className="italic text-gradient">Mobile?</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Coverage</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                Areas We <span className="italic text-gradient">Service</span>
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                From the top of the North Island to the bottom of the South, we bring professional 
                fibreglass pool services to your location.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regions.map((region, index) => (
                <Card key={index} className="glass border-border/30">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{region.region}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {region.cities.map((city, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-secondary/50 text-foreground/70 text-sm">
                          {city}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <p className="text-center text-foreground/50 mt-8">
              Don't see your area? Contact us — we service all of New Zealand.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Simple Process</p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                  How It <span className="italic text-gradient">Works</span>
                </h2>
                <p className="text-lg text-foreground/60 mb-8">
                  Getting professional fibreglass pool services at your location is straightforward 
                  and hassle-free.
                </p>
                <div className="space-y-6">
                  {process.map((item, index) => (
                    <div key={index} className="flex items-start space-x-6">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 text-lg font-display font-bold text-primary-foreground">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                        <p className="text-foreground/60 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-border/30 shadow-2xl">
                  <Image
                    src="/clean.png"
                    alt="Mobile pool service across New Zealand"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Bring */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Fully Equipped</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                What We <span className="italic text-gradient">Bring</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Commercial grade spraying equipment",
                "Marine-grade resins and materials",
                "Full colour range of gelcoats",
                "Surface preparation tools",
                "Safety equipment",
                "Quality inspection instruments",
                "Professional finishing supplies",
                "Protective coverings for your property"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-xl glass border-border/30">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
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
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Our Services</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">
              What We <span className="italic text-gradient">Offer</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Fibreglass Resurfacing", href: "/services/fibreglass-resurfacing", description: "Complete surface renovation" },
              { title: "Gelcoat Recolouring", href: "/services/gelcoat-recolouring", description: "Vibrant new colours" },
              { title: "Structural Repairs", href: "/services/structural-repairs", description: "Fix cracks and leaks" },
              { title: "Pool Modernisation", href: "/services/pool-modernisation", description: "Complete upgrades" }
            ].map((service, index) => (
              <Link key={index} href={service.href} className="group">
                <Card className="glass border-border/30 card-hover h-full">
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/60 text-sm">{service.description}</p>
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
              Wherever You Are in <span className="italic text-gradient">NZ</span>
            </h2>
            <p className="text-lg text-foreground/60 mb-10">
              Get a free site assessment and quote for your pool renovation project.
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
