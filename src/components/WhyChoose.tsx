import { industries, industryList, whyChooseUs } from "@/lib/content";
import { BrandMediaCard } from "@/components/BrandMediaCard";

export function Standards() {
  return (
    <section
      id="standards"
      className="safe-px section-y scroll-mt-20"
      aria-labelledby="standards-heading"
    >
      <div className="bg-accent mx-auto max-w-6xl rounded-2xl px-6 py-10 text-white sm:px-10 sm:py-12">
        <h2
          id="standards-heading"
          className="font-display text-[clamp(1.4rem,3.2vw,1.85rem)] font-bold tracking-tight text-balance"
        >
          Safety isn’t optional. It’s part of how we earn your trust.
        </h2>
        <p className="mt-4 max-w-3xl text-[clamp(0.95rem,2.1vw,1.05rem)] leading-relaxed text-pretty text-white/90">
          We help protect people, property, and continuity of operations —
          through proper testing, earthing, surge protection, and careful
          installation.
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
        <header className="mx-auto max-w-2xl text-center">
          <h2
            id="why-us-heading"
            className="font-display text-ink text-[clamp(1.5rem,3.2vw,2rem)] font-bold tracking-tight text-balance"
          >
            Why customers choose San Marina
          </h2>
          <p id="why-us-intro" className="text-muted mt-3 text-pretty">
            Not another faceless installer — a brand you remember because the
            experience feels clear, human, and reliable.
          </p>
        </header>

        <ul
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Reasons to choose San Marina"
        >
          {whyChooseUs.map((item) => (
            <li key={item.title}>
              <article
                className="brand-card group h-full p-5 sm:p-6"
                aria-labelledby={`why-${item.title.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <h3
                  id={`why-${item.title.replace(/\s+/g, "-").toLowerCase()}`}
                  className="font-display text-ink group-hover:text-accent text-base font-semibold transition-colors"
                >
                  {item.title}
                </h3>
                <p className="text-muted mt-2 text-sm leading-relaxed text-pretty">
                  {item.body}
                </p>
              </article>
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
        <header className="mx-auto max-w-2xl text-center">
          <h2
            id="industries-heading"
            className="font-display text-ink text-[clamp(1.5rem,3.2vw,2rem)] font-bold tracking-tight text-balance"
          >
            Built for the places you care about
          </h2>
          <p id="industries-intro" className="text-muted mt-3 text-pretty">
            Whether it’s your home, your business, or a busy site — we tailor
            solutions to how you use power.
          </p>
        </header>

        <ul
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Who we serve"
        >
          {industries.map((industry) => (
            <li key={industry.title}>
              <BrandMediaCard
                image={industry.image}
                title={industry.title}
                description={industry.summary}
                cta="Talk to us"
                href="#contact"
                imageHeightClassName="h-40 sm:h-44"
              />
            </li>
          ))}
        </ul>

        <ul
          className="border-border mt-10 grid grid-cols-1 border-t sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Full list of customers we serve"
        >
          {industryList.map((industry) => (
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
