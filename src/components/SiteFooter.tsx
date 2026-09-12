import { company, navLinks } from "@/lib/content";
import { siteConfig } from "@/lib/seo";
import { BrandLogo } from "@/components/BrandLogo";
import { ContactForm } from "@/components/ContactForm";
import { Panel } from "@/components/Panel";
import Link from "next/link";

export function ContactSection() {
  const mapsQuery = encodeURIComponent(
    `${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, Kenya`,
  );

  return (
    <section
      id="contact"
      className="safe-px section-y border-border scroll-mt-20 border-t"
      aria-labelledby="contact-heading"
      aria-describedby="contact-intro"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-2xl">
          <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="font-display text-ink mt-3 text-[clamp(1.5rem,3.2vw,2rem)] font-bold tracking-tight text-balance"
          >
            Talk to an engineer. Request a site assessment.
          </h2>
          <p
            id="contact-intro"
            className="text-muted mt-3 text-[clamp(0.95rem,2.1vw,1.05rem)] leading-relaxed text-pretty"
          >
            Share a few details about your home or business in Kisumu or
            elsewhere in Kenya — {company.shortName} will follow up with clear
            next steps.
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.75fr)] lg:gap-8">
          <Panel className="p-5 sm:p-8">
            <ContactForm />
          </Panel>

          <aside
            className="brand-card flex flex-col gap-5 p-6 sm:p-7"
            aria-label="San Marina contact details"
            itemScope
            itemType="https://schema.org/LocalBusiness"
          >
            <meta itemProp="name" content={siteConfig.name} />
            <BrandLogo size="footer" />
            <div>
              <h3 className="font-display text-ink text-base font-semibold">
                Visit or call
              </h3>
              <address
                className="text-muted mt-3 text-sm leading-relaxed text-pretty not-italic"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <span itemProp="streetAddress">
                  {siteConfig.address.streetAddress}
                </span>
                <br />
                <span itemProp="addressLocality">
                  {siteConfig.address.addressLocality}
                </span>
                , Kenya
              </address>
              <p className="mt-4 space-y-1 text-sm">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-accent focus-visible:outline-accent block font-semibold underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  itemProp="telephone"
                >
                  {siteConfig.phoneDisplay}
                </a>
                <a
                  href={`tel:${siteConfig.phoneAlt}`}
                  className="text-accent focus-visible:outline-accent block font-semibold underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {siteConfig.phoneAltDisplay}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-accent focus-visible:outline-accent block font-semibold underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  itemProp="email"
                >
                  {siteConfig.email}
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  className="text-accent focus-visible:outline-accent mt-2 inline-flex font-semibold underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  WhatsApp an engineer
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                  className="text-muted focus-visible:outline-accent mt-2 inline-flex text-xs underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Open in Google Maps
                </a>
              </p>
            </div>
            <p className="text-muted border-border border-t pt-4 text-sm">
              {company.proofLine}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="safe-px border-border bg-bg-elevated border-t pt-10 pb-[max(2.5rem,env(safe-area-inset-bottom))]"
      aria-labelledby="footer-heading"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,0.8fr)]">
          <div className="max-w-md">
            <Link
              href="/"
              className="focus-visible:outline-accent inline-flex rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              aria-label={`${company.name} — home`}
            >
              <BrandLogo size="footer" />
            </Link>
            <h2
              id="footer-heading"
              className="font-display text-ink mt-4 text-base font-semibold"
              itemProp="name"
            >
              {company.name}
            </h2>
            <p
              className="text-muted mt-2 text-sm leading-relaxed text-pretty"
              itemProp="description"
            >
              Solar company and electrical engineering firm in Kisumu, Kenya —{" "}
              {company.brandLine}. {company.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-display text-ink text-sm font-semibold">
              Explore
            </h3>
            <nav aria-label="Footer" className="mt-3">
              <ul className="flex flex-col gap-2" role="list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-muted hover:text-accent focus-visible:outline-accent inline-flex min-h-9 items-center text-sm underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="font-display text-ink text-sm font-semibold">
              Contact
            </h3>
            <address className="text-muted mt-3 space-y-2 text-sm leading-relaxed not-italic">
              <p>
                {siteConfig.address.streetAddress}
                <br />
                {siteConfig.address.addressLocality}, Kenya
              </p>
              <p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-accent underline-offset-2 hover:underline"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-accent underline-offset-2 hover:underline"
                  itemProp="email"
                >
                  {siteConfig.email}
                </a>
              </p>
            </address>
          </div>
        </div>
        <p className="text-muted border-border border-t pt-4 text-xs">
          <span aria-hidden="true">© {year} </span>
          <span className="sr-only">Copyright {year} </span>
          {company.name}. Solar installation Kisumu · Electrical engineering
          Kenya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
