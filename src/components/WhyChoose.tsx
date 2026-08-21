import { industries, whyChooseUs } from "@/lib/content";
import { NeuSurface } from "@/components/NeuSurface";

export function WhyChoose() {
  return (
    <section
      id="why-us"
      className="safe-px xs:py-10 scroll-mt-[max(6rem,calc(env(safe-area-inset-top)+5rem))] py-8 sm:py-12 md:py-14"
      aria-labelledby="why-us-heading"
      aria-describedby="why-us-intro"
    >
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <h2
            id="why-us-heading"
            className="font-display text-neu-text text-[clamp(1.35rem,3.5vw,1.875rem)] font-bold tracking-tight text-balance"
          >
            Why choose San Marina Engineering Limited?
          </h2>
          <p
            id="why-us-intro"
            className="text-neu-muted mt-3 text-[clamp(0.95rem,2.2vw,1.05rem)] text-pretty"
          >
            Safety, reliability, energy efficiency, and future scalability in
            every installation — delivered by a qualified engineering team.
          </p>
        </header>

        <ul
          className="xs:mt-8 xs:gap-5 mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Reasons to choose San Marina Engineering"
        >
          {whyChooseUs.map((item) => (
            <li key={item.title}>
              <NeuSurface
                as="article"
                variant="raised-sm"
                className="xs:p-6 h-full p-5 transition-transform duration-300 motion-safe:hover:-translate-y-1"
                aria-labelledby={`why-${item.title.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <h3
                  id={`why-${item.title.replace(/\s+/g, "-").toLowerCase()}`}
                  className="font-display text-neu-accent xs:text-lg text-base font-semibold"
                >
                  {item.title}
                </h3>
                <p className="text-neu-muted mt-2 text-sm leading-relaxed text-pretty">
                  {item.body}
                </p>
              </NeuSurface>
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
      className="safe-px xs:py-10 scroll-mt-[max(6rem,calc(env(safe-area-inset-top)+5rem))] py-8 sm:py-12 md:py-14"
      aria-labelledby="industries-heading"
      aria-describedby="industries-intro"
    >
      <div className="mx-auto max-w-6xl">
        <NeuSurface
          variant="inset"
          className="xs:p-6 p-4 sm:p-8 md:p-10"
          role="region"
        >
          <header>
            <h2
              id="industries-heading"
              className="font-display text-neu-text text-[clamp(1.35rem,3.5vw,1.875rem)] font-bold tracking-tight text-balance"
            >
              Industries we serve
            </h2>
            <p
              id="industries-intro"
              className="text-neu-muted mt-3 max-w-2xl text-[clamp(0.95rem,2.2vw,1.05rem)] text-pretty"
            >
              From residential developments to utilities and institutions —
              power solutions shaped around your sector&apos;s technical and
              compliance needs.
            </p>
          </header>
          <ul
            className="xs:mt-8 xs:grid-cols-2 xs:gap-3 mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-3 lg:grid-cols-4"
            role="list"
            aria-label="Industries served by San Marina Engineering"
          >
            {industries.map((industry) => (
              <li
                key={industry}
                className="neu-raised-sm text-neu-text xs:px-4 flex min-h-11 items-center rounded-2xl px-3 py-2.5 text-sm"
              >
                {industry}
              </li>
            ))}
          </ul>
        </NeuSurface>
      </div>
    </section>
  );
}
