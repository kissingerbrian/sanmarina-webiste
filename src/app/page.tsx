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
              Solutions in detail
            </h2>
            <p className="text-muted mt-2 max-w-2xl text-sm text-pretty sm:text-base">
              Dig into each solution — what it covers, how it helps, and what
              our teams deliver on the ground.
            </p>
          </div>

          <ServiceDetail
            id="solar"
            title="Solar energy solutions"
            intro="Custom solar for homes, businesses, farms, and institutions — designed to cut costs and keep power reliable."
            items={solarServices}
            asideTitle="What you can expect"
            asideItems={solarBenefits}
            image={siteImages.rooftopSolarCrew}
          />

          <ServiceDetail
            id="critical-power"
            title="Critical power solutions"
            intro="Keep essential operations running when the grid dips or drops — backup power that protects productivity and sensitive equipment."
            items={criticalPowerServices}
            asideTitle="Ideal for"
            asideItems={criticalPowerApplications}
            image={siteImages.siteDriveInstall}
          />

          <ServiceDetail
            id="building-electrical"
            title="Building electrical services"
            intro="From planning to installation — distribution, lighting, cable management, and cabling through site pits when the job needs lasting infrastructure."
            items={buildingElectricalServices}
            image={siteImages.cablingThroughPit}
          />

          <ServiceDetail
            id="safety"
            title="Electrical safety & compliance"
            intro="Testing, inspection, and protection that catch problems early — keeping people and property safer."
            items={safetyServices}
            image={siteImages.distributionBoardOpen}
          />

          <ServiceDetail
            id="maintenance"
            title="Care & maintenance"
            intro="Keep systems performing after install — one-time visits or ongoing care that protect your investment."
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
