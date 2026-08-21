import { company } from "@/lib/content";
import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="safe-px border-border relative overflow-hidden border-b"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,#eef2f5_0%,#f3f5f7_42%,#e7eef0_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-full max-w-xl bg-[radial-gradient(ellipse_at_80%_30%,rgba(12,95,95,0.12),transparent_55%),radial-gradient(ellipse_at_70%_80%,rgba(168,111,24,0.1),transparent_50%)] md:w-1/2"
      />

      <div className="relative mx-auto grid min-h-[min(82vh,880px)] max-w-6xl items-center gap-10 py-14 sm:py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 lg:py-24">
        <div className="animate-fade max-w-2xl">
          <p className="font-display text-accent text-[0.7rem] font-semibold tracking-[0.2em] uppercase sm:text-xs">
            Power systems engineering
          </p>
          <h1
            id="hero-heading"
            className="font-display text-ink mt-4 text-[clamp(2rem,6.2vw,3.65rem)] leading-[1.08] font-bold tracking-tight text-balance"
          >
            {company.name}
          </h1>
          <p className="font-display text-accent mt-5 text-[clamp(1.05rem,2.6vw,1.35rem)] leading-snug font-semibold text-pretty">
            {company.tagline}
          </p>
          <p className="text-muted mt-5 max-w-xl text-[clamp(0.98rem,2.2vw,1.125rem)] leading-relaxed text-pretty">
            {company.positioning}
          </p>
          <p className="text-ink mt-4 text-sm font-medium tracking-wide">
            {company.proofLine}
          </p>
          <div
            className="xs:flex-row xs:flex-wrap mt-8 flex flex-col gap-3"
            role="group"
            aria-label="Primary calls to action"
          >
            <Button href="#contact" className="xs:w-auto w-full">
              Request consultation
            </Button>
            <Button
              href="#capabilities"
              variant="secondary"
              className="xs:w-auto w-full"
            >
              View capabilities
            </Button>
          </div>
        </div>

        <aside
          className="animate-fade-delay border-border bg-bg-elevated border p-6 sm:p-8"
          aria-labelledby="hero-aside-title"
        >
          <p className="font-display text-sun text-[0.65rem] font-semibold tracking-[0.18em] uppercase">
            Focus
          </p>
          <h2
            id="hero-aside-title"
            className="font-display text-ink mt-3 text-xl font-bold text-balance sm:text-2xl"
          >
            Serious power infrastructure for serious operations.
          </h2>
          <ul
            className="text-muted mt-6 space-y-3 text-sm leading-relaxed"
            role="list"
          >
            <li className="border-border border-l-accent border-l-2 pl-3">
              Solar generation engineered for measurable performance
            </li>
            <li className="border-border border-l-accent border-l-2 pl-3">
              Critical power continuity for mission-critical sites
            </li>
            <li className="border-border border-l-accent border-l-2 pl-3">
              Safety, compliance, and lifecycle support built in
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
