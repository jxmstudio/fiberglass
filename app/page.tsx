import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ChevronDown, 
  Shield, 
  Award, 
  Truck, 
  Wrench, 
  Palette, 
  Droplets, 
  Zap, 
  Settings, 
  DollarSign,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Full Screen with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/Aquayo Pool in 4K - Cinematic Pool Video - CQ Media (1080p, h264).mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        </div>
        
        {/* Subtle Gold Accent Overlay */}
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-glow delay-500" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <div className="mx-auto max-w-5xl text-center">
            {/* Tagline */}
            <p className="animate-fade-in-up opacity-0 text-sm md:text-base uppercase tracking-[0.3em] text-primary mb-6">
              Renew • Reinforce • Reimagine
            </p>
            
            {/* Main Headline */}
            <h1 className="animate-fade-in-up opacity-0 delay-200 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.1] mb-8">
              <span className="text-white">Experience</span>
              <span className="block italic text-gradient">Excellence</span>
              <span className="block text-white/80 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">in Pool Renovation</span>
          </h1>

            {/* Subtitle */}
            <p className="animate-fade-in-up opacity-0 delay-400 text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
              Transform your existing pool with New Zealand's leaders in fibreglass resurfacing. 
              State-of-the-art technology. Marine-grade materials. Nationwide service.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up opacity-0 delay-500 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground group"
              >
                <Link href="/contact" className="flex items-center">
                  Get Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 rounded-full border-white/30 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
              >
                <Link href="/process">Discover Our Process</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in opacity-0 delay-700">
          <div className="flex flex-col items-center text-white/60 scroll-indicator">
            <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
            <ChevronDown className="h-5 w-5" />
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "15-25", label: "Year Lifespan" },
              { value: "100%", label: "Mobile Service" },
              { value: "NZ", label: "Nationwide" },
              { value: "5★", label: "Quality Standard" },
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center p-6 rounded-2xl glass card-hover"
              >
                <p className="font-display text-3xl md:text-4xl text-primary font-semibold mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-foreground/60 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Value Proposition */}
      <section className="py-24 relative overflow-hidden water-ripple">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Why Choose Us</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              Engineered for <span className="italic text-gradient">Longevity</span>
            </h2>
            <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl mx-auto">
              If your pool is showing signs of wear — osmosis blisters, fading, leaks, rough surfaces, 
              cracks, or structural fatigue — our fibreglass renovation brings it back to life.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Settings,
                title: "State-of-the-Art Technology",
                description: "Commercial grade spraying systems with perfect resin to glass ratios and uniform application."
              },
              {
                icon: Shield,
                title: "Marine-Grade Materials",
                description: "The highest quality resins and fibreglass, engineered for UV resistance and long term durability."
              },
              {
                icon: Award,
                title: "Expert Craftsmanship",
                description: "Specialists trained in fibreglass construction with precision, care, and industry best practices."
              }
            ].map((feature, index) => (
              <Card key={feature.title} className="glass border-border/30 card-hover overflow-hidden group">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/60 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Our Services</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              What We <span className="italic text-gradient">Do</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Droplets,
                title: "Fibreglass Resurfacing",
                description: "Restore tired, rough, or damaged pools with a premium fibreglass finish.",
                delay: "delay-100"
              },
              {
                icon: Wrench,
                title: "Structural Repairs",
                description: "Fix cracks, osmosis blisters, weak spots, and long term leak issues.",
                delay: "delay-200"
              },
              {
                icon: Palette,
                title: "Gelcoat Recolouring",
                description: "Fresh, vibrant, UV stable colour options for a modern look.",
                delay: "delay-300"
              },
              {
                icon: Zap,
                title: "Pool Modernisation",
                description: "Transform ageing pools with LED lighting, new fittings, and more.",
                delay: "delay-400"
              },
              {
                icon: Truck,
                title: "Nationwide Mobile",
                description: "Auckland → Wellington → Christchurch → Queenstown → Everywhere.",
                delay: "delay-500"
              },
              {
                icon: Sparkles,
                title: "Quality Guarantee",
                description: "Premium standard finish that meets our exacting specifications.",
                delay: "delay-600"
              }
            ].map((service, index) => (
              <div 
                key={service.title} 
                className={`group p-6 rounded-2xl glass border-border/30 card-hover`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="rounded-full border-foreground/20 hover:bg-foreground/5">
              <Link href="/services" className="flex items-center">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Why Choose Us - Detailed */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">The Difference</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-8">
                Built to <span className="italic text-gradient">Last</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  "Precise resin to glass ratios for superior strength",
                  "Uniform spray coverage with commercial grade equipment",
                  "Marine grade resins engineered for NZ conditions",
                  "15-25 year lifespan with proper care",
                  "Transparent pricing with no hidden costs",
                  "Nationwide mobile service delivery"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-foreground/80">{item}</p>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="mt-10 rounded-full bg-primary hover:bg-primary/90">
                <Link href="/whyfibreglass" className="flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-border/30 shadow-2xl">
                <Image
                  src="/clean.png"
                  alt="Professional fibreglass pool resurfacing in action"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
        <div className="absolute inset-0 hero-gradient opacity-50" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Get Started</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6">
              Ready to <span className="italic text-gradient">Transform</span> Your Pool?
            </h2>
            <p className="text-lg text-foreground/60 mb-4 max-w-2xl mx-auto">
              Get a free site assessment and project estimate from our nationwide team.
            </p>
            <p className="font-display text-2xl italic text-primary/80 mb-10">
              Strong. Seamless. Stylish.
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
