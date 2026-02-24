"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { X } from "lucide-react";

const COOKIE_CONSENT_KEY = "fibreglasstech_cookie_consent";

type ConsentStatus = "pending" | "accepted" | "declined";

export function CookieConsent() {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>("pending");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored) {
      setConsentStatus(stored as ConsentStatus);
      setIsVisible(false);
    } else {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setConsentStatus("accepted");
    setIsVisible(false);
    
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "cookie_consent_update",
        cookie_consent: "accepted",
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setConsentStatus("declined");
    setIsVisible(false);
    
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "cookie_consent_update",
        cookie_consent: "declined",
      });
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible || consentStatus !== "pending") {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="mx-auto max-w-4xl">
        <div className="glass border border-border/30 rounded-2xl p-4 md:p-6 shadow-2xl">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-2">
                We value your privacy
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                We use cookies to enhance your browsing experience, analyse site traffic, and understand 
                where our visitors come from. By clicking "Accept", you consent to our use of cookies.{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Learn more
                </Link>
              </p>
            </div>
            <button
              onClick={handleClose}
              className="text-foreground/50 hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <Button
              onClick={handleAccept}
              className="rounded-full bg-primary hover:bg-primary/90"
            >
              Accept All
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              className="rounded-full border-foreground/20 hover:bg-foreground/5"
            >
              Decline Optional
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function getConsentStatus(): ConsentStatus {
  if (typeof window === "undefined") return "pending";
  const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
  return (stored as ConsentStatus) || "pending";
}

export function hasAnalyticsConsent(): boolean {
  return getConsentStatus() === "accepted";
}
