import type { Metadata } from "next";
import Image from "next/image";
import { company, siteImages } from "@/lib/content";
import { siteConfig } from "@/lib/seo";
import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/Button";
import { Approach } from "@/components/Capabilities";

export const metadata: Metadata = {
  title: "About SM Solar & Electrical | Engineering Energy Solutions",
  description: company.blurb,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <SiteShell mainLabel="About San Marina Engineering">
      <section className="safe-px section-y">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div>
            <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              About
            </p>
            <h1 className="font-display text-ink mt-3 text-[clamp(1.8rem,4.5vw,2.75rem)] font-bold tracking-tight text-balance">
              Engineering energy solutions with purpose.
            </h1>
            <p className="text-muted mt-4 text-[clamp(1rem,2.2vw,1.125rem)] leading-relaxed text-pretty">
              {company.blurb}
            </p>
            <p className="text-muted mt-4 text-sm leading-relaxed text-pretty">
              {company.brandLine} is the customer-facing brand of {company.name}
              , based in Kisumu and serving clients across Kenya.
            </p>
            <Button href="/contact" className="mt-8">
              Request a site assessment
            </Button>
          </div>
          <div className="border-border relative aspect-[4/3] overflow-hidden rounded-2xl border">
            <Image
              src={siteImages.rooftopSolarCrew.src}
              alt={siteImages.rooftopSolarCrew.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="safe-px section-y border-border border-y bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <article className="brand-card p-6 sm:p-8">
            <h2 className="font-display text-ink text-xl font-bold">Mission</h2>
            <p className="text-muted mt-3 text-sm leading-relaxed text-pretty">
              {company.mission}
            </p>
          </article>
          <article className="brand-card p-6 sm:p-8">
            <h2 className="font-display text-ink text-xl font-bold">Vision</h2>
            <p className="text-muted mt-3 text-sm leading-relaxed text-pretty">
              {company.vision}
            </p>
          </article>
        </div>
        <div className="mx-auto mt-8 max-w-6xl">
          <h2 className="font-display text-ink text-xl font-bold">Values</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {company.values.map((value) => (
              <li
                key={value}
                className="border-border text-ink rounded-lg border bg-white px-4 py-3 text-sm font-medium"
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Approach />

      <section className="safe-px section-y">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-ink text-2xl font-bold">
            Visit us in Kisumu
          </h2>
          <p className="text-muted mt-3 max-w-2xl text-sm leading-relaxed">
            {siteConfig.address.streetAddress},{" "}
            {siteConfig.address.addressLocality}, Kenya ·{" "}
            <a
              className="text-accent underline-offset-2 hover:underline"
              href={`tel:${siteConfig.phone}`}
            >
              {siteConfig.phoneDisplay}
            </a>
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
