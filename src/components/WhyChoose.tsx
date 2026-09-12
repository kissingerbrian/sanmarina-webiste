import Image from "next/image";
import {
  industries,
  industryList,
  whyChooseUs,
  siteImages,
} from "@/lib/content";
import { BrandMediaCard } from "@/components/BrandMediaCard";
import { Button } from "@/components/Button";

export function SafetySection() {
  return (
    <section
      id="safety-highlight"
      className="safe-px section-y scroll-mt-20"
      aria-labelledby="safety-highlight-heading"
    >
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl lg:grid-cols-2">
        <div className="bg-accent relative min-h-[18rem] text-white lg:min-h-full">
          <Image
            src={siteImages.distributionBoardOpen.src}
            alt={siteImages.distributionBoardOpen.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover opacity-35"
          />
          <div className="relative flex h-full flex-col justify-end p-8 sm:p-10">
            <p className="font-display text-xs font-semibold tracking-[0.18em] text-teal-100 uppercase">
              Safety & compliance
            </p>
            <h2
              id="safety-highlight-heading"
              className="font-display mt-3 text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold tracking-tight text-balance"
            >
              Safety is engineering.
            </h2>
          </div>
        </div>
        <div className="border-border bg-bg-elevated border p-8 sm:p-10 lg:border-l-0">
          <p className="text-muted text-[clamp(0.98rem,2.1vw,1.1rem)] leading-relaxed text-pretty">
            Protection, testing and compliance are not optional extras. They are
            part of how we design and deliver reliable systems — including
            earthing, surge protection, lightning protection, inspection and
            verification.
          </p>
          <Button href="/solutions/safety" className="mt-6">
            Explore safety services
          </Button>
        </div>
      </div>
    </section>
  );
}

export function WhyChoose() {
  return (
    <section
      id="why-us"
      className="safe-px section-y scroll-mt-20"
      aria-labelledby="why-us-heading"
      aria-describedby="why-us-intro"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <h2
            id="why-us-heading"
            className="font-display text-ink text-[clamp(1.5rem,3.2vw,2rem)] font-bold tracking-tight text-balance"
          >
            Why customers choose San Marina
          </h2>
          <p id="why-us-intro" className="text-muted mt-3 text-pretty">
            Not another faceless installer — a brand you remember because the
            experience feels clear, human and reliable.
          </p>
        </header>

        <ul
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Reasons to choose San Marina"
        >
          {whyChooseUs.map((item) => (
            <li key={item.title}>
              <article className="brand-card group h-full p-5 sm:p-6">
                <h3 className="font-display text-ink group-hover:text-accent text-base font-semibold transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted mt-2 text-sm leading-relaxed text-pretty">
                  {item.body}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Industries() {
  return (
    <section
      id="industries"
      className="safe-px section-y border-border scroll-mt-20 border-t"
      aria-labelledby="industries-heading"
      aria-describedby="industries-intro"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <h2
            id="industries-heading"
            className="font-display text-ink text-[clamp(1.5rem,3.2vw,2rem)] font-bold tracking-tight text-balance"
          >
            Built for the places you care about
          </h2>
          <p id="industries-intro" className="text-muted mt-3 text-pretty">
            Grouped by the environments we serve — with solutions shaped around
            how each one uses power.
          </p>
        </header>

        <ul
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Who we serve"
        >
          {industries.map((industry) => (
            <li key={industry.title}>
              <BrandMediaCard
                image={industry.image}
                title={industry.title}
                description={industry.summary}
                cta="Talk to us"
                href="/contact"
                imageHeightClassName="h-40 sm:h-44"
              />
            </li>
          ))}
        </ul>

        <ul
          className="border-border mt-10 grid grid-cols-1 border-t sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Full list of customers we serve"
        >
          {industryList.map((industry) => (
            <li
              key={industry}
              className="border-border text-ink flex min-h-12 items-center border-b px-1 py-3 text-sm sm:px-3"
            >
              {industry}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** @deprecated Prefer SafetySection for homepage */
export function Standards() {
  return <SafetySection />;
}
