"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { TrackedPhoneLink, TrackedEmailLink } from "@/components/TrackedLinks";

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="flex-shrink-0">
                <Image 
                  src="/fevicon version-01.png" 
                  alt="Fibreglass Technologies NZ - Pool Resurfacing Specialists" 
                  width={40} 
                  height={40}
                  priority
                />
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-primary">Fibreglass</span>
                <span className="text-foreground/80"> Technologies</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Built to Last. Finished to Perfection. Premium fibreglass pool renovations across New Zealand.
            </p>
            <p className="font-display italic text-lg text-primary/80">
              &quot;Renew. Reinforce. Reimagine.&quot;
            </p>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/50">Services</h4>
            <ul className="space-y-3">
              {[
                { label: "Full Resurfacing", href: "/services" },
                { label: "Gelcoat Recolouring", href: "/services" },
                { label: "Structural Repairs", href: "/services" },
                { label: "Pool Modernisation", href: "/services" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/50">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "Why Fibreglass?", href: "/whyfibreglass" },
                { label: "Our Process", href: "/process" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Contact Us", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/50">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-muted-foreground">
                <div className="p-2 rounded-full bg-primary/10">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <TrackedPhoneLink 
                  phoneNumber="0800 766 5349" 
                  displayText="0800 POOL FIX"
                  className="hover:text-primary transition-colors"
                />
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <div className="p-2 rounded-full bg-primary/10">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <TrackedEmailLink 
                  email="info@fibreglasstech.co.nz"
                  className="hover:text-primary transition-colors"
                />
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <div className="p-2 rounded-full bg-primary/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span>Nationwide Service</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Fibreglass Technologies. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Premium Pool Renovations • Nationwide NZ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
