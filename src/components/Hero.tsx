import Image from "next/image";
import { company, siteImages } from "@/lib/content";
import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[min(88vh,920px)] overflow-hidden"
    >
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
        className="absolute inset-0 bg-[linear-gradient(105deg,rgba(15,28,36,0.88)_0%,rgba(15,28,36,0.72)_42%,rgba(15,28,36,0.45)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,28,36,0.55)_0%,transparent_45%)]"
      />

      <div className="safe-px relative mx-auto flex min-h-[min(88vh,920px)] max-w-6xl items-end pb-14 sm:items-center sm:pb-0">
        <div className="animate-fade max-w-2xl py-16 sm:py-24">
          <p className="font-display text-[0.7rem] font-semibold tracking-[0.2em] text-teal-100/90 uppercase sm:text-xs">
            Power systems engineering · Kenya
          </p>
          <h1
            id="hero-heading"
            className="font-display mt-4 text-[clamp(2.1rem,6.2vw,3.75rem)] leading-[1.06] font-bold tracking-tight text-balance text-white"
          >
            {company.name}
          </h1>
          <p className="font-display mt-5 text-[clamp(1.05rem,2.6vw,1.35rem)] leading-snug font-semibold text-pretty text-teal-50/95">
            {company.tagline}
          </p>
          <p className="mt-5 max-w-xl text-[clamp(0.98rem,2.2vw,1.125rem)] leading-relaxed text-pretty text-white/80">
            We design, deliver and support reliable solar, electrical and
            critical-power systems for homes, businesses and institutions — with
            real crews, real sites, and accountable engineering.
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
              className="xs:w-auto w-full !border-white/35 !bg-white/10 !text-white hover:!border-white/60 hover:!bg-white/15"
            >
              See our work
            </Button>
          </div>
          <p className="sr-only">{siteImages.rooftopSolarCrew.alt}</p>
        </div>
      </div>
    </section>
  );
}
