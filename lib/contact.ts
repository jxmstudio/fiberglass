/**
 * Centralized contact information for Fibreglass Technologies NZ
 * 
 * Update these values in one place to change contact details site-wide.
 * 0508 FIBREGLASS = 0508 342 734
 */

export const CONTACT = {
  // Email
  EMAIL: "office@fibreglasstechnologies.co.nz",
  
  // Phone - Display version (branded)
  PHONE_DISPLAY: "0508 FIBREGLASS",
  
  // Phone - Numeric version for tel: links (0508 342 734)
  PHONE_TEL: "0508342734",
  
  // Formatted for tel: href
  get PHONE_HREF() {
    return `tel:${this.PHONE_TEL}`;
  },
  
  // Formatted for mailto: href
  get EMAIL_HREF() {
    return `mailto:${this.EMAIL}`;
  },
  
  // Service area
  SERVICE_AREA: "Nationwide",
  SERVICE_AREA_DETAIL: "Mobile service available across New Zealand",
  
  // Company details
  COMPANY_NAME: "Fibreglass Technologies",
  COMPANY_TAGLINE: "Built to Last. Finished to Perfection.",
  
  // Schema.org formatted phone (international)
  get PHONE_SCHEMA() {
    return `+64-${this.PHONE_TEL.substring(1)}`;
  },
} as const;

// Type for the contact object
export type ContactConfig = typeof CONTACT;
