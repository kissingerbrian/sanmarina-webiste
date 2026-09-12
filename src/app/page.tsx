import {
  buildingElectricalServices,
  criticalPowerApplications,
  criticalPowerServices,
  maintenanceServices,
  safetyServices,
  siteImages,
  solarBenefits,
  solarServices,
} from "@/lib/content";
import { Approach, CapabilitiesOverview } from "@/components/Capabilities";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { ContactSection, SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/Hero";
import { ServiceDetail } from "@/components/ServiceDetail";
import { SiteHeader } from "@/components/SiteHeader";
import { Industries, Standards, WhyChoose } from "@/components/WhyChoose";

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
        <CapabilitiesOverview />
        <FeaturedProjects />
        <Approach />

        <div
          className="border-border bg-bg-elevated border-y"
          aria-label="Detailed capabilities"
        >
          <div className="safe-px mx-auto max-w-6xl pt-12 sm:pt-14">
            <h2 className="font-display text-ink text-[clamp(1.35rem,3vw,1.75rem)] font-bold tracking-tight">
              Capability detail
            </h2>
            <p className="text-muted mt-2 max-w-2xl text-sm text-pretty sm:text-base">
              Full service coverage for scoping discussions — structured by
              discipline, illustrated with work from our sites.
            </p>
          </div>

          <ServiceDetail
            id="solar"
            title="Solar energy solutions"
            intro="Customized solar systems for homes, businesses, industries, institutions, farms, and community projects — designed for cost reduction and reliable sustainable supply."
            items={solarServices}
            asideTitle="Engagement standards"
            asideItems={solarBenefits}
            image={siteImages.rooftopSolarCrew}
          />

          <ServiceDetail
            id="critical-power"
            title="Critical power solutions"
            intro="Continuous, stable, high-quality power for mission-critical applications — protecting productivity and sensitive equipment from interruption and poor power quality."
            items={criticalPowerServices}
            asideTitle="Typical applications"
            asideItems={criticalPowerApplications}
            image={siteImages.siteDriveInstall}
          />

          <ServiceDetail
            id="building-electrical"
            title="Building electrical services"
            intro="Complete building electrical engineering from planning and design through installation and commissioning — including distribution, cable management, and cabling routed through site pits where the infrastructure demands it."
            items={buildingElectricalServices}
            image={siteImages.cablingThroughPit}
          />

          <ServiceDetail
            id="safety"
            title="Electrical safety & compliance"
            intro="Testing, inspection, certification, and protection systems that identify defects before they become hazards — safeguarding people and property."
            items={safetyServices}
            image={siteImages.distributionBoardOpen}
          />

          <ServiceDetail
            id="maintenance"
            title="Operations & maintenance"
            intro="Maintenance programmes that extend equipment life, improve performance, reduce downtime, and protect investment — as one-time visits or annual contracts."
            items={maintenanceServices}
            image={siteImages.distributionBoardClosed}
          />
        </div>

        <Standards />
        <WhyChoose />
        <Industries />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
