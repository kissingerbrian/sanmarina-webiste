import { approachSteps, capabilities } from "@/lib/content";
import { Panel } from "@/components/Panel";

export function CapabilitiesOverview() {
  return (
    <section
      id="capabilities"
      className="safe-px section-y scroll-mt-20"
      aria-labelledby="capabilities-heading"
      aria-describedby="capabilities-intro"
    >
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Capabilities
          </p>
          <h2
            id="capabilities-heading"
            className="font-display text-ink mt-3 text-[clamp(1.5rem,3.5vw,2rem)] font-bold tracking-tight text-balance"
          >
            Five disciplines. One accountable delivery model.
          </h2>
          <p
            id="capabilities-intro"
            className="text-muted mt-3 text-[clamp(0.95rem,2.2vw,1.05rem)] text-pretty"
          >
            We structure work around outcomes — reliability, compliance, and
            operable systems — not isolated product sales.
          </p>
        </header>

        <ul
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Capability pillars"
        >
          {capabilities.map((item, index) => (
            <li key={item.id} className={index === 4 ? "lg:col-span-1" : ""}>
              <a
                href={`#${item.id}`}
                className="border-border bg-bg-elevated hover:border-accent focus-visible:outline-accent block h-full border p-5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:p-6"
              >
                <span className="font-display text-accent text-xs font-semibold tracking-wider">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-ink mt-3 text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-muted mt-2 text-sm leading-relaxed text-pretty">
                  {item.summary}
                </p>
                <span className="text-accent mt-4 inline-block text-sm font-medium">
                  View detail
                </span>
              </a>
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
      className="safe-px section-y border-border bg-bg-muted/60 scroll-mt-20 border-y"
      aria-labelledby="approach-heading"
      aria-describedby="approach-intro"
    >
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Approach
          </p>
          <h2
            id="approach-heading"
            className="font-display text-ink mt-3 text-[clamp(1.5rem,3.5vw,2rem)] font-bold tracking-tight text-balance"
          >
            A disciplined path from assessment to sustained performance.
          </h2>
          <p
            id="approach-intro"
            className="text-muted mt-3 text-[clamp(0.95rem,2.2vw,1.05rem)] text-pretty"
          >
            Every installation is designed for safety, reliability, energy
            efficiency, and future scalability.
          </p>
        </header>

        <ol
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="Delivery approach"
        >
          {approachSteps.map((step, index) => (
            <li key={step.title}>
              <Panel className="h-full p-5 sm:p-6">
                <span className="font-display text-sun text-xs font-semibold tracking-wider">
                  Step {index + 1}
                </span>
                <h3 className="font-display text-ink mt-2 text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="text-muted mt-2 text-sm leading-relaxed text-pretty">
                  {step.body}
                </p>
              </Panel>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
