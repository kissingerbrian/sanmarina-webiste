import type { Metadata } from "next";
import { ContactSection } from "@/components/SiteFooter";
import { SiteShell } from "@/components/SiteShell";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact SM Solar & Electrical | Kisumu, Kenya",
  description:
    "Request a site assessment from San Marina Engineering in Kisumu. Solar, critical power and electrical engineering for homes and businesses across Kenya.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <SiteShell mainLabel="Contact San Marina Engineering">
      <div className="safe-px pt-10 sm:pt-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-muted text-sm">
            Call{" "}
            <a
              className="text-accent font-semibold underline-offset-2 hover:underline"
              href={`tel:${siteConfig.phone}`}
            >
              {siteConfig.phoneDisplay}
            </a>{" "}
            or WhatsApp an engineer anytime.
          </p>
        </div>
      </div>
      <ContactSection />
    </SiteShell>
  );
}
