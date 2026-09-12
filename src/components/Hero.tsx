import Image from "next/image";
import { company, siteImages } from "@/lib/content";
import { Button } from "@/components/Button";

const trustPoints = [
  { label: "Homes", detail: "Comfort & savings" },
  { label: "Business", detail: "Uptime that pays" },
  { label: "Industry", detail: "Power that works" },
  { label: "Kenya", detail: "Local teams" },
] as const;

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={siteImages.rooftopSolarCrew.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
          aria-hidden="true"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(115deg,rgba(8,28,20,0.9)_0%,rgba(12,40,28,0.78)_48%,rgba(26,82,48,0.55)_100%)]"
        />
      </div>

      <div className="safe-px relative mx-auto grid max-w-6xl items-center gap-10 py-16 sm:py-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14 lg:py-28">
        <div className="animate-fade max-w-2xl">
          <h1
            id="hero-heading"
            className="font-display text-[clamp(2.1rem,6vw,3.5rem)] leading-[1.06] font-bold tracking-tight text-balance text-white"
          >
            {company.shortName}
            <span className="mt-2 block text-[0.72em] font-semibold text-teal-100/95">
              Power you can trust.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-[clamp(1rem,2.3vw,1.15rem)] leading-relaxed text-pretty text-white/85">
            {company.positioning}
          </p>
          <div
            className="xs:flex-row xs:flex-wrap mt-8 flex flex-col gap-3"
            role="group"
            aria-label="Primary calls to action"
          >
            <Button href="#contact" className="xs:w-auto w-full">
              Request a site assessment
            </Button>
            <Button
              href="#projects"
              variant="secondary"
              className="xs:w-auto w-full !border-white/30 !bg-white/10 !text-white hover:!border-white/55 hover:!bg-white/15"
            >
              See our projects
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/70">{company.proofLine}</p>
          <p className="sr-only">{siteImages.rooftopSolarCrew.alt}</p>
        </div>

        <div
          className="animate-fade-delay grid grid-cols-2 gap-3 sm:gap-4"
          aria-label="Who San Marina serves"
        >
          {trustPoints.map((point) => (
            <div
              key={point.label}
              className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md transition-colors hover:border-white/40 hover:bg-white/15 sm:p-5"
            >
              <p className="font-display text-xl font-bold text-white sm:text-2xl">
                {point.label}
              </p>
              <p className="mt-1 text-sm text-white/75">{point.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
