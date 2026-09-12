import Image from "next/image";
import { company, siteImages } from "@/lib/content";
import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden"
    >
      <div className="absolute inset-0 lg:hidden">
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
          className="absolute inset-0 bg-[linear-gradient(115deg,rgba(8,28,20,0.92)_0%,rgba(12,40,28,0.82)_50%,rgba(26,82,48,0.7)_100%)]"
        />
      </div>

      <div className="safe-px relative mx-auto grid max-w-6xl items-stretch lg:min-h-[min(88vh,900px)] lg:grid-cols-2">
        <div className="animate-fade flex flex-col justify-center py-16 sm:py-24 lg:py-28 lg:pr-10">
          <p className="font-display lg:text-accent text-[0.7rem] font-semibold tracking-[0.2em] text-teal-100/90 uppercase sm:text-xs">
            Power systems engineering
          </p>
          <h1
            id="hero-heading"
            className="font-display lg:text-ink mt-4 text-[clamp(2.35rem,6.5vw,4rem)] leading-[1.02] font-bold tracking-tight text-balance text-white"
          >
            Engineering
            <span className="mt-1 block">Reliable Power.</span>
          </h1>
          <p className="lg:text-muted mt-5 max-w-xl text-[clamp(1rem,2.2vw,1.125rem)] leading-relaxed text-pretty text-white/85">
            {company.positioning}
          </p>
          <div
            className="xs:flex-row xs:flex-wrap mt-8 flex flex-col gap-3"
            role="group"
            aria-label="Primary calls to action"
          >
            <Button href="/contact" className="xs:w-auto w-full">
              Request a site assessment
            </Button>
            <Button
              href="/projects"
              variant="secondary"
              className="xs:w-auto lg:!border-border-strong lg:!bg-bg-elevated lg:!text-ink lg:hover:!border-accent lg:hover:!text-accent w-full !border-white/30 !bg-white/10 !text-white hover:!border-white/55 hover:!bg-white/15"
            >
              See our projects
            </Button>
          </div>
          <p className="lg:text-muted mt-6 text-sm text-white/70">
            {company.proofLine}
          </p>
        </div>

        <aside className="animate-fade-delay relative hidden min-h-[28rem] overflow-hidden lg:block">
          <Image
            src={siteImages.rooftopSolarCrew.src}
            alt={siteImages.rooftopSolarCrew.alt}
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,28,20,0.55)_0%,transparent_45%)]"
          />
          <div className="absolute right-5 bottom-5 left-5 grid grid-cols-3 gap-2">
            {[
              { label: "Solar PV", value: "Commercial" },
              { label: "Critical power", value: "BESS / UPS" },
              { label: "Engineering", value: "01" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-white/25 bg-black/35 px-3 py-2 backdrop-blur-sm"
              >
                <p className="font-display text-[0.65rem] font-semibold tracking-[0.14em] text-white/75 uppercase">
                  {item.label}
                </p>
                <p className="font-display mt-1 text-sm font-semibold text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
