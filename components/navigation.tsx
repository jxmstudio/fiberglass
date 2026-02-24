"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/whyfibreglass", label: "Why Fibreglass?" },
  { href: "/process", label: "Our Process" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border/50 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/fevicon version-01.png" 
                alt="Fibreglass Technologies NZ - Pool Resurfacing Specialists" 
                width={44} 
                height={44}
                priority
              />
            </div>
            <span className="text-xl font-bold tracking-tight hidden sm:block">
              <span className="text-primary">Fibreglass</span>
              <span className="text-foreground/80"> Technologies</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 hover:text-primary ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-foreground/70"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
            <Button asChild className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              <Link href="/contact">Free Assessment</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-foreground hover:text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass rounded-2xl p-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-lg font-medium transition-colors hover:text-primary ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-foreground/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Free Assessment
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
