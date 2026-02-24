const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fibreglasstech.co.nz';

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Fibreglass Technologies",
  "url": siteUrl,
  "logo": `${siteUrl}/fevicon version-01.png`,
  "description": "New Zealand's leading fibreglass pool resurfacing specialists. Expert pool renovation, repairs & modernisation services nationwide.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+64-800-766-5349",
    "contactType": "customer service",
    "areaServed": "NZ",
    "availableLanguage": "English"
  },
  "sameAs": []
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Fibreglass Technologies",
  "url": siteUrl,
  "image": `${siteUrl}/clean.png`,
  "telephone": "0800 766 5349",
  "email": "info@fibreglasstech.co.nz",
  "description": "Premium fibreglass pool renovations across New Zealand. Expert resurfacing, repairs, and modernisation services.",
  "areaServed": {
    "@type": "Country",
    "name": "New Zealand"
  },
  "priceRange": "$$$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "100"
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Fibreglass Technologies",
  "url": siteUrl,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${siteUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Pool Resurfacing",
  "provider": {
    "@type": "Organization",
    "name": "Fibreglass Technologies",
    "url": siteUrl
  },
  "areaServed": {
    "@type": "Country",
    "name": "New Zealand"
  },
  "description": "Professional fibreglass pool resurfacing and renovation services across New Zealand"
};

export const poolResurfacingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Fibreglass Pool Resurfacing",
  "serviceType": "Pool Resurfacing",
  "provider": {
    "@type": "HomeAndConstructionBusiness",
    "name": "Fibreglass Technologies"
  },
  "areaServed": {
    "@type": "Country",
    "name": "New Zealand"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Pool Renovation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Full Fibreglass Resurfacing",
          "description": "Rebuild your pool's interior with a new, high strength fibreglass shell"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gelcoat Recolouring",
          "description": "Refresh the look of your pool with modern, vibrant colour options"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Structural & Leak Repairs",
          "description": "Repair cracks, leaks, osmosis blistering, and weak areas"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pool Modernisation",
          "description": "Comprehensive upgrades including LED lighting and new fittings"
        }
      }
    ]
  }
};

export interface FAQItem {
  question: string;
  answer: string;
}

export const createFAQSchema = (faqs: FAQItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const reviewSchema = (reviews: Array<{
  author: string;
  rating: number;
  text: string;
  location: string;
}>) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Fibreglass Technologies",
  "review": reviews.map(review => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating.toString(),
      "bestRating": "5"
    },
    "reviewBody": review.text
  }))
});
