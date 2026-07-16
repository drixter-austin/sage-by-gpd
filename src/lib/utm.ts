const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

const STORAGE_KEY = "sage_utm";

export type UtmParams = Partial<Record<(typeof UTM_KEYS)[number], string>>;

export function captureUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};

  const url = new URL(window.location.href);
  const params: UtmParams = {};
  let hasUtm = false;

  for (const key of UTM_KEYS) {
    const value = url.searchParams.get(key);
    if (value) {
      params[key] = value;
      hasUtm = true;
    }
  }

  if (hasUtm) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
    return params;
  }

  const stored = sessionStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : {};
}

export function getUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};
  const stored = sessionStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : {};
}

export function buildCalendlyUtmQuery(utm: UtmParams): string {
  const parts: string[] = [];
  for (const key of UTM_KEYS) {
    if (utm[key]) {
      parts.push(`${key}=${encodeURIComponent(utm[key]!)}`);
    }
  }
  return parts.length > 0 ? `&${parts.join("&")}` : "";
}
