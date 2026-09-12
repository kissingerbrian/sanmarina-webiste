export type AnalyticsEvent =
  | "site_assessment_submitted"
  | "whatsapp_clicked"
  | "phone_clicked"
  | "email_clicked"
  | "quotation_requested"
  | "project_viewed"
  | "solution_viewed"
  | "package_viewed";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  event: AnalyticsEvent,
  payload: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") return;

  const detail = { event, ...payload, ts: Date.now() };

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(detail);

  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
  }

  window.dispatchEvent(new CustomEvent("sanmarina:analytics", { detail }));
}
