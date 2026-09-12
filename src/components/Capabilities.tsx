import { approachSteps, capabilities } from "@/lib/content";
import { BrandMediaCard } from "@/components/BrandMediaCard";

export function CapabilitiesOverview() {
  return (
    <section
      id="capabilities"
      className="safe-px section-y scroll-mt-20"
      aria-labelledby="capabilities-heading"
      aria-describedby="capabilities-intro"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Solutions
          </p>
          <h2
            id="capabilities-heading"
            className="font-display text-ink mt-3 text-[clamp(1.55rem,3.5vw,2.15rem)] font-bold tracking-tight text-balance"
          >
            Explore what we can do for you
          </h2>
          <p
            id="capabilities-intro"
            className="text-muted mt-3 text-[clamp(0.95rem,2.2vw,1.05rem)] text-pretty"
          >
            Clear solutions for homes and businesses — solar, backup power,
            electrical works, and long-term care.
          </p>
        </header>

        <ul
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Solutions"
        >
          {capabilities.map((item, index) => (
            <li
              key={item.id}
              className={index === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <BrandMediaCard
                href={`#${item.id}`}
                image={item.image}
                title={item.title}
                description={item.summary}
                cta="Explore"
                imageHeightClassName="h-44 sm:h-52"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Approach() {
  return (
    <section
      id="approach"
      className="safe-px section-y border-border bg-bg-muted/70 scroll-mt-20 border-y"
      aria-labelledby="approach-heading"
      aria-describedby="approach-intro"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            How we work
          </p>
          <h2
            id="approach-heading"
            className="font-display text-ink mt-3 text-[clamp(1.55rem,3.5vw,2.15rem)] font-bold tracking-tight text-balance"
          >
            A simple path from conversation to reliable power
          </h2>
          <p
            id="approach-intro"
            className="text-muted mt-3 text-[clamp(0.95rem,2.2vw,1.05rem)] text-pretty"
          >
            No jargon gatekeeping — just a clear process that puts your needs
            first.
          </p>
        </header>

        <ol
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="How we work"
        >
          {approachSteps.map((step, index) => (
            <li key={step.title}>
              <article className="brand-card group h-full p-5 sm:p-6">
                <span className="font-display text-sun text-xs font-semibold tracking-wider">
                  Step {index + 1}
                </span>
                <h3 className="font-display text-ink group-hover:text-accent mt-2 text-lg font-semibold transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted mt-2 text-sm leading-relaxed text-pretty">
                  {step.body}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
