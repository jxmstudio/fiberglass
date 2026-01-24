import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Droplets, Wrench, Sun, Palette, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Why Fibreglass? | Fibreglass Technologies",
  description: "Discover why fibreglass is the best long-term choice for pool renovations. Durability, low maintenance, and superior performance in NZ conditions.",
};

export default function WhyFibreglassPage() {
  const benefits = [
    {
      icon: Shield,
      title: "Durability That Lasts",
      description: "Fibreglass is highly resistant to cracking, leaks, UV damage, chemical erosion, and osmosis issues. A properly applied fibreglass finish can last 15–25 years."
    },
    {
      icon: Droplets,
      title: "Smooth, Safe Surface",
      description: "Unlike plaster or concrete, fibreglass is smooth underfoot, gentle on skin, and prevents algae from embedding in the pool surface."
    },
    {
      icon: Wrench,
      title: "Low Maintenance",
      description: "Fibreglass pools require fewer chemicals, less scrubbing, less ongoing maintenance, and lower operating costs."
    },
    {
      icon: Zap,
      title: "Fast, Onsite Application",
      description: "No pool removal. No lengthy shutdown. Fibreglass can be installed quickly and efficiently using our mobile spraying system."
    },
    {
      icon: Sun,
      title: "Ideal for NZ Weather",
      description: "Fibreglass expands and contracts without cracking, making it ideal for frost-prone regions, high UV exposure, and ground movement."
    },
    {
      icon: Palette,
      title: "Beautiful Modern Colours",
      description: "Gelcoat technology offers crisp, modern colours with deep, rich finishes that stay looking new for years."
    }
  ];

  const comparisons = [
    { feature: "Lifespan", fibreglass: "15-25 years", traditional: "5-10 years" },
    { feature: "Maintenance", fibreglass: "Low", traditional: "High" },
    { feature: "Surface Feel", fibreglass: "Smooth", traditional: "Rough" },
    { feature: "Chemical Use", fibreglass: "Reduced", traditional: "High" },
    { feature: "Algae Resistance", fibreglass: "High", traditional: "Low" },
    { feature: "Climate Resistance", fibreglass: "Excellent", traditional: "Moderate" }
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
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">The Gold Standard</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6">
              Why Choose
              <span className="block italic text-gradient">Fibreglass?</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto">
              Strong, flexible, waterproof, and low-maintenance. Here's why more New Zealand 
              pool owners are upgrading to fibreglass.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Benefits Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Benefits</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              The Fibreglass <span className="italic text-gradient">Advantage</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="glass border-border/30 card-hover">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/60 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Comparison</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              Fibreglass vs <span className="italic text-gradient">Traditional</span>
            </h2>
          </div>
          
          <Card className="glass border-border/30 max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/30 bg-primary/5">
                      <th className="text-left p-6 font-semibold text-foreground/80">Feature</th>
                      <th className="text-left p-6 font-semibold text-primary">Fibreglass</th>
                      <th className="text-left p-6 font-semibold text-foreground/50">Traditional</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisons.map((comparison, index) => (
                      <tr key={index} className="border-b border-border/20 last:border-0">
                        <td className="p-6 font-medium text-foreground/80">{comparison.feature}</td>
                        <td className="p-6 text-primary font-medium">{comparison.fibreglass}</td>
                        <td className="p-6 text-foreground/50">{comparison.traditional}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Your Investment</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              Why This <span className="italic text-gradient">Matters</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Long Term Investment",
                description: "You won't need to worry about resurfacing again for 15-25 years, giving you peace of mind and protecting your property value."
              },
              {
                title: "Less Time, Less Money",
                description: "Reduced chemical use saves money and is better for your family. More time enjoying your pool, less time maintaining it."
              },
              {
                title: "Superior Experience",
                description: "The smooth finish feels better underfoot and is gentler on skin. Your pool becomes a true centerpiece."
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
              Experience the <span className="italic text-gradient">Difference</span>
            </h2>
            <p className="text-lg text-foreground/60 mb-10">
              See for yourself why fibreglass is the best choice. Get a free site assessment today.
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
