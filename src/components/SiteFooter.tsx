import { company, navLinks } from "@/lib/content";
import { siteConfig } from "@/lib/seo";
import { NeuButton } from "@/components/NeuButton";
import { NeuSurface } from "@/components/NeuSurface";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="safe-px xs:py-10 scroll-mt-[max(6rem,calc(env(safe-area-inset-top)+5rem))] py-8 sm:py-12 md:py-14"
      aria-labelledby="contact-heading"
      aria-describedby="contact-intro"
    >
      <div className="mx-auto max-w-6xl">
        <NeuSurface
          className="xs:p-6 overflow-hidden p-4 sm:p-8 md:p-10"
          role="region"
        >
          <div className="xs:gap-8 grid items-center gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div>
              <h2
                id="contact-heading"
                className="font-display text-neu-text text-[clamp(1.35rem,3.5vw,1.875rem)] font-bold tracking-tight text-balance"
              >
                Get in touch
              </h2>
              <p
                id="contact-intro"
                className="text-neu-muted mt-3 max-w-xl text-[clamp(0.95rem,2.2vw,1.05rem)] leading-relaxed text-pretty"
              >
                Planning a new project, upgrading an existing installation, or
                seeking expert engineering advice? {company.name} is ready to
                help with solar, critical power, and electrical systems.
              </p>
              <div
                className="xs:mt-8 xs:flex-row xs:flex-wrap xs:gap-4 mt-6 flex flex-col gap-3"
                role="group"
                aria-label="Contact actions"
              >
                <NeuButton
                  href={`mailto:${siteConfig.email}`}
                  className="xs:w-auto w-full"
                  aria-label={`Email ${company.name} at ${siteConfig.email}`}
                >
                  Email our team
                </NeuButton>
                <NeuButton
                  href="#services"
                  variant="soft"
                  className="xs:w-auto w-full"
                >
                  Review services
                </NeuButton>
              </div>
              <p className="text-neu-muted mt-4 text-sm">
                <span className="sr-only">Email address: </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-neu-accent focus-visible:outline-neu-accent underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>

            <aside
              className="neu-inset xs:rounded-3xl xs:p-6 rounded-2xl p-5 text-center sm:p-8"
              aria-label="Company summary"
            >
              <p className="font-display text-neu-text xs:text-lg text-base font-semibold text-balance">
                {company.name}
              </p>
              <p className="text-neu-muted mt-3 text-sm leading-relaxed text-pretty">
                {company.tagline}
              </p>
            </aside>
          </div>
        </NeuSurface>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="safe-px pt-2 pb-[max(2.5rem,env(safe-area-inset-bottom))]"
      aria-labelledby="footer-heading"
    >
      <div className="neu-raised-sm xs:rounded-3xl xs:px-6 mx-auto flex max-w-6xl flex-col gap-5 rounded-2xl px-4 py-5 sm:py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2
              id="footer-heading"
              className="font-display text-neu-text text-sm font-semibold"
            >
              {company.name}
            </h2>
            <p className="text-neu-muted mt-1 max-w-md text-xs leading-relaxed text-pretty">
              {company.tagline}
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-3 gap-y-2" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neu-muted hover:text-neu-accent focus-visible:outline-neu-accent inline-flex min-h-10 items-center text-xs underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="text-neu-muted border-t border-black/10 pt-4 text-xs">
          <span aria-hidden="true">© {year} </span>
          <span className="sr-only">Copyright {year} </span>
          {company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
