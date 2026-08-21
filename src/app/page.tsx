import {
  buildingElectricalServices,
  criticalPowerApplications,
  criticalPowerServices,
  maintenanceServices,
  safetyServices,
  solarBenefits,
  solarServices,
} from "@/lib/content";
import { ContactSection, SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/Hero";
import { ServicePanel } from "@/components/ServicePanel";
import { SiteHeader } from "@/components/SiteHeader";
import { Industries, WhyChoose } from "@/components/WhyChoose";
import { NeuSurface } from "@/components/NeuSurface";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        className="flex-1"
        tabIndex={-1}
        aria-label="San Marina Engineering main content"
      >
        <Hero />

        <section
          id="services"
          className="safe-px xs:py-8 scroll-mt-[max(6rem,calc(env(safe-area-inset-top)+5rem))] py-6"
          aria-labelledby="services-overview-heading"
          aria-describedby="services-overview-intro"
        >
          <div className="mx-auto max-w-6xl">
            <NeuSurface
              variant="inset"
              className="xs:p-6 p-4 sm:p-8"
              role="region"
            >
              <h2
                id="services-overview-heading"
                className="font-display text-neu-text text-[clamp(1.35rem,3.5vw,1.875rem)] font-bold text-balance"
              >
                Our services
              </h2>
              <p
                id="services-overview-intro"
                className="text-neu-muted mt-3 max-w-2xl text-[clamp(0.95rem,2.2vw,1.05rem)] text-pretty"
              >
                Comprehensive solar energy, critical power, building electrical,
                safety &amp; compliance, and operations &amp; maintenance —
                delivered end-to-end from design through long-term support.
              </p>
              <nav className="mt-5" aria-label="Service categories">
                <ul className="flex flex-wrap gap-2" role="list">
                  {[
                    { href: "#solar", label: "Solar energy" },
                    { href: "#critical-power", label: "Critical power" },
                    {
                      href: "#building-electrical",
                      label: "Building electrical",
                    },
                    { href: "#safety", label: "Safety & compliance" },
                    { href: "#maintenance", label: "Operations & maintenance" },
                  ].map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="neu-raised-sm text-neu-text hover:text-neu-accent focus-visible:outline-neu-accent xs:text-sm inline-flex min-h-10 items-center rounded-2xl px-3 py-2 text-xs font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </NeuSurface>
          </div>
        </section>

        <ServicePanel
          id="solar"
          title="Solar energy solutions"
          intro="Harness the sun with innovative solar energy systems designed to reduce energy costs while providing reliable, sustainable power for homes, businesses, industries, institutions, farms, and community projects."
          items={solarServices}
          asideTitle="Why choose our solar solutions?"
          asideItems={solarBenefits}
          listLabel="Solar energy services"
        />

        <ServicePanel
          id="critical-power"
          title="Critical power solutions"
          intro="Power interruptions and poor power quality can damage equipment and halt operations. We design and implement critical power systems that ensure continuous, stable, high-quality power for mission-critical applications."
          items={criticalPowerServices}
          asideTitle="Applications"
          asideItems={criticalPowerApplications}
          listLabel="Critical power services"
        />

        <ServicePanel
          id="building-electrical"
          title="Building electrical services"
          intro="Complete building electrical engineering from planning and design through installation and commissioning. We partner with architects, developers, consultants, and contractors to deliver safe, efficient, code-compliant systems."
          items={buildingElectricalServices}
          listLabel="Building electrical services"
        />

        <ServicePanel
          id="safety"
          title="Electrical safety & compliance"
          intro="Safety is central to every installation. Our inspections and protection systems identify hidden defects before they become hazards, protecting people and property while verifying regulatory compliance."
          items={safetyServices}
          listLabel="Electrical safety and compliance services"
        />

        <ServicePanel
          id="maintenance"
          title="Operations & maintenance"
          intro="Reliable systems need professional maintenance. Our programmes maximize equipment lifespan, improve performance, reduce downtime, and protect your investment — available as one-time visits or annual maintenance contracts (AMCs)."
          items={maintenanceServices}
          listLabel="Operations and maintenance services"
        />

        <WhyChoose />
        <Industries />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
