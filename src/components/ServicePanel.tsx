import { NeuSurface } from "@/components/NeuSurface";

type ServicePanelProps = {
  id?: string;
  title: string;
  intro: string;
  items: readonly string[];
  asideTitle?: string;
  asideItems?: readonly string[];
  listLabel?: string;
};

export function ServicePanel({
  id,
  title,
  intro,
  items,
  asideTitle,
  asideItems,
  listLabel,
}: ServicePanelProps) {
  const headingId = id ? `${id}-heading` : undefined;
  const introId = id ? `${id}-intro` : undefined;

  return (
    <section
      id={id}
      className="safe-px xs:py-10 scroll-mt-[max(6rem,calc(env(safe-area-inset-top)+5rem))] py-8 sm:py-12 md:py-14"
      aria-labelledby={headingId}
      aria-describedby={introId}
    >
      <div className="mx-auto max-w-6xl">
        <NeuSurface className="xs:p-6 p-4 sm:p-8 md:p-10" role="region">
          <header className="max-w-2xl">
            <h2
              id={headingId}
              className="font-display text-neu-text text-[clamp(1.35rem,3.5vw,1.875rem)] font-bold tracking-tight text-balance"
            >
              {title}
            </h2>
            <p
              id={introId}
              className="text-neu-muted mt-3 text-[clamp(0.95rem,2.2vw,1.05rem)] leading-relaxed text-pretty"
            >
              {intro}
            </p>
          </header>

          <div
            className={`xs:mt-8 xs:gap-6 mt-6 grid gap-4 ${asideItems?.length ? "lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]" : ""}`}
          >
            <ul
              className="neu-inset xs:gap-2 xs:rounded-3xl xs:p-4 grid gap-1 rounded-2xl p-3 sm:grid-cols-2 sm:p-5"
              aria-label={listLabel ?? `${title} offerings`}
              role="list"
            >
              {items.map((item) => (
                <li
                  key={item}
                  className="text-neu-text xs:px-3 flex min-h-11 items-start gap-2 rounded-2xl px-2.5 py-2.5 text-sm"
                >
                  <span
                    className="bg-neu-accent mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {asideTitle && asideItems ? (
              <aside
                className="neu-raised-sm xs:rounded-3xl xs:p-5 rounded-2xl p-4 sm:p-6"
                aria-labelledby={id ? `${id}-aside-heading` : undefined}
              >
                <h3
                  id={id ? `${id}-aside-heading` : undefined}
                  className="font-display text-neu-accent xs:text-lg text-base font-semibold"
                >
                  {asideTitle}
                </h3>
                <ul className="xs:mt-4 mt-3 space-y-2" role="list">
                  {asideItems.map((item) => (
                    <li
                      key={item}
                      className="text-neu-muted text-sm leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </aside>
            ) : null}
          </div>
        </NeuSurface>
      </div>
    </section>
  );
}
