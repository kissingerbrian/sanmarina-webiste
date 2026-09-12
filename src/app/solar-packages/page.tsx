import type { Metadata } from "next";
import { solarPackages } from "@/lib/content";
import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Solar Packages Kenya | 5kW & 10kW Hybrid Systems",
  description:
    "Home Plus 5 kW and Elite 10 kW hybrid solar packages from San Marina Engineering. Typical configurations — final sizing follows site assessment.",
  alternates: { canonical: "/solar-packages" },
};

export default function SolarPackagesPage() {
  return (
    <SiteShell mainLabel="Solar packages">
      <section className="safe-px section-y">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-2xl">
            <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              Solar packages
            </p>
            <h1 className="font-display text-ink mt-3 text-[clamp(1.8rem,4.5vw,2.75rem)] font-bold tracking-tight text-balance">
              Residential hybrid starting points.
            </h1>
            <p className="text-muted mt-3 text-pretty">
              Useful configurations for homes — still engineering-led. Final
              system selection always follows a site and load assessment.
            </p>
          </header>

          <ul className="mt-10 grid gap-6 lg:grid-cols-2" role="list">
            {solarPackages.map((pkg) => (
              <li key={pkg.id}>
                <article className="brand-card flex h-full flex-col p-6 sm:p-8">
                  <p className="font-display text-sun text-xs font-semibold tracking-[0.16em] uppercase">
                    {pkg.name}
                  </p>
                  <h2 className="font-display text-ink mt-2 text-2xl font-bold">
                    {pkg.capacity}
                  </h2>
                  <p className="text-muted mt-3 text-sm leading-relaxed text-pretty">
                    {pkg.summary}
                  </p>
                  <ul className="mt-5 flex-1 space-y-2" role="list">
                    {pkg.includes.map((item) => (
                      <li
                        key={item}
                        className="text-ink flex gap-2 text-sm leading-snug"
                      >
                        <span aria-hidden="true" className="text-accent">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted border-border mt-5 border-t pt-4 text-xs leading-relaxed text-pretty">
                    {pkg.note}
                  </p>
                  <Button href="/contact" className="mt-5 w-full sm:w-auto">
                    Request quotation
                  </Button>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}
