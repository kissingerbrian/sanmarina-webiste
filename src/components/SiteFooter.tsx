import { company, navLinks } from "@/lib/content";
import { siteConfig } from "@/lib/seo";
import { BrandLogo } from "@/components/BrandLogo";
import { ContactForm } from "@/components/ContactForm";
import { Panel } from "@/components/Panel";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="safe-px section-y border-border scroll-mt-20 border-t"
      aria-labelledby="contact-heading"
      aria-describedby="contact-intro"
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
            Share a few details about your home or business —{" "}
            {company.shortName} will follow up with clear next steps.
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.75fr)] lg:gap-8">
          <Panel className="p-5 sm:p-8">
            <ContactForm />
          </Panel>

          <aside
            className="brand-card flex flex-col gap-5 p-6 sm:p-7"
            aria-label="Other ways to reach us"
          >
            <BrandLogo size="footer" />
            <div>
              <h3 className="font-display text-ink text-base font-semibold">
                Prefer to reach out directly?
              </h3>
              <p className="text-muted mt-2 text-sm leading-relaxed text-pretty">
                Email us and we’ll respond as soon as we can.
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-accent focus-visible:outline-accent mt-3 inline-flex text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {siteConfig.email}
              </a>
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
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md">
            <a
              href="#top"
              className="focus-visible:outline-accent inline-flex rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              aria-label={`${company.name} — back to top`}
            >
              <BrandLogo size="footer" />
            </a>
            <h2
              id="footer-heading"
              className="font-display text-ink mt-4 text-base font-semibold"
            >
              {company.name}
            </h2>
            <p className="text-muted mt-2 text-sm leading-relaxed text-pretty">
              {company.brandLine}. {company.tagline}
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-4 gap-y-2" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-accent focus-visible:outline-accent inline-flex min-h-10 items-center text-sm underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="text-muted border-border border-t pt-4 text-xs">
          <span aria-hidden="true">© {year} </span>
          <span className="sr-only">Copyright {year} </span>
          {company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
