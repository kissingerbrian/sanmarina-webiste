import Image from "next/image";
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
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6"
          role="list"
          aria-label="Capability pillars"
        >
          {capabilities.map((item, index) => {
            const wide = index < 2;
            return (
              <li
                key={item.id}
                className={wide ? "lg:col-span-3" : "lg:col-span-2"}
              >
                <a
                  href={`#${item.id}`}
                  className="border-border group focus-visible:outline-accent relative block h-full min-h-[16.5rem] overflow-hidden border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:min-h-[18rem]"
                >
                  <Image
                    src={item.image.src}
                    alt=""
                    fill
                    sizes={
                      wide
                        ? "(max-width: 1024px) 100vw, 50vw"
                        : "(max-width: 1024px) 50vw, 33vw"
                    }
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    aria-hidden="true"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,28,36,0.92)_0%,rgba(15,28,36,0.45)_55%,rgba(15,28,36,0.15)_100%)]"
                  />
                  <div className="relative flex h-full min-h-[16.5rem] flex-col justify-end p-5 sm:min-h-[18rem] sm:p-6">
                    <span className="font-display text-xs font-semibold tracking-wider text-teal-100/90">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display mt-2 text-lg font-semibold text-white sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-pretty text-white/85">
                      {item.summary}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-100">
                      View detail
                      <span
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </span>
                  </div>
                  <span className="sr-only">{item.image.alt}</span>
                </a>
              </li>
            );
          })}
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
