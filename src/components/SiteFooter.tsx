import { company, navLinks } from "@/lib/content";
import { siteConfig } from "@/lib/seo";
import { Button } from "@/components/Button";
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
        <Panel className="p-6 sm:p-10" role="region">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div>
              <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
                Contact
              </p>
              <h2
                id="contact-heading"
                className="font-display text-ink mt-3 text-[clamp(1.4rem,3.2vw,1.85rem)] font-bold tracking-tight text-balance"
              >
                Start a serious conversation about your power systems.
              </h2>
              <p
                id="contact-intro"
                className="text-muted mt-3 max-w-xl text-[clamp(0.95rem,2.1vw,1.05rem)] leading-relaxed text-pretty"
              >
                New project, upgrade, or engineering advisory — {company.name}{" "}
                is ready to assess scope with clarity and technical discipline.
              </p>
              <div
                className="xs:flex-row xs:flex-wrap mt-8 flex flex-col gap-3"
                role="group"
                aria-label="Contact actions"
              >
                <Button
                  href={`mailto:${siteConfig.email}`}
                  className="xs:w-auto w-full"
                  aria-label={`Email ${company.name} at ${siteConfig.email}`}
                >
                  Email our team
                </Button>
                <Button
                  href="#capabilities"
                  variant="secondary"
                  className="xs:w-auto w-full"
                >
                  Review capabilities
                </Button>
              </div>
              <p className="text-muted mt-5 text-sm">
                <span className="sr-only">Email address: </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-accent focus-visible:outline-accent underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>

            <aside
              className="bg-bg-muted border-border border p-6"
              aria-label="Company summary"
            >
              <p className="font-display text-ink text-base font-semibold text-balance">
                {company.name}
              </p>
              <p className="text-muted mt-3 text-sm leading-relaxed text-pretty">
                {company.tagline}
              </p>
              <p className="text-muted mt-4 text-sm">{company.proofLine}</p>
            </aside>
          </div>
        </Panel>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="safe-px border-border bg-bg-elevated border-t pt-8 pb-[max(2rem,env(safe-area-inset-bottom))]"
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2
              id="footer-heading"
              className="font-display text-ink text-sm font-semibold"
            >
              {company.name}
            </h2>
            <p className="text-muted mt-1 max-w-md text-xs leading-relaxed text-pretty">
              {company.tagline}
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-4 gap-y-2" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-accent focus-visible:outline-accent inline-flex min-h-10 items-center text-xs underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
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
