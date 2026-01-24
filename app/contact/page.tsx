"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Mail, MapPin, CheckCircle2, ArrowRight, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  location: z.string().min(2, "Please enter your location"),
  message: z.string().min(10, "Please provide more details about your project"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your form. Please try again.");
    }
  };

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
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Get Started</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6">
              Free Site
              <span className="block italic text-gradient">Assessment</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto">
              Ready to transform your pool? Contact us today for a free, no-obligation assessment.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="glass border-border/30">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    <CardDescription className="text-foreground/60">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {submitted ? (
                      <div className="flex flex-col items-center justify-center py-16 text-center">
                        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                          <CheckCircle2 className="h-10 w-10 text-primary" />
                        </div>
                        <h3 className="font-display text-2xl mb-2">Thank You!</h3>
                        <p className="text-foreground/60">
                          We've received your enquiry and will contact you shortly.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-foreground/80">Full Name *</Label>
                            <Input
                              id="name"
                              {...register("name")}
                              placeholder="John Smith"
                              className={`bg-secondary/30 border-border/30 focus:border-primary ${errors.name ? "border-destructive" : ""}`}
                            />
                            {errors.name && (
                              <p className="text-sm text-destructive">{errors.name.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-foreground/80">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              {...register("email")}
                              placeholder="john@example.com"
                              className={`bg-secondary/30 border-border/30 focus:border-primary ${errors.email ? "border-destructive" : ""}`}
                            />
                            {errors.email && (
                              <p className="text-sm text-destructive">{errors.email.message}</p>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-foreground/80">Phone Number *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              {...register("phone")}
                              placeholder="021 123 4567"
                              className={`bg-secondary/30 border-border/30 focus:border-primary ${errors.phone ? "border-destructive" : ""}`}
                            />
                            {errors.phone && (
                              <p className="text-sm text-destructive">{errors.phone.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="location" className="text-foreground/80">Location *</Label>
                            <Input
                              id="location"
                              {...register("location")}
                              placeholder="Auckland"
                              className={`bg-secondary/30 border-border/30 focus:border-primary ${errors.location ? "border-destructive" : ""}`}
                            />
                            {errors.location && (
                              <p className="text-sm text-destructive">{errors.location.message}</p>
                            )}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-foreground/80">Tell Us About Your Project *</Label>
                          <Textarea
                            id="message"
                            {...register("message")}
                            placeholder="Describe your pool condition, what you'd like to achieve, and any questions..."
                            rows={6}
                            className={`bg-secondary/30 border-border/30 focus:border-primary ${errors.message ? "border-destructive" : ""}`}
                          />
                          {errors.message && (
                            <p className="text-sm text-destructive">{errors.message.message}</p>
                          )}
                        </div>

                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full rounded-full bg-primary hover:bg-primary/90" 
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            "Sending..."
                          ) : (
                            <>
                              Send Enquiry
                              <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="glass border-border/30">
                  <CardHeader>
                    <CardTitle className="text-xl">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      { icon: Phone, label: "Phone", value: "0800 POOL FIX", subtext: "(0800 766 5349)" },
                      { icon: Mail, label: "Email", value: "info@fibreglasstech.co.nz" },
                      { icon: MapPin, label: "Service Area", value: "Nationwide", subtext: "Mobile service available" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground/80">{item.label}</p>
                          <p className="text-foreground/60">{item.value}</p>
                          {item.subtext && <p className="text-sm text-foreground/40">{item.subtext}</p>}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="glass border-border/30">
                  <CardHeader>
                    <CardTitle className="text-xl">What Happens Next?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      "We'll review your enquiry and contact you within 24 hours.",
                      "We'll schedule a convenient time for your free site assessment.",
                      "You'll receive a detailed quote with no hidden costs."
                    ].map((step, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-sm font-bold text-primary-foreground">
                          {index + 1}
                        </div>
                        <p className="text-foreground/60 text-sm leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Nationwide</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              We Come to <span className="italic text-gradient">You</span>
            </h2>
            <p className="text-lg text-foreground/60">
              Our mobile service capability means we can bring premium fibreglass pool renovations 
              to your location, wherever you are in New Zealand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Free Assessment", description: "No obligation, no pressure. Just expert advice." },
              { title: "Transparent Pricing", description: "Clear quotes with no hidden costs." },
              { title: "Expert Service", description: "Professional technicians with years of experience." }
            ].map((item, index) => (
              <Card key={index} className="glass border-border/30 card-hover text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/60">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
