import { industries, whyChooseUs } from "@/lib/content";
import { Panel } from "@/components/Panel";

export function Standards() {
  return (
    <section
      id="standards"
      className="safe-px section-y scroll-mt-20"
      aria-labelledby="standards-heading"
    >
      <div className="border-border bg-accent mx-auto max-w-6xl border px-6 py-10 text-white sm:px-10 sm:py-12">
        <h2
          id="standards-heading"
          className="font-display text-[clamp(1.4rem,3.2vw,1.85rem)] font-bold tracking-tight text-balance"
        >
          Safety and compliance are not extras. They are the work.
        </h2>
        <p className="mt-4 max-w-3xl text-[clamp(0.95rem,2.1vw,1.05rem)] leading-relaxed text-pretty text-white/90">
          We help clients ensure electrical systems meet applicable standards
          while reducing risk from faults, surge events, and lightning —
          protecting people, property, and continuity of operations.
        </p>
      </div>
    </section>
  );
}

export function WhyChoose() {
  return (
    <section
      id="why-us"
      className="safe-px section-y scroll-mt-20 pt-0"
      aria-labelledby="why-us-heading"
      aria-describedby="why-us-intro"
    >
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <h2
            id="why-us-heading"
            className="font-display text-ink text-[clamp(1.4rem,3.2vw,1.85rem)] font-bold tracking-tight text-balance"
          >
            Why organizations choose San Marina
          </h2>
          <p id="why-us-intro" className="text-muted mt-3 text-pretty">
            Mature delivery: qualified people, controlled quality, and support
            that continues after commissioning.
          </p>
        </header>

        <ul
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Reasons to choose San Marina Engineering"
        >
          {whyChooseUs.map((item) => (
            <li key={item.title}>
              <Panel
                as="article"
                className="h-full p-5 sm:p-6"
                aria-labelledby={`why-${item.title.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <h3
                  id={`why-${item.title.replace(/\s+/g, "-").toLowerCase()}`}
                  className="font-display text-ink text-base font-semibold"
                >
                  {item.title}
                </h3>
                <p className="text-muted mt-2 text-sm leading-relaxed text-pretty">
                  {item.body}
                </p>
              </Panel>
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
        <header className="max-w-2xl">
          <h2
            id="industries-heading"
            className="font-display text-ink text-[clamp(1.4rem,3.2vw,1.85rem)] font-bold tracking-tight text-balance"
          >
            Industries we serve
          </h2>
          <p id="industries-intro" className="text-muted mt-3 text-pretty">
            Sector experience across facilities where power quality, safety, and
            uptime matter.
          </p>
        </header>
        <ul
          className="border-border mt-8 grid grid-cols-1 border-t sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Industries served"
        >
          {industries.map((industry) => (
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
