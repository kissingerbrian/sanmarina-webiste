"use client";

import { siteConfig } from "@/lib/seo";
import { trackEvent } from "@/lib/analytics";

export function MobileStickyCta() {
  return (
    <div className="safe-px border-border bg-bg-elevated/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur-sm sm:hidden">
      <div
        className="mx-auto grid max-w-6xl grid-cols-2 gap-2 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
        role="group"
        aria-label="Quick contact actions"
      >
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          className="bg-accent font-display inline-flex min-h-11 items-center justify-center rounded-lg px-3 text-sm font-semibold text-white"
          rel="noopener noreferrer"
          target="_blank"
          onClick={() => trackEvent("whatsapp_clicked", { source: "sticky" })}
        >
          WhatsApp
        </a>
        <a
          href={`tel:${siteConfig.phone}`}
          className="border-border-strong text-ink font-display inline-flex min-h-11 items-center justify-center rounded-lg border bg-white px-3 text-sm font-semibold"
          onClick={() => trackEvent("phone_clicked", { source: "sticky" })}
        >
          Call
        </a>
      </div>
    </div>
  );
}
