"use client";

import { ReactNode } from "react";
import { trackPhoneClick, trackEmailClick } from "@/lib/gtm";

interface TrackedPhoneLinkProps {
  phoneNumber: string;
  displayText?: string;
  children?: ReactNode;
  className?: string;
}

export function TrackedPhoneLink({ 
  phoneNumber, 
  displayText, 
  children, 
  className = "" 
}: TrackedPhoneLinkProps) {
  const handleClick = () => {
    trackPhoneClick(phoneNumber);
  };

  const formattedPhone = phoneNumber.replace(/\s/g, "");
  const href = formattedPhone.startsWith("+") || formattedPhone.startsWith("0800")
    ? `tel:${formattedPhone}`
    : `tel:+64${formattedPhone.replace(/^0/, "")}`;

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
    >
      {children || displayText || phoneNumber}
    </a>
  );
}

interface TrackedEmailLinkProps {
  email: string;
  displayText?: string;
  children?: ReactNode;
  className?: string;
  subject?: string;
}

export function TrackedEmailLink({ 
  email, 
  displayText, 
  children, 
  className = "",
  subject = ""
}: TrackedEmailLinkProps) {
  const handleClick = () => {
    trackEmailClick(email);
  };

  const href = subject 
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${email}`;

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
    >
      {children || displayText || email}
    </a>
  );
}
