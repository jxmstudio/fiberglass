export interface UTMParams {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
}

export interface AttributionData extends UTMParams {
  first_visit_source: string;
  first_visit_timestamp: string;
  landing_page: string;
  referrer: string;
}

const UTM_STORAGE_KEY = 'fibreglasstech_utm';
const ATTRIBUTION_STORAGE_KEY = 'fibreglasstech_attribution';

export function getUTMParams(): UTMParams {
  if (typeof window === 'undefined') {
    return {
      utm_source: '',
      utm_medium: '',
      utm_campaign: '',
      utm_term: '',
      utm_content: '',
    };
  }

  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_term: params.get('utm_term') || '',
    utm_content: params.get('utm_content') || '',
  };
}

export function hasUTMParams(): boolean {
  const params = getUTMParams();
  return !!(params.utm_source || params.utm_medium || params.utm_campaign);
}

export function storeUTMParams(): void {
  if (typeof window === 'undefined') return;

  const currentParams = getUTMParams();
  if (hasUTMParams()) {
    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(currentParams));
  }
}

export function getStoredUTMParams(): UTMParams {
  if (typeof window === 'undefined') {
    return {
      utm_source: '',
      utm_medium: '',
      utm_campaign: '',
      utm_term: '',
      utm_content: '',
    };
  }

  const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return getUTMParams();
    }
  }
  return getUTMParams();
}

export function storeFirstTouchAttribution(): void {
  if (typeof window === 'undefined') return;

  const existingAttribution = localStorage.getItem(ATTRIBUTION_STORAGE_KEY);
  if (existingAttribution) return;

  const utmParams = getUTMParams();
  const attribution: AttributionData = {
    ...utmParams,
    first_visit_source: document.referrer || 'direct',
    first_visit_timestamp: new Date().toISOString(),
    landing_page: window.location.pathname,
    referrer: document.referrer || '',
  };

  localStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(attribution));
}

export function getFirstTouchAttribution(): AttributionData | null {
  if (typeof window === 'undefined') return null;

  const stored = localStorage.getItem(ATTRIBUTION_STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return null;
    }
  }
  return null;
}

export function getAttributionForForm(): Partial<AttributionData> {
  const currentUTM = getStoredUTMParams();
  const firstTouch = getFirstTouchAttribution();

  return {
    utm_source: currentUTM.utm_source || firstTouch?.utm_source || '',
    utm_medium: currentUTM.utm_medium || firstTouch?.utm_medium || '',
    utm_campaign: currentUTM.utm_campaign || firstTouch?.utm_campaign || '',
    utm_term: currentUTM.utm_term || firstTouch?.utm_term || '',
    utm_content: currentUTM.utm_content || firstTouch?.utm_content || '',
    first_visit_source: firstTouch?.first_visit_source || document.referrer || 'direct',
    landing_page: firstTouch?.landing_page || window.location.pathname,
    referrer: document.referrer || '',
  };
}

export function initializeTracking(): void {
  if (typeof window === 'undefined') return;
  
  storeUTMParams();
  storeFirstTouchAttribution();
}
