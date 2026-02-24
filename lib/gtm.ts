export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'page_view',
      page_path: url,
    });
  }
};

export const trackEvent = ({
  event,
  category,
  action,
  label,
  value,
  ...additionalParams
}: {
  event: string;
  category?: string;
  action?: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event,
      event_category: category,
      event_action: action,
      event_label: label,
      event_value: value,
      ...additionalParams,
    });
  }
};

export const trackFormSubmit = (formData: {
  form_name: string;
  form_id?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}) => {
  trackEvent({
    event: 'form_submit',
    category: 'Lead Generation',
    action: 'Form Submit',
    label: formData.form_name,
    ...formData,
  });
};

export const trackPhoneClick = (phoneNumber: string) => {
  trackEvent({
    event: 'phone_click',
    category: 'Lead Generation',
    action: 'Phone Click',
    label: phoneNumber,
    conversion_type: 'primary',
  });
};

export const trackEmailClick = (email: string) => {
  trackEvent({
    event: 'email_click',
    category: 'Lead Generation',
    action: 'Email Click',
    label: email,
    conversion_type: 'secondary',
  });
};

export const trackCTAClick = (ctaText: string, ctaLocation: string) => {
  trackEvent({
    event: 'cta_click',
    category: 'Engagement',
    action: 'CTA Click',
    label: ctaText,
    cta_location: ctaLocation,
  });
};

export const trackScrollDepth = (percentage: number) => {
  trackEvent({
    event: 'scroll_depth',
    category: 'Engagement',
    action: 'Scroll',
    label: `${percentage}%`,
    scroll_percentage: percentage,
  });
};

export const trackVideoEngagement = (action: 'play' | 'pause' | 'complete', videoTitle?: string) => {
  trackEvent({
    event: 'video_engagement',
    category: 'Engagement',
    action: `Video ${action.charAt(0).toUpperCase() + action.slice(1)}`,
    label: videoTitle || 'Hero Video',
    video_action: action,
  });
};
