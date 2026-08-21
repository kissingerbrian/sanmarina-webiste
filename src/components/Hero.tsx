import { company } from "@/lib/content";
import { NeuButton } from "@/components/NeuButton";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="safe-px xs:pt-8 xs:pb-14 relative overflow-hidden pt-6 pb-12 sm:pt-12 sm:pb-16 md:pt-14 lg:pb-24"
    >
      <div
        aria-hidden="true"
        className="animate-glow-pulse pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(201,138,46,0.18),transparent_45%),radial-gradient(ellipse_at_80%_10%,rgba(15,107,107,0.2),transparent_40%),radial-gradient(ellipse_at_70%_80%,rgba(15,107,107,0.12),transparent_50%)]"
      />

      <div className="xs:gap-10 relative mx-auto grid min-h-[min(78vh,920px)] max-w-6xl items-center gap-8 md:min-h-[70vh] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
        <div className="animate-rise max-w-xl">
          <p className="text-neu-accent font-display xs:text-xs text-[0.7rem] font-semibold tracking-[0.18em] uppercase">
            Solar &amp; electrical engineering
          </p>
          <h1
            id="hero-heading"
            className="font-display text-neu-text mt-3 text-[clamp(1.75rem,6vw,3.75rem)] leading-[1.1] font-bold tracking-tight text-balance"
          >
            {company.name}
          </h1>
          <p className="font-display text-neu-accent xs:mt-5 mt-4 text-[clamp(1.05rem,2.8vw,1.5rem)] leading-snug font-semibold text-pretty">
            {company.tagline}
          </p>
          <p className="text-neu-muted xs:mt-5 mt-4 max-w-lg text-[clamp(0.95rem,2.4vw,1.125rem)] leading-relaxed text-pretty">
            End-to-end solar and electrical engineering — from concept, design,
            and installation to testing, commissioning, and long-term
            maintenance for homes, businesses, industries, and institutions.
          </p>
          <div
            className="xs:mt-8 xs:flex-row xs:flex-wrap xs:gap-4 mt-6 flex flex-col gap-3"
            role="group"
            aria-label="Primary calls to action"
          >
            <NeuButton href="#services" className="xs:w-auto w-full">
              Explore services
            </NeuButton>
            <NeuButton
              href="#contact"
              variant="soft"
              className="xs:w-auto w-full"
            >
              Talk to an engineer
            </NeuButton>
          </div>
        </div>

        <aside
          className="animate-rise-delay relative mx-auto w-full max-w-md lg:max-w-none"
          aria-labelledby="hero-panel-title"
        >
          <div className="neu-inset xs:max-h-none xs:rounded-[2.5rem] xs:p-6 relative aspect-square max-h-[min(100vw-2rem,28rem)] overflow-hidden rounded-[1.75rem] p-4 sm:p-8 md:aspect-[4/3] lg:aspect-square">
            <div
              aria-hidden="true"
              className="animate-float xs:inset-6 xs:rounded-[2rem] absolute inset-4 rounded-[1.5rem] bg-[conic-gradient(from_210deg_at_50%_50%,rgba(201,138,46,0.35),rgba(15,107,107,0.45),rgba(221,227,234,0.2),rgba(201,138,46,0.35))] opacity-80 blur-[1px]"
            />
            <div className="neu-raised xs:rounded-[1.75rem] xs:p-6 relative flex h-full flex-col justify-between rounded-[1.25rem] p-4 sm:p-8">
              <div>
                <p className="font-display text-neu-sun xs:text-xs text-[0.65rem] font-semibold tracking-[0.2em] uppercase">
                  Power systems
                </p>
                <p
                  id="hero-panel-title"
                  className="font-display text-neu-text xs:mt-3 mt-2 text-[clamp(1.15rem,3vw,1.875rem)] font-bold text-balance"
                >
                  Solar. Critical power. Building electrical.
                </p>
              </div>
              <p className="text-neu-muted text-sm leading-relaxed text-pretty">
                Reliable, efficient, and sustainable installations engineered to
                professional and regulatory standards.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
