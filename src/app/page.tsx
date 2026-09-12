import type { Metadata } from "next";
import { Approach, CapabilitiesOverview } from "@/components/Capabilities";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { FaqSection } from "@/components/FaqSection";
import { Hero } from "@/components/Hero";
import { SiteShell } from "@/components/SiteShell";
import { Industries, SafetySection, WhyChoose } from "@/components/WhyChoose";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "SM Solar & Electrical | Solar & Electrical Engineering Kenya",
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <CapabilitiesOverview />
      <FeaturedProjects />
      <Approach />
      <SafetySection />
      <WhyChoose />
      <Industries />
      <FaqSection />

      <section
        className="safe-px section-y border-border border-t"
        aria-labelledby="home-cta-heading"
      >
        <div className="bg-accent mx-auto max-w-6xl rounded-2xl px-6 py-10 text-white sm:px-10 sm:py-12">
          <h2
            id="home-cta-heading"
            className="font-display text-[clamp(1.45rem,3.2vw,1.95rem)] font-bold tracking-tight text-balance"
          >
            Ready for a site assessment?
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-white/90">
            Tell us about your home or business in Kisumu or elsewhere in Kenya
            — we’ll map a clear next step.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button
              href="/contact"
              className="!text-accent !bg-white hover:!bg-teal-50"
            >
              Request a site assessment
            </Button>
            <Button
              href={`https://wa.me/${siteConfig.whatsapp}`}
              variant="secondary"
              className="!border-white/35 !bg-white/10 !text-white hover:!border-white/60 hover:!bg-white/15"
            >
              WhatsApp an engineer
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
