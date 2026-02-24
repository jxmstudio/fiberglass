import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star, Quote, ArrowRight, MapPin } from "lucide-react";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fibreglasstech.co.nz';

export const metadata: Metadata = {
  title: "Pool Renovation Reviews NZ | Customer Testimonials",
  description: "Read what New Zealand pool owners say about Fibreglass Technologies. 100+ happy customers, 5-star reviews from Auckland to Queenstown. See real pool renovation results.",
  openGraph: {
    title: "Pool Renovation Reviews NZ | Fibreglass Technologies",
    description: "Read what New Zealand pool owners say about Fibreglass Technologies. 100+ happy customers, 5-star reviews nationwide.",
    url: `${siteUrl}/testimonials`,
    images: [{ url: "/clean.png", width: 1200, height: 630, alt: "Fibreglass pool renovation testimonials NZ" }],
  },
  twitter: {
    title: "Pool Renovation Reviews NZ | Fibreglass Technologies",
    description: "Read what New Zealand pool owners say about Fibreglass Technologies. 100+ happy customers, 5-star reviews.",
  },
  alternates: {
    canonical: `${siteUrl}/testimonials`,
  },
};

const testimonials = [
  {
    name: "Sarah & Mike Thompson",
    location: "Auckland",
    rating: 5,
    text: "Absolutely transformed our 20 year old pool! The team was professional from start to finish. The new fibreglass surface is so smooth and the colour is stunning. Can't believe it's the same pool.",
    project: "Full Resurfacing + Gelcoat Recolouring",
  },
  {
    name: "David Chen",
    location: "Wellington",
    rating: 5,
    text: "Had osmosis blistering issues for years. Fibreglass Technologies fixed everything and now our pool looks brand new. The nationwide service was incredibly convenient - they came to us!",
    project: "Structural Repairs + Resurfacing",
  },
  {
    name: "The Morrison Family",
    location: "Christchurch",
    rating: 5,
    text: "From the initial assessment to the final handover, everything was seamless. The team explained every step and the finish quality is exceptional. Highly recommend their services.",
    project: "Full Pool Renovation",
  },
  {
    name: "James & Lisa Patel",
    location: "Hamilton",
    rating: 5,
    text: "Our pool had multiple cracks and was leaking badly. The repair work was thorough and professional. Two years on and it's still perfect. Worth every dollar.",
    project: "Leak Repairs + Resurfacing",
  },
  {
    name: "Mark Richardson",
    location: "Tauranga",
    rating: 5,
    text: "The Pacific Blue colour we chose looks incredible. The gelcoat finish is so much easier to clean than our old concrete surface. The kids love it!",
    project: "Gelcoat Recolouring",
  },
  {
    name: "Emma & Robert Wilson",
    location: "Queenstown",
    rating: 5,
    text: "Living in the South Island, we were worried about finding quality pool services. Fibreglass Technologies travelled to us and delivered an amazing result. True nationwide service.",
    project: "Full Resurfacing",
  },
  {
    name: "Hotel Oceanview",
    location: "Napier",
    rating: 5,
    text: "As a commercial property, we needed minimal downtime. The team worked efficiently and our guests are now enjoying a stunning renovated pool. Professional service throughout.",
    project: "Commercial Pool Renovation",
  },
  {
    name: "The Anderson Family",
    location: "Dunedin",
    rating: 5,
    text: "After getting quotes from several companies, Fibreglass Technologies offered the best value with transparent pricing. No hidden costs and the result exceeded expectations.",
    project: "Full Renovation + LED Upgrade",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-glow delay-500" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Customer Stories</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6">
              What Our Clients
              <span className="block italic text-gradient">Say About Us</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what pool owners across New Zealand 
              have to say about their Fibreglass Technologies renovation experience.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "100+", label: "Happy Customers" },
              { value: "5★", label: "Average Rating" },
              { value: "NZ", label: "Nationwide" },
              { value: "15+", label: "Years Experience" },
            ].map((stat) => (
              <div 
                key={stat.label} 
                className="text-center p-6 rounded-2xl glass card-hover"
              >
                <p className="font-display text-2xl md:text-3xl text-primary font-semibold mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-foreground/60 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Testimonials Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="glass border-border/30 card-hover overflow-hidden group"
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author Info */}
                  <div className="border-t border-border/30 pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <div className="flex items-center text-foreground/50 text-sm mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      {testimonial.location}
                    </div>
                    <p className="text-primary text-sm mt-2">{testimonial.project}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
        <div className="absolute inset-0 hero-gradient opacity-50" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Join Our Happy Customers</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6">
              Ready to <span className="italic text-gradient">Transform</span> Your Pool?
            </h2>
            <p className="text-lg text-foreground/60 mb-10 max-w-2xl mx-auto">
              Get a free site assessment and discover why pool owners across New Zealand 
              trust Fibreglass Technologies for their renovations.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="text-lg px-10 py-7 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground group"
            >
              <Link href="/contact" className="flex items-center">
                Get Your Free Assessment
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
