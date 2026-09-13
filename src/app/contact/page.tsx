import type { Metadata } from "next";
import { ContactSection } from "@/components/SiteFooter";
import { SiteShell } from "@/components/SiteShell";
import { pageSeo } from "@/lib/content";
import { siteConfig } from "@/lib/seo";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: pageSeo.contact.title,
  description: pageSeo.contact.description,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <SiteShell mainLabel="Contact SM Solar & Electrical">
      <section className="safe-px pt-10 sm:pt-14">
        <div className="mx-auto max-w-6xl">
          <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Contact
          </p>
          <h1 className="font-display text-ink mt-3 text-[clamp(1.8rem,4.5vw,2.6rem)] font-bold tracking-tight text-balance">
            Let&apos;s discuss your power needs
          </h1>
          <p className="text-muted mt-3 max-w-2xl text-pretty">
            Have a quick question? Call or WhatsApp an engineer on{" "}
            <a
              className="text-accent font-semibold underline-offset-2 hover:underline"
              href={`tel:${siteConfig.phone}`}
            >
              {siteConfig.phoneDisplay}
            </a>
            .
          </p>
          <div className="mt-5">
            <Button href={`https://wa.me/${siteConfig.whatsapp}`}>
              WhatsApp an engineer
            </Button>
          </div>
        </div>
      </section>
      <ContactSection />
    </SiteShell>
  );
}
