declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function generateEventId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

export function trackEvent(
  eventName: string,
  customData?: Record<string, unknown>,
) {
  const eventId = generateEventId();

  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, customData ?? {}, { eventID: eventId });
  }

  fetch("/api/meta-events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event_name: eventName,
      event_id: eventId,
      event_source_url: typeof window !== "undefined" ? window.location.href : undefined,
      custom_data: customData,
    }),
  }).catch(() => {});
}
